import config from '../config/config.js';

// Configurações de validação
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 6;

// Estado do usuário
let currentUser = null;

// Classe para gerenciar autenticação
class AuthManager {
    constructor() {
        // Inicializa o cliente Google
        this.initGoogleAuth();

        // Carrega o estado do usuário do localStorage
        this.loadUserState();
    }

    // Inicializa o cliente Google
    async initGoogleAuth() {
        try {
            // Carrega o cliente Google
            await new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'https://accounts.google.com/gsi/client';
                script.async = true;
                script.defer = true;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });

            // Verifica se o clientId está configurado
            if (!config.googleClientId) {
                throw new Error('Google Client ID não configurado');
            }

            // Inicializa o cliente Google
            google.accounts.id.initialize({
                client_id: config.googleClientId,
                callback: this.handleGoogleResponse.bind(this),
                auto_select: false,
                cancel_on_tap_outside: true
            });

            // Configura o One Tap (desabilitado por enquanto devido à depreciação)
            google.accounts.id.prompt((notification) => {
                if (notification.isNotDisplayed()) {
                    console.warn('One Tap não exibido:', notification.getNotDisplayedReason());
                } else if (notification.isSkippedMoment()) {
                    console.warn('One Tap pulado:', notification.getSkippedReason());
                } else if (notification.isDismissedMoment()) {
                    console.warn('One Tap dispensado:', notification.getDismissedReason());
                }
            });
        } catch (error) {
            console.error('Erro ao inicializar Google Auth:', error);
            this.handleAuthError(error);
        }
    }

    // Handler para resposta do Google
    async handleGoogleResponse(response) {
        try {
            if (!response.credential) {
                throw new Error('Credencial não fornecida pelo Google');
            }

            // Decodifica o token JWT
            const payload = this.decodeJwtResponse(response.credential);

            // Cria o objeto de usuário
            const user = {
                email: payload.email,
                name: payload.name,
                picture: payload.picture,
                provider: 'google'
            };

            // Atualiza o estado
            this.setCurrentUser(user);

            // Dispara evento de login bem sucedido
            window.dispatchEvent(new CustomEvent('auth:success', { detail: user }));

            // Redireciona para o dashboard após um pequeno delay
            setTimeout(() => {
                window.location.href = '/pages/dashboard.html';
            }, 1000);
        } catch (error) {
            console.error('Erro no login Google:', error);
            this.handleAuthError(error);
        }
    }

    // Tratamento centralizado de erros
    handleAuthError(error) {
        let message = 'Erro ao processar login com Google';

        if (error.message === 'Google Client ID não configurado') {
            message = 'Erro de configuração: ID do cliente Google não encontrado';
        } else if (error.message === 'Credencial não fornecida pelo Google') {
            message = 'Erro de autenticação: credenciais inválidas';
        }

        window.dispatchEvent(
            new CustomEvent('auth:error', {
                detail: { message }
            })
        );
    }

    // Decodifica o token JWT do Google
    decodeJwtResponse(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join('')
        );

        return JSON.parse(jsonPayload);
    }

    // Login com email e senha
    async loginWithEmailPassword(email, password) {
        // Validações
        this.validateEmail(email);
        this.validatePassword(password);

        // Aqui você implementaria a chamada para seu backend
        // Por enquanto, vamos simular um erro
        throw new Error('Por favor, use o login com Google');
    }

    // Validação de email
    validateEmail(email) {
        if (!email || !EMAIL_REGEX.test(email)) {
            throw new Error('Email inválido');
        }
        return true;
    }

    // Validação de senha
    validatePassword(password) {
        if (!password || password.length < MIN_PASSWORD_LENGTH) {
            throw new Error(`A senha deve ter no mínimo ${MIN_PASSWORD_LENGTH} caracteres`);
        }
        return true;
    }

    // Atualiza o estado do usuário
    setCurrentUser(user) {
        currentUser = user;
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }

    // Carrega o estado do usuário
    loadUserState() {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            try {
                currentUser = JSON.parse(savedUser);
            } catch (error) {
                console.error('Erro ao carregar estado do usuário:', error);
                localStorage.removeItem('user');
            }
        }
    }

    // Logout
    logout() {
        this.setCurrentUser(null);
        window.dispatchEvent(new CustomEvent('auth:logout'));
    }

    // Verifica se está autenticado
    isAuthenticated() {
        return !!currentUser;
    }

    // Recupera o usuário atual
    getCurrentUser() {
        return currentUser;
    }

    // Renderiza o botão do Google
    renderGoogleButton(element) {
        if (window.google?.accounts?.id) {
            google.accounts.id.renderButton(element, {
                type: 'standard',
                theme: 'filled_blue',
                size: 'large',
                text: 'continue_with',
                shape: 'rectangular',
                logoAlignment: 'left',
                width: element.offsetWidth,
                locale: 'pt_BR'
            });

            // Também configura o One Tap
            google.accounts.id.prompt((notification) => {
                if (notification.isNotDisplayed()) {
                    console.error('One Tap não exibido:', notification.getNotDisplayedReason());
                } else if (notification.isSkippedMoment()) {
                    console.warn('One Tap pulado:', notification.getSkippedReason());
                }
            });
        }
    }
}

// Exporta uma instância única
export const authManager = new AuthManager();

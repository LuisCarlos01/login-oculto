import { authManager } from './auth.js';

// Elementos do DOM
const loginForm = document.getElementById('loginForm');
const emailInput = loginForm.querySelector('input[type="email"]');
const passwordInput = loginForm.querySelector('input[type="password"]');
const submitButton = loginForm.querySelector('.submit-btn');
const loginCard = document.querySelector('.login-card');
const googleButton = document.querySelector('.google-login-btn');

// Função para mostrar mensagem de erro/sucesso
function showMessage(message, isError = true) {
    const messageDiv = document.createElement('div');
    messageDiv.className = isError ? 'error-message' : 'success-message';
    messageDiv.textContent = message;
    messageDiv.style.color = isError ? '#dc2626' : '#059669';
    messageDiv.style.fontSize = '0.875rem';
    messageDiv.style.marginTop = '0.5rem';

    // Remove qualquer mensagem anterior
    const oldMessage = loginForm.querySelector('.error-message, .success-message');
    if (oldMessage) oldMessage.remove();

    // Adiciona a nova mensagem
    loginForm.appendChild(messageDiv);

    // Remove a mensagem após 5 segundos
    setTimeout(() => messageDiv.remove(), 5000);
}

// Função para mostrar estado de loading
function setLoading(isLoading) {
    if (isLoading) {
        submitButton.disabled = true;
        loginCard.classList.add('loading');
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';
    } else {
        submitButton.disabled = false;
        loginCard.classList.remove('loading');
        submitButton.innerHTML = '<span>Entrar</span><i class="fas fa-arrow-right"></i>';
    }
}

// Handler do formulário de login
loginForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    try {
        setLoading(true);

        // Tenta fazer login com email/senha
        await authManager.loginWithEmailPassword(email, password);
    } catch (error) {
        showMessage(error.message);
        loginCard.classList.add('error');

        // Remove a classe de erro após a animação
        setTimeout(() => {
            loginCard.classList.remove('error');
        }, 500);
    } finally {
        setLoading(false);
    }
});

// Eventos de autenticação
window.addEventListener('auth:success', (e) => {
    const user = e.detail;

    // Mostra mensagem de boas vindas
    showMessage(`Bem-vindo, ${user.name}!`, false);

    // Adiciona classe de sucesso
    loginCard.classList.add('success');
});

window.addEventListener('auth:error', (e) => {
    showMessage(e.detail.message);
    loginCard.classList.add('error');
    setTimeout(() => loginCard.classList.remove('error'), 500);
});

window.addEventListener('auth:logout', () => {
    // Limpa os campos
    emailInput.value = '';
    passwordInput.value = '';

    // Remove classes de estado
    loginCard.classList.remove('success', 'error', 'loading');
});

// Inicializa o botão do Google
window.addEventListener('load', () => {
    // Renderiza o botão do Google
    authManager.renderGoogleButton(googleButton);
});

// Efeito de foco nos inputs
document.querySelectorAll('.input-group input').forEach((input) => {
    input.addEventListener('focus', function () {
        this.parentElement.classList.add('input-focused');
    });

    input.addEventListener('blur', function () {
        if (!this.value) {
            this.parentElement.classList.remove('input-focused');
        }
    });

    if (input.value) {
        input.parentElement.classList.add('input-focused');
    }
});

// Toggle de visibilidade da senha
document.querySelector('.password-toggle').addEventListener('click', function () {
    const passwordInput = this.parentElement.querySelector('input');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';

    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 200);

    passwordInput.setAttribute('type', type);

    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

// Efeito Ripple nos botões
document.querySelectorAll('.login-trigger, .google-login-btn, .submit-btn').forEach((button) => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        this.appendChild(ripple);

        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        setTimeout(() => ripple.remove(), 600);
    });
});

// Controle de expansão do card
document.querySelector('.login-trigger').addEventListener('click', function () {
    const loginCard = document.querySelector('.login-card');
    loginCard.classList.add('expanded');

    // Anima o botão para fora
    this.style.opacity = '0';
    this.style.transform = 'translateY(-20px)';

    // Desabilita o botão após a animação
    setTimeout(() => {
        this.style.display = 'none';
    }, 300);
});

// Controle de fechamento do card
document.querySelector('.close-btn').addEventListener('click', function () {
    const loginCard = document.querySelector('.login-card');
    const trigger = document.querySelector('.login-trigger');

    // Inicia a animação de fechamento
    loginCard.classList.remove('expanded');

    // Reseta o botão trigger
    setTimeout(() => {
        trigger.style.display = 'flex';
        trigger.style.opacity = '1';
        trigger.style.transform = 'translateY(0)';
    }, 300);
});

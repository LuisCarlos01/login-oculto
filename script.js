// Efeito de foco nos inputs
document.querySelectorAll('.input-group input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('input-focused');
    });

    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('input-focused');
        }
    });

    // Verifica se já tem valor ao carregar
    if (input.value) {
        input.parentElement.classList.add('input-focused');
    }
});

// Controle de expansão do card
document.querySelector('.login-trigger').addEventListener('click', function() {
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
document.querySelector('.close-btn').addEventListener('click', function() {
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

// Toggle de visibilidade da senha com animação
document.querySelector('.password-toggle').addEventListener('click', function() {
    const passwordInput = this.parentElement.querySelector('input');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    
    // Adiciona classe para animação
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 200);
    
    passwordInput.setAttribute('type', type);
    
    // Alterna o ícone com animação
    this.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
        this.style.transform = 'rotate(0deg)';
    }, 150);
});

// Integração com Google Sign-In
document.querySelector('.google-login-btn').addEventListener('click', function() {
    // Simula clique no botão original do Google
    document.querySelector('.g_id_signin div[role="button"]').click();
});

// Callback para o Google Sign-In
function handleCredentialResponse(response) {
    const loginCard = document.querySelector('.login-card');
    
    // Adiciona classe de loading
    loginCard.classList.add('loading');
    
    // Simula processo de autenticação
    setTimeout(() => {
        const responsePayload = decodeJwtResponse(response.credential);
        
        console.log("ID: " + responsePayload.sub);
        console.log('Nome completo: ' + responsePayload.name);
        console.log('Email: ' + responsePayload.email);
        console.log('Imagem de perfil: ' + responsePayload.picture);

        // Remove classe de loading e adiciona sucesso
        loginCard.classList.remove('loading');
        loginCard.classList.add('success');
        
        // Reset visual após 2 segundos
        setTimeout(() => {
            loginCard.classList.remove('success');
            // Fecha o card após o sucesso
            loginCard.classList.remove('expanded');
        }, 2000);
    }, 1500);
}

// Função auxiliar para decodificar o JWT
function decodeJwtResponse(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

// Efeito de ripple nos botões
document.querySelectorAll('.login-trigger, .google-login-btn, .submit-btn').forEach(button => {
    button.addEventListener('click', function(e) {
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

// Previne o envio do formulário com animação de feedback
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Adiciona classe de loading
    this.classList.add('submitting');
    
    // Simula validação
    setTimeout(() => {
        this.classList.remove('submitting');
        
        // Adiciona classe de sucesso temporariamente
        this.classList.add('success');
        setTimeout(() => {
            this.classList.remove('success');
            // Fecha o card após o sucesso
            document.querySelector('.login-card').classList.remove('expanded');
        }, 2000);
    }, 1500);
});

// Efeito de parallax suave no card
document.addEventListener('mousemove', function(e) {
    const card = document.querySelector('.login-card');
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const multiplier = 0.01; // Ajuste a intensidade do efeito aqui
    
    card.style.transform = `
        perspective(1000px)
        rotateY(${x * multiplier}deg)
        rotateX(${-y * multiplier}deg)
        translateZ(10px)
    `;
});

// Reset da posição do card quando o mouse sai
document.querySelector('.login-card').addEventListener('mouseleave', function() {
    this.style.transform = 'none';
}); 
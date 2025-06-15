# Frontend - Login Oculto

## 📁 Estrutura

```
frontend/
├── public/               # Arquivos públicos
│   ├── assets/          # Recursos estáticos
│   │   ├── images/      # Imagens
│   │   └── icons/       # Ícones
│   ├── config/          # Configurações
│   │   └── config.js    # Configurações do frontend
│   ├── js/             # JavaScript
│   │   ├── main.js     # Arquivo principal
│   │   └── auth.js     # Lógica de autenticação
│   ├── pages/          # Páginas
│   │   └── dashboard.html
│   ├── styles/         # Estilos
│   │   └── styles.css
│   └── index.html      # Página inicial
└── src/                # Código fonte original
    ├── config/         # Configurações
    ├── js/            # JavaScript
    ├── pages/         # Páginas
    └── styles/        # Estilos
```

## 🚀 Tecnologias

- JavaScript Vanilla com módulos ES6
- CSS com variáveis customizadas
- HTML5 semântico
- Google OAuth para autenticação
- LocalStorage para persistência
- Servidor estático (serve)

## 📦 Instalação

```bash
# Instalar serve globalmente (se ainda não tiver)
npm install -g serve

# Iniciar em desenvolvimento
cd frontend && serve public

# O servidor estará disponível em:
# http://localhost:3000
```

## 🔐 Autenticação

O sistema utiliza autenticação via Google OAuth, oferecendo:

- Login seguro com conta Google
- Persistência de sessão com LocalStorage
- Redirecionamento automático para dashboard
- Logout com limpeza de dados

## 🎨 Estilização

O projeto utiliza CSS moderno com:

- Variáveis CSS customizadas
- Animações e transições
- Layout responsivo
- Efeitos visuais modernos

## 📝 Convenções

### JavaScript

- Módulos ES6 para organização do código
- Classes para lógica complexa
- Eventos customizados para comunicação
- Async/await para operações assíncronas

### Estilos

- Variáveis CSS em `:root`
- Classes semânticas
- BEM para nomenclatura
- Mobile-first responsive

### HTML

- Markup semântico
- Atributos ARIA para acessibilidade
- Formulários validados
- Estrutura clara e organizada

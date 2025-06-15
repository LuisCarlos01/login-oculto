# Login Oculto - Sistema de Autenticação Moderno

Sistema moderno de autenticação com interface responsiva, animações suaves e integração com Google OAuth 2.0.

## 🏗️ Estrutura do Projeto

```
src/
├── frontend/              # Código do frontend
│   ├── assets/           # Recursos estáticos (imagens, fontes, etc)
│   ├── components/       # Componentes reutilizáveis
│   ├── config/          # Configurações do frontend
│   ├── layouts/         # Layouts base da aplicação
│   ├── pages/           # Páginas da aplicação
│   ├── services/        # Serviços do frontend
│   ├── styles/          # Arquivos de estilo
│   ├── types/           # Tipos TypeScript
│   └── utils/           # Utilitários do frontend
│
├── backend/              # Código do backend
│   ├── controllers/     # Controladores da API
│   ├── database/        # Configurações e modelos do banco de dados
│   ├── middlewares/     # Middlewares do Express
│   ├── models/          # Modelos de dados
│   ├── routes/          # Rotas da API
│   └── services/        # Serviços do backend
│
└── shared/              # Código compartilhado
    ├── constants/       # Constantes compartilhadas
    ├── interfaces/      # Interfaces TypeScript
    └── utils/           # Utilitários compartilhados

```

## 🚀 Tecnologias

### Frontend

- HTML5 & CSS3
- JavaScript/TypeScript
- Google OAuth 2.0
- Animações CSS modernas

### Backend (Em desenvolvimento)

- Node.js & Express
- TypeScript
- JWT Authentication
- MongoDB/PostgreSQL

## 🛠️ Pré-requisitos

- Node.js >= 18
- npm >= 9
- MongoDB/PostgreSQL (em breve)

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/LuisCarlos01/login-oculto.git
cd login-oculto
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

4. Execute o build:

```bash
npm run build
```

5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa verificação do ESLint
- `npm run format` - Formata o código com Prettier
- `npm test` - Executa os testes

## 🔐 Variáveis de Ambiente

```env
# Frontend
GOOGLE_CLIENT_ID=seu_client_id_aqui

# Backend (em breve)
PORT=3000
MONGODB_URI=sua_uri_mongodb
JWT_SECRET=seu_jwt_secret
```

## 📝 Convenções de Código

- **Commits:** Seguimos [Conventional Commits](https://www.conventionalcommits.org/)
- **Estilo:** ESLint + Prettier com regras personalizadas
- **TypeScript:** Tipos estritos e interfaces bem definidas

## 🧪 Testes

- **Frontend:** Jest + Testing Library
- **Backend:** Jest + Supertest
- **E2E:** Cypress

## 📚 Documentação

- [Documentação da API](./docs/api.md)
- [Guia de Contribuição](./CONTRIBUTING.md)
- [Changelog](./CHANGELOG.md)

## 🔒 Segurança

- OAuth 2.0 para autenticação social
- JWT para sessões
- Proteção contra XSS e CSRF
- Validação de entrada com Zod
- Sanitização de dados

## 🌐 Endpoints da API (Em desenvolvimento)

```
POST   /api/auth/login
POST   /api/auth/register
POST   /api/auth/logout
GET    /api/auth/me
POST   /api/auth/refresh-token
```

## 📱 Responsividade

O projeto é totalmente responsivo e testado em:

- 📱 Mobile: < 480px
- 📱 Tablet: 480px - 768px
- 💻 Desktop: > 768px

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

Luis Carlos

- GitHub: [@LuisCarlos01](https://github.com/LuisCarlos01)
- LinkedIn: [@seu-linkedin](https://linkedin.com/in/seu-linkedin)

## 🌟 Agradecimentos

- Google Identity Services
- Comunidade Open Source
- Contribuidores do projeto

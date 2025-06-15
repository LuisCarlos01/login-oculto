# Backend - Login Oculto

## 📁 Estrutura

```
backend/
├── src/                 # Código fonte
│   ├── controllers/     # Controladores
│   ├── models/          # Modelos
│   ├── services/        # Serviços
│   ├── middleware/      # Middlewares
│   ├── routes/          # Rotas
│   ├── utils/           # Utilitários
│   └── config/          # Configurações
├── tests/               # Testes
└── docs/                # Documentação
```

## 🚀 Tecnologias

- NestJS
- TypeScript
- Prisma (ORM)
- PostgreSQL
- Jest
- Swagger/OpenAPI

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Executar migrações do banco
npm run prisma:migrate

# Iniciar em desenvolvimento
npm run start:dev

# Build para produção
npm run build
```

## 🧪 Testes

```bash
# Executar testes unitários
npm run test

# Executar testes e2e
npm run test:e2e

# Executar testes com coverage
npm run test:cov
```

## 📝 Convenções

### Código

- Use TypeScript estrito
- Siga os princípios SOLID
- Use injeção de dependência
- Documente com JSDoc/TSDoc

### Banco de Dados

- Use migrations para alterações
- Mantenha seeds atualizados
- Valide schemas com Zod

### Testes

- Testes unitários para services
- Testes e2e para controllers
- Mock de dependências externas

### API

- Use versionamento na API (v1, v2)
- Documente com Swagger/OpenAPI
- Valide inputs com DTO
- Use HTTP status codes apropriados

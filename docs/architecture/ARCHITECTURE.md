# Arquitetura do Projeto Login Oculto

## 📁 Estrutura de Diretórios

```
login-oculto/
├── frontend/                  # Aplicação frontend
│   ├── public/               # Arquivos públicos
│   │   ├── assets/          # Imagens, ícones, etc
│   │   │   ├── images/
│   │   │   └── icons/
│   │   ├── config/          # Configurações do frontend
│   │   ├── js/             # JavaScript compilado
│   │   │   ├── main.js     # Arquivo principal
│   │   │   └── auth.js     # Lógica de autenticação
│   │   ├── pages/          # Páginas da aplicação
│   │   │   └── dashboard.html
│   │   ├── styles/         # Estilos CSS
│   │   │   └── styles.css
│   │   └── index.html      # Página inicial
│   ├── src/                  # Código fonte do frontend
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   ├── auth/       # Componentes de autenticação
│   │   │   ├── common/     # Componentes comuns
│   │   │   └── layout/     # Componentes de layout
│   │   ├── styles/         # Estilos globais e temas
│   │   ├── services/       # Serviços e integrações
│   │   ├── utils/          # Funções utilitárias
│   │   └── config/         # Configurações do frontend
│   └── tests/               # Testes do frontend
│
├── backend/                   # Aplicação backend
│   ├── src/                  # Código fonte do backend
│   │   ├── controllers/     # Controladores da API
│   │   ├── models/         # Modelos do banco de dados
│   │   ├── services/       # Lógica de negócio
│   │   ├── middleware/     # Middlewares da aplicação
│   │   ├── routes/         # Rotas da API
│   │   ├── utils/          # Funções utilitárias
│   │   └── config/         # Configurações do backend
│   ├── tests/               # Testes do backend
│   └── docs/                # Documentação da API
│
├── database/                 # Configurações do banco de dados
│   ├── migrations/          # Migrações do banco
│   ├── seeds/              # Seeds para dados iniciais
│   └── scripts/            # Scripts úteis do banco
│
├── docs/                     # Documentação do projeto
│   ├── api/                # Documentação da API
│   ├── setup/             # Guias de configuração
│   └── architecture/      # Documentação da arquitetura
│
├── scripts/                  # Scripts de automação
│   ├── deploy/            # Scripts de deploy
│   ├── setup/             # Scripts de configuração
│   └── ci/                # Scripts de CI/CD
│
└── config/                   # Configurações globais
    ├── nginx/             # Configurações do servidor web
    ├── docker/            # Configurações do Docker
    └── env/               # Templates de variáveis de ambiente
```

## 🔧 Tecnologias Atuais

### Frontend

- **JavaScript Vanilla** com módulos ES6
- **CSS** com variáveis customizadas
- **HTML5** semântico
- **Google OAuth** para autenticação
- **LocalStorage** para persistência de sessão
- **Servidor estático** (serve) para desenvolvimento

### Backend

- **Framework**: Node.js + Express ou NestJS
- **ORM**: Prisma ou TypeORM
- **Validação**: Zod ou class-validator
- **Autenticação**: Passport.js
- **Logs**: Winston ou Pino
- **Testes**: Jest + Supertest

### Banco de Dados

- **Principal**: PostgreSQL
- **Cache**: Redis
- **Migrations**: Prisma Migrate ou TypeORM Migrations

### DevOps

- **Containerização**: Docker + Docker Compose
- **CI/CD**: GitHub Actions
- **Monitoramento**: Prometheus + Grafana
- **Logs**: ELK Stack ou Loki

## 🔐 Segurança

### Autenticação

- JWT para tokens de acesso
- Refresh tokens com rotação
- OAuth 2.0 para provedores externos
- Rate limiting para tentativas de login

### Dados

- Criptografia em repouso para dados sensíveis
- HTTPS em todas as comunicações
- Headers de segurança (CORS, CSP, etc)
- Sanitização de inputs

## 📊 Banco de Dados

### Tabelas Principais

```sql
-- Usuários
CREATE TABLE users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255),
    provider VARCHAR(50),
    provider_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Sessões
CREATE TABLE sessions (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    refresh_token VARCHAR(255) UNIQUE,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Logs de Autenticação
CREATE TABLE auth_logs (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    action VARCHAR(50) NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
```

## 🚀 Escalabilidade

### Frontend

- Code splitting por rota
- Lazy loading de componentes
- Cache de assets com service workers
- CDN para assets estáticos

### Backend

- Arquitetura stateless
- Cache em múltiplas camadas
- Filas para processamento assíncrono
- Horizontal scaling com load balancer

### Banco de Dados

- Índices otimizados
- Particionamento de tabelas
- Read replicas para consultas
- Connection pooling

## 📝 Padrões de Código

### Convenções

- ESLint + Prettier para formatação
- Conventional Commits
- GitFlow para branches
- Code review obrigatório

### Documentação

- JSDoc para documentação de código
- Swagger/OpenAPI para API
- README detalhado por diretório
- Diagramas de arquitetura

## 🔄 CI/CD

### Pipeline

1. Lint e formatação
2. Testes unitários
3. Testes de integração
4. Build e análise estática
5. Deploy em staging
6. Testes E2E
7. Deploy em produção

### Ambientes

- Development (local)
- Staging (homologação)
- Production (produção)

## 📈 Monitoramento

### Métricas

- Performance do frontend
- Latência da API
- Uso de recursos
- Erros e exceções

### Alertas

- Downtime
- Erros críticos
- Performance degradada
- Segurança

## 🎯 Próximos Passos

1. **Fase 1: Estruturação**

    - Criar estrutura de diretórios
    - Configurar ambiente de desenvolvimento
    - Migrar código existente

2. **Fase 2: Backend**

    - Implementar API RESTful
    - Configurar banco de dados
    - Implementar autenticação

3. **Fase 3: Frontend**

    - Migrar para framework escolhido
    - Implementar gerenciamento de estado
    - Melhorar UX/UI

4. **Fase 4: DevOps**
    - Configurar Docker
    - Implementar CI/CD
    - Configurar monitoramento

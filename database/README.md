# Database - Login Oculto

## 📁 Estrutura

```
database/
├── migrations/          # Migrações do banco
├── seeds/              # Seeds para dados iniciais
└── scripts/            # Scripts utilitários
```

## 🛠 Tecnologias

- PostgreSQL
- Prisma (ORM)
- Docker

## 📦 Configuração

### Local

```bash
# Criar banco de dados
createdb login_oculto

# Executar migrações
npm run prisma:migrate

# Executar seeds
npm run prisma:seed
```

### Docker

```bash
# Iniciar container
docker-compose up -d postgres

# Executar migrações
docker-compose exec app npm run prisma:migrate

# Executar seeds
docker-compose exec app npm run prisma:seed
```

## 📊 Modelo de Dados

### Users

- id: UUID (PK)
- email: String (Unique)
- name: String
- password_hash: String
- created_at: DateTime
- updated_at: DateTime

### AuthLogs

- id: UUID (PK)
- user_id: UUID (FK)
- action: String
- ip_address: String
- user_agent: String
- created_at: DateTime

### Sessions

- id: UUID (PK)
- user_id: UUID (FK)
- refresh_token: String
- expires_at: DateTime
- created_at: DateTime

## 🔒 Segurança

- Senhas hasheadas com bcrypt
- Tokens JWT para autenticação
- Refresh tokens com rotação
- Logs de todas tentativas de login
- Proteção contra SQL injection via ORM
- Backups automáticos

## 📝 Convenções

### Migrations

- Nome descritivo (ex: `create_users_table`)
- Uma alteração por migration
- Sempre incluir `up` e `down`
- Documentar alterações complexas

### Seeds

- Dados realistas para desenvolvimento
- Separar por contexto
- Manter idempotência
- Documentar dependências

### Scripts

- Nomes descritivos
- Incluir documentação de uso
- Tratar erros adequadamente
- Logs informativos

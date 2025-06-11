# 🔐 Login Oculto

[![Licença MIT](https://img.shields.io/badge/Licença-MIT-green.svg)](https://github.com/LuisCarlos01/login-oculto/blob/main/LICENSE)
[![Estilo de Código: Prettier](https://img.shields.io/badge/code%20style-prettier-brightgreen.svg)](https://github.com/prettier/prettier)
[![ESLint](https://img.shields.io/badge/ESLint-enabled-blue.svg)](https://eslint.org/)

Interface moderna e minimalista de login com animações suaves e integração Google OAuth 2.0. O projeto apresenta uma abordagem única onde o formulário de login permanece oculto inicialmente, revelando-se através de uma animação elegante quando necessário.

## ✨ Demonstração

[Inserir GIF ou imagem da interface aqui]

## 🚀 Características

- **Design Minimalista**: Interface limpa e moderna com foco na experiência do usuário
- **Animações Suaves**: Transições e efeitos cuidadosamente elaborados
- **Integração OAuth**: Login simplificado com Google
- **Responsivo**: Adaptação perfeita para todos os dispositivos
- **Acessibilidade**: Implementação seguindo as melhores práticas de a11y
- **Modo Expansível**: Formulário oculto que se expande com animação

### 🎨 Efeitos Visuais

- Efeito de glassmorphism no card principal
- Animações de hover em todos os elementos interativos
- Efeito parallax suave no card
- Feedback visual em todas as interações
- Efeito ripple nos botões
- Partículas animadas no background

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox)
- JavaScript (ES6+)
- Google Identity Services
- Font Awesome
- Google Fonts

## 📦 Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/LuisCarlos01/login-oculto.git
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure o Google OAuth:

    - Acesse o [Google Cloud Console](https://console.cloud.google.com)
    - Crie um novo projeto ou selecione um existente
    - Configure a tela de consentimento OAuth
    - Crie credenciais OAuth 2.0
    - Substitua `SEU_CLIENT_ID_AQUI` no arquivo `index.html`

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```

## 🔧 Configuração

### ESLint

O projeto utiliza ESLint para garantir a qualidade do código. As regras podem ser ajustadas em `.eslintrc.json`:

```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["eslint:recommended"],
    "rules": {
        // Suas regras personalizadas aqui
    }
}
```

### Prettier

A formatação do código é gerenciada pelo Prettier. Configure em `.prettierrc`:

```json
{
    "semi": true,
    "tabWidth": 4,
    "printWidth": 100,
    "singleQuote": true
}
```

## 📝 Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento
- `npm run lint`: Executa verificação do ESLint
- `npm run lint:fix`: Corrige problemas do ESLint automaticamente
- `npm run format`: Formata o código com Prettier

## 🤝 Contribuindo

1. Faça o fork do projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### 📜 Convenções de Commit

Seguimos o [Conventional Commits](https://www.conventionalcommits.org/):

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Alteração em documentação
- `style`: Formatação, ponto e vírgula, etc; sem alteração de código
- `refactor`: Refatoração de código
- `test`: Adição ou correção de testes
- `chore`: Atualização de tarefas, sem alteração de código

## 📱 Responsividade

O projeto é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- 📱 Mobile: < 480px
- 📱 Tablet: 480px - 768px
- 💻 Desktop: > 768px

## 🔒 Segurança

- Implementação segura do Google OAuth 2.0
- Proteção contra ataques XSS
- Validação de entrada
- Sem armazenamento local de dados sensíveis

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

Luis Carlos

- GitHub: [@LuisCarlos01](https://github.com/LuisCarlos01)
- LinkedIn: [@seu-linkedin](https://linkedin.com/in/seu-linkedin)

## 🌟 Agradecimentos

- Google Identity Services pela documentação clara
- Font Awesome pelos ícones incríveis
- Comunidade open source por inspiração e recursos

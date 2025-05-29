# Sistema Geral de Login - Back-End

Sistema de Geral de Login - Back End


## Tecnologias Utilizadas

- [JavaScript (NodeJS)](https://nodejs.org/pt)
- [Sequelize](https://sequelize.org/)
- [Express](https://expressjs.com/pt-br/)
- [MySQL](https://www.mysql.com/)
- [JWT](https://jwt.io/)

## Como Executar o Projeto

- npm run dev

### Pré-requisitos

- [Instalar JavaScript (NodeJS)](https://nodejs.org/pt)
- [Instalar MySQL](https://www.mysql.com/)

### Passo a Passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/NandsonCunha/sistema-login.git
2. Mudar para a pasta do projeto:
    ```bash
   cd sistema-login/backend
3. Instalar os módulos:
    ```bash
   npm install
4. Rodar o projeto:
    ```bash
   npm run dev

### Como está organizado:
```
├── src/
│   ├── controllers/    # Lógica de controle das rotas
│   ├── models/         # Definição dos modelos e mapeamento com o banco de dados
│   ├── routes/         # Definição das rotas da aplicação
│   └── services/       # Serviços auxiliares e regras de negócio
```


# Sistema Geral de Login - Frontend

Este é o frontend de um sistema de autenticação de usuários. Ele oferece uma interface simples e moderna para que os usuários possam se cadastrar, fazer login e navegar entre as páginas de listagem e atualização de dados de usuários. O sistema é construído com React e utiliza requisições HTTP para se comunicar com a API no backend.


## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [CSS]


### Como está organizado:
```
├── src/
│   ├── assets/    # 
│   ├── components/         # 
│   ├── pages/         # 
│   └── styles/       # 
|- App.jsx
```
## Funcionalidades

- Tela única com formulários de **login** e **cadastro**
- Redirecionamento para as páginas de:
  - Listagem de usuários
  - Atualização de dados dos usuários
- Armazenamento do token de autenticação no `localStorage`

Rodar o projeto:
    ```bash
   npm run dev
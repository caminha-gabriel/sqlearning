[Read in English!](./README.md)

# SQLearning
Este projeto foi desenvolvido no início de 2023, quando eu estava de férias, porém com vontade de criar um projeto Back end completo do zero.

<br>

## Objetivo
O objetivo principal do SQLearning foi desenvolver uma API RESTful com diferentes métodos de resolução para as requisições. No projeto usei principalmente MySQL, Express e Sequelize para criar um sistema responsivo onde você pode Criar, Ler e Deletar Usuários, Tecnologias e Endereços, tudo usando a Arquitetura Model/Controller.

<br>

## Alguns aprendizados importantes
- Uso do Sequelize ORM para melhorar a manipulação do Banco de Dados.
- Uso de relacionamentos dos Models.
- Implementação de Controllers para tratamento das Requests.
- Configurações do Banco de Dados e da Aplicação.

<br>

## Acessando SQLearning
Você deve ter MySQL e Git instalados e rodando em sua máquina. Se você tiver variáveis ​​de ambiente MySQL diferentes do padrão, você pode criar um arquivo .env usando o arquivo .env.example como referência. Depois de configurar todas as variáveis ​​da forma que preferir, você está pronto para começar.

<details>
  <summary><h3>Instruções</h3></summary>

Clone o repositório

```bash
  git@github.com:caminha-gabriel/sqlearning.git
```

Entre no diretório da aplicação

```bash
  cd sqlearning
```

Instale as dependências

```bash
  npm install
```

Rode a aplicação

```bash
  npm start
```

Gere o Banco de Dados

```bash
  npm run db:generate
```

Você pode testar a aplicação SQLearning acessando-a em seu navegador da Web usando http://localhost:3000/. Você deve receber uma mensagem de boas-vindas assim que acessar o link.

</details>

<br>

## Endpoints
Aqui você pode verificar as rotas que você pode usar para manipular o Banco de Dados. Para criar corretamente suas requisições, recomendo que você use [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

<details>
  <summary><h3>Users</h3></summary>

Encontre todos os usuários

```bash
GET /users
```

Encontre um usuário específico

```bash
GET /users/:userId
```

Armazene um usuário

```bash
POST /users
```

Delete um usuário

```bash
DELETE /users/:userId
```

</details>

<details>
  <summary><h3>Addresses</h3></summary>

Encontre todos os endereços

```bash
GET /addresses
```

Encontre todos os endereços de um usuário específico

```bash
GET /users/:userId/addresses
```

Armazene um endereço

```bash
POST /users/:userId/addresses
```

Delete um endereço

```bash
DELETE /users/:userId/addresses
```

</details>

<details>
  <summary><h3>Techs</h3></summary>

Encontre todas as tecnologias

```bash
GET /techs
```

Encontre todos as tecnologias de um usuário específico

```bash
GET /users/:userId/techs
```

Armazene uma tecnologia

```bash
POST /users/:userId/techs
```

Delete uma tecnologia

```bash
DELETE /users/:userId/techs
```

</details>
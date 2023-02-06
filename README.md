[Leia em Português!](./README-PT.md)

# SQLearning
This project was developed in early 2023, when i was on vacation, but with a desire to create a full Back end project from scratch.

<br>

## Objective
SQLearning primary objective was developing a RESTful API with different solving methods for requests. In the project I used mainly MySQL, Express and Sequelize to create a responsive system where you can Create, Read and Delete Users, Techs and Addresses, all using Model/Controller Architecture.

<br>

## Some Important Learnings
- Usage of Sequelize ORM to improve Database handling.
- Usage of Model Relationships.
- Implementation of Controllers to handle Requests.
- Database and app configurations.

<br>

## Accessing SQLearning
You should have MySQL and Git installed and running in your machine. If you have different MySQL enviroment variables than default, you may create a .env file using .env.example as your model. Once you've configured all variables as you prefer, you're ready to go.

<details>
  <summary><h3>Instructions</h3></summary>

Clone repository

```bash
  git@github.com:caminha-gabriel/sqlearning.git
```

Enter app directory

```bash
  cd sqlearning
```

Install dependencies

```bash
  npm install
```

Run application

```bash
  npm start
```

Generate Database

```bash
  npm run db:generate
```

You can test the SQLearning app acessing it in your web browser using http://localhost:3000/. You should receive a welcome message as soon as you access the link.

</details>

<br>

## Endpoints
Here you can check the routes you can use to manipulate the Database. To properly create your requests, I recommend you to use [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/).

<details>
  <summary><h3>Users</h3></summary>

Get all users

```bash
GET /users
```

Get specific user

```bash
GET /users/:userId
```

Store an user

```bash
POST /users
```

Delete an user

```bash
DELETE /users/:userId
```

</details>

<details>
  <summary><h3>Addresses</h3></summary>

Get all addresses

```bash
GET /addresses
```

Get all addresses from specific user

```bash
GET /users/:userId/addresses
```

Store an address

```bash
POST /users/:userId/addresses
```

Delete an address

```bash
DELETE /users/:userId/addresses
```

</details>

<details>
  <summary><h3>Techs</h3></summary>

Get all techs

```bash
GET /techs
```

Get all techs from specific user

```bash
GET /users/:userId/techs
```

Store a tech

```bash
POST /users/:userId/techs
```

Delete a tech

```bash
DELETE /users/:userId/techs
```

</details>
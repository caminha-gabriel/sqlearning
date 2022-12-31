require('dotenv').config();
const express = require('express');
const { welcomeRoutes, usersRoutes, addressesRoutes, techsRoutes } = require('./routes');

const app = express();
const API_PORT = process.env.API_PORT || 3000;

app.use(express.json());

const useRoutes = () => {
  app.use(welcomeRoutes);
  app.use(usersRoutes);
  app.use(addressesRoutes);
  app.use(techsRoutes);
}

useRoutes();

app.listen(API_PORT, () => {
  console.log(`App running on PORT ${API_PORT}`);
});
require('dotenv').config();
const express = require('express');
const { welcomeRoutes, usersRoutes, addressesRoutes } = require('./routes');

const app = express();
API_PORT = process.env.API_PORT || 3000;

app.use(express.json());

const useRoutes = () => {
  app.use(welcomeRoutes);
  app.use(usersRoutes);
  app.use(addressesRoutes);
}

useRoutes();

app.listen(API_PORT, () => {
  console.log(`App running on PORT ${API_PORT}`);
});
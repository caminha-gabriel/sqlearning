const { Router } = require('express');

const welcomeRoutes = Router();
welcomeRoutes.get('/', (_req, res) => {
  res.json({ welcome: 'Traveller'});
})

module.exports = welcomeRoutes;
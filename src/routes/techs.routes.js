const { Router } = require('express');
const TechController = require('../controllers/TechController');

const techsRoutes = Router();
techsRoutes.get('/techs', TechController.getAll);
techsRoutes.get('/users/:userId/techs', TechController.getAllFromUser);
techsRoutes.post('/users/:userId/techs', TechController.store);
techsRoutes.delete('/users/:userId/techs', TechController.delete);

module.exports = techsRoutes;
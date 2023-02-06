const { Router } = require('express');
const UserController = require('../controllers/UserController');

const usersRoutes = Router();
usersRoutes.get('/users', UserController.getAll);
usersRoutes.get('/users/:userId', UserController.getUser);
usersRoutes.post('/users', UserController.store);
usersRoutes.delete('/users/:userId', UserController.delete);

module.exports = usersRoutes;
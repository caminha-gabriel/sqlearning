const { Router } = require('express');
const UserController = require('../controllers/UserController');

const usersRoutes = Router();
usersRoutes.get('/users', UserController.getAll)
usersRoutes.post('/users', UserController.store)

module.exports = usersRoutes;
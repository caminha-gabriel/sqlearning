const { Router } = require('express');
const AddressController = require('../controllers/AddressController');

const addressesRoutes = Router();
addressesRoutes.get('/addresses', AddressController.getAll)
addressesRoutes.post('/users/:userId/addresses', AddressController.store)

module.exports = addressesRoutes;
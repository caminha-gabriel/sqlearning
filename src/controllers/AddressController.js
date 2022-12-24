const Address = require('../models/Address');
const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');

module.exports = {
  async getAll (_req, res) {
    const addresses = await Address.findAll();

    return res.json(addresses);
  },

  async store (req, res) {
    const { zipcode, street, number } = req.body;
    const { userId } = req.params;

    const user = await User.findByPk(userId);

    if (!user) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'User not found' });

    const address = await Address.create({ user_id: userId, zipcode, street, number });

    return res.json(address);
  },
}
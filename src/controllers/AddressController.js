const Address = require('../models/Address');
const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');

module.exports = {
  async getAll (_req, res) {
    const addresses = await Address.findAll();

    return res.json(addresses);
  },

  async getAllFromUser (req, res) {
    const { userId } = req.params;

    const userWithAddresses = await User.findByPk(userId, {
      include: { association: 'addresses'}
    });

    if (!userWithAddresses) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'User not found' });

    return res.json(userWithAddresses.addresses);
  },

  async store (req, res) {
    const { zipcode, street, number } = req.body;
    const { userId } = req.params;

    const user = await User.findByPk(userId);

    if (!user) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'User not found' });

    const address = await Address.create({ user_id: userId, zipcode, street, number });

    return res.json(address);
  },

  async delete (req, res) {
    const { zipcode } = req.body;
    const { userId } = req.params;

    const user = await User.findByPk(userId);

    if (!user) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'User not found' });

    const address = await Address.findOne({
      where: { user_id: userId, zipcode }
    });
    
    await address.destroy();

    return res.status(StatusCodes.NO_CONTENT).send();
  },
}
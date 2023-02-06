const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');

module.exports = {
  async getAll (_req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async getUser (req, res) {
    const { userId } = req.params;

    if (isNaN(userId)) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'User Id should be a number' });
    }

    const user = await User.findByPk(userId);

    if (!user) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'User not found' });

    return res.status(StatusCodes.OK).json(user);
  },

  async store (req, res) {
    const { name, email } = req.body;

    if (!isNaN(name)) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid name' });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid email' });
    }

    const user = await User.create({ name, email });
  
    return res.json(user);
  },

  async delete (req, res) {
    const { userId } = req.params;

    if (isNaN(userId)) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'User Id should be a number' });
    }

    const user = await User.findByPk(userId);

    if (!user) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'User not found' });

    await user.destroy();

    return res.status(StatusCodes.NO_CONTENT).send();
  },
}
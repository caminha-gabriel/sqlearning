const Tech = require('../models/Tech');
const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');

module.exports = {
  async getAll (_req, res) {
    const techs = await Tech.findAll();

    return res.status(StatusCodes.OK).json(techs);
  },

  async getAllFromUser (req, res) {
    const { userId } = req.params;

    const userWithTechs = await User.findByPk(userId, {
      include: { association: 'techs', through: { attributes: [] } }
    });

    if (!userWithTechs) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'User not found' });

    return res.status(StatusCodes.OK).json(userWithTechs.techs);
  },

  async store (req, res) {
    const { name } = req.body;
    const { userId } = req.params;

    const user = await User.findByPk(userId);

    if (!user) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'User not found' });

    const [ tech ] = await Tech.findOrCreate({
      where: { name }
    });

    await user.addTech(tech);

    return res.status(StatusCodes.CREATED).json(tech);
  },

  async delete (req, res) {
    const { name } = req.body;
    const { userId } = req.params;

    const user = await User.findByPk(userId);

    if (!user) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'User not found' });

    const tech = await Tech.findOne({
      where: { name }
    });

    await user.removeTech(tech);

    return res.status(StatusCodes.NO_CONTENT).send();
  }
}
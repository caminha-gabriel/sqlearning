const { Model, DataTypes } = require('sequelize');
const connection = require('../database');

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize: connection,
  modelName: 'User',
  underscored: true,
});


module.exports = User;
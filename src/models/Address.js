const { Model, DataTypes, Sequelize } = require('sequelize');
const connection = require('../database');
const User = require('./User');

class Address extends Model {}

Address.init({
  zipcode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
}, {
  sequelize: connection,
  modelName: 'Address',
  underscored: true,
});

Address.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

User.hasMany(Address, {
  foreignKey: 'user_id',
  as: 'addresses',
});

module.exports = Address;
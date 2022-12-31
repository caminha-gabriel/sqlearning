const { Model, DataTypes } = require('sequelize');
const connection = require('../database');
const User = require('./User');

class Tech extends Model {}

Tech.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: connection,
  modelName: 'Tech',
  tableName: 'techs',
  underscored: true
});

Tech.belongsToMany(User, {
  foreignKey: 'tech_id',
  through: 'user_techs',
  as: 'users'
});

User.belongsToMany(Tech, {
  foreignKey: 'user_id',
  through: 'user_techs',
  as: 'techs',
});

module.exports = Tech;
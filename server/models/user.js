const Sequelize = require('sequelize');
const keys = require('../config/keys');

const sequelize = new Sequelize('nikolovska', 'postgres', keys.postgreSQL.password, {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
const User = sequelize.define('user', {
  userId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null
  },
  provider: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null
  },
  googleId: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null
  },
  thumbnail: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null
  }

});
// User.hasMany(Quiz);
module.exports = User;

const Sequelize = require('sequelize');
const keys = require('../config/keys');
const User = require('./user');

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
const Quiz = sequelize.define('quiz', {
  pickedQuestions: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: true,
    defaultValue: null
  },
  wronglyAnswered: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: true,
    defaultValue: null
  }
});
Quiz.belongsTo(User);
module.exports = Quiz;

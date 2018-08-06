const Sequelize = require('sequelize');
const keys = require('../config/keys');
const Quiz = require('./quiz');
const Question = require('./questions');

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
const QuizQuestion = sequelize.define('quiz_questio', {
});
QuizQuestion.belongsTo(Question);
QuizQuestion.belongsTo(Quiz);

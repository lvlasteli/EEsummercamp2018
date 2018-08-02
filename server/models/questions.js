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
const Question = sequelize.define('question', {
  topic: Sequelize.TEXT, // .STRING je premal za sve podatke
  course: Sequelize.TEXT,
  fullQuestion: Sequelize.TEXT,
  answers: Sequelize.JSON
});

module.exports = Question;

const Sequelize = require('sequelize');
const database = require('../database');

const Question = database.define('question', {
  topic: Sequelize.STRING,
  course: Sequelize.STRING,
  lesson: Sequelize.STRING,
  author: Sequelize.STRING,
  category: Sequelize.STRING,
  question: Sequelize.TEXT,
  answers: Sequelize.ARRAY(Sequelize.JSONB)
});

Question.prototype.correctAnswers = function getCorrectAnswers() {
  const correct = [];
  this.answers.forEach(answer => {
    if (answer.correct) {
      correct.push(answer.correctIndex);
    }
  });
  return correct;
};

module.exports = Question;

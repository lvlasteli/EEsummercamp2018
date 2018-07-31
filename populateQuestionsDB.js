const Sequelize = require('sequelize');
const fs = require('fs');

const sequelize = new Sequelize('postgresql://postgres:admin@localhost:5432/nikolovska', {});

const Question = sequelize.define('question', {
  topic: Sequelize.STRING,
  course: Sequelize.STRING,
  fullQuestion: Sequelize.JSON
});

Question.sync().then(populateDB);

function populateDB() {
  const questions = JSON.parse(fs.readFileSync('questions.json', 'utf8'));
  const dataDB = [];

  questions.forEach(question => {
    dataDB.push({
      topic: question.topic,
      course: question.course,
      fullQuestion: question
    });
  });

  Question.bulkCreate(dataDB);
}

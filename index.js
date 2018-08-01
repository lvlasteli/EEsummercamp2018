const Sequelize = require('sequelize');
const fs = require('fs');
// const rn = require('random-number');

// NECE const sequelize = new Sequelize('postgres://postgres:axeq627a@127.0.0.1:64373/nikolovska', {});
const sequelize = new Sequelize('nikolovska', 'postgres', 'axeq627a', {
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

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Question = sequelize.define('question', {
  topic: Sequelize.TEXT, // .STRING je premal za sve podatke
  course: Sequelize.TEXT,
  fullQuestion: Sequelize.TEXT,
  answers: Sequelize.JSON
});
const User = sequelize.define('user', {
  userId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING
    // validate: {
    //   isEmail: true
    // }
  },
  password: {
    type: Sequelize.STRING
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
User.hasMany(Quiz);

User.sync({ force: true }).then(() => {
  User.create({
    email: 'mojemail@gmail.com',
    password: 'password1234'
  });
  User.create({
    email: 'novi@gmail.com',
    password: 'password4567'
  });
});

Quiz.sync({ force: true }).then(() => {
  Quiz.create({
    userUserId: 1,
    pickedQuestions: [1, 2, 3, 6, 8, 10, 12, 18, 300, 459],
    wronglyAnswered: [2, 3]
  });
  Quiz.create({
    userUserId: 1,
    pickedQuestions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    wronglyAnswered: [2, 3]
  });
});
Question.sync({ force: true }).then(() => {
  const questions = JSON.parse(fs.readFileSync('questions.json', 'utf8'));
  questions.forEach(question => {
    Question.create({
      topic: question.topic,
      course: question.course,
      fullQuestion: question.question,
      answers: question.answers
    });
  });
});

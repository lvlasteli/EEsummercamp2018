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
const User = sequelize.define('user', {
  email: Sequelize.STRING,
  password: Sequelize.STRING
  // quizId: Sequelize.ARRAY(Sequelize.ENUM)
});
const Question = sequelize.define('question', {
  topic: Sequelize.TEXT, // .STRING je premal za sve podatke
  course: Sequelize.TEXT,
  fullQuestion: Sequelize.TEXT,
  answers: Sequelize.JSON
});
const Quiz = sequelize.define('quiz', {
  pickedQuestions: Sequelize.ARRAY(Sequelize.INTEGER),
  wronglyAnswered: Sequelize.ARRAY(Sequelize.INTEGER),
  userId: Sequelize.INTEGER
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

User.sync({ force: true }).then(() => {
  User.create({
    userId: 1,
    email: 'mojemail@email.com',
    password: 'password1234'
  });
  User.create({
    userId: 2,
    email: 'novi@email.com',
    password: 'password4567'
  });
});

Quiz.sync({ force: true }).then(() => {
  Quiz.create({
    userId: 1,
    pickedQuestions: [1, 2, 3, 6, 8, 10, 12, 18, 300, 459],
    wronglyAnswered: [2, 3]
  });
});

// async function Relationship() {
//   await User;
//   await Quiz;
//   User.hasMany(Quiz, {foreignKey: 'userId', sourceKey: 'isoCode'});
//   Quiz.belongsTo(User, {foreignKey: 'userId', sourceKey: 'isoCode'});
// }

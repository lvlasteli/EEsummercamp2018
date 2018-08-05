const fs = require('fs');
const User = require('./server/models/user');
const Quiz = require('./server/models/quiz');
const Question = require('./server/models/questions');

User.sync({ force: true }).then(() => {
  User.create({
    gender: 'M',
    firstName: 'Osoba',
    lastName: 'Prvi',
    provider: 'google',
    googleId: 'nesto'
  });
  User.create({
    gender: 'F',
    firstName: 'Alien',
    lastName: 'Drugi',
    provider: 'google',
    googleId: 'nesto'
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
// ima 1514 pitanja

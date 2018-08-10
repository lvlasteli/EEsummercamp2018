const Question = require('../question/question.model');
const QuizAndQuizQuestions = require('../quiz/quiz.model');
const User = require('../user/user.model');
const randomInt = require('random-int');

const quiz = QuizAndQuizQuestions.Quiz; // exported Quiz
const quizQuestions = QuizAndQuizQuestions.QuizQuestions; //  exported QuizQuestions

function createUsers() {
  const userIds = [];
  Promise.all([
    User.create({
      googleId: 1,
      firstName: 'Lucija',
      lastName: 'Vlastelicic'
    }),
    User.create({
      googleId: 2,
      firstName: 'Josip',
      lastName: 'Lasic'
    }),
    User.create({
      googleId: 3,
      firstName: 'Petra',
      lastName: 'Livaja'
    }),
    User.create({
      googleId: 4,
      firstName: 'Simun',
      lastName: 'Mihanovic'
    })
  ]).then(() => {
    userIds.push(1, 2, 3, 4);
    userIds.forEach((element) => {
      let i;
      for (i = 0; i < 2; i++) {
        saveQuiz(element);
      }
    });
  });
}

function get10RandomIds() {
  const chosenNumberOfQuestions = 10;
  return Question.count().then((numberOfAllExistingQuestions) => {
    const randIDs = [];
    while (randIDs.length < chosenNumberOfQuestions) {
      const broj = randomInt(1, numberOfAllExistingQuestions);
      if (randIDs.indexOf(broj) === -1) {
        randIDs.push(broj);
      }
    }
    return randIDs;
  });
} // returns array.length=10 of random integers

async function saveQuiz(userID) {
  let randomIds = [];
  randomIds = await get10RandomIds();
  console.log(randomIds);
  quiz.create({
    percentage: null,
    timestamp: null,
    elapsedTime: null,
    userId: userID
  }).then((insertedId) => {
    console.log(insertedId.id);
    randomIds.forEach(element => {
      quizQuestions.create({
        quizId: insertedId.id,
        questionId: element,
        correct: null,
        answers: null
      });
    });
  });
}
createUsers();

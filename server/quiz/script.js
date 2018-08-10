const Question = require('../question/question.model');
const QuizAndQuizQuestions = require('./quiz.model');
const randomInt = require('random-int');

const quiz = QuizAndQuizQuestions.Quiz; // exported Quiz
const quizQuestions = QuizAndQuizQuestions.QuizQuestions; //  exported QuizQuestions

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
    // quizQuestions: [
    //   {
    //     correct: null,
    //     answers: null,
    //     questionId: randomIds[0]
    //   }]
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
saveQuiz(1);

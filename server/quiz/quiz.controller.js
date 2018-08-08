const getRandomQ = require('./get10RandomQuestions');
const Quiz = require('./quiz.model');
const database = require('../database');

async function saveQuestionsForQuiz(userID) {
  let pickedQuestions = [];
  pickedQuestions = await getRandomQ;
  return Quiz.create({
    questions: pickedQuestions,
    percentage: null,
    timestamp: null,
    elapsedTime: null,
    userId: userID // error doesnt save
  }).then(() => {
    database.close();
    // future function that'll go from 0-10 trough a list and show question on a view
  }).catch((e) => {
    console.log(e);
    database.close();
  });
}
saveQuestionsForQuiz();

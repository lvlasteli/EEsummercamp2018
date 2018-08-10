const Question = require('../question/question.model');
const Quiz = require('./quiz.model');
const randomInt = require('random-int');

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
}

async function saveQuiz(userID) {
  let randomIds = [];
  randomIds = await get10RandomIds();
  console.log(randomIds);
  Quiz.create({
    percentage: null,
    timestamp: null,
    elapsedTime: null,
    userId: userID
  }).then((insertedId) => {
    console.log(insertedId.id);
  });
}

saveQuiz(1);

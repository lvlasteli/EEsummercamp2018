const Question = require('../question/question.model');
const randomInt = require('random-int');
const database = require('../database');

function getRandomQuestions() {
  // user will choose
  const chosenNumberOfQuestions = 10;
  Question.count().then((numberOfAllExistingQuestions) => {
    const randIDs = [];
    while (randIDs.length < chosenNumberOfQuestions) {
      const broj = randomInt(1, numberOfAllExistingQuestions);
      if (randIDs.indexOf(broj) === -1) {
        randIDs.push(broj);
      }
    }
    console.log('----------chosen array of random numbers--------');
    console.log(randIDs);
    const randQuestions = [];
    let i = 0;
    // return Question.findAll()
    Question.findAll({
      where: { id: randIDs }
    }).then((result) => {
      for (i = 0; i < chosenNumberOfQuestions; i++) {
        const dataOfQuestions = {
          questionId: result[i].id,
          question: result[i].question,
          correct: null,
          answers: result[i].answers
        };
        randQuestions.push(dataOfQuestions);
      }
      console.log('----------Choosen Question------------');
      console.log(randQuestions);
      database.close();
      return randQuestions;
    });
  });
}
module.exports = getRandomQuestions();

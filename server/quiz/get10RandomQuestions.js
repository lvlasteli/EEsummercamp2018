const Question = require('../question/question.model');
const randomInt = require('random-int');

function getRandomQuestions() {
  // user will choose
  const chosenNumberOfQuestions = 10;
  return Question.count().then((numberOfAllExistingQuestions) => {
    const randIDs = [];
    while (randIDs.length < chosenNumberOfQuestions) {
      const broj = randomInt(1, numberOfAllExistingQuestions);
      if (randIDs.indexOf(broj) === -1) {
        randIDs.push(broj);
      }
    }
    // console.log('----------chosen array of random numbers--------');
    // console.log(randIDs);
    const randQuestions = [];
    let i = 0;
    return Question.findAll({
      where: { id: randIDs }
    }).then((result) => {
      for (i = 0; i < chosenNumberOfQuestions; i++) {
        const dataOfQuestions = {
          questionId: result[i].id,
          question: result[i].question,
          answers: result[i].answers,
          correct: false
        };
        randQuestions.push(dataOfQuestions);
      }
      // console.log('----------Choosen Question------------');
      // console.log(randQuestions);
      return randQuestions;
    });
  });
}
module.exports = getRandomQuestions();

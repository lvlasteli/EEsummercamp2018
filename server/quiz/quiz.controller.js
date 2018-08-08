const getRandomQ = require('./get10RandomQuestions');

async function getJsonArrayOfQuestions() {
  let pickedQuestions = [];
  pickedQuestions = await getRandomQ;
  console.log(pickedQuestions);
}
getJsonArrayOfQuestions();

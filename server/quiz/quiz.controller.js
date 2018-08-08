const getRandomQ = require('./get10RandomQuestions');

async function plsWork() {
  const something = await getRandomQ;
  console.log('di san se izvrsija' + something);
}
plsWork();

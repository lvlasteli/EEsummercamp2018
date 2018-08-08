const getRandomQ = require('./get10RandomQuestions');

async function plsWork() {
  let something = [];
  something = await getRandomQ;
  console.log('It sould be array.....' + something);
}
plsWork();

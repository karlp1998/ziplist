const testListNum = [1, 2, 3];
const testListLetters = ['a', 'b', 'c'];

function zipList(listNum, listLetter) {
  const resultList = [];
  for (let i = 0; i < listNum.length; i++) {
    resultList.push(listNum[i], listLetter[i]);
  }
  return resultList;
}

//console.log(zipList(testListNum, testListLetters));

function zipListTheSimpleWay(listNum, listLetter) {
  return _.flatten(_.zip(listNum, listLetter));
}

console.log(zipListTheSimpleWay(testListNum, testListLetters));
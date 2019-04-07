// question range: random number from 1 to 10.
// generate 30 math questions including addition and substraction for Felix


var generateMathQuestions = function(numOfQuestions) {
  var mathList = [];
  var mathQuestion = '';

  while (mathList.length < numOfQuestions) {
    var num1 = Math.floor(Math.random() * (10 - 1)) + 1;
    var num2 = Math.floor(Math.random() * (10 - 1)) + 1;
    
    if (num1 + num2 <= 20) {
      mathQuestion = num1 + ' + ' + num2 + ' = ';
      mathList.push(mathQuestion);
    } 
    
    if (mathList.length == numOfQuestions){
      break;
    }

    if (num1 > num2) {
      mathQuestion = num1 + ' - ' + num2 + ' = ';
      mathList.push(mathQuestion);
    } else if (num2 > num1){
      mathQuestion = num2 + ' - ' + num1 + ' = ';
      mathList.push(mathQuestion);
    }
  }

  for (var i = 0; i < mathList.length; i++) {
      console.log(i+1 + '. ' + mathList[i]);
  }
}

//generateMathQuestions(30);
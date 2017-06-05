function checkCreditCard(num) {
  var numStr = num.toString();
  return numStr.length === 16;
}

function dropLastDigit(num) {
  var numStr = num.toString();
  var allButLast = numStr.slice(0, -1);
  return allButLast;
}

function reverseDigits(num) {
  var numStr = num.toString();
  var strArray = numStr.split("");
  var reverseNum = strArray.reverse();
  return reverseNum;
}

function creditCardValid (num) {
  checkCreditCard(num);
  dropLastDigit(num);
  reverseDigits(num);
}
creditCardValid(4556737586899855);

// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

var str1 = "Hello ";
console.log(str1);
var str2 = "world!";
console.log(str2);
var res = str1.concat(str2);
console.log(res);

function squareEveryDigit(int) {
  var strNum = int.toString();
  console.log(strNum);
  console.log(strNum.length);
  var digitsSqStr = "";
  for (i = 0; i <= strNum.length - 1; i++) {
    console.log(strNum[i]);
    var targetNum = parseInt(strNum[i]);
    console.log('curent number about to be squared:', targetNum);
    targetNum *= targetNum;
    console.log('squared:', targetNum);
    var strTargNum = targetNum.toString();
    console.log(strTargNum);
    digitsSqStr = digitsSqStr.concat(strTargNum);
    console.log(digitsSqStr);
  }
  var digitsSqInt = parseInt(digitsSqStr);
  return(digitsSqInt);
}
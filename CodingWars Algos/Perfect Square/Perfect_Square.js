// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

function isPerfectSquare (num) {
  var i = 0;
  while (i <= num) {
    if (i * i !== num ) {
      i++;
      continue;
    }
    if (i * i == num) {
      return true;
    }
  }
  return false;
}
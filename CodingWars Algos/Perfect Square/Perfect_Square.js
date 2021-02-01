// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

function perfectSquares(num) {
  for (var i = 0; i * i <= num; i++) {
    if (i * i === num) {
      return true
    }
  } 
  return false
}
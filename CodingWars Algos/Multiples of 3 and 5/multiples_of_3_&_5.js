// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function multiplesOf3And5(num) {
  var sum = 0;
  for (i = 1; i < num; i++) {
    if (i % 3 == 0) {
      console.log(i);
      sum += i;
    }
    else if (i % 5 == 0) {
      console.log(i);
      sum += i;
    }
  }
  return (sum);
}
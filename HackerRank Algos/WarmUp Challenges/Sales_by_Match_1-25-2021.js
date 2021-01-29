// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, 
// determine how many pairs of socks with matching colors there are.

// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.

// STDIN                       Function
// -----                       --------
// 9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Sample Output

// 3
// Explanation

// There are three pairs of socks.

console.log(Math.floor(0.5));

function sockMerchant(arr) {
  var pairs = 0;
  var numOfMatching = 0;
  var matched = [];
  for (i = 0; i < arr.length - 1; i++) {
    if (matched.length > 0) { // trying to skip second forloop and code if the number in array as already gone through matching
      for (m = 0; m < matched.length - 1; m++) {
        if (arr[i] == matched[m]) {
          console.log(arr[m]);
          //skip inner forloop and increment i
          continue;
        }
      }
    }
    for (j = 0; j <= arr.length - 1; j++) {
      if (arr[i] == arr[j]) {
        console.log('outer for loop', arr[i]);
        console.log('inner for loop:', arr[j]);
        numOfMatching++;
        console.log(numOfMatching);
      }
    }
    matched.push(arr[i]);
    console.log(matched);
    var numOfMatched = numOfMatching / 2;
    Math.floor(numOfMatched);
    console.log('Matched:', numOfMatched);
    pairs += numOfMatched;
    numOfMatching = 0;
  }
  return(pairs);

}

//This is the Algo i need help with
// Algo Practice - Basic Funtions Template


// Basic 13

// 1. Print 1-255
//    Print1To255()
//    Print all the integers from 1 to 255.

function Print1To255(){
  for (i = 1; i <= 255; i++) {
    console.log(i);
  }
}


// 2. Print Odds 1-255
//    PrintOdds1To255()
//    Print all odd integers from 1 to 255. 

function PrintOdds1To255(){
  for (i = 1; i <= 255; i += 2) {
    console.log(i)
  }
}

//another way
function PrintOdds1To2552(){
  for(i = 0; i <= 255; i++) {
    if (i%2 != 0) {
      console.log(i);
    }
  }
}

// 3. Print Ints and Sum 0-255
//    PrintIntsAndSum0To255()
//    Print integers from 0 to 255, and with each integer print the sum so far. 

function PrintIntsAndSum0To255(){
  var sum = 0;
  for (i = 0; i<= 255; i ++) {
    sum = sum + i;
    console.log('Current Int:', i);
    console.log('Current Sum:', sum);
  }
}

// 4. Iterate and Print Array
//    Iterate through a given array, printing each value. 
//    PrintArrayVals(arr)

testArr1=[1,2,3,4,5];
function IterateAndPrintArray(arr){
  for (i = 0; i < arr.length - 1; i++) {
    console.log(arr[i])
  }
}

// 5. Find and Print Max
//    PrintMaxOfArray(arr)
//    Given an array, find and print its largest element.

testArr2=[2,76,3,56,7,99,2,3,56];
function FindMax(arr){
  var max = 0;
  for (i = 0; i < arr.length - 1; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log('Max of Array:', max)
}

// 6. Get and Print Average
//    PrintAverageOfArray(arr)
//    Analyze an array’s values and print the average.

function AverageOfArr(arr){
  var sum = 0;
  for (i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];
  }
  var avg = sum / arr.length;
  console.log('Average of Array:', avg);
}

// 7. Array with Odds
//    ReturnOddsArray1To255()
//    Create an array with all the odd integers between 1 and 255 (inclusive).  

function ArrayOdds(){
  arr=[];
  for (i = 1; i <= 255; i += 2) {
    arr.push(i);
  }
  console.log(arr);
  return(arr);
}

//another way
function ArrayOdds2(){
  arr=[];
  for (i = 0; i <= 255; i++) {
    if (i%2 != 0) {
      arr.push(i);
    }
  }
  console.log(arr);
  return(arr);
}

// 8. Square the Values
//    SquareArrayVals(arr)
//    Square each value in a given array, returning that same array with changed values. 

function SquareValues(arr){
  for (i = 0; i <= arr.length - 1; i++) {
    arr[i] = arr[i] * arr[i];
  }
  console.log(arr);
  return(arr);
}

// 9. Greater than Y
//    ReturnArrayCountGreaterThanY(arr, y)
//    Given an array and a value Y, count and print the number of array values greater than Y. 

function GreaterThanY(arr, y) {
  var greater = 0
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > y) {
      grater = greater++;
    }
  }
  console.log(greater);
}

// 10. Zero Out Negative Numbers
//     ZeroOutArrayNegativeVals(arr)
//     Return the given array, after setting any negative values to zero. 

testArr3 = [1, -3, 4, -5, -2, 5]
function ZeroOutNeg(arr) {
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  console.log(arr);
  return(arr);
}

// 11. Max, Min, Average
//     PrintMaxMinAverageArrayVals(arr)
//     Given an array, print the max, min and average values for that array.

function FindMinMaxAvg(arr) {
  var max = arr[0];
  var min = arr[0];
  var sum = arr[0];
  for (i = 1; i<= arr.length - 1; i++) {
    sum = sum + arr[i];
    if (min > arr[i]) { 
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  var avg = sum/arr.length
  console.log('Maximum of Array:', max,'\n', 'Minimum of Array:', min,'\n','Average of Array:', avg)
}

// 12. Shift Array Values
//     ShiftArrayValsLeft(arr)
//     Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

function ShiftArrayValsLeft(arr) {
  for(i = 0; i <= arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = 0;
  console.log(arr);
}

// 13. Swap String For Array Negative Values
//     SwapStringForArrayNegativeVals(arr)
//     Given an array of numbers, replace any negative values with the string 'Dojo'.

function SwapStringForNegVals(arr) {
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < 0) {
      arr[i] = 'Dojo';
    }
  }
  console.log(arr);
}

// Basic Foundation I

// 1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function Get1to255Array() {
  var array = [];
  for (i = 1; i <= 255; i++) {
    array.push(i);
  }
  console.log(array);
  return(array);
}

// 2. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  
//    You may use a modulus operator for this exercise.

function SumOf1000Even() {
  var sum = 0;
  for (i = 0; i <= 1000; i++) {
    if (i%2 == 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log(sum);
  return(sum);
}

//another way

function SumOf1000Even2() {
  var sum = 0;
  for (i = 0; i <= 1000; i += 2) {
    sum += i;
  }
  return(sum)
}

// 3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. 
//    (e.g. 1+3+5+...+4997+4999).

function SumOdd5000() {
  var sum = 0;
  for (i = 1; i <= 5000; i++) {
    if (i%2 != 0) {
      sum += i;
    }
  }
  console.log(sum);
}

//another way
function SumOdd50002() {
  var sum = 0;
  for (i = 1; i <= 5000; i += 2) {
    sum += i;
  }
  return(sum)
}

// 4. Iterate an array - Write a function that returns the sum of all the values within an array. 
//    (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function IterateArrayReturnSum(arr) {
  var sum = 0;
  for (i = 0; i <= arr.length - 1; i++) {
    sum += arr[i] 
  }
  console.log(sum);
  return (sum);
}

// 5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. 
//    (e.g. for [-3,3,5,7] max is 7)

var testArr4 = [6,4,3,2];

function FindArrayMax(arr) {
  var max = arr[0];
  for (i = 1; i <= arr.length - 1; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(max);
  return(max);
}

// 6. Find average - Given an array with multiple values, write a function that returns the average of the values in the array. 
//    (e.g. for [1,3,5,7,20] average is 7.2)

function ArrayAvg(arr) {
  var sum = arr[0];
  for (i = 1; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  var avg = sum / arr.length;
  console.log(avg);
  return(avg);
}

// 7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. 
//    (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function ArrayOdd() {
  var arr=[];
  for (i = 1; i <= 50; i++) {
    if (i%2 != 0) {
      arr.push(i);
    }
  }
  console.log(arr);
  return(arr);
}

// 8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. 
//    For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function GreaterThanNum(arr, y) {
  var numVals = 0;
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > y) {
      numVals++
    }
  }
  console.log(numVals);
  return(numVals);
}

// 9. Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. 
//    (e.g. [1,5,10,-2] will become [1,25,100,4])

function Squares(arr) {
  for (i = 0; i <= arr.length - 1; i++) {
    arr[i] = arr[i] * arr[i];
  }
  console.log(arr);
  return(arr);
}

// 10. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. 
//     When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function Negs(arr) {
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    } 
  }
  console.log(arr);
  return(arr);
}

// 11. Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. 
//     (e.g. [1,5,10,-2] will return [10,-2,3.5])

function MaxMinAvg(arr) {
  var sum = arr[0];
  var max = arr[0];
  var min = arr[0];
  for (i = 1; i <= arr.length - 1; i++) {
    sum += arr[i];
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  var avg = sum / arr.length;
  console.log('Max: ', max,'\n','Min:', min,'\n','Avg:', avg);
  return('Max: ', max,'\n','Min:', min,'\n','Avg:', avg);
}

// 12. Swap Values - Write a function that will swap the first and last values of any given array. 
//     The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function SwapVals(arr) {
  var temp = arr[arr.length - 1];
  arr[arr.length - 1] = arr[0];
  arr[0] = temp;
  console.log(arr);
  return(arr);
}

// 13. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. 
//     For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function NumberToString(arr) {
  for(i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < 0) {
      arr[i] = 'Dojo';
    }
  }
  console.log(arr);
  return(arr);
}

// Basic Foundation II

// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  
//    Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function BiggieSize(arr) {
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > 0) {
      arr[i] = 'big';
    }
  }
  console.log(arr);
}

// 2. Print Low, Return High - Create a function that takes in an array of numbers. 
//    The function should print the lowest value in the array, and return the highest value in the array.

function PrintLowReturnHigh(arr) {
  var high = arr[0];
  var low = arr[0];
  for (i = 1; i <= arr.length - 1; i++) {
    if (high < arr[i]) {
      high = arr[i];
    }
    if (low > arr[i]) {
      low = arr[i];
    }
  }
  console.log(low);
  return(high);
}

// 3. Print One, Return Another - Build a function that takes in an array of numbers.  
//    The function should print the second-to-last value in the array, and return the first odd value in the array.

function PrintOneReturnAnother(arr) {
  console.log(arr[arr.length - 2]);
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 != 0) {
      return arr[i];
    }
  }
}

// 4. Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  
//    Calling double([1,2,3]) should return [2,4,6] without changing the original array.

testArr5 = [1,2,3];

function DoubleVision(arr) {
  var newArr = [];
  var newArrPos = 0;
  for (i = 0; i <= arr.length - 1; i++) {
    newArr.push(arr[i]);

    newArr[newArrPos] *= 2;
    newArrPos++;
  }
  console.log(arr);
  return(newArr);
}

// 5. Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  
//    Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function CountPositives(arr) {
  var pos = 0;
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
      pos++;
    }
  }
  arr[arr.length - 1] = pos;
  return(arr);
}

// 6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  
//    Every time the array has three evens in a row, print "Even more so!".

function EvensAndOdds(arr) {
  var even = 0;
  var odd = 0;
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 == 0) {
      even++;
    }
    if (arr[i] % 2 != 0) {
      odd++;
    }
    if (even > 0) {
      odd = 0;
    }
    if (odd > 0) {
      even = 0;
    }
    if (even == 3) {
      console.log('Even more so!');
      even = 0;
    }
    if (odd == 3) {
      console.log('That\'s Odd!');
      odd = 0;
    }
  }
}

// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  
//    Afterward, console.log each array value and return arr.

function IncrementTheSeconds(arr) {
  for (i = 1; i <= arr.length - 1; i++) {
    if ( i % 2 != 0) {
      arr[i] += 1;
    }
    console.log(arr[i]);
  }
  return(arr);
}

// 8. Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  
//    Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  
//    For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function PreviousLengths(arr) {
  for (i = arr.length - 1; i >= 0; i--) {
    if (i > 0) {
      arr[i] = arr[i - 1].length;
    }
  }
  console.log(arr);
}

// 9. Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  
//    Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function AddSeven(arr) {
  var newArr = [];
  var newArrPos = 0;
  for (i = 0; i <= arr.length - 1; i++) {
    newArr.push(arr[i]);
    newArr[newArrPos] += 7;
    newArrPos++;
  }
  console.log(arr);
  return(newArr);
}

// 10. Reverse Array - Given an array, write a function that reverses its values, in-place.  
//     Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  
//     Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function ReverseArray(arr) {
  var end = arr.length - 1;
  console.log(end);
  var front = 0;
  console.log(front);
  while (front < end) {
    temp = arr[front];
    arr[front] = arr[end];
    arr[end] = temp;
    front++;
    console.log(front);
    end--;
    console.log(end);
  }
  console.log(arr);
}

// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). 
//     Given [1,-3,5], return [-1,-3,-5].

function OutlookNegative(arr) {
  var newArr = [];
  var newArrPos = 0;
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
      newArr[newArrPos] *= -1;
      newArrPos += 1;
    }
    else {
      newArr.push(arr[i]);
      newArrPos += 1;
    }
  }
  console.log(arr);
  console.log(newArr);
}

// 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  
//     If no array values are "food", then print "I'm hungry" once.

function AlwaysHungry(arr) {
  var counter = 0;
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == 'food') {
      console.log('yummy');
    }
    else {
      counter++;
    }
  }
  if (counter == arr.length) {
    console.log('I\'m Hungry');
  }
}

// 13. Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  
//     Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  
//     swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function SwapTowardTheCenter(arr) {
  var end = arr.length - 1;
  var front = 0;
  while (front < end) {
    temp = arr[front];
    arr[front] = arr[end];
    arr[end] = temp;
    front += 2;
    console.log(front);
    end -= 2;
    console.log(end);
  }
  console.log(arr);
}

// 14. Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  
//     For example, scaleArray([1,2,3], 3) should return [3,6,9]

function ScaleArray(arr, num) {
  for (i = 0; i <= arr.length - 1; i++) {
    arr[i] *= num;
  }
  return(arr);
}
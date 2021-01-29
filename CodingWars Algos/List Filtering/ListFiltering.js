// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

var arr1 = [1,2,3,4,5];
function listFilter (arr) {
  for(var i = 0; i <= arr.length; i++) {
    if (typeof arr[i] === 'string') {
      console.log(arr[i]);
      arr.splice(i, i);
    }
  }
  // return(arr);
}
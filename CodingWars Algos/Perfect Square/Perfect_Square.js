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
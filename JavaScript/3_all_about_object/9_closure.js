function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber();
}

console.log(number);

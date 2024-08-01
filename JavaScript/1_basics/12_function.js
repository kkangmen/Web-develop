/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10 /2 % 3 string으로 변환해서
 * 반환받고 싶다면?
 */
console.log((((2 * 10) / 2) % 3).toString());

function calculate(number) {
  console.log((((number * 10) / 2) % 3).toString());
}

function multiply(x, y) {
  console.log(x * y);
}
multiply(2, 4);

/**
 * 반환받기
 * return
 */
function multiply(x, y) {
  let num = x * y;
  return num;
}
const result1 = multiply(2, 4);
console.log(result1);

/**
 * Arrow 함수
 */
const multiply2 = (x, y) => {
  return x * y;
};
console.log(multiply2(3, 4));

const multiply5 = (x) => (y) => (z) => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x) {
  return function (y) {
    return function (z) {
      return `x: ${x} y: ${y} z: ${z}`;
    };
  };
}
console.log(multiply6(3)(4)(5));

const multiplyAll = function (...arguments) {
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9));

/* immediately invoked function*/
(function (x, y) {
  console.log(x * y);
})(3, 4);

console.log(typeof multiply); // function
console.log(multiply instanceof Object); // true

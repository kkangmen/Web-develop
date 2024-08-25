/**
 * Closure
 *
 * "상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다."
 */
function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber();
}

// console.log(getNumber());

function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber;
}

const runner = getNumber();

console.log(runner);
console.log(runner());

/**
 * 1) 데이터 캐싱
 */

function cacheFunction() {
  // 시간이 오래 걸리는 연산
  var number = 10 * 10;

  function innercacheFunction(newNumb) {
    return number * newNumb;
  }
  return innercacheFunction;
}

const inner = cacheFunction();

console.log(inner(10));
console.log(inner(20));

function cacheFunction2() {
  var number = 99;

  function increment() {
    number++;
    return number;
  }

  return increment;
}

const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());
console.log(runner3());

/**
 * 3) 정보 은닉
 */
function Idol(name, year) {
  this.name = name;
  var _year = year;

  this.sayNamAndYear = function () {
    return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
  };
}

const yuJin = new Idol("안유진", 2003);
console.log(yuJin.sayNamAndYear());

console.log(yuJin._year);
console.log(yuJin.name);

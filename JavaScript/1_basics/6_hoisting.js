/**
 * Hoisting
 */
console.log("Hello");
console.log("World");

// console.log(name);
// var name = "코드팩토리";
// console.log(name);

/**
 * Hoisting은 무엇인가?
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */

console.log(yuJin);
let yuJin = "안유진";

/**
 * let, const도 Hoisting이 발생
 * 다만, 이로 인해 발생할 수 있는 버그를 막아준다.
 */

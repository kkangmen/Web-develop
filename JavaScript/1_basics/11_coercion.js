/**
 * 타입 변환
 * type conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

let stringAge = age.toString();
console.log(typeof stringAge);

let test = age + "";
console.log(typeof test);
console.log("98" * 2);

console.log(typeof age.toString());
console.log(typeof true.toString());

// 숫자타입으로 변환
console.log(typeof parseInt("0"), parseInt("0"));
console.log(typeof parseFloat("0.99"), parseFloat("0.99"));

/**
 * Boolean 타입으로의 변환
 */
console.log(!"x");
console.log(!"");
console.log(!!{});

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 *
 * 모두 false를 반환한다
 */

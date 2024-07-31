/**
 * 산술연산자
 *
 * +, -, * , / , %
 */

console.log(10 + 10);
console.log(10 * (10 + 10));

/**
 * 증가와 감소
 */
let number = 1;
number++;
console.log(number);

/**
 * 숫자 타입이 아닌 타입에 +,-  사용하면 어떻게 될까?
 */
let sample = "99";
console.log(+sample);
console.log(typeof +sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = "안유진";
// NaN -> Not a Number
console.log(+sample);

/**
 * 할당 연산자(assignment operator)
 * +=, -=, *=, /=, %=
 */

/**
 * 비교 연산자
 *
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */
console.log(5 == "5");
console.log(5 === "5"); // 값과 타입의 비교
console.log(5 != "5");
console.log(5 !== "5");

/**
 * 대소 관계 비교 연산자
 */
console.log(10 > 1);

/**
 * 삼항 조건 연산자 (ternary operator)
 */
console.log(10 > 0 ? "10이 0보다 크다" : "10이 0보다 작다");

/**
 * 논리 연산자
 *
 * 1) &&
 * 2) ||
 */

console.log(true && true);

/**
 * 단축평가 (short circuit evaluation)
 *
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false 우측 값 반환
 *
 */
console.log(true || "아이브");
console.log(false || "아이브");
console.log(false && "아이브");
console.log(true && "아이브");
console.log(true && true && "아이브");

/**
 * 지수 연산자
 */
console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 */
let name;
console.log(name);

// undefined || null 일때 ?? 오른쪽 값 반환
name = name ?? "코드팩토리";
console.log(name);

name = name ?? "아이브";
console.log(name);

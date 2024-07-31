/**
 * Data Types
 *
 * 여섯개의 Primitive Type과
 * 한개의 오프젝트 타입이 있다.
 *
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 *
 * 7) Object (객체)
 *  Function
 *  Array
 *  Object
 */

const age = 32;
const pi = 3.14;
console.log(typeof pi);

const infinity = Infinity;
console.log(typeof infinity);

/**
 * String 타입
 */
const codeFactory = "코드팩'토'리";
console.log(codeFactory);
const ive = '"아이브" 안유진';
console.log(ive);

/**
 * Template Literal
 *
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력
 */
let iveYuJin = "아이브\n안유진";
console.log(iveYuJin);
iveYuJin = "아이브\t안유진";
console.log(iveYuJin);
const backSlash = "아이브\\코드팩토리";
console.log(backSlash);
const smallQutoation = "아이'브'코드팩토리";
console.log(smallQutoation);

// Template Literal
const iveWonYoung2 = `아이브 '''"" //
장원영`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const groupName = "아이브";
console.log(groupName + " 안유진");
console.log(`${groupName} 안유진`);

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);

/**
 * Undefined
 *
 * 사용자가 직접 값을 초기화하지 않았을때
 * 지정되는 값이다.
 *
 * 직접 undefined로 값을 초기화하는건 지양
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null 타입
 *
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할때 사용한다
 */
let init = null;
console.log(init);
console.log(typeof init);

/**
 * Symbol 타입
 *
 * 유일무이한 값을 생성할 때 사용한다.
 */
const test1 = "1";
const test2 = "2";
console.log(test1 == test2);

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");
console.log(symbol1 == symbol2);

/**
 * Object 타입
 *
 * Map
 * key:value
 */
const dictionary = {
  red: "빨간색",
  orange: "주황색",
  yellow: "노란색",
};

console.log(dictionary);
console.log(dictionary["red"]);
console.log(dictionary["orange"]);

console.log(typeof dictionary);

/**
 * Array타입
 *
 * 값을 리스트로 나열 할 수 있는 타입니다.
 */
const iveArr = ["안유진", "가을", "레이", "장원영"];
for (i = 0; i < 4; i++) {
  console.log(iveArr[i]);
}

/**
 * index
 * 0부터 시작 1씩 올라감
 */
iveArr[0] = "코드팩토리";
console.log(iveArr[0]);
console.log(typeof iveArr);

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시한다.
 *      ex) C, C++
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 '추론'한다.
 *      ex) JS
 */

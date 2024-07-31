/**
 * If and Switch
 */
let number = 5;

if (number % 2 === 0) {
  console.log("number 변수는 짝수입니다.");
} else {
  console.log("number 변수는 홀수입니다.");
}

const day = "saturday";

let kday;

switch (day) {
  case "monday":
    kday = "월요일";
    break;
  case "tuesday":
    kday = "화요일";
  default:
    kday = "주말";
}
console.log(kday);

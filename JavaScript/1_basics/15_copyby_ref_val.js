let original = "안녕하세요";
let clone = original;

const yuJin1 = {
  name: "안유진",
  group: "아이브",
};
const yuJin2 = yuJin1;
const yuJin3 = {
  name: "안유진",
  group: "아이브",
};
console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // false

/**
 * Spread Operator
 */
const yuJin4 = {
  year: 2003,
  ...yuJin3,
};
console.log(yuJin4);
console.log(yuJin4 === yuJin3); // false

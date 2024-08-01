/**
 * Object / 객체
 */
// key: value
let yuJin = {
  name: "안유진",
  group: "아이브",
  dance: function () {
    return `${this.name}이 춤을 춥니다.`;
  },
};

console.log(yuJin);
console.log(yuJin.name);
const key = "name";
console.log(yuJin[key]);
console.log(yuJin.dance());

const nameKey = "name";
const nameValue = "안유진";

const groupKey = "group";
const groupValue = "아이브";

const yuJin2 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
};

console.log(yuJin2);

yuJin2["group2"] = "코드팩토리";
console.log(yuJin2);

delete yuJin2["group2"];
console.log(yuJin2);

/**
 * 객체의 특징
 *
 * 1) const로 선언할 경우 객체 자체를 변경할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경할 수 있다.
 */

/**
 * 모든 키, value값 다 가져오기
 */
console.log(Object.keys(yuJin));
console.log(Object.values(yuJin));

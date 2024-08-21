/**
 * Immutable Object (불변객체)
 * 1. Extensible (key 확장 가능/ 삭제 가능, value값 변경가능)
 * 2. Seal (key 확장 불가/ 삭제 불가, value값 변경가능)
 * 3. Freeze (key 확장 불가/ 삭제 불가, valude값 변경불가)
 */
const yuJin = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yuJin);

/**
 * Extensible (확장)
 */
console.log(Object.isExtensible(yuJin));

yuJin["position"] = "vocal";
console.log(yuJin);

Object.preventExtensions(yuJin);

console.log(Object.isExtensible(yuJin));
yuJin["groupName"] = "IVE";

console.log(yuJin);

delete yuJin["position"];
console.log(yuJin);

/**
 * Seal (밀봉)
 * key 추가/삭제 불가 + attribute 'configuration' 값 false와 같음
 * == 객체의 attribute 재정의 불가능
 */
const yuJin2 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));

// 객체를 seal하면 key 추가/삭제 불가능
yuJin2["groupName"] = "IVE";
console.log(yuJin2);
delete yuJin2["age"];
console.log(yuJin2);

// 값 변경은 가능
Object.defineProperty(yuJin2, "name", {
  value: "김강민",
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "name"));
// writable 값을 true에서 false로 변경하는 것은 가능
// 하지만 다시 false에서 true로 바꾸는 것을 불가능
// configurable값 false와 마찬가지
console.log(Object.getOwnPropertyDescriptor(yuJin2, "name"));
Object.defineProperty(yuJin2, "name", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "name"));

/**
 * Freeze
 */
const yuJin3 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log("Freezed: " + Object.isFrozen(yuJin3));
Object.freeze(yuJin3);
console.log("Freezed: " + Object.isFrozen(yuJin3));

yuJin3["groupName"] = "IVE";
console.log(yuJin3);
delete yuJin3["name"];
console.log(yuJin3);

console.log(Object.getOwnPropertyDescriptor(yuJin3, "name"));
// cannot redefine property
// Object.defineProperty(yuJin3, "name", {
//   value: "김강민",
// });

const yuJin4 = {
  name: "안유진",
  year: 2003,
  wonYoung: {
    name: "장원영",
    year: 2002,
  },
};
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4["wonYoung"]));

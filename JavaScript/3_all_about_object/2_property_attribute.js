/**
 * Property Attribute
 *
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 2) 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                     설정할 때 호출되는 함수로 구성된 프로퍼티
 *                      ex(getter(), setter())
 */

const yuJin = {
  name: "안유진",
  year: 2003,
};
console.log(Object.getOwnPropertyDescriptor(yuJin, "name"));

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는지 여부
 *               false로 설정하면 프로퍼티 값을 수정할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부
 *                 for...in 등 사용가능하면 true 반환
 * 4) configurable - 프러퍼티의 어트리뷰트의 재정의가 가능한지 여부
 *
 *                   단, writable이 true인 경우 값 변경이 가능
 */
console.log(Object.getOwnPropertyDescriptors(yuJin));

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

console.log(yuJin2);
console.log(yuJin2.age);

yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2, "age"));

Object.defineProperty(yuJin2, "height", {
  value: 172,
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

yuJin2.height = 180;
console.log(yuJin2);

Object.defineProperty(yuJin2, "height", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

// writable = false여서 값을 변경하지 못함
yuJin2.height = 172;
console.log(yuJin2);

/**
 * Enumerable
 */
console.log("------------------------");
console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
  console.log(key);
}

// yuJin2의 "name" 키의 enumerable값을 false로 변경하여 열거 불가능으로 변환
Object.defineProperty(yuJin2, "name", {
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "name"));

console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
  console.log(key);
}
console.log(yuJin2);
console.log(yuJin2.name);

/**
 * Configurable
 */
Object.defineProperty(yuJin2, "height", {
  writable: true,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

// 오류
// Object.defineProperty(yuJin2, "height", {
//   enumerable: false,
// });
// 단, writable이 true인 경우 값 변경가능
Object.defineProperty(yuJin2, "height", {
  value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

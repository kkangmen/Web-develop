/**
 * Class Keyword
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayName() {
    return this.name + "입니다.";
  }
}

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
const gauel = new IdolModel("가을", 2002);
console.log(gauel);

console.log(yuJin.name);
console.log(yuJin.year);
console.log(yuJin.sayName());

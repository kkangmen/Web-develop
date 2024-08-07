/**
 * Inheritance
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolModel extends IdolModel {
  dance() {
    return `${this.name}이 춤을 춥니다.`;
  }
}

class MaleIdolModel extends IdolModel {
  sing() {
    return `${this.name}이 노래를 부릅니다.`;
  }
}

const yuJin = new FemaleIdolModel("안유진", 2003);
console.log(yuJin);
console.log(yuJin.dance());

const cf = new IdolModel("코드팩토리", 1992);
console.log(cf);

console.log(cf.name);

console.log(yuJin instanceof IdolModel);

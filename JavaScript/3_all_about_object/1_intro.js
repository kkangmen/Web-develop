const yuJin = {
  name: "안유진",
  year: 2003,
};
console.log(yuJin);

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const yuJin2 = new IdolModel("안유진", 2003);
console.log(yuJin2);

// 생성자 함수
function IdolFunction(name, year) {
  this.name = name;
  this.year = year;
}

const gaEul = new IdolFunction("가을", 2002);
console.log(gaEul);

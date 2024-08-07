class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요 ${this.name}입니다.`;
  }
}

class FemaleIdolModel extends IdolModel {
  // 노래/춤
  part;

  constructor(name, year, part) {
    // 부모 클래스를 의미
    super(name, year); // == Idolmodel()
    this.part = part;
  }

  sayHello() {
    // return `안녕하세요 ${this.name}입니다. ${this.part}을 맡고 있습니다.`;
    return `${super.sayHello()} ${this.part}을 맡고 있습니다.`;
  }
}

const wonYoung = new FemaleIdolModel("장원영", 2002, "보컬");
console.log(wonYoung);
console.log(wonYoung.sayHello());

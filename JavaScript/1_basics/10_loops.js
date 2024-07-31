/**
 * Loops
 *
 * 1) for
 * 2) while
 */
let star = "";
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);

/**
 * for ... in
 */
const yuJin = {
  name: "안유진",
  year: 2003,
  group: "IVE",
};
for (let key in yuJin) {
  //console.log(yuJin);
  console.log(`${key}:${yuJin[key]}`);
}

const iveMem = ["안유진", "가을"];
for (let key in iveMem) {
  //console.log(key);
  console.log(`${key}:${iveMem[key]}`);
}

for (let val of iveMem) {
  console.log(val);
}



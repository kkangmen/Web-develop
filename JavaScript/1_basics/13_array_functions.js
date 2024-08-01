/**
 * Array Functions
 */
let region = ["서울", "부산", "대구", "대전"];
console.log(region);

console.log(region.push("인천"));
// region.push("인천");
console.log(region);

console.log(region.pop());
console.log(region);

// shift = 인덱스 1번째 값 pop
console.log(region.shift());
console.log(region);

// unshift() = 인덱스 1번째 값 push
console.log(region.unshift("서울"));
console.log(region);

// slice(a, b) = a인덱스 부터 b-1인덱스까지 삭제
region.splice(0, 3);
console.log(region);
console.log("---------------------");
iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

// concat() = 새로운 인덱스를 추가한 배열을 새로 만들어줌
iveMembers1 = iveMembers.concat("코드팩토리");
console.log(iveMembers);
console.log(iveMembers1);

// slice() = 기본 배열을 잘라 새로운 배열 생성
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

// spread operator
let iveMembers2 = [...iveMembers];
console.log(iveMembers2);

// join()
console.log(iveMembers.join());
console.log(iveMembers.join("/"));
console.log(iveMembers.join(", "));

// sort()
// 오른차순
iveMembers.sort();
console.log(iveMembers);
console.log(iveMembers.reverse());

let numbers = [1, 9, 4, 33, 5];
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});

console.log(numbers);

// map()
console.log(
  iveMembers.map((x) => {
    return x;
  })
);
console.log(
  iveMembers.map((x) => {
    return `아이브: ${x}`;
  })
);
console.log(
  iveMembers.map((x) => {
    if (x === "안유진") {
      return `아이브: ${x}`;
    } else {
      return x;
    }
  })
);

// filter() == 값이 참이면 반환
numbers = [1, 2, 3, 4, 5];
console.log(numbers.filter((x) => x % 2 === 0));

// find()
console.log(numbers.find((x) => x === 5));

// findIndex()
console.log(numbers.findIndex((x) => x === 1));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));

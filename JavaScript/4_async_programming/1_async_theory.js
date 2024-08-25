/**
 * Async theory
 */

// 동기
// function longWork() {
//   const now = new Date();

//   /**
//    * millseconds since epoch
//    * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을
//    * 밀리초로 반환한다.
//    */
//   const milliseconds = now.getTime();
//   const afterTwoSeconds = milliseconds + 2 * 1000;

//   while (new Date().getTime() < afterTwoSeconds) {}
//   console.log(`완료`);
// }

// console.log(`Hello`);
// longWork();
// console.log(`World`);

// 비동기
// : 싱글스레드에 바로 실행가능한 task는 call stack에 등록
//   시간이 걸리는 task는 event queue에 등록
// call stack안에 있는 task 실행
// call stack이 비어있다면 그제야 event queue의 task를 실행
function longWork() {
  setTimeout(() => {
    console.log(`완료`);
  }, 2000);
}

console.log(`Hello`);
longWork();
console.log(`World`);

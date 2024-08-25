/**
 * Call back
 */
// function waitAndRun() {
//   setTimeout(() => {
//     console.log(`끝`);
//   }, 2000);
// }

// waitAndRun();

// function waitAndRun2() {
//   setTimeout(() => {
//     console.log(`1번 콜백 끝`);

//     setTimeout(() => {
//       console.log(`2번 콜백 끝`);

//       setTimeout(() => {
//         console.log(`3번 콜백 끝`);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }

// console.log(waitAndRun2());

/**
 * Promise
 */
const timeOutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`완료`);
  }, 2000);
});

timeOutPromise.then((res) => {
  console.log(res);
});

timeOutPromise.then((res) => {
  console.log(`---then---`);
  console.log(res);
});

const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`완료`);
    }, seconds * 1000);
  });

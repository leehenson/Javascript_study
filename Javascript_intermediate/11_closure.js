/**
 * 클로저
 */

function makeCounter() {
  let num = 0; // 은닉화

  // 내부 함수에서 외부 함수 변수 num에 접근
  return function () {
    return num++;
  };
}

let counter = makeCounter();
// 생성된 이후에 counter의 출력값은 수정할 수 없다. (은닉화)
// 오직 증가 및 반환만을 할 수 있다.

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

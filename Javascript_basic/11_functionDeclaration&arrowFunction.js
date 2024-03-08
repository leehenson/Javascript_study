/**
 * 함수 표현식
 */

showError1(); // 함수 표현식 선언보다 호출을 먼저 할 경우에 에러가 발생

// 함수 표현식 함수 선언
let showError1 = function () {
  console.log('error');
};

/**
 * 함수 선언문
 */

showError2(); // 함수 선언문 선언보다 호출을 먼저 할 경우에도 잘 실행된다.

// 함수 선언문 함수 선언
function showError2() {
  console.log('error');
}

/**
 * 화살표 함수
 */

// 화살표 함수로 변경1

function showError3() {
  console.log('error');
}

let showError3 = () => console.log('error');

showError3(); // error 출력

// 화살표 함수로 변경2

// const sayHello = function (name) {
//   const msg = `Hello, ${name}`;
//   console.log(msg);
// };

const sayHello = (name) => console.log(`Hello, ${name}`);

sayHello('Henson');

// 화살표 함수로 변경3

// const add = function(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }

const add = (num1, num2) => num1 + num2;

add(1, 2);

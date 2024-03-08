/**
 * 함수
 */

/**
 * 매개변수가 없는 함수 작성
 */

// showError라는 함수를 생성
function showError() {
  // 함수 실행시 실행할 코드 작성
  // alert('에러가 발생했습니다. 다시 시도해주세요.');
  alert('에러가 발생했습니다. 새로고침 해주세요..'); // 코드 수정
}

showError(); // 함수 호출

/**
 * 매개변수가 있는 함수 작성
 */

// name이란 변수명을 가진 매개변수
function sayHello(name) {
  const msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello('Henson'); // 'Henson'이란 인자를 매개변수에 할당해주면서 함수 호출
sayHello('Tom');
sayHello('Jane'); // 매개변수만 바꾸어 호출하여 코드의 중복을 줄임

/**
 * 매개변수의 인자가 없이 호출할 경우
 */

function sayHello2(name) {
  let msg = `Hello`; // let으로 변경하여 매개변수가 없을 경우를 대비
  if (name) {
    msg += `, ${name}`; // name이 있을 경우에 실행할 코드
  }
  console.log(msg);
}

sayHello2();

// 지역 변수릏 외부에서 호출
// console.log(msg); // 에러발생

let msg = `Hello`; // 전역변수로 선언
console.log('함수 호출 전');
console.log(msg);

function sayHello3(name) {
  if (name) {
    msg += `, ${name}`;
  }
  console.log(msg); // Hello, Henson 출력
  console.log('함수 내부');
}

sayHello3('Henson'); // 함수 호출
console.log('함수 호출 후');
console.log(msg); // Hello, Henson 출력

/**
 * 전역변수와 지역변수
 */

let msg2 = 'welcome'; // 전역변수
console.log(msg2); // welcome 출력

function sayHello(name) {
  let msg2 = 'Hello'; // 지역변수
  console.log(msg2 + ' ' + name); // Hello Henson 출력
}

sayHello3('Henson');
console.log(msg2); // welcome 출력

// ---------------------------------------------------------

let name = 'Henson'; // 전역변수 선언

function sayHello4(name) {
  console.log(name);
}

sayHello4(); // undefined 출력
sayHello4('Jane'); // Jane 출력

/**
 * OR
 */

function sayHello4(name) {
  let newName = name || 'friend'; // name이 undefined일 경우에 'friend' 할당
  let msg = `Hello, ${newName}`;
  console.log(msg);
}

sayHello4(); // Hello, frined 출력
sayHello4('Jane'); // Hello, Jane 출력

/**
 * default value
 */

function sayHello5(name = 'friend') {
  // 매개변수 기본값 설정
  let msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello5(); // Hello, frined 출력
sayHello5('Jane'); // Hello, Jane 출력

/**
 * return 으로 값 반환
 */

function add(num1, num2) {
  return num1 + num2; // return 뒤에 값을 반환
}

const result = add(2, 3);
console.log(result); // 5 출력

function showAlert() {
  alert('에러가 발생했습니다.');
}

const result2 = showAlert();
console.log(result); // undefined 출력

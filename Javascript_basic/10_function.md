# 힘수

자주 사용하거나 여러 곳에서 사용하는 같거나 비슷한 동작을 하나로 만들어 재활용할 수 있게 한 것이 함수이다.

이로 인해 중복되는 코드도 줄어들고, 유지보수도 쉬워지게 된다.

브라우저가 가지고 있는 `console.log()`, `alert()`, `confirm()`과 내장 함수도 함수이다.

<br />

## 함수 작성 방법

```javascript
function sayHello(name) {
  console.log(`Hello, ${name}`);
}
```

`function`은 함수를 의미하고, `sayHello`는 함수명이며, 자유롭게 작명할 수 있다.

`()` 안에 변수는 매개변수라고 하며, 매개변수는 없을 수도 있고, 여러 개일 수도 있는데, 만약 여러 개일 경우에는 `,`로 구분할 수 있다.

`{}`내부에는 함수의 실행코드가 작성된다.

<br />

## 함수 호출

```javascript
sayHello('Henson');
```

생성한 함수는 함수명 뒤에 `()`를 붙여 호출할 수 있으며, 매개변수가 필요할 경우에는 `()`안에 인자를 넣어주면 된다.

<br />

## 매개변수가 없는 함수

```javascript
// showError라는 함수를 생성
function showError() {
  // 함수 실행시 실행할 코드 작성
  alert('에러가 발생했습니다. 다시 시도해주세요.');
}

showError(); // 함수 호출
```

위와 같이 에러 메세지를 띄워주는 기능을 함수로 만들어 놓으면, 에러 메세지가 필요할 때마다, 함수를 호출하여, 더 간단하게 사용할 수 있다.

```javascript
function showError() {
  alert('에러가 발생했습니다. 새로고침 해주세요.'); // 코드 수정
}

showError(); // 함수 호출
```

유지보수가 필요할 경우에 함수만 수정해주면 함수를 호출하여 사용중인 모든 부분이 다 수정되기 떄문에 유지보수가 쉬워진다.

<br />

## 매개변수가 있는 함수

```javascript
// name이란 변수명을 가진 매개변수
function sayHello(name) {
  const msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello('Henson'); // 'Henson'이란 인자를 매개변수에 할당해주면서 함수 호출
sayHello('Tom');
sayHello('Jane');
```

함수를 만들어 놓았기 때문에 매개변수만 바꾸어 호출하고, 코드의 중복을 줄인다.

<br />

## 매개변수가 있는 함수를 인자 없이 호출할 경우

```javascript
function sayHello2(name) {
  let msg = `Hello`; // let으로 변경하여 매개변수가 없을 경우를 대비
  if (name) {
    msg += `, ${name}`; // name이 있을 경우에 실행할 코드
  }
  console.log(msg);
}

sayHello2();
```

매개변수가 있는 함수를 인자없이 호출할 경우에, 매개변수는 `undefined`가 되고, 조건문에서 `undefined`는 `false`이기 때문에, `if`문의 코드는 실행되지 않는다.

```javascript
console.log(msg); // 에러 발생
```

`msg`와 같이 함수 안에서 선언된 변수를 **지역변수**라고 하며, 이 변수는 함수 내부에서만 사용할 수 있고, 함수 외부에서는 사용할 수 없다.

```javascript
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
```

`msg` 변수를 함수 외부에서도 사용하고 싶다면, `msg`를 함수 외부에서 선언하면 된다.

함수 외부에서 변수를로 선언하여 함수 외부에서도 변수를 사용할 수 있지만, 함수로 인해 변수의 값이 변하게 된다. 이러한 변수를 **전역변수**라고 한다.

<br />

## 전역변수와 지역변수

```javascript
let msg2 = 'welcome'; // 전역변수
console.log(msg2); // welcome 출력

function sayHello(name) {
  let msg2 = 'Hello'; // 지역변수
  console.log(msg2 + ' ' + name); // Hello Henson 출력
}

sayHello3('Henson');
console.log(msg2); // welcome 출력
```

전역변수와 지역변수는 동일한 이름으로 선언을 할 수 있고, 서로 간섭을 받지 않는다.

```javascript
let name = 'Henson';

function sayHello4(name) {
  console.log(name);
}

sayHello4(); // undefined 출력
sayHello4('Jane'); // Jane 출력
```

매개변수로 받은 값은 복사된 후에 함수의 **지역변수**가 된다.

전역변수가 많아지면 관리하기가 어렵기 때문에 전체 서비스에서 공통으로 바라봐야되는 변수를 제외하고는 지역변수를 사용하는 습관이 좋다.

### OR를 사용한 매개변수 기본값 설정

```javascript
function sayHello4(name) {
  let newName = name || 'friend';
  let msg = `Hello, ${newName}`;
  console.log(msg);
}

sayHello4(); // Hello, frined 출력
sayHello4('Jane'); // Hello, Jane 출력
```

함수를 인자없이 호출할 떄 `name`이 `undefined`되고 `||`를 통해 `'friend'`이 `newName`에 할당되어 기본값 설정이 된다.

### default를 사용한 매개변수 기본값 설정

```javascript
function sayHello5(name = 'friend') {
  // 매개변수 기본값 설정
  let msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello5(); // Hello, frined 출력
sayHello5('Jane'); // Hello, Jane 출력
```

함수를 선언할 때, `function sayHello5(name = 'friend')`와 같이 매개변수에 기본값을 설정해주어, 인자없이 호출된 함수에 한하여, 기본값이 할당된다.

<br />

## return으로 값 반환

```javascript
function add(num1, num2) {
  return num1 + num2; // return 뒤에 값을 반환
}

const result = add(2, 3);
console.log(result); // 5 출력
```

`return`을 사용하여, 함수이 호출된 곳에 원하는 값을 반환할 수 있다.

```javascript
function showAlert() {
  alert('에러가 발생했습니다.');
}

const result2 = showAlert();
console.log(result); // undefined 출력
```

모든 함수는 어떠한 값을 반환하며, `return`이 없거나, `return`할 값을 따로 지정하지 않은 함수는 `undefined`를 반환한다.

참고로, 함수 내에서 `return`을 만나면 즉시, `return`의 오른쪽 값을 반환하고 함수를 종료한다. 따라서, 함수를 종료하는 목적으로도 사용된다.

<br />

## 함수 관련 TIP

1. 함수는 한번에 한 작업만 하는 것이 좋다.

- 하나의 함수가 여러 작업을 진행할 경우에 함수를 더 잘게 나누어 사용하는 것이 좋다.

2. 읽기 쉽고 어떤 동작인지 알 수 있게 작명하는 것이 좋다.

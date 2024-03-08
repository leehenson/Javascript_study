# 함수 표현식, 화살표 함수

<br />

## 함수 선언문과 함수 표현식

```javascript
function sayHello() {
  console.log('Hello');
}

sayHello();
```

위와 같이 형태로 함수를 선언하는 것을 **함수 선언문**이라고 한다.

```javascript
let sayHello = function () {
  console.log('Hello');
};

sayHello();
```

위와 같이 이름이 없는 함수인 **익명 함수**로 함수를 구현하고, 변수를 선언하고 구현한 함수를 할당해주는 것을 **함수 표현식**이라고 한다.

**함수 선언문**과 **함수 표현식**의 사용 방식은 동일하고, 실행하는 방식도, 동작하는 방식도 동일하다.

오직 다른 점은 호출할 수 있는 타이밍이다.

```javascript
sayHello();

function sayHello() {
  console.log('Hello');
}
```

**함수 선언문**은 어디서나 호출이 가능하며, 위와 같이 함수 호출을 선언보다 먼저하여도 호출이 된다.

Javascript는 위에서 아래로 차례대로 한 줄씩 읽으면서 실행하며, 이렇게 순차적으로 실행되고, 즉시 결과를 반환하는 언어를 **인터프리터 언어**라고 한다.

이런 인터프리터 언어 특성상 원래대로라면 함수 호출이 선언보다 먼저될 경우에 에러가 발생해야하는데, Javascript는 코드 실행 전 코드 초기화 단계에서 모든 함수 선언문을 코드 맨 위로 끌어올린다. 이러한 동작을 **호이스팅(hoisting)** 이라고 한다.

하지만 함수 표현식 같은 경우에는 호이스팅이 동작하지 않기 때문에, 꼭 함수 선언 후에 호출을 해야 한다.

이 외에 차이점이 없기 떄문에 좀 더 사용이 자유로운 함수 선언문을 사용하는 것이 좀 더 편하다.

<br />

## 화살표 함수(arrow function)

화살표 함수는 함수를 보다 더 간결하게 작성하게 해준다.

```javascript
let add = function (num1, num2) {
  return num1 + num2;
};
```

```javascript
let add = (num1, num2) => {
  return num1 + num2;
};
```

`function` 키워드를 제거하고 `()`뒤에 `=>` 화살표를 넣어주면 된다.

```javascript
let add = (num1, num2) => (
  num1 + num2;
)
```

코드 블럭의 코드가 한 줄이고, `return`문이 있을 경우에, `{}`를 `()`로 바꾸고, `return`문을 생략할 수 있다.

```javascript
let add = (num1, num2) => num1 + num2;
```

`return`문이 한 줄이라면 `()`로 생략할 수 있다.

```javascript
let sayHello = (name) => `Hello, %{name}`;
```

```javascript
let sayHello = (name) => `Hello, %{name}`;
```

매개변수가 딱 하나라면, `()`도 생략할 수 있다.

```javascript
let showError = () => {
  alert('error');
};
```

매개변수가 없는 경우에는 `()`를 생략할 수 없다.

```javascript
let add = function (num1, num2) {
  const result = num1 + num2;
  return reuslt;
};
```

```javascript
let add = (num1, num2) => {
  const result = num1 + num2;
  return reuslt;
};
```

`return`문이 있다고 해도, 코드 블럭의 코드가 두 줄 이상이라면 `()`를 사용할 수 없다.

<br />

## 예제 코드

### 함수 표현식

```javascript
showError1(); // 함수 표현식 선언보다 호출을 먼저 할 경우에 에러가 발생

// 함수 표현식 함수 선언
let showError1 = function () {
  console.log('error');
};
```

### 함수 선언문

```javascript
showError2(); // 함수 선언문 선언보다 호출을 먼저 할 경우에도 잘 실행된다.

// 함수 선언문 함수 선언
function showError2() {
  console.log('error');
}
```

### 화살표 함수

```javascript
function showError3() {
  console.log('error');
}
```

```javascript
let showError3 = () => console.log('error');
```

<br />

```javascript
const sayHello = function (name) {
  const msg = `Hello, ${name}`;
  console.log(msg);
};
```

```javascript
const sayHello = (name) => console.log(`Hello, ${name}`);
```

<br />

```javascript
const add = function (num1, num2) {
  const result = num1 + num2;
  return result;
};
```

```javascript
const add = (num1, num2) => num1 + num2;
```

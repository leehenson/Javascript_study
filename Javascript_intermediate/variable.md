# 변수

`let`과 `const`는 ES6부터 생긴 키워드로 변수를 선언할 때 사용한다.

ES6 이전에 변수를 선언할 떄에는 `var`를 사용했다.

`var`와 `let`은 크게 다르지 않고, 대부분의 경우에는 이 두 개를 바꿔 사용해도 크게 문제되지 않는다.

```javascript
var name = 'Henson';
console.log(name); // Henson

var name = 'Jane';
console.log(name); // Jane
```

`var`와 `let`의 차이점을 보면, `var`는 한번 선언된 변수를 다시 선언할 수 있다.

```javascript
let name = 'Henson';
console.log(name); // Henson

let name = 'Jane'; // error 발생
console.log(name);
```

같은 상황에서 `let`은 에러가 발생한다.

```javascript
console.log(name); // undefined

var name = 'Henson';
```

또한 `var`는 선언하기 전에 사용할 수 있다. 위와 같이 선언하기 전에 사용했는데 에러가 발생하지 않는다.

```javascript
var name;

console.log(name); // undefined

name = 'Henson'; // 할당
```

`var`로 선언한 모든 변수는 함수와 마찬가지로 코드의 최상단으로 끌어올린 것처럼 동작하는 **hoisting(호이스팅)** 이 되기 때문이다.

여기서 `name`은 `undefind`로 출력이 되는데, `var`로 선언된 변수의 선언만 호이스팅이 되고, 할당은 호이스팅이 되지 않기 때문이다.

```javascript
console.log(name); // ReferenceError 발생

let name = 'Henson';
```

호이스팅은 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동하는 것을 말한다. 즉, `let`과 `const`도 호이스팅이 된다.

### 호이스팅

하지만, 위의 코드를 보면 `let`으로 선언한 변수는 에러가 발생한다. 그 이유는 `TDZ(Temporal Dead Zone)`라는 것 때문에 그렇다.

`TDZ`영역에 있는 변수는 사용할 수 없는데, `let`과 `const`는 `TDZ`의 영향을 받기 때문에, 할당을 받기 전에는 사용할 수 없다.

이로 인해, 코드를 예측 가능하게 하고, 잠재적인 버그를 줄일 수 있다.

```javascript
let age = 30;

function showAge() {
  console.log(age);

  // let age = 30; // 추가할 경우에 에러가 발생함.
}

showAge();
```

스코프 단위로 변수가 호이스팅이 되기 때문에, `let age = 30`을 함수 내부에서 선언할 경우에 `ReferenceError`가 발생한다.

<br />

## 변수의 생성 과정

변수는 3단계의 생성 과정을 거친다.

1. 선언 단계
2. 초기화 단계
3. 할당 단계

`var`는 선언 및 초기화 단계가 동시에 된다. 따라서, 할당 전에 호출을 하면 에러가 나지 않고 `undefined`가 출력된다.

`let`은 선언 단계와 초기화 단게가 분리되어 진행된다. 따라서, 호이스팅 되면서 선언 단계가 이루어지지만, 초기화 단계는 실제 코드에 도달할 때 되기 때문에 `ReferenceError`가 발생하게 된다.

`const`의 경우에는 선언과 초기화, 할당 단계가 동시에 되어야 한다.

`let`과 `var`는 값을 바꿀 수 있기 때문에 선언만 하고 나중에 할당하는 것을 허용한다.

### const

```javascript
let name;
name = 'Henson';

var age;
age = 30;

const gender; // SyntaxError 발생
gender = 'male';
```

위 코드에서 `name`과 `age`는 괜찮지만, `const`로 선언한 `gender`부분에서 선언하면서 바로 할당을 해주지 않았기 때문에, `SyntaxError`가 발생한다.

<br />

## 스코프

`var`는 함수스코프(function-scoped)이고, `let`과 `const`는 블록 스코프(black-scoped)이다.

### 블록 스코프

블록 스코프는 모든 블록 내에서 선언된 변수는 해당 코드 블록 내에서만 유효하며, 외부에서는 접근을 할 수 없다는 것을 의미한다.

즉, 코드 블록 내에서 선언한 변수는 해당 코드 블록의 지역 변수가 되는 것이다.

코드 블록에는 함수, `if`문, `for`문, `while`문, `try/catch`문 등이 있다.

### 함수 스코프

함수 스코프는 함수 내에서 선언된 변수만 지역 변수가 되는 것을 의미한다.

```javascript
const age = 30;

if (age > 19) {
  var txt = '성인';
}

console.log(txt); // '성인'
```

예를 들어, `if`문 내에서 `var`로 선언한 `txt`는 `if`문 밖에서도 사용이 가능하다.

```javascript
const age = 30;

if (age > 19) {
  // if문 내에서 var로 선언
  let txt = '성인';
}

console.log(txt); // 에러 발생
```

하지만, `let`과 `const`는 블록 스코프이기 때문에, `if`문 밖에서 사용할 수 없다.

```javascript
function add(num1, num2) {
  // 함수 내에서 var로 선언
  var result = num1 + num2;
}

add(2, 3);

console.log(result); // 에러 발생
```

`var`는 함수 스코프이기에 함수 내부에서 선언된 경우에는 함수 밖에서 사용할 수 없다.

<br />

## 정리

`let`과 `const`를 사용하면 예측이 가능한 결과를 얻을 수 있고, 버그를 줄일 수 있기 때문에 `var`보단 `let`과 `const`의 사용을 권한다.

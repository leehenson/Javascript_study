# 클로저

## 어휘적 환경(Lexical Environment)

Javascript는 어휘적 환경을 갖는다.

```javascript
/**
 * Lexical 환경
 */

let one;
one = 1;

function addOne(num) {
  console.log(one + num);
}

addOne(5);
```

코드가 실행되면, 스크립트 내에서 선언한 변수(함수)들이 Lexical 환경에 올라간다.

`let`로 선언한 변수도 Lexical 환경에 올라가긴 하지만, 초기화가 안된다. 따라서 사용을 할 수 없다.

그에 비해 함수 선언문은 `let`가 달리 바로 초기화가 된다. 따라서 사용이 가능하다.

하지만, 함수를 변수에 할당하는 함수 표현식은 함수 선언문과 같이 동작하지 않기 때문에, 사용이 불가능하다.

이제 첫 번째 코드인 `let one;`을 만나면, 초기값인 `undefined`가 할당된다.

두 번째 코드인 `one = 1;`를 만나면 `one`에 `1`이 할당된다.

`addOne()`함수는 코드가 실행되면서 이미 선언 및 초기화가 되어있다.

다음 코드인 `addOne(5)` 함수가 실행되고, 새로운 Lexical 환경이 생성된다.

새롭게 생성된 Lexical 환경에는 함수가 넘겨 받은 매개변수와 지역변수들이 저장된다.

함수가 호출되는 동안 함수는 함수에서 만들어진 내부 Lexical 환경과 외부에서 받은 전역 Lexical 환경 두 개를 가진다.

내부 Lexical 환경은 외부 Lexical 환경에 대한 참조를 갖는다.

> 위 코드에서는 `addOne(5)`의 외부 Lexical 환경이 전역 Lexical 환경이다.

코드에서 변수를 찾을 때, 내부에서 찾고, 없으면 외부, 그래도 없으면 전역 Lexical 환경까지 범위를 넓히면서 찾는다.

```javascript
function addOne(num) {
  console.log(one + num);
}
```

위 함수가 실행될 때, `one`과 `num` 변수를 우선 내부 Lexical 환경에서 찾는다.

내부 Lexical 환경에서 `num`은 찾았지만, `one`을 찾을 수 없기 때문에, 외부 Lexical 환경인 전역 Lexical 환경에서 `one`을 찾는다.

<hr />

```javascript
// add 함수를 만들어주는 makeAdder 함수
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add3 = makeAdder(3);
console.log(add3(2));
```

최초 실행 시, `makeAdder` 함수와 `add3` 변수는 전역 Lexical 환경에 들어간다.

변수 `add3`은 이 때, 초기화가 안된 상태라 사용할 수 없다.

`const add3 = makeAdder(3);` 라인이 실행될 떄, `makeAdder()`가 실행되면서 `makeAdder` Lexical 환경이 생성된다.

생성된 `makeAdder` Lexical 환경에 전달받은 `x`의 값이 들어간다.

함수의 Lexical 환경에는 넘겨받은 매개변수와 지역변수들이 저장된다.

```javascript
function(y) {
  return x + y;
}
```

`add3`에는 위 함수가 할당된다.

미자막 `console.log(add3(2));`라인에서 `add3`에 할당된 함수가 실행되는데, 이 때 이 함수의 Lexical 환경. 즉, 익명함수 Lexical 환경이 생성된다.

이 때 `y`의 값이 익명함수 Lexical 환경에 들어간다.

따라서 익명함수 Lexical 환경은 `makeAdder` Lexical 환경을 참조하고, `makeAdder` Lexical 환경은 전역 Lexical 환경을 참조한다.

익명함수 Lexical 환경에서 `y`를 찾고, 익명함수 Lexical 환경에 `x`가 없으니, 참조하고 있는 `makeAdder` Lexical 환경에서 `x`를 찾는다.

```javascript
function(y) {
  return x + y;
}
```

정리하면 위 함수는 `y`를 가지고 있고, 상위 함수인 `makeAdder`의 `x`에 접근이 가능하다.

`add3` 함수가 생성된 이후에도 상위함수인 `makeAdder`의 `x`에 접근이 가능하다.

<br />

## 클로저

위와 같은 동작을 **Closure**라고 한다.

**Closure**은 함수와 그 함수의 렉시컬 환경의 조합이다.

함수가 생성될 당시의 외부 변수를 기억하여 외부함수가 다른 곳에서 사용이 된 이후에도 계속 기억한 값으로 외부 변수에 접근이 가능하다.

```javascript
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add3 = makeAdder(3);
console.log(add3(2)); // 5

const add10 = makeAdder(10);
console.log(add10(5)); // 15
console.log(add3(1)); // 4
```

위 코드에서 `const add10 = makeAdder(10);`을 호출하여 사용해도 `add3(1)`의 값은 변하지 않는다.

`add3`과 `add10`은 서로 다른 환경을 가지고 있다는 것을 알 수 있다.

<br />

## 예제 코드

```javascript
function makeCounter() {
  let num = 0; // 은닉화

  // 내부 함수에서 외부 함수 변수 num에 접근
  return function () {
    return num++;
  };
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
```

`counter`를 생성한 이후에 `counter`의 출력값은 수정할 수 없다. 즉, 은닉화가 되었다.

오직 호출로 인한 증가 및 반환만 할 수 있다.

# Generator

**Generator**는 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능이다.

```javascript
function* fn() {
  yield 1;
  yield 2;
  yield 3;
  return 'finish';
}

const a = fn();
```

제너레이터는 위의 코드처럼 `function` 옆에 `*`를 붙여서 만들고, 내부에 `yield` 키워드를 사용한다.

`yield`에서 함수의 실행을 멈출 수 있다.

<br />

## next()

```javascript
function* fn() {
  console.log(1);
  yield 1;
  console.log(2);
  yield 2;
  console.log(3);
  console.log(4);
  yield 3;
  return 'finish';
}

const a = fn();

console.log(a.next());
/** result
 * 1
 * {value: 1, done: false}
 */

console.log(a.next());
/** result
 * 2
 * {value: 2, done: false}
 */

console.log(a.next());
/**
 * 3
 * 4
 * {value: 3, done: false}
 */

console.log(a.next());
/**
 * {value: 'finish', done: true}
 */

console.log(a.next());
/**
 * {value: undefined, done: true}
 */
```

`const a = fn();`처럼 제너레이터 함수를 실행하면, `Generator`객체만 반환되고, 함수 본문은 실행되지 않는다.

`Generator` 객체에는 `next` 메소드가 있는데, `a.next()`를 호출하면 가장 가까운 `yield`문을 만날 때까지 실행되고, 데이터 객체를 반환한다.

반환된 데이터 객체는 `value`와 `done` 프로퍼티를 가지는데, `value`는 `yield` 오른쪽에 있는 값이다. 만약 값을 생략하면 `value`는 `undefined`이다.

`done`은 함수 코드가 끝났는지 나타내며, 함수가 모두 끝났으면 `true` 아니면 `false`이다.

함수가 모두 끝나게 되면, `value`에는 `return`문 옆의 값이 되고, `done`은 `true`가 된다.

여기서 한 번 더 `a.next()`를 호출하면 `value`는 더 이상 표현할 것이 없어, `undefined`가 되고, `done`은 계속 `true`이다.

<br />

## return()

```javascript
function* fn() {
  console.log(1);
  yield 1;
  console.log(2);
  yield 2;
  console.log(3);
  console.log(4);
  yield 3;
  return 'finish';
}

const a = fn();

console.log(a.next());
/** result
 * 1
 * {value: 1, done: false}
 */

console.log(a.next());
/** result
 * 2
 * {value: 2, done: false}
 */

console.log(a.return('END'));
/** result
 * {value: 'END', done: true}
 */

console.log(a.next());
/** result
 * {value: undefined, done: true}
 */
```

`return()`으로 제너레이터를 곧바로 끝낼 수 있다.

`return()`메소드로 제너레이터를 끝낼 때, `return()`의 인자로 주었던 값이 `value` 프로퍼티에 들어가고, `done` 프로퍼티는 곧바로 `true`가 된다.

이후에 `next()`를 실행하면 `value` 프로퍼티는 `undefined`, `done` 프로퍼티는 `true`인 것을 확인할 수 있고, 제너레이터 함수가 끝났음을 알 수 있다.

<br />

## throw()

```javascript
function* fn() {
  try {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    console.log(4);
    yield 3;
    return 'finish';
  } catch (e) {
    console.log(e);
  }
}

const c = fn();

console.log(c.next());
/** result
 * 1
 * {value: 1, done: false}
 */

console.log(c.next());
/** result
 * 2
 * {value: 2, done: false}
 */

console.log(c.throw(new Error('err')));
/** result
 * Error: err
    at <anonymous>:30:21
 * {value: undefined, done: true}
 */

console.log(c.next());
/** result
 * {value: undefined, done: true}
 */
```

`throw()` 메소드를 사용하기 위해서는 예외 처리를 위해서 제너레이터 함수를 try-catch문으로 감싸주고 실행해야 한다.

`c.throw(new Error('err')`로 `throw()`메소드를 실행하면, `catch`절에 있는 코드가 실행되고, `value` 프로퍼티는 `undefined`, `done` 프로퍼티는 `true`가 된다.

<br />

## iterable

`Generator`는 **iterable**이고, iterable이란, 반복이 가능하단 의미이다.

iterable에는 몇가지 조건이 있다.

1. `Symbol.iterator` 메소드가 구현되어 있어야 한다.
2. `Symbol.iterator` 메소드는 `iterator`를 반환해야 한다.

<br />

## iterator

`iterator`에도 몇가지 조건이 있다.

1. `next` 메소드를 가지고 있어야 한다.
2. `next` 메소드는 `value`와 `done` 프로퍼티를 가진 객체를 반환한다.
3. 작업이 끝나면 `done`은 `true`가 된다.

즉, `Generator`는 `iterator`이면서, `iterable`이다.

<br />

## 배열

```javascript
const arr = [1, 2, 3, 4, 5];

const it = arr[Symbol.iterator]();

console.log(it.next()); // {value: 1, done: false}
console.log(it.next()); // {value: 2, done: false}
console.log(it.next()); // {value: 3, done: false}
console.log(it.next()); // {value: 4, done: false}
console.log(it.next()); // {value: 5, done: false}
console.log(it.next()); // {value: undefined, done: true}

for (let num of arr) {
  console.log(num);
}
/**
 * 1
 * 2
 * 3
 * 4
 * 5
 */
```

배열은 `Symbol.iterator()` 메소드를 가지고 있고, 해당 메소드가 반환하는 값이 `iterator`이기 때문에 `iterable`하다고 할 수 있다.

즉, 배열은 반복 가능한 객체이다.

`iterable`은 `for ... of`로 순회할 수 있다.

<br />

## iterable 객체

```javascript
function* fn2() {
  yield 4;
  yield 5;
  yield 6;
}

const d = fn2();

d[Symbol.iterator]() === d; // true

for (let num of d) {
  console.log(num);
}
/**
 * 4
 * 5
 * 6
 */
```

`Generator`에서 `Symbol.iterator`를 실행한 값이 자기 자신이다.

즉, `Generator`는 `iterable` 객체이다.

`for ... of`가 실행되면, `Symbol.iterator`를 호출하고, 만약에 없으면 에러가 발생한다.

반환된 `iterator`에 `next()`를 호출하면서 `done`이 `true`가 될 떄까지 반복한다.

### 문자열

```javascript
const str = 'hello';

str[Symbol.iterator]; // [Symbol.iterator]() { [native code] }

const xx = str[Symbol.iterator]();

console.log(xx.next()); // {value: 'h', done: false}
console.log(xx.next()); // {value: 'e', done: false}
console.log(xx.next()); // {value: 'l', done: false}
console.log(xx.next()); // {value: 'l', done: false}
console.log(xx.next()); // {value: 'o', done: false}
console.log(xx.next()); // {value: undefined, done: true}

for (let s of xx) {
  console.log(s);
}
/**
 * h
 * e
 * l
 * l
 * o
 */
```

문자열도 `iterable`인 것을 확인할 수 있다.

<br />

## next()에 인수 전달

```javascript
function* fn3() {
  const num1 = yield '첫번째 숫자를 입력해주세요.';
  console.log(num1);

  const num2 = yield '두번째 숫자를 입력해주세요.';
  console.log(num2);

  return num1 + num2;
}

const e = fn3();

console.log(e.next());
/**
 * {value: '첫번째 숫자를 입력해주세요.', done: false}
 * 2
 */

console.log(e.next(2));
/**
 * {value: '두번째 숫자를 입력해주세요.', done: false}
 * 4
 */

console.log(e.next(4));
/**
 * {value: 6, done: true}
 */
```

`next()`에 넣어준 인수가 `num1`와 `num2`에 저장이 된다.

`value`는 두 숫자를 더한 값이 되고, `done`은 `true`가 된다.

`Generator`는 외부로부터 값을 입력 받을 수도 있다.

<br />

## 값을 미리 만들어 두지 않음

```javascript
function* fn4() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const f = fn4();

console.log(f.next()); // {value: 0, done: false}
console.log(f.next()); // {value: 1, done: false}
console.log(f.next()); // {value: 2, done: false}
console.log(f.next()); // {value: 3, done: false}
console.log(f.next()); // {value: 4, done: false}
console.log(f.next()); // {value: 5, done: false}
console.log(f.next()); // {value: 6, done: false}
```

`Generator`는 값을 미리 만들어 두지 않는다. 따라서, 메모리 관리 측면에서 효율적이다.

필요한 순간에만 연산해서 값을 주기 때문에, 위와 같이 무한 반복문을 사용해도 브라우저가 뻗지 않는다.

`next()` 호출할 때마다 값을 주기 때문이다.

`Generator`는 필요한 값만 필요한 순간에 생성한다.

일반적인 함수로 어떤 값을 구할 때, 모든 값을 미리 계산해놔야하고, 쓸지 안쓸지 정해지지 않은 상황에서도 그 값을 유지해야한다.

하지만, `Generator`를 사용하면 필요한 순간까지 계산을 미룰 수 있다.

<br />

## yield\*를 이용

```javascript
function* gen1() {
  yield 'W';
  yield 'o';
  yield 'r';
  yield 'l';
  yield 'd';
}

function* gen1() {
  yield 'Hello,';
  yield* gen1();
  yield '!';
}

console.log(...gen2()); // Hello, W o r l d !
```

`yield*`로 다른 `Generator` 함수를 호출할 수 있다.

`yield*` 오른쪽에는 반복 가능한 모든 객체가 올 수 있다.

<br />

## 정리

제너레이터는 다른 작업을 하다가 다시 돌아와서 `next()` 해주면 진행이 멈췄던 부분부터 이어서 실행할 수 있다.

예를 들어 Redux Saga에서 제너레이터를 활발히 사용한다.

/**
 * Generator
 */

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

const a = fn();

console.log(a.next());

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

// --------------------------------------------------------------------------------

const b = fn();

console.log(b.next());
/** result
 * 1
 * {value: 1, done: false}
 */

console.log(b.next());
/** result
 * 2
 * {value: 2, done: false}
 */

console.log(b.return('END'));
/** result
 * {value: 'END', done: true}
 */

console.log(b.next());
/** result
 * {value: undefined, done: true}
 */

// ------------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------

/**
 * iterable, iterator
 */

const arr = [1, 2, 3, 4, 5];

const it = arr[Symbol.iterator]();

console.log(it.next()); // {value: 1, done: false}
console.log(it.next()); // {value: 2, done: false}
console.log(it.next()); // {value: 3, done: false}
console.log(it.next()); // {value: 4, done: false}
console.log(it.next()); // {value: 5, done: false}
console.log(it.next()); // {value: undefined, done: true}

// 배열은 Symbol.iterator() 메소드를 가지고 있고, 해당 메소드가 반환하는 값이 iterator이기 때문에 iterable하다고 할 수 있다.
// 즉, 배열은 반복 가능한 객체이다.

// iterable은 for ... of로 순회할 수 있다.
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

// ----------------------------------------------------------------------------

function* fn2() {
  yield 4;
  yield 5;
  yield 6;
}

const d = fn2();

d[Symbol.iterator]() === d; // true

// Generator에서 Symbol.iterator를 실행한 값이 자기 자신이다.
// 즉, Generator는 iterable 객체이다.

// for ... of가 실행되면, Symbol.iterator를 호출하고, 만약에 없으면 에러가 발생한다.
// 반환된 iterator에 next()를 호출하면서 done이 true가 될 떄까지 반복한다.
for (let num of d) {
  console.log(num);
}

/**
 * 4
 * 5
 * 6
 */

// ---------------------------------------------------------------------------

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

// --------------------------------------------------------------------------

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

// --------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------

function* gen1() {
  yield 'W';
  yield 'o';
  yield 'r';
  yield 'l';
  yield 'd';
}

function* gen2() {
  yield 'Hello,';
  yield* gen1();
  yield '!';
}

console.log(...gen2()); // Hello, W o r l d !

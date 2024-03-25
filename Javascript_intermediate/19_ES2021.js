/**
 * ES2021 추가된 기능들
 */

/**
 * String.replaceAll()
 */

const str1 = 'Hello World';
console.log(str1.replaceAll('l', '~')); // He~~o Wor~d

// ES2021 이전에는 정규표현식을 사용
console.log(str1.replace(/l/g, '~')); // He~~o Wor~d

const str2 = "I'm [Henson]. This is Tom's [Car].";
console.log(str2.replaceAll('[', '~').replaceAll(']', '~')); // I'm ~Henson~. This is Tom's ~Car~.
// 정규표현식으로 특수문자를 변경하려면 가독성이 떨어진다.
console.log(str2.replaceAll(/\[/g, '~').replaceAll(/\]/g, '~')); // I'm ~Henson~. This is Tom's ~Car~.

/**
 * Promise.any
 */

const resPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res('success');
  }, 2000);
});

const rejPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej('fail..');
  }, 1000);
});

Promise.race([resPromise, rejPromise])
  .then(() => console.log('성공'))
  .catch((e) => console.log(e)); // fail..

Promise.any([resPromise, rejPromise])
  .then(() => console.log('성공')) // 성공
  .catch((e) => console.log(e));

/**
 * 논리 할달 연산자 Logical assignment Operator
 */

function add(num1, num2) {
  num1 ||= 0; // num1 = num1 || 0 과 같다.
  num2 ||= 0;
  console.log(num1 + num2);
}

console.log(add()); // 0

name &&= `Hello ${name}`; // name = name && `Hello ${name}`과 같다.

name ??= 'Henson'; // name = name ?? 'Henson' 와 같다.

// ??는 null 병합 연산자이다. || 와 비슷한데, 앞의 값이 null이거나 undefined일 때, 뒤의 값을 넣어준다.

let num = 0;

let a = num || 3;
console.log(a); // 3

let b = num ?? 3;
console.log(b); // 0

/**
 * 숫자 구분자
 */

let billion = 1_000_000_000; // 10억

// 현실에서는 숫자를 구분하기 쉽게 ,를 사용하는데, 자바스크립트 내에서는 에러가 발생한다.
// _을 사용해서 구분을 쉽게 할 수 있도록 해준다.

/**
 * WeakRef
 */

let user = { name: 'Henson', age: 29 };
// 약한 참조로 user를 참조
const weakUser = new WeakRef(user);

user = null; // 참조 끊기

// 1초에 한번씩 콘솔 출력
const timer = setInterval(() => {
  // 참조에 접근하기 위해 deref 사용
  const wUser = weakUser.deref();
  // wUser가 있으면 name 출력
  if (wUser) {
    console.log(wUser.name);
  } else {
    // wUser가 없으면 메세지 출력과 clearInterval
    console.log('제거 되었습니다.');
    clearInterval(timer);
  }
}, 1000);
/**
 * Henson
 * Henson
 * Henson
 * Henson
 * Henson
 * Henson
 * Henson
 * Henson
 * '제거 되었습니다.'
 */

// WeakRef는 특정 객체를 일정 시간만 캐시하도록 하는 방법에 사용할 수 있다.

class MyCache {
  // 생성될 때 빈 객체 생성
  constructor() {
    this.cache = {};
  }

  // add를 하면 cache 객체에 키와 WeakRef 객체를 받아서 넣어준다.
  add(key, obj) {
    this.cache[key] = new WeakRef(obj);
  }

  // add로 넣어준 객체를 다시 읽을 때 사용
  get(key) {
    let cachedRef = this.cache[key].deref();
    // WeakRef로 만든 객체가 지워졌을 수도 있으니 항상 확인해야 한다.
    if (cachedRef) {
      return cachedRef;
    } else {
      return false;
    }
  }
}

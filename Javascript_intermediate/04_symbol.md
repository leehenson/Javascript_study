# 심볼 Symbol

```javascript
const obj = {
  1: '1입니다.',
  false: '거짓',
};

Object.keys(obj);
// ['1', 'false'], property key를 문자형으로 반환

// key로 접근
obj['1']; // '1 입니다.'
obj['false']; // '거짓'
```

객체의 property key를 `Object.keys()`로 출력해보면 문자형으로 반환한다.

property에 접근할 때에도 key를 문자형으로 접근할 수 있다.

<br />

## Symbol

객체 property key는 문자형도 가능하지만, Symbol형으로도 가능하다.

```javascript
// Symbol 만드는 법
const a = Symbol(); // new를 붙이지 않는다.
const b = Symbol();

console.log(a); // Symbol();
console.log(b); // Symbol();

console.log(a === b); // false
console.log(a == b); // false
```

`Symbol`을 만들 때에는 `new` 키워드를 붙이지 않는다.

`Symbol`은 유일한 식별자를 만들 때 사용한다.

만든 `Symbol`을 출력해보면 `a`와 `b`는 똑같이 `Symbol()`을 출력하지만, 일치 연산자와 동등 연산자로 비교하면 `false`를 출력한다.

### 유일성 보장

```javascript
const id = Symbol('id'); // 유일성 보장
const id2 = Symbol('id');

console.log(id); // Symbol(id)
console.log(id2); // Symbol(id)

console.log(id === id2); // false
console.log(id == id2); // false
```

Symbol형은 유일성이 보장된다. 전체 코드 중에서 딱 하나라는 뜻이다.

`Symbol`은 만들 때 `()`안에 설명을 붙여줄 수 있다.

설명을 붙임으로써 디버깅이 편해진다.

설명에 문자열을 전달해주면 되는데, 이 문자열은 `Symbol` 생성에 어떠한 영향도 미치지 않는다.

설명이 똑같은 `Symbol`을 출력해보면 `Symbol(id)`로 똑같지만, 일치 연산자와 동등 연산자로 비교하면 `false`가 출력된다.

<br />

## property key : 심볼형

```javascript
const id = Symbol('id'); // 심볼 생성
const user = {
  name: 'Henson',
  age: 29,
  [id]: 'myId', // computed property로 Symbol을 key로 지정
};

console.log(user); // {name: 'Henson', age: 29, Symbol(id): 'myId'}
console.log(user[id]); // 'myId'

console.log(Object.keys(user)); // ['name', 'age']
console.log(Object.values(user)); // ['Henson', 29]
console.log(Object.entries(user)); // [Array(2), Array(2)]

for (let a in user) {
} // Symbol형 property는 건너뛴다.
```

computed property로 `Symbol`를 key로 지정한다.

`user` 객체를 출력해보면, `Symbol`로 만든 key를 가진 property를 확인할 수 있다.

`console.log(user[id]);`로 출력해보면 `myId`를 잘 출력해주는 것을 확인할 수 있다.

Object method들은 key가 Symbol형인 property는 건너뛰고, 반환하지 않는다.

마찬가지로 `for ... in` 반복문에서도 Symbol형인 property는 건너뛴다.

### 속성 추가

```javascript
const user = {
  name: 'Henson',
  age: 29,
};

const id = Symbol('id');
user[id] = 'myId';
```

이미 존재하는 객체는 어디선가 이미 Object method나 `for ... in`문으로 사용 중일 수 있기 때문에, `Symbol`은 이미 존재하는 객체에 자신만의 속성을 추가할 때 사용된다.

<br />

## Symbol.for() : 전역 심볼

전역 변수처럼 하나의 `Symbol`를 가리키게 하는 것이 `Symbol.for()`이다.

### Symbol.for()의 기능

- 하나의 Symbol만 보장받을 수 있다.

- Symbol이 없으면 만들고, 있으면 가져온다.

- `Symbol()` 함수는 매번 다른 `Symbol`를 생성하지만, `Symbol.for()` 메소드는 하나를 생성한 뒤 key를 통해 같은 `Symbol`을 공유할 수 있다.

```javascript
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');

console.log(id1 === id2); // true
```

위와 같이 `Symbol.for()` 메소드를 통해 만든 key가 같은 `Symbol`은 같은 `Symbol`를 가리키게 된다.

`Symbol.for()`로 생성한 `Symbol`을 전역 심볼이라고 부르고, 코드 어디에서나 사용할 수 있다.

```javascript
Symbol.keyFor(id1); // 'id'
```

`Symbol.keyFor()` 메소드의 인자로 심볼 변수를 넣어주면 심볼의 이름을 얻을 수 있다.

```javascript
const id = Symbol('id 입니다.');

id.description; // 'id 입니다.'
```

전역 심볼이 아닌 심볼은 `Symbol.keyFor()`를 사용할 수 없다.

대신 `description`으로 심볼의 이름을 알아낼 수 있다.

<br />

## 숨겨진 Symbol key 보는 법

```javascript
const id = Symbol('id');

const user = {
  name: 'Henson',
  age: 29,
  [id]: 'myId',
};

Object.getOwnPropertySymbols(user); // [Symbol(id)]

Reflect.ownKeys(user); // ['name', 'age', Symbol(id)]
```

`Object.getOwnPropertySymbols()` 메소드를 통해서 실볼만 반환 받을 수 있다.

또한, `Reflect.ownKeys()` 메소드를 통해서 심볼을 포함한 객체의 모든 키를 반환 받을 수 있다.

하지만, 대부분의 라이브러리나 내장 함수, 등은 이러한 메소드를 사용하고 있지 않다.

따라서, 유일한 프로퍼티를 추가하고 싶을 때에는 심볼을 사용하는 것이 좋다.

<br />

## 예제 코드

```javascript
// 다른 사람이 만들어놓은 객체
const user = {
  name: 'Henson',
  age: 29,
};

// 추후 작업
//user.showName = function () {}; // for in 작업에 영향을 미침
const showName = Symbol('show name');
user[showName] = function () {
  console.log(this.name);
};

user[showName]();

// 사용자가 접속하면 보는 메시지
for (let key in user) {
  console.log(`His ${key} is ${user[key]}.`);
}
```

심볼을 사용함으로써, 이미 만들어진 객체에 대해 영향을 주지 않고, 객체에 속성을 추가할 수 있다.

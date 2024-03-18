# 나머지 매개변수, 전개구문

## 인자 전달

```javascript
function showName(name) {
  console.log(name);
}

showName('Henson'); // 'Henson'
showName('Henson', 'Tom'); // ?

showName(); // undefined
```

위의 함수는 `name`을 전달하면 `name`을 콘솔에 출력해준다.

그리고, 인자를 하나 더 전달한다고 해서 에러가 발생하지 않고, 똑같이 첫 번째 인자를 출력해준다.

Javascript에서 함수에 넘겨주는 인자의 개수에는 제한이 없다.

따라서, 인자의 개수를 정해놓고 함수를 만들어도, 실제 호출할 때 정확히 그 개수를 맞출 필요는 없다.

심지어 인자를 아무것도 전달하지 않아도 에러가 발생하지 않고, 다만 `undefined`가 출력된다.

함수의 인자를 얻는 방법은 두 가지 있다.

1. `arguements`

2. 나머지 매개 변수

예전에는 `arguments`를 많이 썼지만, 요새는 여러 장점이 많은 나머지 매개 변수를 주로 사용한다.

그리고, 화살표 함수에는 `arguments`가 없다.

<br />

## arguments

`arguments`는 함수로 넘어 온 모든 인수에 접근할 수 있다.

함수 내에서 이용 가능한 지역 변수이다.

`length`와 `index`를 사용할 수 있다.

`Array` 형태의 객체이다.

`forEach()`, `map()`과 같은 배열 내장 메소드는 없다.

```javascript
function showName(name) {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

showName('Henson', 'Tom');
// 2
// 'Henson'
// 'Tom'
```

<br />

## 나머지 매개변수(Rest parameters)

```javascript
function showName(...names) {
  console.log(names);
}

showName(); // []
showName('Henson'); // ['Henson']
showName('Henson', 'Tom'); // ['Henson', 'Tom']
```

**나머지 매개변수**는 정해지지 않은 개수의 인자를 배열로 나타낼 수 있게 해준다.

`function showName(...names)`와 같이 함수의 매개변수 위치에 `...`를 찍고 뒤에 배열 이름을 적어준다.

그러면 저 `names` 배열 안에 전달된 인자들이 들어간다.

아무것도 넣어주지 않으면 `undefined`가 아니라 빈 배열이 출력된다.

### 전달 받은 모든 수를 더하기

```javascript
function add(...numbers) {
  let result = 0;
  // arguments와 다르게 배열의 메소드도 사용할 수 있다.
  numbers.forEach((num) => {
    result += num;
  });
  console.log(result);
}

add(1, 2, 3); // 6
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

function add2(...numbers) {
  let result = numbers.reduce((prev, cur) => {
    return (prev += cur);
  });
  console.log(result);
}

add2(1, 2, 3); // 6
add2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55
```

### user 객체를 만들어 주는 생성자 함수 만들기

```javascript
function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user1 = new User('Henson', 29, 'html', 'css');
const user2 = new User('Tom', 20, 'JS', 'React');
const user3 = new User('Jane', 10, 'English');

console.log(user1); // {name: 'Henson', age: 29, skills: ['html', 'css']}
console.log(user2); // {name: 'Tom', age: 20, skills: ['JS', 'React']}
console.log(user3); // {name: 'Jane', age: 10, skills: ['English']}
```

나머지 매개변수는 항상 맨 뒤에 있어야 한다.

<br />

## 전개 구문(Spread syntax)

### 전개 구문(Spread syntax) : 배열

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [...arr1, ...arr2];

console.log(result); // [1, 2, 3, 4, 5, 6]
```

`...arr1`은 `1, 2, 3`을 풀어서 쓴 것이고, `...arr2`는 `4, 5, 6`을 풀어서 쓴 것이다.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [0, ...arr1, ...arr2, 7, 8, 9];

console.log(result); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

위와 같이 전개 구문을 중간에 사용하는 것도 가능하다.

`arr.push()`, `arr.splice()`, `arr.concat()`과 같이 번거로운 작업없이 쉽게 배열을 수정할 수 있다.

#### 예제 코드

```javascript
// arr1을 [4, 5, 6, 1, 2, 3]으로 변경
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// arr2의 첫 번째 요소부터 순서대로 unshift()를 하다보니, 역순으로 unshift() 되도록 reverse()를 해준다.
arr2.reverse().forEach((num) => {
  arr1.unshift(num);
});

console.log(arr1);

// arr3을 [4, 5, 6, 1, 2, 3]으로 변경
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];

// 전개 구문으로 간편하게 합치기 가능
arr3 = [...arr4, ...arr3];

console.log(arr3);
```

### 전개 구문(Spread syntax) : 객체

```javascript
let user = { name: 'Henson' };
let henson = { ...user, age: 29 };

console.log(henson); // {name: 'Henson', age: 29}
```

#### 예제코드

```javascript
/**
 * 전개구문 : 객체
 */

let user = { name: 'Henson' };
let info = { age: 29 };
let fe = ['JS', 'React'];
let lang = ['Korean', 'English'];

// user = Object.assign({}, user, info, {
//   skills: [],
// });

// fe.forEach((item) => {
//   user.skills.push(item);
// });

// lang.forEach((item) => {
//   user.skills.push(item);
// });

// 전개 구문으로 간단하게 객체 합치기 가능
user = {
  ...user,
  ...info,
  skills: [...fe, ...lang],
};

console.log(user);
```

### 전개 구문(Spread syntax) : 복제

```javascript
let arr = [1, 2, 3];
let arr2 = [...arr]; // [1, 2, 3]

let user = { name: 'Henson', age: 29 };
let user2 = { ...user };

user2.name = 'Tom';

console.log(user.name); // 'Henson'
console.log(user2.name); // 'Tom'
```

`Object.assign()`응 사용할 필요없이 간단하게 복제가 가능하다.

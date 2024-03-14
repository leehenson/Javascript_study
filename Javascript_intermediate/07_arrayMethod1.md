# 배열 메소드

`push()` : 뒤에 삽입

`pop()` : 뒤에 삭제

`unshift()` : 앞에 삽입

`shift()` : 앞에 삭제

<br />

## arr.splice(n, m) : 특정 요소 지움

```javascript
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);

console.log(arr); // [1, 4, 5]
```

`arr.splice(n, m)`는 `n`번째부터 `m`개를 지우는 메소드이다.

<br />

## arr.splice(n, m, x) : 특정 요소 지우고 추가

```javascript
let arr = [1, 2, 3, 4, 5];

arr.splice(1, 3, 100, 200);

console.log(arr); // [1, 100, 200, 5]
```

`arr.splice(n, m, x)`는 `x` 자리에 추가할 요소를 적어주면 요소를 지운 자리에 추가할 요소를 추가해준다.

```javascript
let arr = ['나는', '철수', '입니다.'];

arr.splice(1, 0, '대한민국', '소방관');

console.log(arr); // ['나는', '대한민국', '소방관', '철수', '입니다.']
```

`arr.splice(n, m, x)`에서 `m` 자리에 `0`을 넣으면, 아무것도 지우지 않고, 중간에 새로운 요소를 추가해준다.

<br />

## arr.splice() : 삭제된 요소 반환

```javascript
let arr = [1, 2, 3, 4, 5];

let result = arr.splice(1, 2);

console.log(arr); // [1, 4, 5]
console.log(result); // [2, 3]
```

`arr.splice()` 메소드는 삭제한 요소들을 담은 배열을 반환한다.

`arr.splice(1, 2)` 메소드의 반환 값을 `result`에 넣어서 출력해보면, `arr.splice()`로 삭제한 요소들이 담긴 배열을 출력한다.

<br />

## arr.slice(n, m) : n부터 m까지 변환

```javascript
let arr = [1, 2, 3, 4, 5];
arr.slice(1, 4); // [2, 3, 4]

let arr2 = arr.slice();
console.log(arr2); // [1, 2, 3, 4, 5]
```

`arr.slice(n, m)`는 배열 index의 `n`부터 `m`전까지 반환한다.

`m`을 적지 않을 경우에, 배열 끝까지를 의미한다.

`arr.slice()`의 인자를 아무것도 주지 않으면, 배열이 복사된다.

<br />

## arr.concat(arr2, arr3, ..) : 합쳐서 새배열 반환

```javascript
let arr = [1, 2];

arr.concat([3, 4]); // [1, 2, 3, 4]

arr.concat([3, 4], [5, 6]); // [1, 2, 3, 4, 5, 6]

arr.concat([3, 4], 5, 6); // [1, 2, 3, 4, 5, 6]
```

`arr.concat(arr1, arr2, ..)` 메소드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환한다.

<br />

## arr.forEach(fn) : 배열 반복

```javascript
arr = ['Henson', 'Tom', 'Jane'];

arr.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});
/**
 * result =>
 * 1. Henson
 * 2. Tom
 * 3. Jane
 */
```

배열은 `for`문이나 `for ... of`문 통해 반복할 수 있고, `forEach`문으로도 반복할 수 있다.

`forEach()`는 인자로 함수를 받는다.

함수에는 3개의 매개변수가 있는데, 첫 번째는 해당 요소(`Henson`, `Tom`, `Jane`)이고, 두 번째는 index(`0`, `1`, `2`)이고, 세 번째는 해당 배열 자체(`arr`)를 의미한다.

보통 첫 번째와 두 번째 매개변수만 사용한다.

<br />

## arr.indexOf() / arr.lastIndexOf()

```javascript
let arr = [1, 2, 3, 4, 5, 1, 2, 3];

arr.indexOf(3); // 2

arr.indexOf(3, 3); // 7

arr.lastIndexOf(3); // 7
```

`arr.indexOf()`메소드는 인자로 넣어준 값을 배열에서 발견하면 해당 요소의 index 값을 반환하고, 없으면 `-1`를 반환한다.

`arr.indexOf(3, 3)`의 두 번째 인자는 시작 위치를 의미한다. 따라서, 배열의 index 3부터 탐색을 시작한다.

끝에서부터 탐색을 하고싶다면, `arr.lastIndexOf()`를 사용하면 된다.

<br />

## arr.includes() : 포함하는지 확인

```javascript
let arr = [1, 2, 3];

arr.includes(2); // true
arr.includes(8); // false
```

`arr.includes()` 메소드는 굳이 index를 확인할 필요가 없고, 포함하고 있는지만 알기 위해서 사용한다. 인자로 받은 값이 배열에 포함이 되어있으면 `true`, 없으면 `false`를 반환한다.

<br />

## arr.find(fn) / arr.findIndex(fn)

`arr.find(fn)`와 `arr.findIndex(fn)`은 `arr.indexOf()`처럼 찾는다는 것은 동일하지만, 짝수를 찾아낸다든지, 성인을 찾아내는 거와 같이 보다 복잡한 연산이 가능하도록, 함수를 전달할 수 있다.

`arr.find(fn)` 메소드는 첫 번째 `true`값만 반환하고 끝난다. 만약 없으면 `undefined`를 반환한다.

`arr.findIndex(fn)` 메소드는 해당 index를 반환하고, 없으면 `-1`를 반환한다.

### 짝수를 찾아서 반환

```javascript
let array = [1, 2, 3, 4, 5];

const reuslt = array.find((item) => {
  return item % 2 === 0;
});

console.log(reuslt); // 2
```

배열을 순환하다가 `return`값이 `true`일 때, 멈춰서 해당 요소를 반환한다.

### 미성년자를 찾아서 반환

```javascript
let userList = [
  { name: 'Henson', age: 29 },
  { name: 'Jane', age: 27 },
  { name: 'Tom', age: 10 },
];

// 객체의 age중 19보다 작은 객체를 반환
const result2 = userList.find((user) => {
  if (user.age < 19) {
    return true;
  }
  return false;
});

console.log(result2); // {name: 'Tom', age: 10}

// 객체의 age중 19보다 작은 객체의 index를 반환
const result3 = userList.findIndex((user) => {
  if (user.age < 19) {
    return true;
  }
  return false;
});

console.log(result3); // 2
```

객체가 들어있는 배열은 `indexOf()`로 찾기 힘들다. 이럴 경우 `find()`를 사용하면 된다.

`arr.find()`와 `arr.findIndex()`는 `true`가 되면 그 요소 및 index를 반환하고 끝내기 때문에 주의해야 한다. 만약 없으면 `undefined`나 `-1`를 반환한다.

<br />

## arr.filter(fn)

```javascript
let arr2 = [1, 2, 3, 4, 5, 6];

// 모든 짝수를 찾아서 반환
const reuslt3 = arr2.filter((item) => {
  return item % 2 === 0;
});

console.log(reuslt3); // [2, 4, 6]
```

`arr.filter(fn)`는 조건에 만족하는 모든 요소를 배열로 반환한다.

<br />

## arr.reverse() : 역순으로 재정렬

```javascript
let arr = [1, 2, 3, 4, 5];

arr.reverse(); // [5, 4, 3, 2, 1]
```

`arr.reverse()` 메소드는 배열을 역순으로 재정렬해준다.

<br />

## arr.map(fn)

`arr.map(fn)` 메소드는 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환한다.

```javascript
let userList = [
  { name: 'Henson', age: 29 },
  { name: 'Jane', age: 27 },
  { name: 'Tom', age: 10 },
];

let newUserList = userList.map((user, index) => {
  // id와 isAdult 프로퍼티 추가한 새로운 배열을 생성하여 반환
  return Object.assign({}, user, {
    id: index + 1,
    isAdult: user.age > 19,
  });
});

console.log(newUserList);
/**
 * result =>
 * {name: 'Henson', age: 29, id: 1, isAdult: true}
 * {name: 'Jane', age: 27, id: 2, isAdult: true}
 * {name: 'Tom', age: 10, id: 3, isAdult: false}
 */
console.log(userList);
/**
 * result =>
 * {name: 'Henson', age: 29,}
 * {name: 'Jane', age: 27}
 * {name: 'Tom', age: 10}
 */
```

<br />

## arr.join()

`arr.join()`은 배열안에 요소를 합쳐서 문자열로 만들어 반환한다.

```javascript
let arr3 = ['안녕', '나는', '철수야'];

let result4 = arr3.join('-');

console.log(result4); // 안녕-나는-철수야
```

`arr.join()`의 인자는 구분자이다. 빈값이면 `,`로 구분하여 합쳐진다.

<br />

## arr.split()

`arr.split()` 메소드는 문자열을 나눠서 배열로 만들어준다.

```javascript
const users = 'Henson,Jane,Tom,Tony';

const result5 = users.split(',');

console.log(result5); // ['Henson', 'Jane', 'Tom', 'Tony']
```

`split()`의 인자를 기준으로 배열을 만들어준다.

```javascript
let str = 'Hello, My name is Henson.';
const result6 = str.split('');

console.log(result6); // ['H', 'e', 'l', 'l', 'o', ',', ' ', 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'H', 'e', 'n', 's', 'o', 'n', '.']
```

인자를 `''`로 주게되면 띄어쓰기를 포함한 모든 글자를 쪼개서 배열로 담아 반환한다.

<br />

## Array.isArray()

```javascript
// 객체
let user = {
  name: 'Henson',
  age: 29,
};

// 배열
let userList2 = ['Henson', 'Tom', 'Jane'];

console.log(typeof user); // object
console.log(typeof userList2); // object

console.log(Array.isArray(user)); // false
console.log(Array.isArray(userList2)); // true
```

Javascript에서 배열은 객체형에 속하기 때문에, 배열을 `typeof`는 객체라고 알려준다. 따라서, 일반 객체와 배열을 구분할 수 없다.

`Array.isArray()` 메소드는 인자가 배열인지 아닌지 확인해준다.

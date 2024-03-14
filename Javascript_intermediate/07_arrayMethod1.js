/**
 * forEach
 */

let arr = ['Henson', 'Tom', 'Jane'];

arr.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});
/**
 * result =>
 * 1. Henson
 * 2. Tom
 * 3. Jane
 */

// ------------------------------------------

/**
 * find / findIndex
 */

let array = [1, 2, 3, 4, 5];

// 짝수를 찾아서 반환
// 배열을 순환하다가 return값이 true일 때, 멈춰서 해당 요소를 반환한다.
const reuslt = array.find((item) => {
  return item % 2 === 0;
});

console.log(reuslt); // 2

// -----------------------------------------

// 미성년자를 찾아서 반환
// 객체가 들어있는 배열은 indexOf()로 찾기 힘들다. 이럴 경우 find()를 사용하면 된다.
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

// arr.find()와 arr.findIndex()는 true가 되면 그 요소 및 index를 반환하고 끝내기 때문에 주의해야 한다. 만약 없으면 undefined나 -1를 반환한다.

// ----------------------------------------------

/**
 * arr.filter(fn)
 */

let arr2 = [1, 2, 3, 4, 5, 6];

// 모든 짝수를 찾아서 반환
// 배열을 순환하다가 return값이 true인 모든 요소를 배열에 담아 반환한다.
const reuslt3 = arr2.filter((item) => {
  return item % 2 === 0;
});

console.log(reuslt3); // [2, 4, 6]

// ---------------------------------------------------------

/**
 * arr.map(fn)
 */

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

// ---------------------------------------------------------

/**
 * join
 */

let arr3 = ['안녕', '나는', '철수야'];

let result4 = arr3.join('-');
// join()의 인자는 구분자이다. 빈값이면 `,`로 구분하여 합쳐진다.

console.log(result4); // 안녕-나는-철수야

// ---------------------------------------------------------

/**
 * split
 */

const users = 'Henson,Jane,Tom,Tony';

const result5 = users.split(',');
// split()의 인자를 기준으로 배열을 만들어준다.

console.log(result5); // ['Henson', 'Jane', 'Tom', 'Tony']

let str = 'Hello, My name is Henson.';
const result6 = str.split('');

console.log(result6); // ['H', 'e', 'l', 'l', 'o', ',', ' ', 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'H', 'e', 'n', 's', 'o', 'n', '.']

// --------------------------------------------------------------

/**
 * Array.isArray()
 */

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

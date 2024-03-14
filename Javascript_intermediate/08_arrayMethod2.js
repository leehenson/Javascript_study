/**
 * arr.sort()
 */

let arr = [1, 5, 4, 2, 3];

arr.sort();

console.log(arr); // [1, 2, 3, 4, 5]

let arr2 = ['a', 'c', 'd', 'e', 'b'];

arr2.sort();

console.log(arr2); // ['a', 'b', 'c', 'd', 'e']

let arr3 = [27, 8, 5, 13];

arr3.sort();

// 정렬할 때 요소룰 문자로 취급하기 때문에, 숫자를 정렬할 때 순서가 뒤죽박죽이다.
console.log(arr3); // [13, 27, 5, 8]

let arr4 = [27, 8, 5, 13];

arr4.sort((a, b) => {
  console.log(a, b);
  // a와 b를 빼서, 음수가 나올 경우에, b를 a의 앞으로 옮긴다.
  return a - b;
});

// 8, 27, 5, 13
// 5, 8, 27, 13
// 5, 8, 13, 27

console.log(arr4); // [5, 8, 13, 27]

// --------------------------------------------------------------------

/**
 * arr.reduce()
 */

// 배열의 모든 수 합치기
let arr5 = [1, 2, 3, 4, 5];

// for, for of, forEach

let result = 0;
arr5.forEach((num) => {
  result += num;
});

console.log(result); // 15

let result2 = arr5.reduce((prev, cur) => {
  return prev + cur;
}, 0);

console.log(result2); // 15

let userList = [
  { name: 'Henson', age: 29 },
  { name: 'Tom', age: 10 },
  { name: 'Jane', age: 27 },
  { name: 'Sue', age: 26 },
  { name: 'Harry', age: 42 },
  { name: 'Steve', age: 60 },
];

// 성인만 뽑아서 새로운 배열을 반환
let result3 = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(result3); // ['Henson', 'Jane', 'Sue', 'Harry', 'Steve']

// userList 배열 요소 객체의 age 합 구하기
let result4 = userList.reduce((prev, cur) => {
  return (prev += cur.age);
}, 0);

console.log(result4); // 194

// 이름이 3자리인 사람 구하기
let result5 = userList.reduce((prev, cur) => {
  if (cur.name.length === 3) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(result5); // ['Tom', 'Sue']

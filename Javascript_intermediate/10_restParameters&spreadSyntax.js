/**
 * 나머지 매개변수
 */

// 전달 받은 모든 수를 더하기
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

// 전달 받은 모든 수를 더하기
function add2(...numbers) {
  let result = numbers.reduce((prev, cur) => {
    return (prev += cur);
  });
  console.log(result);
}

add2(1, 2, 3); // 6
add2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

// user 객체를 만들어 주는 생성자 함수 만들기
// 나머지 매개변수는 항상 맨 뒤에 있어야 한다.
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

/**
 * 전개 구문
 */

/**
 * 전개 구문 : 배열
 */

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

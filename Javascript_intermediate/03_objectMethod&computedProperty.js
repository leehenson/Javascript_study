/**
 * 계산된 프로퍼티(computed property)
 */

let n = 'name';
let a = 'age';

const user = {
  [n]: 'Henson', // name: 'Henson'
  [a]: 29, // age: 29
  [1 + 4]: 5, // 5: 5
};

console.log(user); // {name: 'Henson', age: 29, 5: 5}

// ---------------------------------------------

// 객체를 만들어주는 함수
// 어떤 것이 key가 될지 모르는 객체를 만들 때 유용하다.
function makeObj(key, val) {
  return {
    [key]: val,
  };
}

const obj = makeObj('나이', 29); // 첫 번재 인자의 값이 key가 된다.

console.log(obj); // {나이: 29}

/**
 * 객체 메소드(object method)
 */

const user2 = {
  name: 'Henson',
  age: 29,
};

const user3 = user2; // 객체 복제가 아닌 같은 객체를 가르키게 한다.
user3.name = 'Tom'; // user3를 통해 name property의 value 변경

console.log(user2); // {'name': 'Tom', 'age': 29}
console.log(user3); // {'name': 'Tom', 'age': 29}

/**
 * Object.assign()
 */

const user4 = {
  name: 'Henson',
  age: 29,
};

const user5 = Object.assign({}, user4); // 객체 복제
user5.name = 'Tom'; // 복제한 user5 객체의 name property의 value 변경

// 기존 객체의 name property의 value가 바뀌지 않는다.
console.log(user4); // {'name': 'Henson', 'age': 29}
console.log(user5); // {'name': 'Tom', 'age': 29}

/**
 * Object.keys()
 */

const result = Object.keys(user); // 객체의 key만 배열로 반환

console.log(result); // ['name', 'age']

/**
 * Object.values()
 */

const result2 = Object.values(user); // 객체의 value만 배열로 반환

console.log(result2); // ['Henson', 29]

/**
 * Object.entries()
 */

const result3 = Object.entries(user); // 객체의 key와 value를 2차원 배열로 변환하여 반환

console.log(result3);
/**
 * [
 *  ['name', 'Henson'],
 *  ['age', 29]
 * ]
 */

/**
 * Object.fromEntries()
 */

let arr = [
  ['mon', '월'], // [key, value]
  ['tue', '화'],
];

const result4 = Object.fromEntries(arr); // 2차원 배열을 객체로 변환하여 반환

console.log(arr); // {mon: '월', tue: '화'}

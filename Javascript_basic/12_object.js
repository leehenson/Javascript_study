/**
 * 객체
 */

// 객체 생성
const superman = {
  name: 'clark',
  age: 30,
};

// 객체 출력
console.log(superman.name); // result => 'clark'
console.log(superman['age']); // result => 30
console.log(superman);
/**
 * result =>
 * Object {
 *  age: 30,
 *  name: 'clark'
 * }
 */

superman.hairColor = 'black'; // property 추가
superman['hobby'] = 'football'; // property 추가

delete superman.age; // property 삭제

// 이름과 나이를 받아서 객체를 반환하는 함수
function makeObject(name, age) {
  return {
    name,
    age,
    hobby: 'football',
  };
}

const Henson = makeObject('Henson', 29); // 'Henson'이라는 이름과 30이라는 나이로 객체 생성

console.log(Henson); // 만든 Henson 객체 출력

// Henson 객체에 'age'와 'birthday' 프로퍼티가 있는지 확인
console.log('age' in Henson); // result => true
console.log('birtyday' in Henson); // result => false

// 보통 '.'이나 '[]'로 확인이 가능하기에 이러한 확인 방법은 실용적이지 않다.

/**
 * 객체 in
 */

// 나이를 확인하여 성인인지 아닌지 구분하는 함수
function isAdult(user) {
  // user에 age가 없거나 20살 미만이거나
  if (!('age' in user) || user.age < 20) {
    return false;
  }
  return true;
}

// age가 있는 객체 생성
const Mike = {
  name: 'Mike',
  age: 30,
};

// age가 없는 객체 생성
const Jane = {
  name: 'Jane',
};

console.log(isAdult(Mike)); // result => true
console.log(isAdult(Jane)); // result => false

/**
 * 객체 for ... in
 */

// key는 Mike가 가지고 있는 property를 의미
for (key in Mike) {
  console.log(Mike[key]); // result => Mike, 30 / Mike['name'], Mike['age']
}

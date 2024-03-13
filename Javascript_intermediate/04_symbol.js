/**
 * 심볼
 */

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

// 심볼을 사용함으로써, 이미 만들어진 객체에 대해 영향을 주지 않고, 객체에 속성을 추가할 수 있다.

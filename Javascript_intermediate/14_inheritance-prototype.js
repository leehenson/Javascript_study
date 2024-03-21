/**
 * 프로토타입
 */

const user = {
  name: 'Henson',
};

user.name; // Henson

user.hasOwnProperty('name'); // true
user.hasOwnProperty('age'); // false

const user2 = {
  name: 'Henson',
  hasOwnProperty: function () {
    console.log('haha');
  },
};

user2.hasOwnProperty();

/**
 * 상속
 */

// 상위 개념의 객체 생성
const car = {
  wheels: 4,
  drive() {
    console.log('drive..');
  },
};

const bmw = {
  color: 'red',
  navigation: 1,
};

const benz = {
  color: 'black',
};

const audi = {
  color: 'blue',
};

bmw.__proto__ = car; // car가 bmw의 프로토타입이 된다.
benz.__proto__ = car; // benz는 car의 상속을 받는다.
audi.__proto__ = car;

console.log(bmw); // {color: 'red', navigation: 1}
console.log(bmw.color); // 'red'
console.log(bmw.wheels); // 4

const x5 = {
  color: 'white',
  name: 'x5',
};

x5.__proto__ = bmw; // 상속은 계속 이어질 수 있다.

console.log(x5.name); // 'x5'
console.log(x5.color); // 'white'
console.log(x5.navigation); // 1
console.log(x5.wheels); // 4

for (p in x5) {
  console.log(p);
}

/**
 * color
 * name
 * navigation
 * wheels
 * drive
 */

console.log(Object.keys(x5)); // ['color', 'name']
console.log(Object.values(x5)); // ['white', 'x5']

for (p in x5) {
  if (x5.hasOwnProperty(p)) {
    console.log('o', p);
  } else {
    console.log('x', p);
  }
}

/**
 * o color
 * o name
 * x navigation
 * x wheels
 * x drive
 */

// -------------------------------------------------------------------

/**
 * 생성자 함수 사용
 */

// const car2 = {
//   wheels: 4,
//   drive() {
//     console.log('drive..');
//   },
// };

const Bmw = function (color) {
  this.color = color;
};

// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function () {
//   console.log('drive..');
// };
// Bmw.prototype.navigation = 1;
// Bmw.prototype.stop = function () {
//   console.log('stop');
// };

// Bmw.prototype = {
//   wheels: 4,
//   drive() {
//     console.log('drive..');
//   },
//   navigation: 1,
//   stop() {
//     console.log('stop');
//   },
// };

Bmw.prototype = {
  constructor: Bmw,
  wheels: 4,
  drive() {
    console.log('drive..');
  },
  navigation: 1,
  stop() {
    console.log('stop');
  },
};

const x6 = new Bmw('red');
const z4 = new Bmw('blue');

console.log(x6.wheels); // 4
console.log(z4.drive()); // 'drive..'
console.log(x6.navigation); // 1
console.log(z4.stop()); // 'stop'

console.log(z4 instanceof Bmw); // true

console.log(z4.constructor === Bmw); // true

// -----------------------------------------------------------------

// 클로저를 사용하여 은닉화
const Bmw2 = function (color) {
  const c = color;
  this.getColor = function () {
    console.log(c);
  };
};

const m4 = new Bmw2('red');

m4.getColor();

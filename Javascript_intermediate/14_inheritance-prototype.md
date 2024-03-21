# 상속, 프로토타입(prototype)

<br />

## 프로토타입(prototype)

```javascript
const user = {
  name: 'Henson',
};

user.name; // Henson

user.hasOwnProperty('name'); // true
user.hasOwnProperty('age'); // false
```

`hasOwnProperty()`메소드는 인자로 받은 프로퍼티가 자신 객체에 있는지 알려준다.

하지만 객체에 `hasOwnProperty()`라는 메소드를 만든 적이 없다.

`__proto__`를 **프로토타입**이라고 하는데, 객체에서 프로퍼티를 읽으려고 하는데, 없으면 프로토타입에서 찾는다.

```javascript
const user2 = {
  name: 'Henson',
  hasOwnProperty: function () {
    console.log('haha');
  },
};

user2.hasOwnProperty();
```

객체의 어떠한 프로퍼티를 호출할 때, 객체에 해당 프로퍼티가 있으면 탐색을 멈추고 해당 프로퍼티를 실행하고, 없을 때만 프로토타입에서 해당 프로퍼티를 탐색한다.

<br />

## 상속

```javascript
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
```

`bmw.wheels`를 호출하면 우선 `bmw` 객체 내부에서 `wheels` 프로퍼티를 탐색하는데, 찾는다면 거기서 탐색을 멈추지만, `wheels` 프로퍼티가 없다면 해당 프로퍼티를 프로토타입에서 탐색한다.

### prototype chain

```javascript
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

bmw.__proto__ = car;

const x5 = {
  color: 'white',
  name: 'x5',
};

x5.__proto__ = bmw; // 상속은 계속 이어질 수 있다.

console.log(x5.name); // 'x5'
console.log(x5.color); // 'white'
console.log(x5.navigation); // 1
console.log(x5.wheels); // 4
```

상속은 계속 이어질 수 있다.

위 코드를 보면, `x5` 객체에 `name`와 `color` 프로퍼티가 있으므로, `x5`의 `name`와 `color` 프로퍼티를 출력하는데, `navigation` 프로퍼티는 없기 때문에, 상속 받은 `bmw`의 `navigation` 프로퍼티를 출력한다.

그리고 `wheels` 프로퍼티는 `bmw` 프로토타입에도 존재하지 않기 때문에, `bmw`가 상속 받은 `car` 프로토타입까지 찾아서 출력해준다.

이러한 동작을 **prototype chain**이라고 한다.

<hr />

```javascript
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

bmw.__proto__ = car;

const x5 = {
  color: 'white',
  name: 'x5',
};

x5.__proto__ = bmw;

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
```

`for ... in`문으로 객체에 프로퍼티를 순회할 경우에 상속된 프로토타입에 설정된 프로퍼티도 출력된다.

하지만, `Object.keys()`와 `Object.values()`와 같이 키와 값과 관련된 객체 내장 메소드에서는 상속된 프로토타입의 프로퍼티는 출력되지 않는다.

```javascript
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
```

만약 `for ... in`문에서 프로토타입 프로퍼티를 구분하고 싶다면, 위의 코드와 같이 `hasOwnProperty()`를 사용하면 된다.

<br />

## 생성자 함수를 사용할 경우

```javascript
const Bmw = function (color) {
  this.color = color;
};

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
  console.log('drive..');
};
Bmw.prototype.navigation = 1;
Bmw.prototype.stop = function () {
  console.log('stop');
};

const x6 = new Bmw('red');
const z4 = new Bmw('blue');

console.log(x6.wheels); // 4
console.log(z4.drive()); // 'drive..'
console.log(x6.navigation); // 1
console.log(z4.stop()); // 'stop'
```

생성자 함수로 객체를 생성할 경우에, `Bmw.prototype.wheels = 4;`와 같이 `prototype` 키워드를 사용하여, 프로퍼티를 지정해주면, 생성자로 생성되는 모든 객체에 설정된 모든 프로퍼티가 프로토타입에 추가된 채로 생성된다.

### 생성자의 인스턴스

생성자 함수로 새롭게 만들어낸 객체를 **생성자의 인스턴스**라고 부른다.

`instanceof` 연산자로 생성자의 인스턴스를 편리하게 확인할 수 있다.

`instanceof` 연산자로 해당 객체가 그 생성자로 생성된 객체인지를 알 수 있다.

```javascript
const Bmw = function (color) {
  this.color = color;
};

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
  console.log('drive..');
};
Bmw.prototype.navigation = 1;
Bmw.prototype.stop = function () {
  console.log('stop');
};

const x6 = new Bmw('red');
const z4 = new Bmw('blue');

console.log(z4 instanceof Bmw); // true
```

`z4 instanceof Bmw`는 `z4`가 `Bmw` 생성자로 만들어진 객체인지를 알려준다.

```javascript
const Bmw = function (color) {
  this.color = color;
};

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
  console.log('drive..');
};
Bmw.prototype.navigation = 1;
Bmw.prototype.stop = function () {
  console.log('stop');
};

const x6 = new Bmw('red');
const z4 = new Bmw('blue');

console.log(z4.constructor === Bmw); // true
```

생성자로 만들어진 인스턴스 객체에는 `constructor`라는 프로퍼티가 존재한다.

`constructor`는 생성자를 가리칸다.

위 코드를 예로 들면 `z4` 인스턴스의 `constructor`는 `Bmw`이다.

```javascript
const Bmw = function (color) {
  this.color = color;
};

Bmw.prototype = {
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

console.log(z4.constructor === Bmw); // false
```

생성자의 프로토타입을 위와 같이 더 간결하게 설정해줄 수 있지만, 이렇게 설정하면 `constructor`가 사라진다.

이런 일을 방지하기 위해 `Bmw.prototype.wheels = 4;`와 같이 하나씩 프로퍼티를 추가해주는 것이 좋다.

```javascript
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
```

위와 같이 `constructor`를 수동으로 명시해주는 방법도 있다.

Javascript는 명확한 `constructor`를 보장하지 않는다.

<br />

## 클로저 사용

```javascript
// 클로저를 사용하여 은닉화
const Bmw2 = function (color) {
  const c = color;
  this.getColor = function () {
    console.log(c);
  };
};

const m4 = new Bmw2('red');

m4.getColor();
```

위와 같이 클로저를 사용하여 프로퍼티의 값을 출력만 할 수 있고, 수정할 수 없게 은닉화를 할 수 있다.

# 클래스

**클래스**는 ES6에 추가된 기능이다.

### 생성자로 객체 생성

```javascript
const User = function (name, age) {
  this.name = name;
  this.age = age;
  this.showName = function () {
    console.log(this.name);
  };
};

const henson = new User('Henson', 29);

console.log(henson); // {name: 'Henson', age: 29, showName: ƒ}
```

생성자로 생성한 객체는 `showName()` 메소드가 객체 내부에 있다.

### 클래스로 객체 생성

```javascript
class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showName() {
    console.log(this.name);
  }
}

const tom = new User2('Tom', 19);

console.log(tom);
/**
 * {name: 'Tom', age: 19}
 * [[Prototype]]: Object
 *  constructor: class User2
 *  showName: ƒ showName()
 */
```

클래스는 `new`를 통해서 호출했을 때, 내부에서 정의된 내용으로 객체를 생성하는 것은 생성자 함수와 동일하다.

`class`라는 키워드로 생성할 수 있고, 내부에 `constructor`는 객체를 생성해주는 생성자 메소드이다.

객체를 초기화하기 위한 기능이 `constructor` 메소드에 정의된다.

`constructor` 메소드는 인자를 넘겨받을 수 있다.

`new`를 통해 호출하면, `contructor` 메소드가 자동으로 실행된다.

클래스 내에서 정의한 메소드는 생성한 객체의 프로토타입에 저장된다.

`showName()` 메소드가 프로토타입 내부에 있다.

### 생성자 함수에서 클래스와 동일하게 동작하도록 변경

```javascript
const User3 = function (name, age) {
  this.name = name;
  this.age = age;
};

User3.prototype.showName = function () {
  console.log(this.name);
};

// 클래스와 동일하게 메소드가 프로토타입에 저장된다.
const mike = new User3('Mike', 30);

const mike2 = User3('Mike', 30);

console.log(mike2); // undefined, 잘못된 코드이지만, 에러가 발생하지 않는다.

const henson2 = User2('Henson', 29);

console.log(henson2); // TypeError
```

생성자 함수로 생성한 객체는 `new` 키워드를 사용하지 않고, 호출을 하면 객체를 반환하지 않기 때문에, 변수에 `undefined`가 할당되지만, 정상적으로 프로그램이 계속 동작한다.

반면, `new` 키워드 없이 클래스로 객체를 생성하려고 하면 `TypeError`가 발생하여, 프로그램이 멈추게 된다.

```javascript
/**
 * 생성자 함수로 생성
 *
 * User {name: 'Henson', age: 29, showName: ƒ}
 * [[Prototype]]: Object
 * showName: ƒ ()
 * constructor: ƒ (name, age)
 */

/**
 * 클래스로 생성
 *
 * User2 {name: 'Tom', age: 19}
 * [[Prototype]]: Object
 *  constructor: class User2
 *  showName: ƒ showName()
 */
```

클래스로 생성한 객체의 `constructor`를 확인해보면 `class`로 표시되어 있으며, 클래스는 `new` 키워드 없이 호출 시, 에러가 발생한다.

따라서, 클래스를 사용하면 객체 생성이 안될 경우를 에러로 발견할 수 있다.

### for ... in 문

```javascript
// 생성자 함수로 생성한 객체
for (const p in mike) {
  console.log(p);
}
/**
 * name
 * age
 * showName
 */

// 클래스로 생성한 객체
for (const p in tom) {
  console.log(p);
}
/**
 * name
 * age
 */
```

생성자 함수로 생성한 객체를 `for ... in`문으로 순회하면 프로토타입의 프로퍼티까지 출력된다.

클래스로 생성한 객체를 `for ... in`문으로 순회하면 프로토타입의 프로퍼티를 출력하지 않는다.

<br />

## 상속

```javascript
// Car 클래스 생성
class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }

  drive() {
    console.log('drive..');
  }

  stop() {
    console.log('stop');
  }
}

// Car 클래스를 상속 받는 Bmw 클래스 생성
class Bmw extends Car {
  park() {
    console.log('park');
  }
}

const z4 = new Bmw('blue');

console.log(z4);
/**
 * Bmw {color: 'blue', wheels: 4}
 *  color: "blue"
 *  wheels: 4
 *  [[Prototype]]: Car
 *    constructor: class Bmw
 *    park: ƒ park()
 *    [[Prototype]]: Object
 *      constructor: class Car
 *      drive: ƒ drive()
 *      stop: ƒ stop()
 */
```

클래스에서 상속을 하기 위해서는 `extends` 키워드를 사용한다.

클래스에서 메소드는 프로토타입에 저장된다.

<br />

## 메소드 오버라이딩

```javascript
// Car2 클래스 생성
class Car2 {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }

  drive() {
    console.log('drive..');
  }

  stop() {
    console.log('stop');
  }
}

// Car2 클래스를 상속 받는 Bmw2 클래스 생성
class Bmw2 extends Car2 {
  park() {
    console.log('park');
  }
  // 상속 받은 클래스에 정의된 메소드와 동일한 이름의 메소드 정의
  stop() {
    console.log('off');
  }
}

const m4 = new Bmw2('blue');

console.log(m4.stop()); // off
```

상속 받은 클래스에 정의된 메소드와 동일한 이름의 메소드 정의하면 덮어씌워진다.

```javascript
// Car3 클래스 생성
class Car3 {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }

  drive() {
    console.log('drive..');
  }

  stop() {
    console.log('stop');
  }
}

// Car3 클래스를 상속 받는 Bmw2 클래스 생성
class Bmw3 extends Car3 {
  park() {
    console.log('park');
  }

  stop() {
    super.stop(); // // 부모 메소드 확장
    console.log('off');
  }
}

const m3 = new Bmw3('blue');

console.log(m3.stop());
/**
 * stop
 * off
 */
```

부모의 메소드를 확장하여 사용하고 싶다면 `super` 키워드를 사용하면 된다.

<br />

## 생성자 오버라이딩

```javascript
// Car4 클래스 생성
class Car4 {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }

  drive() {
    console.log('drive..');
  }

  stop() {
    console.log('stop');
  }
}

// Car4 클래스를 상속 받는 Bmw4 클래스 생성
class Bmw4 extends Car4 {
  constructor(color) {
    super(color);
    this.navigation = 1;
  }

  park() {
    console.log('park');
  }
}

const m5 = new Bmw4('blue');

console.log(m5);
```

상속 받은 클래스에서 생성자를 오버라이딩 하기 위해서는 `constructor` 함수에서 항상 `super();`로 부모 클래스의 `constructor`를 실행해줘야 하고, 부모 클래스 생성자에 매개변수가 있다면 동일하게 매개변수를 받아서, `super()`를 호출할 때, 매개변수를 넘겨줘야 한다.

```javascript
constructor(...args) {
  super(args);
}
```

상속 받은 클래스에 `constructor`가 따로 없다면, 위의 코드가 자동적으로 생성되어 실행되지만, `constructor`가 정의되면 위 코드가 자동적으로 생성되지 않기 때문에, 꼭 `super()`를 통해서 부모 클래스의 생성자를 호출해야 한다.

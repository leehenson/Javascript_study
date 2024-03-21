/**
 * 클래스
 */

// 생성자 함수로 객체 생성
const User = function (name, age) {
  this.name = name;
  this.age = age;
  this.showName = function () {
    console.log(this.name);
  };
};

const henson = new User('Henson', 29); // showName() 메소드가 객체 내부에 있다.

console.log(henson); // {name: 'Henson', age: 29, showName: ƒ}

// 클래스로 객체 생성
// new를 통해서 호출했을 때, 내부에서 정의된 내용으로 객체를 생성하는 것은 생성자 함수와 동일하다.
// class라는 키워드로 생성할 수 있고, 내부에 constructor는 객체를 생성해주는 생성자 메소드이다.
// new를 통해 호출하면, contructor 메소드가 자동으로 실행된다.
// 객체를 초기화하기 위한 기능이 constructor 메소드에 정의된다.
// constructor 메소드는 인자를 넘겨받을 수 있다.

/**
 * 클래스로 객체 생성
 *
 * new를 통해서 호출했을 때, 내부에서 정의된 내용으로 객체를 생성하는 것은 생성자 함수와 동일하다.
 * class라는 키워드로 생성할 수 있고, 내부에 constructor는 객체를 생성해주는 생성자 메소드이다.
 */
class User2 {
  /**
   * new를 통해 호출하면, contructor 메소드가 자동으로 실행된다.
   * 객체를 초기화하기 위한 기능이 constructor 메소드에 정의된다.
   * constructor 메소드는 인자를 넘겨받을 수 있다.
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  /**
   * 클래스 내에서 정의한 메소드는 생성한 객체의 프로토타입에 저장된다.
   */
  showName() {
    console.log(this.name);
  }
}

const tom = new User2('Tom', 19); // showName() 메소드가 프로토타입 내부에 있다.

console.log(tom);
/**
 * {name: 'Tom', age: 19}
 * [[Prototype]]: Object
 *  constructor: class User2
 *  showName: ƒ showName()
 *  [[Prototype]]: Object
 */

/**
 * 생성자 함수에서 클래스와 동일하게 동작하도록 변경
 */

const User3 = function (name, age) {
  this.name = name;
  this.age = age;
};

User3.prototype.showName = function () {
  console.log(this.name);
};

const mike = new User3('Mike', 30);

// new 키워드로 호출하지 않기 때문에, 객체를 반환 받지 않는다.
const mike2 = User3('Mike', 30);

console.log(mike2); // undefined, 잘못된 코드이지만, 에러가 발생하지 않는다.

const henson2 = User2('Henson', 29);

// 클래스는 new 키워드 없이 사용할 수 없다.
console.log(henson2); // TypeError

/**
 * 클래스로 생성한 객체의 constructor에는 class로 표시되어 있으며, 클래스는 new 키워드 없이 호출 시, 에러가 발생한다.
 */

// 생성자 함수로 생성한 객체를 for ... in문으로 순회하면 프로토타입의 프로퍼티까지 출력된다.
for (const p in mike) {
  console.log(p);
}
/**
 * name
 * age
 * showName
 */

// 클래스로 생성한 객체를 for ... in문으로 순회하면 프로토타입의 프로퍼티를 출력하지 않는다.
for (const p in tom) {
  console.log(p);
}
/**
 * name
 * age
 */

/**
 * 상속
 */

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
// 클래스에서 상속을 하기 위해서는 extends 키워드를 사용한다.
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

// 클래스에서 메소드는 프로토타입에 저장된다.

/**
 * 메소드 오버라이딩
 */

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

// 덮어씌워진다.
console.log(m4.stop()); // off

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
    // 부모의 메소드를 확장하여 사용하고 싶다면 super 키워드를 사용하면 된다.
    super.stop();
    console.log('off');
  }
}

const m3 = new Bmw3('blue');

console.log(m3.stop());
/**
 * stop
 * off
 */

/**
 * 생성자 오버라이딩
 */

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
    // 상속 받은 클래스에서 생성자를 오버라이딩 하기 위해서는 constructor 함수에서 항상 super();로 부모 클래스의 constructor를 실행해줘야 한다.
    // 부모 클래스가 매개변수를 받는다면, 똑같이 매개변수를 받고 매개변수를 넣어 호출해야 한다.
    super(color);
    this.navigation = 1;
  }

  park() {
    console.log('park');
  }
}

const m5 = new Bmw4('blue');

console.log(m5);

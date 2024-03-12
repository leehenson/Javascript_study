# 생성자 함수

### 객체 리터럴

```javascript
let user = {
  name: 'Henson',
  age: 29,
};
```

위와 같은 방식으로 객체를 만드는 것을 **객체 리터럴**이라고 한다.

<hr />

## 생성자 함수

비슷한 객체를 여러 개 만들어야 하는 상황에 사용하는 것이 **생성자 함수**이다.

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
}

let user1 = new User('Henson', 29);
let user2 = new User('Jane', 22);
let user3 = new User('Tom', 17);
```

생성자 함수는 보통 첫 글자를 대문자로 하여 함수를 만들어 준다.

`User()` 생성자 함수는 `name`과 `age`를 받아서 `this`에 넣어주고 있다.

`new` 연산자를 사용해서 함수를 호출한다.

### 생성자 함수 동작

```javascript
function User(name, age)  {
  this = {};  // 2. 빈 객체를 생성하고, this에 할당

  // 3. 함수 본문을 실행하면서, this에 프로퍼티들을 추가
  this.name = name;
  this.age = age;

  return this;  // 4. this를 반환
}

new User(); // 1. new 연산자로 생성자 함수 호출
```

1. `new` 연산자로 생성자 함수 호출
2. 빈 객체를 생성하고, `this`에 할당
3. 함수 본문을 싱행하면서, `this`에 프로퍼티들을 추가
4. `this`를 반환

2번과 4번의 코드는 실제 코드에 없지만, `new` 연산자로 생성자 함수를 호출하는 순간 위와 같은 알고리즘으로 동작한다.

이렇게 생성자 함수를 사용함으로써, 일일이 객체 리터럴로 객체를 생성하는 것보다 훨씬 빠르고, 일관성 있게 객체를 만들 수 있다.

또한, 객체의 프로퍼티를 변경할 일이 있으면 생성자 함수만 변경해주면 되기 떄문에, 유지보수도 편하다.

생성자 함수라고 특별한 점 없이, 어떤 함수라도 `new` 연산자를 붙여 호출만 해주면, 위와 같은 알고리즘으로 동작하기 때문에, 생성자 함수는 첫 글자를 대문자로 하는 것이 관레이다.

### 생성자 함수에 메소드 추가

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
  // 자신의 이름을 출력하는 sayName() 메소드
  this.sayName = function () {
    console.log(this.name);
  };
}

let user5 = new User('Han', 40);

user5.sayName(); // 'Han'
```

`this`로 할당된 객체에 `sayName()` 메소드를 추가하고, `user5` 객체를 생성한다.

`user5`의 `sayName()`을 호출하면, 객체의 `name`을 출력한다.

<br />

## 예제 코드

```javascript
// 함수 선언
function Item(title, price) {
  //this = {};  // new 연산자로 호출할 경우, 실행되는 코드

  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은 ${price}원 입니다.`);
  };

  // return this; // new 연산자로 호출할 경우, 실행되는 코드
}

const item1 = new Item('인형', 3000);
const item2 = Item('가방', 4000);
const item3 = new Item('지갑', 9000);

console.log(item1, item2, item3); // Item객체, undefined, Item객체

item3.showPrice(); // '가격은 9000원 입니다.'
```

`item2`를 선언 및 할당하는 부분과 같이 `new` 연산자를 붙이지 않고 함수를 호출하는 경우에, 그냥 함수를 실행만 하기에 반환 값이 없다. 따라서 `undefined`가 `item2`에 할달된다.

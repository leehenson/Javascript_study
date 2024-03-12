# 객체(Object) method / this

```javascript
// 슈퍼맨 객체
const superman = {
  name: 'clark',
  age: 30,
  fly: function () {
    console.log('날아갑니다.');
  },
};

// 슈퍼맨 객체의 flY() 메소드 호출
superman.fly(); // result => '날아갑니다.'
```

위와 같이 객체 프로퍼티로 할당된 함수를 `method(메소드)`라고 한다.

```javascript
// 슈퍼맨 객체
const superman = {
  name: 'clark',
  age: 30,
  fly() {
    console.log('날아갑니다.');
  },
};
```

`method`에서 `function` 키워드를 생략하여 `fly()`와 같이 줄여서 작성할 수 있다.

<br />

## 객체와 메소드의 관계

```javascript
const user = {
  name : 'Henson',
  sayHello: fucntion() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

user.sayHello();  // result => Hello, I'm Henson
```

`user`이름은 `Henson`이고, `sayHello`라는 메소드를 가지고 있는데, 메소드에서 객체의 `name` 프로퍼티를 사용하고 싶다면, `this`라는 키워드를 통해서 객체의 프로퍼티에 접근할 수 있다.

`user.sayHello()` 메소드를 호출하면 `.` 앞에 `user`가 `sayHello` 메소드의 `this`가 된다.

```javascript
const sayHello = function () {
  console.log(`Hello, I'm ${this.name}`);
};

let boy = {
  name: 'Mike',
  sayHello,
};

let girl = {
  name: 'Jane',
  sayHello,
};

boy.sayHello(); // result => Hello, I'm Mike
girl.sayHello(); // result => Hello, I'm Jane
```

`this`는 실행하는 시점 즉, 런타임에 결정된다.

`sayHello` 안에 `this`는 호출한 객체(`boy`, `girl`)이다.

```javascript
const sayHello = () => {
  console.log(`Hello, I'm ${this.name}`);
};
```

근데 만약 `sayHello` 메소드를 화살표 함수로 선언하게 되면 동작이 달라지게 된다.

화살표 함수는 일반 함수와 달리 자신만의 `this`를 가지지 않기 때문에, 화살표 함수 내부에서 `this`를 사용하면, 그 `this`는 외부에서 값을 가져온다.

```javascript
let boy = {
  name: 'Mike',
  sayHello: () => {
    console.log(this);
  },
};

boy.sayHello();
```

화살표 함수로 선언한 메소드에서 `this`를 사용하면 화살표 함수는 `this`를 가지지 않기 때문에, 호출한 `boy` 객체가 이닌 전역 객체를 가르키게 된다.

**참고로, 브라우저 환경에서의 전역 객체는 `window`이고, Node.js 환경에서는 `global`이 된다.**

<br />

## 예제코드

```javascript
// 객체 생성
let boy = {
  name: 'Henson',
  showName: function () {
    console.log(this.name);
  },
};

// 메소드 호출
boy.showName(); // result => 'Henson'

let man = boy; // man 변수에 boy 객체 할당
boy = null; // boy 객체 삭제

man.showName(); // result => 'Henson'
```

메소드 안에서는 객체를 직접 작성하는 것보다 호출한 객체를 가르키는 `this`를 활용하는 것이 좋다.

```javascript
let girl = {
  name: 'Jane',
  // 일반 함수로 메소드를 선언
  // sayThis: function () {
  //   console.log(this);
  // },

  // 화살표 함수로 메소드를 선언
  sayThis: () => {
    console.log(this);
  },
};

girl.sayThis();
```

일반 함수로 메소드를 선언한 경우에 `this`는 호출한 `girl` 객체를 반환하지만, 화살표 함수로 메소드를 선언한 경우에, `this`는 호출한 객체가 아닌 `window` 전역 객체를 반환

정리하자면, 객체의 메소드에서 `this`를 사용할 떄에는 화살표 함수가 아닌 일반 함수로 선언하는 것이 좋다.

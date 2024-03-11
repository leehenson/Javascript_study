# 객체 Object

```javascript
// superman 객체 생성
const superman = {
  name: 'clark', // key와 value로 이루어진 property
  age: 33,
};
```

객체는 `{}(중괄호)`로 작성하고, `key(키)`와 `value(값)`으로 구성된 `property(프로퍼티)`가 들어간다.

각 프로퍼티는 `.(쉼표)`로 구분하고, 마지막 프로퍼티에는 `,`가 들어가지 않아도 되지만, 있는 것이 나중에 수정 및 삭제, 이동할 떄 용이하다.

<br />

## 객체 접근, 추가, 삭제

### 접근

```javascript
superman.name; // 'clark'
superman['age']; // 33
```

객체의 프로퍼티에 접근하기 위해서는 `.`이나, `[]`로 접근할 수 있다.

### 추가

```javascript
superman.gender = 'male';
superman['hairColor'] = 'black';
```

객체에 프로퍼티 추가도 `.`이나 `[]`로 추가할 수 있다.

### 삭제

```javascript
delete superman.hairColor;
```

`delete` 키워드를 삭제하고 싶은 프로퍼티 앞에 입력하여 삭제할 수 있다.

<br />

## 단축 프로퍼티

단축 프로퍼티를 활용하면 보다 간단하게 객체를 작성할 수 있다.

```javascript
// 변수
const name = 'clark';
const age = 33;
```

위와 같은 변수가 선언되어있고,

```javascript
const superman = {
  name : name,
  age : age,
  gender : 'male'.
}
```

위와 같이 선언되어있는 변수롤 활용하여 만들어지는 객체가 있습니다. 이런 객체 선언을 좀 더 간편하게 하고 싶다면,

```javascript
const superman = {
  name, // name : name,
  age, // age : age,
  gender: 'male',
};
```

위와 같이 간단하게 선언할 수 있습니다. 객체 선언에서 `name,`은 `name : name,`과 같습니다.

<br />

## 프로퍼티 존재 여부 확인

```javascript
const superman = {
  name: 'clark',
  age: 33,
};

// 존재하지 않은 프로퍼티에 접근
superman.birthDay; // undefined
```

존재 하지 않은 프로퍼티에 접근하면 에러가 발생하지 않고, `undefined`가 발생한다.

```javascript
'birthDay' in superman; // false

'age' in superman; // true
```

프로퍼티에 접근하기 전에 `in` 연산자를 사용하여, 해당 프로퍼티가 객체에 존재하는지 확인할 수 있다.

`in` 연산자는 어떤 값이 넘어올지 확신할 수 없을 때 예를 들어, 함수의 인자로 받거나 API 통신을 통해 데이터를 받아올 때 사용하면 된다.

<br />

## for ... in 반복문

```javascript
for (let key in superman) {
  console.log(key);
  console.log(superman[key]);
}
```

`fot ... in` 반복문을 사용하면 객체를 순회하면서 값을 얻을 수 있기 때문에, `for`문 보다 간단하게 사용할 수 있다.

<br />

## 예제 코드

### 객체

```javascript
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
```

```javascript
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
```

보통 `.`이나 `[]`로 확인이 가능하기에 이러한 확인 방법은 실용적이지 않다.

### 객체 in

```javascript
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
```

### 객체 for ... in

```javascript
// key는 Mike가 가지고 있는 property를 의미
for (key in Mike) {
  console.log(Mike[key]); // result => Mike, 30 / Mike['name'], Mike['age']
}
```

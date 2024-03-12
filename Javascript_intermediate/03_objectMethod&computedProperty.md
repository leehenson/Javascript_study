# 객체 메소드와 계산된 프로퍼티

## Computed property

```javascript
let a = 'age';

const user = {
  name: 'Henson',
  age: 29,
};
```

위 코드에 `a`라는 변수가 있고, `user`라는 객체가 있다.

```javascript
let a = 'age';

const user = {
  name: 'Henson',
  [a]: 29, // age: 30
};
```

`user` 객체에 `age`라는 key 대신 `[a]`와 같이 사용해도 된다.

변수를 `[]`로 묶어주면, `a`라는 문자열이 아니라 `a` 변수에 할당된 값이 들어가게 된다.

이것을 **computed property(계산된 프로퍼티)** 라고 부른다.

```javascript
const user = {
  [1 + 4]: 5,
  ['안녕' + '하세요']: 'Hello',
};

// {5: 5, 안녕하세요: 'Hello'}
```

위와 같이 식 자체를 넣는 것도 가능하다.

<br />

## 객체 메소드

### Obeject.assign()

`Object.assign()`은 객체를 복제할 수 있다.

```javascript
const user = {
  name: 'Henson',
  age: 29,
};

const cloneUser = user; // 복제 안됨
```

`user`라는 객체를 `const cloneUser = user;`를 통해서는 복제가 불가능하다. 왜냐하면 `user` 변수에는 객체 자체가 들어가 있는 것이 아니라, 객체가 저장되어 있는 메모리 주소인 객체에 대한 참조값이 저장되기 떄문이다.

따라서, `const cloneUser = user;`를 하게 되면, 객체가 복사되어 `cloneUser`에 할당되는 것이 아니라, 객체를 가르키는 참조값만 복사되어 할당된다.

```javascript
const user = {
  name: 'Henson',
  age: 29,
};

const cloneUser = user;

cloneUser.name = 'Tom';

console.log(user.name); // 'Tom'
```

`const cloneUser = user;`는 한 객체를 `user`와 `cloneUser` 두 개의 변수가 가르키게 하는 것이기 때문에, 위 코드와 같이 `cloneUser`를 통해 `name`을 변경해주었는데, `user`의 `name`값도 `Tom`으로 변경되는 것을 확인할 수 있다.

```javascript
const newUser = Object.assign({}, user);

// {} + {name: 'Henson', age: 29} = {name: 'Henson', age: 29}
```

똑같은 객체를 복제하기 위해서는 `Object.assign()` 메소드를 사용해야 한다.

`Object.assign()` 메소드의 첫 번째 인자 `{}(빈 객체)`는 초기값이며, 두 번째 인자인 객체와 초기값이 병합된다.

`{}(빈 객체)`에 `user`가 병합되므로, 객체가 복제가 된다.

```javascript
const newUser = Object.assign({}, user);

newUser.name = 'Tom';

console.log(user.name); // 'Henson'
```

`Object.assign()`으로 객체를 복제 후, 복제한 객체의 `name`값을 바꿔도, `user`의 `name`값은 바뀌지 않는다.

따라서, `newUser`와 `user`는 같은 객체가 이나고, 복제가 되었음을 알 수 있다.

```javascript
Object.assign({ gender: 'male' }, user);

// {gender: 'male', name: 'Henson', age: 29}
```

`Object.assign({gender: 'male'}, user);` `gender`라는 프로퍼티를 가지고 있는 객체에 `user` 객체를 병합하여, 총 3개의 프로퍼티를 가진 객체를 만들 수 있다.

```javascript
Object.assign({ name: 'Tom' }, user);

// {name: 'Henson', age: 29}
```

만약 `Object.assign()` 메소드의 초기값 property key와 복제할 객체의 property key가 같다면, 복제할 객체의 property로 덮어쓰게 된다.

```javascript
const user = {
  name: 'Henson',
};

const info1 = {
  age: 29,
};

const info2 = {
  gender: 'male',
};

Object.assign(user, info1, info2);

// {name: 'Henson', age: 29, gender: 'male'}
```

두 개 이상의 객체도 합칠 수 있다.

### Object.keys()

`Object.keys()` 메소드는 객체 property의 key를 배열로 반환한다.

```javascript
const user = {
  name: 'Henson',
  age: 29,
  gender: 'male',
};

Object.keys(user);

// ['name', 'age', 'gender']
```

### Object.values()

`Object.values()` 메소드는 객체 property의 value를 배열로 반환한다.

```javascript
const user = {
  name: 'Henson',
  age: 29,
  gender: 'male',
};

Object.values(user);

// ['Henson', 29, 'male']
```

### Object.entries()

`Object.entries()` 메소드는 property의 key와 value를 쌍으로 묶어서 배열로 반환한다.

```javascript
const user = {
  name: 'Henson',
  age: 29,
  gender: 'male',
};

Object.entries(user);

/**
 * [
 *  ['name', 'Henson'],
 *  ['age', 29],
 *  ['gender', 'male']
 * ]
 * /
```

배열 안에 각 key와 value가 들어있는 배열 3개가 들어있다.

### Object.fromEntries()

`Object.fromEntries()` 메소드는 key와 value를 쌍으로 묶은 배열을 객체로 만들어준다.

```javascript
const arr =
[
  ['name', 'Henson'],
  ['age', 30],
  ['gender', 'male']
];

Object.fromEntries(arr);

/**
 * {
 *  name: 'Henson',
 *  age: 30,
 *  gender: 'male',
 * }
 * /
```

<br />

## 예제 코드

### computed property(계산된 프로퍼티)

```javascript
let n = 'name';
let a = 'age';

const user = {
  [n]: 'Henson', // name: 'Henson'
  [a]: 29, // age: 29
  [1 + 4]: 5, // 5: 5
};

console.log(user); // {name: 'Henson', age: 29, 5: 5}

// 객체를 만들어주는 함수
function makeObj(key, val) {
  return {
    [key]: val,
  };
}

const obj = makeObj('나이', 29); // 첫 번재 인자의 값이 key가 된다.

console.log(obj); // {나이: 29}
```

computed property(계산된 프로퍼티) 같은 경우 어떤 것이 `key`가 될지 모르는 객체를 만들 때 유용하다.

### object method(객체 메소드)

```javascript
const user2 = {
  name: 'Henson',
  age: 29,
};

const user3 = user2;
user3.name = 'Tom'; // user3를 통해 name property의 value 변경

console.log(user2); // {'name': 'Tom', 'age': 29}
console.log(user3); // {'name': 'Tom', 'age': 29}
```

변수에 객체를 그냥 할당해주면, 객체 복제가 아닌 객체를 가르키는 주소값을 할당받게 된다.

### Object.assign()

```javascript
const user4 = {
  name: 'Henson',
  age: 29,
};

const user5 = Object.assign({}, user4); // 객체 복제
user5.name = 'Tom'; // 복제한 user5 객체의 name property의 value 변경

// 기존 객체의 name property의 value가 바뀌지 않는다.
console.log(user4); // {'name': 'Henson', 'age': 29}
console.log(user5); // {'name': 'Tom', 'age': 29}
```

`Object.assign()` 메소드를 통해 객체를 복제할 수 있다.

### Object.keys()

```javascript
const user2 = {
  name: 'Henson',
  age: 29,
};

const result = Object.keys(user); // 객체의 key만 배열로 반환

console.log(result); // ['name', 'age']
```

### Object.values()

```javascript
const user2 = {
  name: 'Henson',
  age: 29,
};

const result2 = Object.values(user); // 객체의 value만 배열로 반환

console.log(result2); // ['Henson', 29]
```

### Object.entries()

```javascript
const user2 = {
  name: 'Henson',
  age: 29,
};

const result3 = Object.entries(user); // 객체의 key와 value를 2차원 배열로 변환하여 반환

console.log(result3);
/**
 * [
 *  ['name', 'Henson'],
 *  ['age', 29]
 * ]
 */
```

### Object.fromEntries()

```javascript
let arr = [
  ['mon', '월'], // [key, value]
  ['tue', '화'],
];

const result4 = Object.fromEntries(arr); // 2차원 배열을 객체로 변환하여 반환

console.log(arr); // {mon: '월', tue: '화'}
```

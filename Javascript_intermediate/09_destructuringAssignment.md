# 구조 분해 할당

구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 잇게 하는 표현식이다.

<br />

## 배열 구조 분해

```javascript
let [x, y] = [1, 2];

console.log(x); // 1
console.log(y); // 2
```

위의 `x`에 `1`이 들어가고, `y`에 `2`가 들어간다.

```javascript
let users = ['Henson', 'Tom', 'Jane'];

let [user1, user2, user3] = users;

console.log(user1); // 'Henson'
console.log(user2); // 'Tom'
console.log(user3); // 'Jane'
```

`users`라는 배열이 있고, 세 명의 이름이 있다.

`user1`, `user2`. `user3`라는 변수를 `[]`로 묶어서 선언하고, `users` 배열을 할당해준다.

위 코드의 의미는 아래의 코드와 똑같다.

```javascript
let user1 = users[0];
let user2 = users[1];
let user3 = users[2];
```

`user1`에는 `users` 배열의 첫 번째 요소, `user2`에는 `users` 배열의 두 번째 요소, `user3`에는 `users` 배열의 세 번째 요소가 할당된다.

```javascript
let str = 'Henson-Tom-Jane';

let [user1, user2, user3] = str.split('-');

console.log(user1); // 'Henson'
console.log(user1); // 'Tom'
console.log(user1); // 'Jane'
```

문자열을 인자로 받은 기준으로 나누어 배열로 만들어주는 `str.split()` 메소드를 통해 문자열을 구조 분해 할당할 수 있다.

### 배열 구조 분해 : 기본값

```javascript
let [a, b, c] = [1, 2];
```

`a`에는 `1`이 들어가고, `b`에는 `2`가 들어간다.

값이 없는 `c`에는 `undefined`가 들어간다.

```javascript
let [a = 3, b = 4, c = 5] = [1, 2];

console.log(a); // 1
console.log(b); // 2
console.log(c); // 6
```

`undefined`가 할당되어 에러가 발생할 수 있으므로, 위와 같이 기본값을 주어, 에러를 미연에 방지할 수 있다.

**배열 구조 분해의 기본값**은 구조 분해 할당을 받을 각 변수에 미리 기본값을 세팅하는 것이다. 만약 값이 `undefined`이면 세팅된 기본값으로 할당을 해준다.

위 코드를 보면 `a`에는 `1`이, `b`에는 `2`가 잘 할당되었고, 값이 따로 없는 `c`에는 기본값인 `5`가 할당된 것을 확인할 수 있다.

### 배열 구조 분해 : 일부 반환값 무시

```javascript
let [user1, , user2] = ['Henson', 'Tom', 'Jane', 'Tony'];

console.log(user1); // 'Henson'
console.log(user2); // 'Jane'
```

공백과 `,`를 이용해서 필요하지 않은 배열 요소를 무시할 수 있다.

배열의 첫 번째 요소는 `user`에 할당되고, 두 번째 요소는 생략하고, 세 번째 요소는 `user2`에 할당되고, 네 번째 요소는 사용하는 곳이 없기 때문에 무시된다.

### 배열 구조 분해 : 바꿔치기

```javascript
let a = 1;
let b = 2;

let c = a;
a = b;
b = c;
```

이미 할당된 변수를 바꾸려면, 기존의 값을 잠시 저장해둘 변수가 하나 더 필요했다.

```javascript
[a, b] = [b, a];
```

하지만 구조 분해 할당으로 위와 같이 간단하게 변수의 값을 바꿔처기 할 수 있다.

<br />

## 객체 구조 분해

```javascript
let user = { name: 'Henson', age: 29 };

let { name, age } = user;

console.log(name); // 'Henson'
console.log(name); // 29
```

`user` 객체에 `name`과 `age` 프로퍼티가 있다.

`{}`로 변수를 감싸서 선언하고, `user` 객체를 할당해준다.

위의 코드는 아래 코드와 같다.

```javascript
let name = user.name;
let age = user.age;
```

```javascript
let user = { name: 'Henson', age: 29 };

let { age, name } = user;

console.log(name); // 'Henson'
console.log(name); // 29
```

배열 구조 분해 할당과 비슷하게 동작하는데, 객체 구조 분해 할당은 배열 구조 분해 할당과 달리 순서를 신경쓰지 않아도 된다.

`let { age, name } = user;`와 같이 순서를 바꿔도 동일하게 동작한다.

### 객체 구조 분해 : 새로운 변수 이름으로 할당

```javascript
let user = { name: 'Henson', age: 29 };

let { name, age } = user;
```

객체 구조 분해를 할 때, 프로퍼티 키값을 무조건 사용해야 하는 것은 아니다.

```javascript
let user = { name: 'Henson', age: 29 };

let { name: userName, age: userAge } = user;

console.log(userName); // 'Henson'
console.log(userAge); // 29
```

변수의 이름을 위와 같이 바꿀 수 있다.

`user` 객체의 `name` 프로퍼티를 `userName`이라는 이름으로 사용할 수 있다.

### 객체 구조 분해 : 기본값

```javascript
let user = { name: 'Henson', age: 29 };

let { name, age, gender } = user;
```

배열 구조 분해와 마찬가지로 객체 구조 분해를 할 때에도 기본값을 줄 수 있다.

`gender` 변수는 아무것도 해당되는 것이 없어서, `undefined`가 할당된다.

```javascript
let { name, age, gender = 'male' } = user;
```

기본값을 통해 `user` 객체에 `gender` 프로퍼티가 없으면 `gender`에 `male`이 기본적으로 할당된다.

```javascript
let user = {
  name: 'Jane',
  age: 18,
  gender: 'female',
};

let { name, age, gender = 'male' } = user;

console.log(gender); // 'female'
```

만약 위와 같이 `user` 객체에 `gender` 프로퍼티가 있다면, 그 값이 사용되고, 객체로 받은 값이 `undefined`일 경우에만 기본값이 할당된다.

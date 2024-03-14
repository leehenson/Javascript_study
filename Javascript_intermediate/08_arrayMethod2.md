# 배열 메소드2

<br />

## arr.sort()

`arr.sort()`는 배열을 재정렬해준다. 배열 자체가 변경되니 주의해야 한다.

`arr.sort()`는 인자로 정렬 로직을 담은 함수를 받는다.

```javascript
let arr = [1, 5, 4, 2, 3];

arr.sort();

console.log(arr); // [1, 2, 3, 4, 5]
```

```javascript
let arr2 = ['a', 'c', 'd', 'e', 'b'];

arr2.sort();

console.log(arr2); // ['a', 'b', 'c', 'd', 'e']
```

```javascript
let arr3 = [27, 8, 5, 13];

arr3.sort();

console.log(arr3); // [13, 27, 5, 8]
```

정렬할 때 요소룰 문자로 취급하기 때문에, 숫자를 정렬할 때 순서가 뒤죽박죽이다.

```javascript
let arr4 = [27, 8, 5, 13];

arr4.sort((a, b) => {
  console.log(a, b);
  return a - b;
});

// 8, 27, 5, 13
// 5, 8, 27, 13
// 5, 8, 13, 27

console.log(arr4); // [5, 8, 13, 27]
```

`a`와 `b`를 빼서, 음수가 나올 경우에, `b`를 `a`의 앞으로 옮긴다.

### Lodash

`arr.sort(fn)` 메소드로 정렬을 하기 위해서는 원하는 정렬 로직을 함수로 구현을 해줘야 한다.

그래서 유용한 기능을 모아놓은 [Lodash](https://lodash.com/)와 같은 라이브러리를 많이 사용한다.

**Lodash**는 `_.sortBy(arr);`로 간단하게 이용할 수 있고, 어떤 로직이 들어가 있는지 신경쓰지 않아도 되고, 숫자든, 문자든, 객체든, 원하는 기준으로 정렬을 해준다.

실무에서도 Lodash는 많이 사용된다.

<br />

## arr.reduce()

`arr.reduce()`는 배열을 순회하면서 원하는 작업을 하고 최종값을 반환한다.

### 배열의 모든 수 합치기

```javascript
let arr5 = [1, 2, 3, 4, 5];

// for, for of, forEach

let result = 0;
arr5.forEach((num) => {
  result += num;
});

console.log(result); // 15
```

```javascript
let arr5 = [1, 2, 3, 4, 5];

let result2 = arr5.reduce((prev, cur) => {
  return prev + cur;
}, 0);

console.log(result2); // 15
```

`arr.reduce()`는 첫 번째 인자로 콜백함수를 받는데, 콜백함수의 첫 번째 매개변수는 누적 계산값이고, 두 번째 매개변수는 현재값이다.

두 번째 인자로는 초기값을 받는다. 설정하지 않으면, 배열의 첫 번째 요소가 들어간다.

위 두 번째 코드를 보면, `result2`의 초기값은 `0`이고, `reduce()`를 통해 `arr5` 배열을 순회하면서, 현재값 `cur`를 누적 계산값 `prev`에 더해서 그 결과를 반환을 반복한다.

### 성인만 추출

```javascript
let userList = [
  { name: 'Henson', age: 29 },
  { name: 'Tom', age: 10 },
  { name: 'Jane', age: 27 },
  { name: 'Sue', age: 26 },
  { name: 'Harry', age: 42 },
  { name: 'Steve', age: 60 },
];

// 성인만 뽑아서 새로운 배열을 반환
let result3 = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(result3); // ['Henson', 'Jane', 'Sue', 'Harry', 'Steve']
```

`result3`의 초기값은 `[]` 빈 배열이다.

`reduce()`를 통해 `userList` 배열을 순회하면서, 배열 요소인 객체의 `age`가 `19`보다 크다면, 요소 객체의 `name`값만 누적 계산값 `prev`(새로운 배열)에 `push()`하여, 반환한다.

### userList 배열 요소 객체의 age 합 구하기

```javascript
let userList = [
  { name: 'Henson', age: 29 },
  { name: 'Tom', age: 10 },
  { name: 'Jane', age: 27 },
  { name: 'Sue', age: 26 },
  { name: 'Harry', age: 42 },
  { name: 'Steve', age: 60 },
];

// userList 배열 요소 객체의 age 합 구하기
let result4 = userList.reduce((prev, cur) => {
  return (prev += cur.age);
}, 0);

console.log(result4); // 194
```

### 이름이 3자리인 사람 구하기

```javascript
let userList = [
  { name: 'Henson', age: 29 },
  { name: 'Tom', age: 10 },
  { name: 'Jane', age: 27 },
  { name: 'Sue', age: 26 },
  { name: 'Harry', age: 42 },
  { name: 'Steve', age: 60 },
];

let result5 = userList.reduce((prev, cur) => {
  if (cur.name.length === 3) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(result5); // ['Tom', 'Sue']
```

<br />

## arr.reduceRight()

`arr.reduceRight()`는 `arr.reduce()`와 기능이 동일하지만, 배열의 우측부터 실행한다는 차이가 있다.

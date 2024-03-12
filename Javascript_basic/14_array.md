# 배열 array

**배열**은 순서가 있는 리스트이다.

```javascript
let students = ['철수', '영희', ... , '영수'];
```

배열은 `[](대괄호)`로 묶어주고, `,(쉼표)`로 구분해서 만들 수 있다.

배열을 탐색할 때는 고유번호를 사용하는데, 이것을 `index`라고 한다.

`index`는 0부터 시작한다.

```javascript
console.log(students[0]); // 철수
console.log(students[1]); // 영희
console.log(students[29]); // 영수
```

`students[0]`와 같이 배열명 뒤에 `[]`와 `index`를 이용해서 접근할 수 있다.

```javascript
students[0] = '민정';
console.log(students); // ['민정', '영희', ... , '영수']
```

`students[0] = '민정'` 이와 같은 방법으로 수정이 가능하며, `students` 배열의 값이 `철수`에서 `민정`으로 바뀐 것을 확인할 수 있다.

<br />

## 배열의 특징

배열은 문자 뿐만 아니라 **숫자, 객체, 함수, 등**도 포함할 수 있다.

```javascript
let arr = [
  '민수',
  3,
  false,
  {
    name: 'Henson',
    age: 30,
  },
  function () {
    console.log('TEST');
  },
];
```

`length`를 통해서 배열의 길이를 구할 수 있다.

```javascript
students.length; // 30
```

`length`를 호출한 배열이 가지고 있는 요소의 개수를 반환한다.

<br />

## 배열의 메소드

```javascript
let days = ['월', '화', '수'];

days.push('목');
console.log(days); // ['월', '화', '수', '목']
```

`push()`는 배열 제일 뒤에 요소를 추가해주는 메소드이다.

```javascript
let days = ['월', '화', '수'];

days.pop();
console.log(days); // ['월', '화']
```

`pop()`은 배열 끝에 요소를 제거한다.

```javascript
// 추가
days.unshift('금', '토', '일');
console.log(days); // ['금', '토', '일', '월', '화', '수']

// 제거
days.shift();
console.log(days); // ['월', '화', '수']
```

`shift`와 `unshift`는 배열의 제일 앞에 요소를 제거 및 추가하며, 여러 요소를 한번에 제거 및 추가를 할 수 있다.

<br />

## 반복문

### for

배열을 사용하는 가장 큰 이유 중 하나는 반복을 위해서이다. `length`를 통해 배열의 길이를 알고 있으므로, `for`문을 쓸 수 있다.

```javascript
let days = ['월', '화', '수'];

for (let index = 0; index < days.length; index++) {
  console.log(days[index]);
}
```

`for`문에 배열을 사용할 때, 배열의 `index`는 0부터 시작히기에 `for`의 초기값을 `0`으로 해주고, 조건에는 `index < days.length` 배열의 길이만큼 반복하도록 넣어주고, `index`를 1씩 증가시켜주면 배열의 길이만큼 반복하게 된다.

### for ... of

객체를 순회하는 `for ... in`문과 헷갈리지 않게 주의해야 한다.

배열도 객체이기 때문에 `for ... in`를 사용해도 되긴하지만, 장점보다 단점이 더 많기 때문에 권장하지 않는다. 따라서, 배열은 `for ... of`를 사용하는 것이 좋다.

```javascript
let days = ['월', '화', '수'];

for (let day of days) {
  console.log(day);
}
```

`days` 배열을 돌면서 배열의 요소를 `day`라는 변수로 접근할 수 있다.

`for`문보다 간단하지만, `index`를 얻을 수 없다는 단점이 있다.

<br />

## 예제 코드

```javascript
let days = ['mon', 'tue', 'wed'];

console.log(days[1]); // result => tue, 두 번째 요소 출력

days[1] = '화요일'; // 두 번째 요소값 변경

console.log(days); // result => ['mon', '화요일', 'wed'], 두 번째 요소 값 변경됨

console.log(days.length); // result => 3, days 배열의 길이 출력

days.push('thu'); // days 배열 제일 뒤에 thu 추가

console.log(days); // result => ['mon', '화요일', 'wed', 'thu'], 배열 제일 뒤에 thu 추가

days.unshift('sun'); // 배열 제일 앞에 sun 추가

console.log(days); // result => ['sun', 'mon', '화요일', 'wed', 'thu'], 배열 제일 앞에 sun 추가
```

### 반복

```javascript
// for문 사용
for (let index = 0; index < days.length; index++) {
  console.log(days[index]);
}
/**
 * reuslt =>
 * 'sun'
 * 'mon'
 * '화요일'
 * 'wed'
 * 'thu'
 */

// for ... of 사용
for (let day of days) {
  console.log(day);
}
/**
 * reuslt =>
 * 'sun'
 * 'mon'
 * '화요일'
 * 'wed'
 * 'thu'
 */
```

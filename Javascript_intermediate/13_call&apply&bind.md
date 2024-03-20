# call, apply, bind

Javascript에서는 일반적인 방법 외에도 함수를 어디서 어떻게 호출했는지에 관계없이 `this`가 무엇인지 지정할 수 있다.

<br />

## call

`call` 메소드는 모든 함수에서 사용할 수 있으며, `this`를 특정값으로 지정할 수 있다.

```javascript
const henson = {
  name: 'Henson',
};

const tom = {
  name: 'Tom',
};

function showThisName() {
  console.log(this.name);
}

showThisName(); //  ''
showThisName.call(henson); // 'Henson'
showThisName.call(tom); // 'Tom'
```

`showThisName.call(henson);`와 같이 함수를 호출하면서 `call()`를 사용하고, 인자에 `this`로 사용할 객체를 넘기면, 해당 함수가 인자로 넘긴 객체의 메소드인 것처럼 사용할 수 있다.

```javascript
const henson = {
  name: 'Henson',
};

const tom = {
  name: 'Tom',
};

// 생년과 직업을 받아서 객체의 정보를 새로운 정보로 업데이트
function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(henson, 1996, 'developer');
console.log(henson); // {name: 'Henson', birthYear: 1996, occupation: 'developer'}

update.call(tom, 2002, 'cheif');
console.log(tom); // {name: 'Tom', birthYear: 2002, occupation: 'cheif'}
```

`call()`의 첫 번째 매개변수는 `this`로 사용할 값이고, 두 번째 매개변수부터는 호출한 함수의 매개변수로 전달된다.

<br />

## apply

`apply`는 함수 매개변수를 처리하는 방법을 제외하면 `call`과 완전히 같다.

`call`은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, `apply`는 매개변수를 배열로 받는다.

```javascript
const henson = {
  name: 'Henson',
};

const tom = {
  name: 'Tom',
};

// 생년과 직업을 받아서 객체의 정보를 새로운 정보로 업데이트
function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

// call을 apply로 변경하고, 매개변수를 배열로 변경
update.apply(henson, [1996, 'developer']);
console.log(henson); // {name: 'Henson', birthYear: 1996, occupation: 'developer'}

update.apply(tom, [2002, 'cheif']);
console.log(tom); // {name: 'Tom', birthYear: 2002, occupation: 'cheif'}
```

`update.call(henson, 1996, 'developer');` 부분에서 `call`을 `apply`로 바꿔주고, 매개변수 부분을 하나의 배열로 변경해주면, `call`과 동일하게 동작한다.

`apply`는 배열 요소를 함수의 매개변수로 사용할 때 유용하다.

<br />

## 예제 코드

```javascript
const nums = [3, 10, 1, 6, 4];

const minNum1 = Math.min(3, 10, 1, 6, 4);
const maxNum1 = Math.max(3, 10, 1, 6, 4);

console.log(minNum1); // 1
console.log(maxNum1); // 10

const minNum2 = Math.min([3, 10, 1, 6, 4]); // 배열로 변경
const maxNum2 = Math.max(3, 10, 1, 6, 4);

console.log(minNum2); // NaN
console.log(maxNum2); // 10

const minNum3 = Math.min(nums);
const maxNum3 = Math.max(nums);

console.log(minNum3); // NaN
console.log(maxNum3); // NaN

const minNum4 = Math.min(...nums);
const maxNum4 = Math.max(...nums);

console.log(minNum4); // 1
console.log(maxNum4); // 10

const minNum5 = Math.min.apply(null, nums);
const maxNum5 = Math.max.apply(null, nums);

console.log(minNum5); // 1
console.log(maxNum5); // 10

const minNum6 = Math.min.call(null, ...nums);
const maxNum6 = Math.max.call(null, ...nums);

console.log(minNum6); // 1
console.log(maxNum6); // 10
```

`call()`과 `apply()`는 동작방식은 같다.

다만, 매개변수를 받는 방법만 다르다.

`call()`은 매개변수를 순서대로 직접 받고, `apply()`는 배열 형태로 받는다.

<br />

## bind

`bind`는 함수의 `this`값을 영구히 바꿀 수 있다.

```javascript
const henson = {
  name: 'Henson',
};

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

const updateHenson = update.bind(henson);

updateHenson(1980, 'police');
console.log(henson);
```

`bind()`는 새로 바인드한 함수를 만든다.

만들어진 함수는 항상 `this`를 `henson`으로 받는다.

```javascript
const user = {
  name: 'Henson',
  showName: function () {
    console.log(`hello, ${this.name}`);
  },
};

user.showName(); // 'hello, Henson'

// fn 변수에 user객체의 showName 메소드를 할당
let fn = user.showName;

// 메소드를 할당하면서 this를 잃어버림
fn(); // 'hello, '

fn.call(user); // 'hello, Henson'
fn.apply(user); // 'hello, Henson'

// bind로 fn의 this를 user값을 갖도록 함
let boundFn = fn.bind(user);

boundFn(); // // 'hello, Henson'
```

`bind()`없이 메소드를 그냥 할당을 하게되면, 할당 받은 객체는 `this`의 값을 잃어버리게 된다.

`bind()`를 통해 `this`의 값을 원하는 값으로 지정한 채로 할당할 수 있다.

# 자료형

<br />

## 문자형 String

``` javascript
const name = "Mike";  // 문자형 String
```

`name` 변수 안에 `Mike`라는 데이터를 `""(따옴표)`로 감싸주었는데, `""(따옴표)`로 감싼 데이터는 문자형 데이터타입이다.

문자형은 세 가지 방식으로 작성할 수 있다.

``` javascript
const name1 = "Mike"; // 큰 따옴표
const name2 = 'Mike'; // 작은 따옴표
const name3 = `Mike`; // 백틱
```

``` javascript
const message1 = "I'm a boy.";
const message2 = 'I\'m a boy.'; // '(작음 따옴표) 앞에 \(역슬래시)를 넣어주면 특수문자로 인식한다.

const message3 = `My name is ${name}`; // `${}` 괄호 안에 변수를 넣어주면 문자열 안에서 변수를 표현할 수 있다.
console.log(message3);

const message4 = `나는 ${30 + 1}살 입니다.`;  // `${}` 안에 바로 표현식을 사용할 수도 있다.
console.log(message4);
```

`""(큰 따옴표)`와 `''(작은 따옴표)`는 큰 차이가 없는데, 만약 `''(작은 따옴표)`를 사용할 일이 생기면, 위와 같이 `""(큰 따옴표)`로 감싸줘서 사용하는 것이 편하다.

만약 `''(작은 따옴표)`만 사용하고 싶다면, `message2`처럼 `'(작음 따옴표)` 앞에 `\(역슬래시)`를 넣어주면 특수문자로 인식한다.

\`(백틱)은 문자열 내부에 변수를 표현할 떄 사용하면 편리하다.

`${}` 괄호 안에 변수를 넣어주면 문자열 안에서 변수를 표현할 수 있다.

`message4`처럼 `${}` 안에 바로 표현식을 사용할 수도 있다.

</br />

## 숫자형 Number

``` javascript
const age = 30; // 숫자형 Number
const PI = 3.14;  // 소수점 표현도 가능하다.

// 숫자형은 사칙연산이 가능하다.
console.log(1 + 2); // 더하기
console.log(10 - 3); // 빼기
console.log(3 * 2); // * 곱하기
console.log(6 / 3); // / 나누기
console.log(6 % 3); // % 나머지


```

`age`와 같이 `""(큰 따옴표)`와 `''(작은 따옴표)` \`(백틱)없이 숫자만 들어간 것을 숫자형이라고 한다.

`PI`처럼 소수점 표현도 가능하다.

숫자형의 특징으로는 사칙연산이 가능하다.

``` javascript
const x = 1 / 0;  // ???
console.log(x); // result => Infinity

const name4 = "Mike";
const y = name4 / 2;

console.log(y); // result => NaN
```

숫자를 0으로 나누면 무한대를 얻을 수 있다.

문자를 숫자로 나누면 `NaN`이 출력되며, `NaN`은 Not a Number의 약자로 숫자가 아니라는 뜻이다.

숫자와 관련된 작업을 할 때, `NaN`이 아닌지 항상 염두하면서 작업을 해야 한다.

<br />

## 불형 Boolean

``` javascript
const a = true; // 참
const b = false;  // 거짓
```

Boolean은 논리적인 요소를 나타내고, `true`는 참, `false`는 거짓, 이렇게 두 가지가 있다.

``` javascript
const name5 = "Mike";
const age2 = 30;

console.log(name5 == 'Mike'); // result => true
console.log(age2 > 40); // result => false
```

`name5`이 `Mike`인지 확인하는데, `name5`의 값은 `Mike`이기 때문에 `true`가 출력되고,  `age2`가 `40`보다 큰지 확인하는데, `age2`는 `40`보다 작기 때문에 `false`가 출력된다.

<br />

## null과 undefined

`null`은 존재하지 않는 값을 의미하고, `undefined`는 값이 할당되지 않았다는 것을 의미한다.

``` javascript
let age3;
console.log(age3);  // result => undefined

let user = null;
cosole.log(user); // result => null
```

`age3`처럼 변수를 선언만 하고 값을 할당하지 않으면, `undefined`가 출력된다.

`user`처럼 변수에 `null`을 할당하면 `user`는 존재하지 않는다는 것으로 이해하면 된다.

<br />

## typeof 연산자

`typeof` 연산자로 변수의 자료형을 알아낼 수 있다.

``` javascript
const name6 = "Mike";

cosole.log(typeof 3); // result => number
cosole.log(typeof name6); // result => string
cosole.log(typeof true);  // result => boolean
cosole.log(typeof "xxx"); // result => string
cosole.log(typeof null);  // result => object
cosole.log(typeof undefined); // result => undefined
```

`typeof` 연산자는 다른 개발자가 작서한 변수의 타입을 알아야 하거나, API 통신, 등을 통해 받아온 데이터를 타입에 따라 다른 방식으로 처리를 해야 할 때, 많이 사용된다.

`typeof null`의 결과값으로 `object`가 나왔는데, `object`는 객체형을 의미한다. **하지만, `null`은 객체가 아니다.**

`null`이 `object`로 출력되는 것은 Javascript 초기 버전의 오류인데, 하위 호환성을 유지하기 위해서 수정하지 않는다고 한다.

<br />

## TIP

### ` 백틱

``` javascript
const name7 = "Mike";
const message5 = `My name is ${name7}`;
console.log(message5);  // result => My name is Mike

const message6 = "My name is ${name7}";
console.log(message6);  // result => My name is ${name7}
```

\`(백틱)을 사용하여 변수를 표현한 문자열을 \`(백틱)이 아닌 일반 `"", ''(따옴표)`로 사용할 경우에 변수명이 그대로 노출이 되기 때문에 주의해야 한다.

### 문자형 + 문자형

``` javascript
const name8 = "Mike";

const a2 = "나는 ";
const b2 = " 입니다.";

console.log(a2 + name8 + b2); // result => 나는 Mike 입니다.
```

숫자형 뿐만 아니라 문자형도 `+` 더하기를 사용할 수 있는데, 문자형과 문자형을 더해주면 하나의 문자열로 합쳐준다.

### 숫자형 + 문자형

숫자형과 문자형도 더해서 사용할 수 있지만, 더하면 문자형으로 변경된다.

``` javascript
const name8 = "Mike";

const a2 = "나는 ";
const b2 = " 입니다.";

const age4 = 30; // number

console.log(a2 + age4 + "살" + b2); // result => 나는 30살 입니다.
```
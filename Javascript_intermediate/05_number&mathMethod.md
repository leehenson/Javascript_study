# 숫자, 수학 메소드

## toString()

10진수를 2진수나 16진수로 바꾸는 방법

```javascript
let num = 10;

num.toString(); // '10'
num.toString(2); // '1010'

let num2 = 255;

num2.toString(16); // 'ff'
```

`toString()`은 숫자를 문자로 바꿔주는 메소드이다.

`toString()`의 `()`안에 숫자를 넣어주면, 그 숫자의 진법으로 변환한다.

숫자 `10`을 `toString(2)`를 통해 2진수로 변환하면 `1010`이 출력된다.

숫자 `255`를 `toString(16)`을 통해 16진수로 변환하면 `ff`가 출력된다.

<br />

## Math

Javascript에는 수학과 관련된 프로퍼티와 메소드들을 가지고 있는 `Math`라는 내장 객체가 있다.

```javascript
Math.PI; // 3.141592653589793
```

대표적인 예로 `Math.PI`를 입력하면 원주율을 출력해준다.

### Math.random()

```javascript
Math.random(); // 0.8640859270995802
Math.random(); // 0.06746767130918063
Math.random(); // 0.48212000313903647
Math.random(); // 0.3148484503333693

Math.floor(Math.random() * 100) + 1; // 88
```

`Math.random()`은 0 ~ 1 사이의 무작위 숫자를 생성한다.

그래서 만약 1~100까지의 임의의 수를 무작위로 생성하고 싶다면, `Math.floor(Math.random() * 100) + 1`와 같이 식을 만들어서 사용해야 한다.

### Math.max() / Math.min()

```javascript
Math.max(1, 4, -1, 5, 10, 9, 5.54); // 10
Math.min(1, 4, -1, 5, 10, 9, 5.54); // -1
```

`Math.max()`와 `Math.min()` 메소드는 `()` 안에 인자들 중의 최대값과 최소값을 구할 수 있다.

### Math.abs() : 절대값

```javascript
Math.abs(-1); // 1
```

`Math.abs()`는 인자의 절대값을 반환한다.

### Math.pow(n, m) : 제곱

```javascript
Math.pow(2, 10); // 1024
```

`Math.pow(n, m)` 메소드는 `n`의 `m`제곱 값 즉, 거듭 제곱값을 반환한다.

### Math.sqrt() : 제곱근

```javascript
Math.sqrt(16); // 4
```

`Math.sqrt()` 메소드는 인자의 제곱근을 반환한다.

### Math.ceil() : 올림

```javascript
let num1 = 5.1;
let num2 = 5.7;

Math.ceil(num1); // 6
Math.ceil(num1); // 6
```

`Math.ceil()` 메소드를 통해서 숫자를 올림 할 수 있다.

`5.1`과 `5.7`이 소수점에 상관없이 둘 다 `6`이 되는 것을 확인할 수 있다.

### Math.floor() : 내림

```javascript
let num1 = 5.1;
let num2 = 5.7;

Math.floor(num1); // 5
Math.floor(num1); // 5
```

`Math.floor()` 메소드를 통해서 숫자를 내림 할 수 있다.

`5.1`과 `5.7`이 소수점에 상관없이 둘 다 `5`기 되는 것을 확인할 수 있다.

### Math.round() : 반올림

```javascript
let num1 = 5.1;
let num2 = 5.7;

Math.round(num1); // 5
Math.round(num1); // 6
```

`Math.round()` 메소드를 통해서 숫자를 반올림 할 수 있다.

소수점이 5보다 작으면 내림, 5보다 크면 올림을 해준다.

<br />

## 소수점 자릿수

```javascript
let userRate = 30.1234;

Math.round(userRate * 100) / 100; // 30.12
```

> 요구사항 : 소수점 둘째자리까지 표현 (셋째 자리에서 반올림)

위의 요구사항처럼 소수점까지 표현해야 할 때가 있다.

이럴 경우, `Math.round(userRate * 100) / 100`와 같이 반올림을 해야 할 수(`userRate`)에 100을 곱하고, 반올림을 해준 뒤, 다시 100으로 나눠주어 소수점 둘째자리까지 표현할 수 있다.

### toFixed()

```javascript
let userRate = 30.1234;

userRate.toFixed(2); // '30.12'
Number(userRate.toFixed(2)); // 30.12

userRate.toFixed(0); // '30'

userRate.toFixed(6); // '30.123400'
```

`toFixed()` 메소드는 숫자를 인자로 받아, 그 숫자 이하의 소수점부터 반응하게 해준다. 위에 방식보다 훨씬 간단하다.

`toFixed()`의 인자가 `0`일 경우에는 정수부만 남게되고, 인자가 소수부 갯수보다 큰 수이면, `0`으로 채워준다.

통계나 지표 작업을 할 경우에 자주 쓰인다.

참고로, `toFixed()`는 반환값이 문자열이다. 따라서, `Number()` 메소드로 반환 값을 다시 숫자로 변환 후 작업하는 경우가 많다.

<br />

## isNaN()

```javascript
let x = Number('x'); // NaN

x == NaN; // false
x === NaN; // false
NaN == NaN; // false
NaN === NaN; // false

isNaN(x); // true
isNaN(3); // false
```

`isNaN()` 메소드는 인자의 값이 `NaN`인지 판단해준다.

`NaN`은 자기 자신과도 똑같지 않다고 판단하기 때문에, 어떤 값이 `NaN`인지 판단할 수 있는 방법은 `isNaN()`메소드가 유일하다.

<br />

## parseInt()

```javascript
let margin = '10px';

parseInt(margin); // 10

Number(margin); // NaN

let redColor = 'f3';
parseInt(redColor); // NaN
parseInt(redColor, 16); // 243

parseInt('11', 2); // 3
```

`parseInt()`는 문자열을 숫자로 바꿔준다.

`Number()`와 다른 점은 문자와 혼용이 되어있어도 동작을 한다는 점이다.

`Number()`는 문자와 혼용이 되어있으면 무조건 `NaN`을 반환하지만, `parseInt()`는 변환할 수 있는 부분까지는 변환을 하고, 문자를 만나면 변환한 부분까지 반환한다.

따라서, `redColor`와 같이 숫자로 시작하지 않으면 `NaN`을 반환한다.

또한, `parseInt()`는 두 번째 인자를 받아, 진수를 지정할 수 있다.

`parseInt(redColor, 16)`와 같이 두 번째 인자로 `16`을 주어, 16진수로 변환한다.

`parseInt('11', 2)`와 같이 문자열 `'11'`를 숫자로 바꾸고, 2진수에서 10진수로 손쉽게 변환하여 반환한다.

<br />

## parseFloat()

```javascript
let padding = '18.5%';

parseInt(padding); // 18
```

`parseFloat()`은 `parseInt()`와 동일하게 동작하지만, 부동 소수점을 반환한다. `parseInt()`는 소숫점 이하는 무시하고 정수만 반환한다.

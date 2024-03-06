# 형변환 Casting

자료형이 다르면 의도치 않게 동작할 수 있기 때문에, 형변환이 필요하다.

<br />

## 수학과 영어 점수를 받아 평균을 구하는 프로그램

```javascript
const mathScore = prompt('수학 몇점?'); // input => 90, 수학 점수 입력 받기
const engScore = prompt('영어 몇점?'); // input => 80, 영어 점수 입력 받기
const result = (mathScore + engScore) / 2; // 평균 구하기

console.log(result); // result => 4540
```

`prompt()`를 사용하여 사용자에게 영어와 수학 점수를 입력을 받아, 평균을 구하려고 했지만, 이상한 답이 출력된다.

`prompt()`로 입력 받은 데이터는 무조건 문자형이므로, 입력 받은 수학과 영어 점수는 숫자형이 아니라 문자형이다.

따라서 `prompt()`로 받은 점수를 더하면 `170`이 아니라 문자열을 더한 `"9080"`이 되고, `9080`을 2로 나누니 `4540`이 된다.

`+`를 제외한 사칙연산은 문자형을 숫자형으로 **자동 형변환**을 하여 계산히기 때문에, 문자형인 `"9080"`을 숫자형으로 자동 형변환한 뒤 나누기 계산을 하여 `4540`이 되게 된다.

<br />

## 자동 형변환

```javascript
"6" / "2" = 3 // 자동 형변환
```

자동 형변환이 편리하다고 생각할 수 있지만, 이로 인해 원인을 찾기 힘든 에러를 발생시킬 수 있다.

<br />

## 명시적 형변환

자동 형변환에 의한 에러를 방지하기 위해 항상 의도를 갖고 원하는 타입으로 변환을 시키는 것이 좋다. 이런 것을 **명시적 형변환**이라고 한다.

### String()

`String()`은 괄호 안에 타입을 문자형으로 바꿔준다.

```javascript
// console.log()는 ,(쉼표)로 구분을 해서 여러 개의 값을 한번에 출력할 수 있다.
console.log(
  String(3), // result => "3"
  String(true), // result => "true"
  String(false), // result => "false"
  String(null), // result => "null"
  String(undefined) // result => "undefined"
);
```

모두 문자형으로 잘 변환되는 것을 확인할 수 있다.

### Number()

`Number()`는 괄호 안에 타입을 숫자형으로 바꿔주며, 보통 사용자로부터 입력 받은 값이 문자형일 경우에 자주 사용된다.

```javascript
console.log(
  Number('1234'), // result => 1234
  Number('1234fadfasd'), // result => NaN
  Number(true), // result => 1
  Number(false) // result => 0
);
```

`Number()`의 괄호안에 숫자를 제외한 글자가 들어가 있으면 `NaN`이 되기에 주의해야 하며, `true`와 `false`의 경우에 숫자로 형변환을 하면 `1`과 `0`의 값을 가진다.

### Boolean()

`Boolean()`은 괄호 안에 타입을 불형으로 바꿔준다.

```javascript
console.log(
  Boolean(1), // result => true
  Boolean(123), // result => true
  Boolean('javascript') // result => true
);

console.log(
  Boolean(0), // result => false
  Boolean(''), // result => false
  Boolean(null), // result => false
  Boolean(undefined), // result => false
  Boolean(NaN) // result => false
);
```

숫자 `0`과 빈 문자열 `""`, `null`, `undefined`, `NaN`만 `false`로 변환해주며, 그 외에 값들은 모두 `true`로 반환한다.

<br />

## 정리

1. `String()` - 괄호 안에 자료형을 문자형으로 변환

2. `Number()` - 괄호 안에 자료형을 숫자형으로 변환

- 만약 괄호 안에 숫자가 아닌 문자가 포함되어 있다면, `NaN`이 된다.

3. `Boolean()` - 괄호 안에 자료형을 불형으로 변환

- `0`, `''(빈 문자열)`, `null`, `undefined`, `NaN`은 `false`로, 이 외에 값들은 모두 `true`로 변환한다.

### 주의사항

1.

```javascript
Number(null); // result => 0
Number(undefined); // result => NaN
```

`Number(null)`은 `0`으로 변환되고, `Number(undefined)`는 `NaN`으로 변환된다.

2.

```javascript
Boolean(0); // reuslt => false
Boolean('0'); // reuslt => true

Boolean(''); // result => false
Boolean(' '); // result => true
```

`Boolean(0)` 숫자 `0`은 `false`로 변횐되고, `Boolean('0')` 문자열 `'0'`은 `true`로 변환된다.

`Boolean('')` 빈 문자열은 `false`로 변환되고, `Boolean(' ')` 공백이 포함되면, `true`로 변환한다.

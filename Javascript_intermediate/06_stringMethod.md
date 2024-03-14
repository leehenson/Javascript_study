# 문자열 메소드

```javascript
let html = '<div class="box_title">제목 영역</div>';
```

html 코드 같은 경우에 html 코드 안에 `"(큰 따옴표)`로 된 내용이 있기 때문에, `'(작음 따옴표)`로 감싸는게 편하다.

```javascript
let desc = "It's 3 o'clock.";
```

영어로 된 문장은 `"(큰 따옴표)`로 감싸는게 편하다.

```javascript
let name = 'Henson';
let result = `My name is ${name}.`; // My name is Henson.
let add = `2 더하기 3은 ${2 + 3}입니다.`  // 2 더하기 3은 5입니다.
```

``` `(백틱) ```은 `${}`를 이용하여 변수를 표현하거나, 표현식을 사용할 수 있다.

```javascript
let desc = `오늘은 맑고 화창한
날씨가 계속 되겠습니다.
내일은 비소식이 있습니다.`;
```

또한, ``` `(백틱) ```은 여러줄을 포함할 수 있다.

```javascript
let desc = '오늘은 맑고 화창한\n날씨가 계속 되겠습니다.';
```

만약 `'(따옴표)`로 여러줄을 표현하려면, `\n`을 사용해야 한다.

```javascript
let desc = '오늘은 맑고 화창한  // error
날씨가 계속 되겠습니다.
내일은 비소식이 있습니다.';
```

그리고 줄바꿈을 하면 에러가 발생하기 때문에, 꼭 한 줄로 작성해야 한다.

<br />

## length : 문자열 길이

```javascript
let desc = '안녕하세요.';

desc.length;  // 6
```

`length`로 문자열의 길이를 구할 수 있다.

<br />

## 특정 위치에 접근

```javascript
let desc = '안녕하세요.';

desc[2] // '하'

desc[4] = '용';
console.log(desc);  // '안녕하세요'
```

문자열도 배열과 동일하게 `[]`와 숫자로 특정 위치에 접근할 수 있고, 배열과 동일하게 0부터 시작한다.

하지만, 배열과 다르게 한 글자만 수정하는 것은 불가능하다. 아무런 변화가 없다.

<br />

## toUpperCase() / toLowerCase()

```javascript
let desc = "Hi guys. Nice to meet you.";

desc.toUpperCase(); // "HI GUYS. NICE TO MEET YOU."

desc.toLowerCase(); // "hi guys. nice to meet you."
```

영어의 경우에 `toUpperCase()`와 `toLowerCase()`로 대소문자로 변환할 수 있다.

`toUpperCase()`는 모든 영문을 대문자로 변환한다.

`toLowerCase()`는 모든 영문을 소문자로 변환한다.

<br />

## str.indexOf(text)

```javascript
let desc = "Hi guys. Nice to meet you.";

desc.indexOf('to'); // 14

desc.indexOf('man');  // -1

if(desc.indexOf('Hi')) {  // false
  console.log('Hi가 포함된 문장입니다.');
}

if(desc.indexOf('Hi') > -1) {  // true
  console.log('Hi가 포함된 문장입니다.');
}
```

`str.indexOf(text)`는 문자를 인자로 받아서 그 문자가 몇 번째에 위치해 있는지 알려준다. 위치는 0부터 세어야 한다.

만약 찾는 문자가 없다면 `-1`를 반환한다.

또한, 포함된 문자가 여러 개라도, 처음 찾은 문자의 위치만 반환한다.

`indexOf()`를 `if`문에서 사용할 때 주의해야 하는데, 위의 `if`문에서 `desc.indexOf('Hi')`의 반환 값은 `0`이고, Javascript 조건식에서 `0`은 `false`이기 때문에, 위의 `if`문은 동작하지 않는다.

따라서, `desc.indexOf('Hi') > -1`와 같이 반환 값이 `-1`보다 큰지를 비교하면 된다.

<br />

## str.slice(n, m)

```javascript
let desc = "abcdefg";

desc.slice(2);  // "cdefg"
desc.slice(0, 5); // "abcde"
desc.slice(2, -2);  // "cde"
```

`str.slice(n, m)`는 특정 범위의 문자열만 뽑아주며, `n`부터 `m`까지의 문자열을 반환한다.

`n`은 시작점을 뜻하고, `m`은 없으면 문자열 끝까지를 의미하고, 양수면 그 숫자 전까지, 음수이면 끝에서부터 센다.

<br />

## str.substring(n, m)

```javascript
let desc = "abcdefg";

desc.substring(2, 5); // "cde"
desc.substring(5, 2); // "cde"
```

`str.substring(n, m)`도 `n`과 `m` 사이의 문자열을 반환한다.

`slice()`와 다른 점은 `n`과 `m`을 바꿔도 똑같이 동작을 하고, 음수는 0으로 인식한다.

<br />

## str.substr(n, m)

```javascript
let desc = "abcdefg";

desc.substr(2, 4);  // "cdef"
desc.substr(-4, 2); // "de"
```

`str.substr(n, m)`는 `n`이 시작점이고, `m`은 범위가 아니라 개수이다. 즉 `n`부터 시작해서 `m`개를 반환한다.

<br />

## str.trim() : 앞 뒤 공백 제거

```javascript
let desc = " coding         ";

desc.trim();  // "coding"
```

`str.trim()`은 문자열 앞과 끝에 공백 문자를 제거한다. 보통 사용자로부터 뭔가를 입력 받을 때 사용한다.

<br />

## str.repeat(n) : n번 반복

```javascript
let desc = "hello!";

desc.repeat(3);  // "hello!hello!hello!"
```

`str.repeat(n)`은 문자열을 `n`번 반복한다.

<br />

## 문자열 비교

```javascript
1 < 3;  // true
"a" < "c";  // true

"a".codePointAt(0); // 97

String.fromCodePoint(97); // "a"
```

`3`이 `1`보다 크듯이, `"c"`는 `"a"`보다 크다.

`str.codePointAt()`을 통해서 문자의 아스키 코드 십진수을 알 수 있다.

반대로 `str.fromCodePoint()`를 통해서 아스키 코드 십진수를 통해 문자를 알 수 있다.

문자열은 `"A"`부터 `"Z"`로 갈수록 크고, `"A"` 대문자보다 `"a"` 소문자가 더 크다.

<br />

## 예제 코드

```javascript
let list = [
  "01. 들어가며",
  "02. JS의 역사",
  "03. 자료형",
  "04. 함수",
  "05. 배열",
];

let newList = [];

for(let i = 0; i < list.length; i++) {
  newList.push(list[i].slice(4)); // 4부터 끝까지 문자열을 잘라내고 새로운 리스트에 담기
}

console.log(newList); // ['들어가며', 'JS의 역사', '자료형', '함수', '배열']
```

```javascript
// 금칙어 : 콜라

function hasCola(str) {
  if(str.indexOf('콜라')) {
    console.log('금칙어가 있습니다.');
  } else {
    console.log('통과');
  }
}

hasCola('와 사이다가 짱이야!'); // -1, '금칙어가 있습니다.'
hasCola('무슨소리, 콜라가 최고'); // '금칙어가 있습니다.'
hasCola('콜라');  // 0, '통과'
```

`-1`은 `if`문에서 `true`, `0`은 `false`이기 떄문에 예상치 못하게 동작한다.

```javascript
// 금칙어 : 콜라

function hasCola2(str) {
  if(str.indexOf('콜라') > -1) {
    console.log('금칙어가 있습니다.');
  } else {
    console.log('통과');
  }
}

hasCola2('와 사이다가 짱이야!'); // 통과
hasCola2('무슨소리, 콜라가 최고'); // '금칙어가 있습니다.'
hasCola2('콜라');  // '금칙어가 있습니다.'
```

`indexOf()`의 반환값이 `-1`보다 큰지를 비교하여 정상적인 작동을 한다.

```javascript
// 금칙어 : 콜라

function hasCola3(str) {
  if(str.includes('콜라')) {
    console.log('금칙어가 있습니다.');
  } else {
    console.log('통과');
  }
}

hasCola3('와 사이다가 짱이야!'); // 통과
hasCola3('무슨소리, 콜라가 최고'); // '금칙어가 있습니다.'
hasCola3('콜라');  // '금칙어가 있습니다.'
```

`str.includes(text)`는 인자로 넘긴 문자열이 호출한 문자열에 있으면 `true`, 없으면 `false`를 반환하기에 정상적인 작동을 한다.
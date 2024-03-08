# 논리 연산자

Javascript에는 세 종류의 논리 연산자 `||(OR)`, `&&(AND)`, `!(NOT)`가 있다.

<br />

## ||(OR)

`||(OR)`는 여러 개 중 하나라도 `true`이면 `true`이다. 즉, 모든 값이 `false`일 때만 `false`를 반환한다.

<br />

## &&(AND)

`&&(AND)`는 모든 값이 `true`이면 `true`이다. 즉, 하나라도 `false`면 `false`를 반환한다.

<br />

## !(NOT)

`true`면 `false`아고, `false`이면 `true`이다. 즉, `true`와 `false`를 반대값으로 바꿔준다.

<br />

## 평가

`||(OR)`는 첫 번째 `true`를 발견하는 즉시 평가를 멈춘다.

`&&(AND)`는 첫 번재 `false`를 발견하는 즉시 평가를 멈춘다.

위와 같은 이유로 인해 평가를 어떻게 배치하는지가 중요하다.

간단한 평가로 `true`와 `false`를 판단할 수 있다면, 복잡한 작업 전에 해주는 것이 좋다.

```javascript
// OR
// 이름이 Tom 이거나, 성인이면 통과

const name = 'Henson';
const age = 30;

if (name === 'Tom' || age > 19) {
  console.log('통과');
}

// AND
// 이름이 Henson이고, 성인이면 통과

if (name === 'Henson' && age > 19) {
  console.log('통과');
} else {
  console.log('돌아가');
}

// NOT
// 나이를 입력 받아 성인이 아니면 돌아가라고 전달

const input = prompt('나이가..?');
const isAge = input > 19;

if (!isAge) {
  console.log('돌아가.');
}
```

<br />

## 우선순위

`&&(AND)`가 `||(OR)`보다 우선순위가 높다.

```javascript
/**
 * 우선순위
 */

const GENDER = 'F';
const NAME = 'Jane';
const IS_ADULT = true;

// 남자이고, 이름이 Henson이거나, 성인이면 통과
// if (GENDER === 'M' && NAME === 'Henson' || IS_ADULT) {
if (GENDER === 'M' && (NAME === 'Henson' || IS_ADULT)) {
  console.log('통과');
} else {
  console.log('돌아가');
}
```

여러 개의 논리 연산자를 같이 평가할 때는 의도치 않게 동작할 수 있기 때문에, `()`를 통해 우선순위를 정해줘야 한다.

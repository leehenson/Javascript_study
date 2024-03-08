# 반복문

**반복문**은 동일한 작업을 여러번 반복할 수 있다.

<br />

## for

```javascript
for (let i = 0; i < 10; i++) {
  // 반복할 코드
}
```

`for`문은 `;(세미클론)`으로 구분하며, 세 부분으로 나눌 수 있다.

첫 번째 부분은 **초기값**을 설정한다. 반복문에 진입할 때, 처음 한 번만 실행된다.

두 번째 부분은 **조건**을 설정한다. 반복문을 돌면서 조건을 확인하고, 조건이 `false`가 되면 반복을 중지한다.

세 번째 부분은 **반복할 코드를 실행 후 작업**을 설정한다.

<br />

## while

```javascript
let i = 0;

while (i < 10) {
  // 반복할 코드
  i++;
}
```

`while` 다음 `()괄호`에 조건을 입력하고, `while`이 무한 루프가 되지 않도록 해줘야 한다.

<br />

## do.. while

```javascript
let i = 0;
do {
  // 반복할 코드
  i++;
} while (i < 10);
```

`while`문 비슷한데, `while`과 다른 점은 코드를 최소 한 번을 실행한다는 차이가 있다.

<br />

## break, continue

`break`: 만나면 반복문을 멈추고 빠져나온다.

`continue`: 만나면 반복문을 멈추고 다음 반복 작업을 진행한다.

```javascript
while (true) {
  let answer = confirm('계속 할까요?'); // confirm()을 통해 반복 여부를 평가
  if (!answer) {
    break;
  }
}
```

```javascript
for (let i = 0; i < 10; i++) {
  // i를 2로 나눴을 때 나머지가 1이면, continue
  if (i % 2) {
    continue;
  }
  console.log(i);
}
```

<br />

## 정리

명확한 반복 횟수가 정해져있으면 `for`문을 그렇지 않으면 `while`문을 사용하는 경우가 많다.

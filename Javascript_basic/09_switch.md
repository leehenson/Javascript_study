# switch문

모든 `switch`문은 `if`, `else-if`로 작성할 수 있지만, 케이스가 많을 경우에 보다 간결하게 작성할 수 있다는 장점이 있다.

```javascript
if (평가 == A) {
  // A일 때 코드
} else if (평가 == B) {
  // B일 때 코드
}
```

```javascript
switch (평가) {
  case A:
    // A일 때 코드
  case B:
    // B일 때 코드
    ...
}
```

`if`, `else-if`문으로 작성한 위에 코드를 `switch`문으로 좀 더 간결하고 가독성 좋게 작성할 수 있다.

```javascript
let fruit = prompt('무슨 과일을 사고 싶나요?');

switch (fruit) {
  case '사과':
    console.log('100원 입니다.');
    break;
  case '바나나':
    console.log('200원 입니다.');
    break;
  case '키위':
    console.log('300원 입니다.');
    break;
  case '멜론':
  case '수박':
    console.log('500원 입니다.');
    break;
  default:
    console.log('그런 과일은 없습니다.');
}
```

`prompt()`로 과일을 입력 받아 입력 받은 과일의 가격을 알려주는 코드이다.

`switch`문은 실행할 코드에 `break`를 넣어주지 않으면 해당 `case` 이후의 모든 코드가 실행되기 때문에, 각 `case`마다 `break`를 써주는 것이 좋다. (상황에 따라 생략 가능)

`if`문에서는 `else`문을 통해서 조건에 맞지 않을 때, 실행할 코드를 정할 수 있는데, `switch`문에서는 `default`문을 통해서 `case`에 해당되지 않을 때, 실행할 코드를 작성할 수 있다.

위 코드의 `멜론`과 `수박`의 `case`와 같이 같은 코드를 수행한다면, 합쳐서 사용할 수 있다.

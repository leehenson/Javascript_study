# setTimeout / setInterval

`setTimeout()` 함수는 일정 시간이 지난 후 함수를 실행한다.

`setInterval()` 함수는 일정 시간 간격으로 함수를 반복한다.

<br />

## setTimeout

```javascript
function fn() {
  console.log(3);
}

setTimeout(fn, 3000);
```

위 코드는 3초 후에 로그를 출력한다.

`setTimeout()`은 두 개의 매개변수를 받는다.

첫 번째는 일정시간이 지난 뒤에 실행할 함수이고, 두 번째는 시간이다. 위 코드에서 `3000`은 3초를 의미한다.

```javascript
setTimeout(function () {
  console.log(3);
}, 3000);
```

위와 같이 함수를 전달하지 않고, 첫 번째 매개변수 위치에 콜백함수를 직접 코드를 작성하여도 동일하게 작동한다.

```javascript
function showName(name) {
  console.log(name);
}

setTimeout(showName, 3000, 'Henson');
```

위 코드와 같이 실행할 함수에서 인자가 필요할 경우에, 시간 뒤에 넣어주면 된다.

`'Henson'` 인자는 실행할 함수의 첫 번째 매개변수로 들어간다.

```javascript
function showName(name) {
  console.log(name);
}

const tId = setTimeout(showName, 3000, 'Henson');

clearTimeout(tId);
```

`clearTimeout()`은 예정된 작업을 없앤다.

`setTimeout()`은 타임 아이디를 반환하는데, 이것을 이용하면 스케줄링을 취소할 수 있다.

3초가 지나기 전에 `clearTimeout()`이 실행되기 때문에 아무 일도 일어나지 않는다.

<br />

## setInterval()

```javascript
function showName(name) {
  console.log(name);
}

const tId = setInterval(showName, 3000, 'Henson');

/**
 * 3초마다 'Henson' 출력
 * 'Henson'
 * 'Henson'
 * 'Henson'
 */

clearInterval(tId);
```

`setInterval()`은 `setTimeout()`과 사용법은 동일하다.

하지만, `setTimeout()`은 한 번 실행하고 끝내지만, `setInterval()`은 계속 반복 수행한다.

위 코드를 실행하면 3초마다 `'Henson'`을 계속 출력한다.

중간에 중단하려면 `clearInterval(tId)`를 실행하면 된다.

<br />

## delay

```javascript
setTimeout(function () {
  console.log(2);
}, 0);

console.log(1);

/**
 * 1
 * 2
 */
```

위와 같이 `setTimeout()`에 딜레이 타임을 `0`으로 주어도, 실제로 바로 실행되진 않는다.

위 코드를 실행해보면 `1`이 먼저 출력되고, `2`가 나중에 출력된다.

왜냐하면, 현재 실행중인 스크립트가 종료된 이후에 스케줄링 함수를 실행하기 때문이다.

따라서, 딜레이 타임을 `0`이라고 적어도 바로 실행되는 것이 아니다.

그리고, 브라우저는 기본적으로 4ms 정도의 대기시간을 갖는다.

따라서, 0이라고 적어도 4ms 혹은 그 이상이 소요될 수 있다.

<br />

## 예제 코드

```javascript
let num = 0;

function showTime() {
  console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
  if (num > 5) {
    clearInterval(tId);
  }
}

const tId = setInterval(showTime, 1000);
```

`showTime()` 함수는 사용자가 접속하면 접속한지 얼마나 지났는지 출력하는 함수이다.

`showTime()`함수 내에서 `num`이 5 이상이면 `clearInterval(tId);`를 통해 `setInterval()` 종료한다.

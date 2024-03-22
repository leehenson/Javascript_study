# Promise

```javascript
const pr = new Promise((resolve, reject) => {
  // code
});
```

프로미스는 `new Promise`로 생성한다.

프로미스는 함수를 인자로 받는데, `resolve`와 `reject`를 인자로 받는다.

`resolve`는 성공한 경우, `reject`는 실패한 경우에 실행되는 함수이다.

`resolve`와 `reject`와 같이 어떤 일이 완료된 이후에 실행되는 함수를 **콜백함수**라고 한다.

`new Promise` 생성자가 반환하는 프로미스 객체는 `state`와 `result`를 프로퍼티로 갖는다.

`state`는 초기에 pending(대기)이였다가, `resolve(value)`가 호출(성공)되면, `state`가 fulfilled(이행)가 되고, `result`는 `resolve(value)`함수에 전달된 `value`이다.

`reject(error)`가 호출(실패)되면. `state`가 rejected(거부)가 되고, `result`는 `reject(error)`함수에 전달된 `error`이다.

```javascript
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK');
  }, 3000);
});
```

위 코드는 `state`가 pending(대기)였다가 3초 뒤에 `state`가 fulfilled(이행)로 바뀌고, `result`는 `undefined`였다가 `'OK'`가 된다.

```javascript
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error..'));
  }, 3000);
});
```

위 코드는 `state`가 pending(대기)였다가 3초 뒤에 `state`가 rejected(거부)로 바뀌고, `result`는 `undefined`였다가 `error`가 된다.

```javascript
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK');
  }, 3000);
});

pr.then(
  function (result) {},
  function (err) {}
);
```

`then`을 이용해서 `resolve`와 `reject`를 처리할 수 있다.

첫 번째 인자는 프로미스가 이행되었을 때 실행하는 함수이다. `result`에는 `'OK'`라는 값이 들어온다.

두 번째 인자는 프로미스가 거부되었을 때 실행하는 함수이다. `err`에는 `error`값이 들어온다.

```javascript
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK');
  }, 3000);
});

pr.then(
  function (result) {
    console.log(result + ' 가지러 가자.');
  },
  function (err) {
    console.log('다시 주문해주세요..');
  }
);
```

위 프로미스는 `resolve`로 실행되었기 때문에 두 번째 콜백함수는 실행되지 읺는다.

`then` 이 외에 `catch`와 `finally`를 사용할 수 있다.

`catch`는 에러가 발생한 경우. 즉, rejected(거부)인 경우에만 실행된다.

```javascript
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK');
  }, 3000);
});

pr.then(function (result) {}).catch(function (err) {});
```

따라서, 두 번째로 전달했던 함수를 `catch`절 안으로 넣어주어, 위와 같이 코드를 작성할 수 있다.

위의 코드처럼 `catch`로 명확하게 구분해주는 것이 가독성에도 더 좋고, `then`절의 함수에서 발생하는 에러도 잡아줄 수 있기 때문에, `catch`문을 사용하는 것이 더 좋다.

```javascript
pr.then(function (result) {})
  .catch(function (err) {})
  .finally(function () {
    console.log('-- 주문 끝 --');
  });
```

`finally`는 이행이든, 거부든 처리가 완료되면 항상 실행된다.

<br />

## 예제 코드

```javascript
const pr = new Promise((resolve, reject) => {
  // 1초후 콜백함수 실행
  setTimeout(() => {
    // resolve('OK'); // 이행
    reject(new Error('err..')); // 거부
  }, 1000);
});

console.log('시작');
pr.then((result) => {
  // 이행되었을 떄
  console.log(result);
})
  .catch((err) => {
    // 거부되었을 때
    console.log(err);
  })
  .finally(() => {
    // 완료되었을 때
    console.log('끝');
  });
```

### callback hell

```javascript
const f1 = (callback) => {
  setTimeout(function () {
    console.log('1번 주문 완료');
    callback();
  }, 1000);
};

const f2 = (callback) => {
  setTimeout(function () {
    console.log('2번 주문 완료');
    callback();
  }, 3000);
};

const f3 = (callback) => {
  setTimeout(function () {
    console.log('3번 주문 완료');
    callback();
  }, 2000);
};

console.log('시작');
f1(function () {
  f2(function () {
    f3(function () {
      console.log('끝');
    });
  });
});
```

위와 같이 callback 함수가 계속 이어지는 것을 **callback hell**이라고 한다.

### 프로미스 체이닝(Promise chaining)

```javascript
const p1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('1번 주문 완료');
    }, 1000);
  });
};

const p2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      // res('2번 주문 완료');
      rej('xxx');
    }, 3000);
  });
};

const p3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('3번 주문 완료');
    }, 2000);
  });
};

// 프로미스 체이닝(Promise chaining)
console.log('시작');
console.time('x');
p1()
  .then((res) => p2(res))
  .then((res) => p3(res))
  .then((res) => console.log(res))
  .catch(console.log)
  .finally(() => {
    console.timeEnd('x'); // 약 6초 소요
    console.log('끝');
  });
```

위와 같이 여러 개의 프로미스를 엮어서 실행하는 것을 **프로미스 체이닝**이라고 한다.

### Promise.all

```javascript
const p1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('1번 주문 완료');
    }, 1000);
  });
};

const p2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      // res('2번 주문 완료');
      rej('xxx');
    }, 3000);
  });
};

const p3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('3번 주문 완료');
    }, 2000);
  });
};

// Promise.all
console.time('x');
Promise.all([p1(), p2(), p3()]).then((res) => {
  console.log(res);
  console.timeEnd('x'); // 약 3초 소요
});
```

`Promise.all`은 한꺼번에 시작하고 모두 이행되면 값을 사용할 수 있고, 시간도 절약할 수 있다.

거부가 되면 어떠한 값도 얻지 못한다.

### Promise.race

```javascript
const p1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('1번 주문 완료');
    }, 1000);
  });
};

const p2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      // res('2번 주문 완료');
      rej('xxx');
    }, 3000);
  });
};

const p3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('3번 주문 완료');
    }, 2000);
  });
};

// Promise.race
console.time('x');
Promise.race([p1(), p2(), p3()]).then((res) => {
  console.log(res);
  console.timeEnd('x'); // 약 1초 소요
});
```

`Promise.all`은 모든 작업이 완료될 떄까지 기다리지만, `Promise.race`는 하나라도 먼저 완료되면 끝낸다.

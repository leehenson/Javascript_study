# async, await

<br />

## async

```javascript
async function getName() {
  // return Promise.resolve('Henson');
  throw new Error('err..');
}

getName()
  .then((name) => {
    console.log(name);
  })
  .catch((err) => {
    console.log(err);
  });
```

함수 앞에 `async` 키워드를 붙여주면, 항상 `Promise`를 반환한다.

`Promise`를 반환하기 때문에, `then`과 `catch`을 사용할 수 있다.

<br />

## await

```javascript
function getName2(name) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(name);
    }, 1000);
  });
}

async function showName() {
  const result = await getName2('Henson');
  console.log(result);
}

console.log('시작');
showName();
```

`await` 키워드는 `async` 함수 내부에서만 사용할 수 있다.

`await` 키워드 옆에는 프로미스가 오고, 그 프로미스가 처리될 때까지 기다린다.

```javascript
const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('1번 주문 완료');
    }, 1000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      // res('2번 주문 완료');
      rej(new Error('err..'));
    }, 3000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      // res('3번 주문 완료');
      rej(new Error('err..'));
    }, 2000);
  });
};

console.log('시작');
async function order() {
  // async-await에서는 rejected를 try-catch문으로 잡아주면 된다.
  try {
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3);
  } catch (e) {
    console.log(e);
  }
  console.log('종료');
}
order();
```

async-await 방식이 `then`을 쓰는 것보다 가독성이 좋다.

async-await에서는 rejected를 try-catch문으로 잡아주면 된다.

```javascript
const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('1번 주문 완료');
    }, 1000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('2번 주문 완료');
      // rej(new Error('err..'));
    }, 3000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      // res('3번 주문 완료');
      rej(new Error('err..'));
    }, 2000);
  });
};

console.log('시작');
async function order2() {
  try {
    const result1 = await Promise.all([f1(), f2(), f3()]);
    console.log(result1);
  } catch (e) {
    console.log(e);
  }
  console.log('종료');
}
order();
```

async-await 방식으로도 `Promise.all()`과 같은 메소드를 사용할 수 있다.

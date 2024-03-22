/**
 * promise
 */

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

// ----------------------------------------------------

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

// --------------------------------------------------------------------

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

// Promise.all
console.time('x');
Promise.all([p1(), p2(), p3()]).then((res) => {
  console.log(res);
  console.timeEnd('x'); // 약 3초 소요
});

// Promise.all은 한꺼번에 시작하고 모두 이행되면 값을 사용할 수 있다. 시간도 절약할 수 있다.
// 거부가 되면 어떠한 값도 얻지 못한다.

// Promise.race
console.time('x');
Promise.race([p1(), p2(), p3()]).then((res) => {
  console.log(res);
  console.timeEnd('x'); // 약 1초 소요
});

// Promise.all은 모든 작업이 완료될 떄까지 기다리지만, Promise.race는 하나라도 먼저 완료되면 끝낸다.

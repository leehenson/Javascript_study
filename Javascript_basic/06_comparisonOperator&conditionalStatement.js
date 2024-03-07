/**
 * 비교 연산자
 */

console.log(10 > 5); // 10이 5보다 큰가? true
console.log(10 == 5); // 10이 5랑 같은가? false, 동등 연산자
console.log(10 != 5); // 10이 5랑 다른가? true

/**
 * 동등 연산자
 */

const a = 1; // 숫자형 1
const b = '1'; // 문자형 1

// console.log(a == b); // reuslt => true, 숫자형과 문자형을 비교하였는데 true로 반환한다.
console.log(a === b); // reuslt => false, ===을 사용하면 타입까지 비교를 한다.

/**
 * if, else, else if
 */

const age = 30;

if (age > 19) {
  // age가 19보다 크면
  console.log('환영합니다.'); // '환영합니다.' 출력
}

if (age <= 19) {
  // age가 19보다 작다면
  console.log('안녕히 가세요.'); // '안녕히 가세요.' 출력
}

console.log('---------------------------------');

if (age > 19) {
  // age가 19보다 크면
  console.log('환영 합니다.'); // '환영합니다.' 출력
} else {
  // age가 19보다 크지 않으면
  console.log('안녕히 가세요.'); // '안녕히 가세요.' 출력
}

console.log('---------------------------------');

if (age > 19) {
  // age가 19보다 크면
  console.log('환영 합니다.'); // '환영합니다.' 출력
} else if (age === 19) {
  // age가 19이면
  console.log('수능 잘치세요.'); // '수능 잘치세요.' 출력
} else {
  // age가 19보다 크지 않으면
  console.log('안녕히 가세요.'); // '안녕히 가세요.' 출력
}

/**
 * array
 */

let days = ['mon', 'tue', 'wed'];

console.log(days[1]); // result => tue, 두 번째 요소 출력

days[1] = '화요일'; // 두 번째 요소값 변경

console.log(days); // result => ['mon', '화요일', 'wed'], 두 번째 요소 값 변경됨

console.log(days.length); // result => 3, days 배열의 길이 출력

days.push('thu'); // days 배열 제일 뒤에 thu 추가

console.log(days); // result => ['mon', '화요일', 'wed', 'thu'], 배열 제일 뒤에 thu 추가

days.unshift('sun'); // 배열 제일 앞에 sun 추가

console.log(days); // result => ['sun', 'mon', '화요일', 'wed', 'thu'], 배열 제일 앞에 sun 추가

/**
 * 반복
 */

// for문 사용
for (let index = 0; index < days.length; index++) {
  console.log(days[index]);
}
/**
 * reuslt =>
 * 'sun'
 * 'mon'
 * '화요일'
 * 'wed'
 * 'thu'
 */

// for ... of 사용
for (let day of days) {
  console.log(day);
}
/**
 * reuslt =>
 * 'sun'
 * 'mon'
 * '화요일'
 * 'wed'
 * 'thu'
 */

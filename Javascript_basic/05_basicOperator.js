/**
 * 거듭제곱
 * 거듭제곱을 계산하고 싶으면 *(곱하기)를 두번 적어주면 된다.
 */

const num = 2 ** 3; // 2의 3제곱
console.log(num); // reuslt => 8

/**
 * 연산자 줄여서 쓰기
 */

let number = 10;
// number = number + 5;  // number에 5를 더하고 다시 number에 할당
number += 5; // 위의 식을 짧게 줄여서 쓸 수 있다.

console.log(number); // result => 15

number -= 5; // number = number - 5 와 같다.
number *= 5; // number = number * 5 와 같다.
number %= 5; // number = number % 5 와 같다.

/**
 * 증감 연산자
 */

let a = 10;
let b = 10;
a++; // 값을 1만큼 증가
b--; // 값을 1만큼 감소

console.log(a); // result => 11
console.log(b); // result => 9

/**
 * 증감 연산자의 순서
 */

let c = 10;
let d = 10;
let result1 = c++; // 증가 연산자를 뒤에 넣으면 증가시키기 전에 값을 할당한다.
let result2 = ++d; // 증가 연산자를 앞에 넣으면 증가시킨 후에 값을 할당한다.

console.log(result1); // result => 10
console.log(result2); // result => 11

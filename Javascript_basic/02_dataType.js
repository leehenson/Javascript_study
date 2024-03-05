/**
 * 문자형 String
 */

const name = 'Mike'; // 문자형 String

// 문자형은 세 가지 방식으로 작성할 수 있다.
const name1 = "Mike"; // 큰 따옴표
const name2 = 'Mike'; // 작은 따옴표
const name3 = `Mike`; // 백틱

const message1 = "I'm a boy.";
const message2 = 'I\'m a boy.'; // '(작음 따옴표) 앞에 \(역슬래시)를 넣어주면 특수문자로 인식한다.

const message3 = `My name is ${name}`; // `${}` 괄호 안에 변수를 넣어주면 문자열 안에서 변수를 표현할 수 있다.
console.log(message3);

const message4 = `나는 ${30 + 1}살 입니다.`;  // `${}` 안에 바로 표현식을 사용할 수도 있다.
console.log(message4);

/**
 * 숫자형 Number
 */

const age = 30; // 숫자형 Number
const PI = 3.14;  // 소수점 표현도 가능하다.

// 숫자형은 사칙연산이 가능하다.
console.log(1 + 2); // 더하기
console.log(10 - 3); // 빼기
console.log(3 * 2); // * 곱하기
console.log(6 / 3); // / 나누기
console.log(6 % 3); // % 나머지

const x = 1 / 0;  // ???
console.log(x); // result => Infinity, 숫자를 0으로 나누면 무한대를 얻을 수 있다.

const name4 = "Mike";
const y = name4 / 2;

console.log(y); // result => NaN, 문자를 숫자로 나누면 NaN이 출력되며, NaN은 Not a Number의 약자로 숫자가 아니라는 뜻이다.


/**
 * 불형 Boolean
 */

const a = true; // 참
const b = false;  // 거짓

const name5 = "Mike";
const age2 = 30;

console.log(name5 == 'Mike'); // result => true, name5이 Mike인지 확인
console.log(age2 > 40); // result => false, age2가 40보다 큰지 확인

/**
 * null과 undefined
 */

let age3;
console.log(age3);  // result => undefined, 변수를 선언만 하고 값을 할당하지 않으면, undefined가 출력된다.

let user = null;
cosole.log(user); // result => null, 변수에 null을 할당하면 user는 존재하지 않는다는 것으로 이해하면 된다.


/**
 * typeof 연산자
 */

const name6 = "Mike";

cosole.log(typeof 3); // result => number
cosole.log(typeof name6); // result => string
cosole.log(typeof true);  // result => boolean
cosole.log(typeof "xxx"); // result => string
cosole.log(typeof null);  // result => object
cosole.log(typeof undefined); // result => undefined

/**
 * TIP
 */

const name7 = "Mike";
const message5 = `My name is ${name7}`;
console.log(message5);  // result => My name is Mike

const message6 = "My name is ${name7}";
console.log(message6);  // result => My name is ${name7}

// \`(백틱)을 사용하여 변수를 표현한 문자열을 \`(백틱)이 아닌 일반 `"", ''(따옴표)`로 사용할 경우에 변수명이 그대로 노출이 되기 때문에 주의해야 한다.


const name8 = "Mike";

const a2 = "나는 ";
const b2 = " 입니다.";

console.log(a2 + name8 + b2); // result => 나는 Mike 입니다., 숫자형 뿐만 아니라 문자형도 `+` 더하기를 사용할 수 있는데, 문자형과 문자형을 더해주면 하나의 문자열로 합쳐준다.

const age4 = 30; // number

console.log(a2 + age4 + "살" + b2); // result => 나는 30살 입니다.
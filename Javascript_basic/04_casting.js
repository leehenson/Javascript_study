// 수학과 영어의 점수를 입력 받아 평균을 구하는 프로그램

const mathScore = prompt('수학 몇점?'); // input => 90, 수학 점수 입력 받기
const engScore = prompt('영어 몇점?'); // input => 80, 영어 점수 입력 받기
const result = (mathScore + engScore) / 2; // 평균 구하기

console.log(result); // result => 4540, 85가 나와야하지만, 이상한 답이 출력된다.

/**
 * String()
 */

// console.log()는 ,(쉼표)로 구분을 해서 여러 개의 값을 한번에 출력할 수 있다.
console.log(
  String(3), // result => "3"
  String(true), // result => "true"
  String(false), // result => "false"
  String(null), // result => "null"
  String(undefined) // result => "undefined"
);

/**
 * Number()
 */

console.log(
  Number('1234'), // result => 1234
  Number('1234fadfasd'), // result => NaN, 괄호안에 숫자를 제외한 글자가 들어가 있으면 NaN이 되기에 주의해야 한다.
  Number(true), // result => 1, true의 경우에 숫자로 형변환을 하면 1의 값을 가진다.
  Number(false) // result => 0, false의 경우에 숫자로 형변환을 하면 0의 값을 가진다.
);

/**
 * Boolean()
 */

// Booelean()은 0, ""(빈 문자열), null, undefined, NaN을 제외한 모든 값은 true로 반환
console.log(
  Boolean(1), // result => true
  Boolean(123), // result => true
  Boolean('javascript') // result => true
);

// Booelean()은 0, ""(빈 문자열), null, undefined, NaN값은 false로 반환
console.log(
  Boolean(0), // result => false
  Boolean(''), // result => false
  Boolean(null), // result => false
  Boolean(undefined), // result => false
  Boolean(NaN) // result => false
);

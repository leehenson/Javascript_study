/**
 * 논리 연산자
 */

// OR
// 이름이 Tom 이거나, 성인이면 통과

const name = 'Henson';
const age = 30;

if (name === 'Tom' || age > 19) {
  console.log('통과');
}

// AND
// 이름이 Henson이고, 성인이면 통과

if (name === 'Henson' && age > 19) {
  console.log('통과');
} else {
  console.log('돌아가');
}

// NOT
// 나이를 입력 받아 성인이 아니면 돌아가라고 전달

const input = prompt('나이가..?');
const isAge = input > 19;

if (!isAge) {
  console.log('돌아가.');
}

/**
 * 우선순위
 */

const GENDER = 'F';
const NAME = 'Jane';
const IS_ADULT = true;

// 남자이고, 이름이 Henson이거나, 성인이면 통과
// if ((GENDER === 'M' && NAME === 'Henson') || IS_ADULT) {
if (GENDER === 'M' && (NAME === 'Henson' || IS_ADULT)) {
  console.log('통과');
} else {
  console.log('돌아가');
}

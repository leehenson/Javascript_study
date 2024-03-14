/**
 * 문자열 메소드
 */

let list = [
  "01. 들어가며",
  "02. JS의 역사",
  "03. 자료형",
  "04. 함수",
  "05. 배열",
];

let newList = [];

for(let i = 0; i < list.length; i++) {
  newList.push(list[i].slice(4)); // 4부터 끝까지 문자열을 잘라내고 새로운 리스트에 담기
}

console.log(newList); // ['들어가며', 'JS의 역사', '자료형', '함수', '배열']

// 금칙어 : 콜라

// -1은 if문에서 true, 0은 false이기 떄문에 예상치 못하게 동작한다.
function hasCola(str) {
  if(str.indexOf('콜라')) {
    console.log('금칙어가 있습니다.');
  } else {
    console.log('통과');
  }
}

hasCola('와 사이다가 짱이야!'); // -1, '금칙어가 있습니다.'
hasCola('무슨소리, 콜라가 최고'); // '금칙어가 있습니다.'
hasCola('콜라');  // 0, '통과'

// ------------------------------------------------------------------

// indexOf()의 반환값이 -1보다 큰지를 비교
function hasCola2(str) {
  if(str.indexOf('콜라') > -1) {
    console.log('금칙어가 있습니다.');
  } else {
    console.log('통과');
  }
}

hasCola2('와 사이다가 짱이야!'); // 통과
hasCola2('무슨소리, 콜라가 최고'); // '금칙어가 있습니다.'
hasCola2('콜라');  // '금칙어가 있습니다.'

// ---------------------------------------------------------------------

// includes는 문자가 있으면 true, 없으면 false를 반환

function hasCola3(str) {
  if(str.includes('콜라')) {
    console.log('금칙어가 있습니다.');
  } else {
    console.log('통과');
  }
}

hasCola3('와 사이다가 짱이야!'); // 통과
hasCola3('무슨소리, 콜라가 최고'); // '금칙어가 있습니다.'
hasCola3('콜라');  // '금칙어가 있습니다.'
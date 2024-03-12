/**
 * method
 */

// 객체 생성
let boy = {
  name: 'Henson',
  showName: function () {
    // 메소드 안에서는 객체를 직접 작성하는 것보다 'this'를 활용하는 것이 좋다.
    console.log(this.name);
  },
};

// 메소드 호출
boy.showName(); // result => 'Henson'

let man = boy; // man 변수에 boy 객체 할당
boy = null; // boy 객체 삭제

man.showName(); // result => 'Henson'

// ---------------------------------------------

let girl = {
  name: 'Jane',
  // 일반 함수로 메소드를 선언한 경우에 'this'는 'girl' 객체를 반환
  // sayThis: function () {
  //   console.log(this);
  // },

  // 화살표 함수로 메소드를 선언한 경우에, 'this'는 'window' 전역 객체를 반환
  sayThis: () => {
    console.log(this);
  },
};

girl.sayThis();

// 따라서 객체에 메소드를 선언할 떄에는 화살표 함수가 아닌 일반 함수로 선언하는 것이 좋다.

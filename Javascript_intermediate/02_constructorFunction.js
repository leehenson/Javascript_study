/**
 * 생성자 함수
 */

// 함수 선언
function Item(title, price) {
  //this = {};  // new 연산자로 호출할 경우, 실행되는 코드

  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은 ${price}원 입니다.`);
  };

  // return this; // new 연산자로 호출할 경우, 실행되는 코드
}

const item1 = new Item('인형', 3000);
const item2 = Item('가방', 4000); // new 연산자를 붙이지 않고 함수를 호출하는 경우에, 그냥 함수를 실행만 하기에 반환 값이 없다. 따라서 undefined가 item2에 할달된다.
const item3 = new Item('지갑', 9000);

console.log(item1, item2, item3); // Item객체, undefined, Item객체

item3.showPrice(); // '가격은 9000원 입니다.'

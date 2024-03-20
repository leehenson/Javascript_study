/**
 * call
 */

const henson = {
  name: 'Henson',
};

const tom = {
  name: 'Tom',
};

function showThisName() {
  console.log(this.name);
}

showThisName(); //  ''
showThisName.call(henson); // 'Henson'
showThisName.call(tom); // 'Tom'

// 생년과 직업을 받아서 객체의 정보를 새로운 정보로 업데이트
function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(henson, 1996, 'developer');
console.log(henson); // {name: 'Henson', birthYear: 1996, occupation: 'developer'}

update.call(tom, 2002, 'cheif');
console.log(tom); // {name: 'Tom', birthYear: 2002, occupation: 'cheif'}

/**
 * apply
 */

// call을 apply로 변경하고, 매개변수를 배열로 변경
update.apply(henson, [1996, 'developer']);
console.log(henson); // {name: 'Henson', birthYear: 1996, occupation: 'developer'}

update.apply(tom, [2002, 'cheif']);
console.log(tom); // {name: 'Tom', birthYear: 2002, occupation: 'cheif'}

// 동일한 결과를 출력

// -----------------------------------------------------------------------------------

const nums = [3, 10, 1, 6, 4];

const minNum1 = Math.min(3, 10, 1, 6, 4);
const maxNum1 = Math.max(3, 10, 1, 6, 4);

console.log(minNum1); // 1
console.log(maxNum1); // 10

const minNum2 = Math.min([3, 10, 1, 6, 4]); // 배열로 변경
const maxNum2 = Math.max(3, 10, 1, 6, 4);

console.log(minNum2); // NaN
console.log(maxNum2); // 10

const minNum3 = Math.min(nums);
const maxNum3 = Math.max(nums);

console.log(minNum3); // NaN
console.log(maxNum3); // NaN

const minNum4 = Math.min(...nums);
const maxNum4 = Math.max(...nums);

console.log(minNum4); // 1
console.log(maxNum4); // 10

const minNum5 = Math.min.apply(null, nums);
const maxNum5 = Math.max.apply(null, nums);

console.log(minNum5); // 1
console.log(maxNum5); // 10

const minNum6 = Math.min.call(null, ...nums);
const maxNum6 = Math.max.call(null, ...nums);

console.log(minNum6); // 1
console.log(maxNum6); // 10

/**
 * bind
 */

// 새로 바인드한 함수를 만든다.
// 이 함수는 항상 this를 henson으로 받는다.
const updateHenson = update.bind(henson);

updateHenson(1980, 'police');
console.log(henson); // {name: 'Henson', birthYear: 1980, occupation: 'police'}

// -------------------------------------------------------------------------

const user = {
  name: 'Henson',
  showName: function () {
    console.log(`hello, ${this.name}`);
  },
};

user.showName(); // 'hello, Henson'

// fn 변수에 user객체의 showName 메소드를 할당
let fn = user.showName;

// 메소드를 할당하면서 this를 잃어버림
fn(); // 'hello, '

fn.call(user); // 'hello, Henson'
fn.apply(user); // 'hello, Henson'

// bind로 fn의 this를 user값을 갖도록 함
let boundFn = fn.bind(user);

boundFn(); // // 'hello, Henson'

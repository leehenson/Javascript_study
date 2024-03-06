/**
 * prompt()
 */

// prompt()는 사용자에게 어떠한 값을 입력 받을 때 사용한다.
const name = prompt('이름을 입력하세요.'); // input => "Henson", prompt()를 이용해서 값을 입력 받을 수 있는 대화상자를 띄운다. 대화상자에 이름을 입력하고 확인을 누른다.
alert(`안녕하세요, ${name}'님. 환영합니다.`); // result => "안녕하세요, Henson님. 환영합니다."", alert()의 대화상자가 뜨면서 prompt() 대화상자에 입력했던 이름이 alert() 대화상자에 출력된다.

console.log(name); // result => "null", prompt() 대화상자에서 취소를 선택할 경우에는 null값이 들어간다.

// prompt()는 default값도 입력 받을 수 있다.
const resevationDate = prompt('예약일을 입력해주세요.', '2024-03-06'); // prompt()는 두 개의 인자를 받을 수 있으며, 첫 번째 값은 대화상자의 메세지가 되고, 두 번째 값은 입력받을 default값이 된다. default값을 통해 입력 값을 안내하거나, 힌트를 줄 수 있다.

/**
 * confirm
 *
 * 무언가를 확인 받을 때 사용할 수 있다.
 */

const isAdult = confirm('당신은 성인 입니까?'); // confirm()은 alert()과 다르게 확인 버튼 뿐만 아니라 취소 버튼도 함께 존재한다. 확인을 누르면 true를 반환하고, 취소를 누르면 false를 반환한다. 이 결과값을 활용하여 이후 작업을 진행할 수 있다.
console.log(isAdult);

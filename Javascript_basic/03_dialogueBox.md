# 대화상자

Javascript는 대화상자를 통해 사용자가 상호작용할 수 있는데, 대표적으로 `alert`, `prompt`, `confirm`이 있다.

1. `alert` : 사용자에게 정보를 알려주는 역할
2. `prompt` : 사용자로부터 정보를 입력 받는 역할
3. `confirm` : 사용자로부터 정보를 확인을 받는 역할

<br />

## alert()

`alert()`함수가 실행되면, 메세지를 띄우고 사용자가 확인 버튼을 누르기 전까지는 계속 띄우게 된다.

`alert()`의 경우에는 사용자와 상호작용 한다기 보다는 일방적으로 알리는 용도로 사용된다.

<br />

## prompt()

`prompt()`는 사용자에게 어떠한 값을 입력 받을 때 사용한다.

```javascript
const name = prompt('이름을 입력하세요.'); // input => "Henson"
alert(`안녕하세요, ${name}'님. 환영합니다.`); // result => "안녕하세요, Henson님. 환영합니다."
```

`prompt()`를 이용해서 값을 입력 받을 수 있는 대화상자를 띄운다. 대화상자에 이름을 입력하고 확인을 누른다.

`alert()`의 대화상자가 뜨면서 `prompt()` 대화상자에 입력했던 이름이 `alert()` 대화상자에 출력된다.

```javascript
const name = prompt('이름을 입력하세요.'); // 취소 선택
console.log(name); // result => "null"
```

`prompt()` 대화상자에서 취소를 선택할 경우에는 `null`값이 들어간다.

`prompt()`는 default값도 입력 받을 수 있다.

```javascript
const resevationDate = prompt('예약일을 입력해주세요.', '2024-03-06');
```

`prompt()`는 두 개의 인자를 받을 수 있으며, 첫 번째 값은 대화상자의 메세지가 되고, 두 번째 값은 입력받을 default값이 된다.

default값을 통해 입력 값을 안내하거나, 힌트를 줄 수 있다.

<br />

## confirm()

무언가를 확인 받을 때 사용할 수 있다.

```javascript
const isAdult = confirm('당신은 성인 입니까?');
console.log(isAdult);
```

`confirm()`은 `alert()`과 다르게 확인 버튼 뿐만 아니라 취소 버튼도 함께 존재한다.

확인을 누르면 `true`를 반환하고, 취소를 누르면 `false`를 반환한다.

이 결과값을 활용하여 이후 작업을 진행할 수 있다.

1. 결제 하시겠습니까?
2. 정말 삭제 하시겠습니까?

위와 같이 사용자 액션을 한번 더 확인을 확인을 할 때에 유용하게 사용할 수 있다.

<br />

## 정리

1. `alert()`은 메세지를 보여주고, 확인 버튼을 누르면 닫힌다.
2. `prompt()`는 사용자에게 메세지를 보여주고, 값을 입력할 수 있는 필드를 제공한다. 취소를 누르면 `null`을 반환하고, 두 번째 인자로 default값을 설정할 수 있다.
3. `confirm()`은 사용자에게 확인을 받기 위한 용도로 사용되고, 확인 버튼은 `true`를 취소 버튼은 `false`를 반환한다.

### 단점

Javascript에서 기본적으로 제공하는 대화상자는 간단하게 사용할 수 있지만, 단점이 존재한다.

1. 대화상자가 떠있는 동안 스크립트가 일시정지되므로, 대화상자를 닫기 전까지는 이후 동작에 제한을 받는다.
2. 스타일링이 불가하므로, 위치와 모양을 정할 수 없고, 브라우저마다 모양이 조금씩 다르다.

- 따라서, HTML과 CSS로 만든 모달창들을 많이 사용하지만, 기본 대화상자는 빠르고, 간단하게 적용이 가능하기 때문에 또한 많이 사용된다.

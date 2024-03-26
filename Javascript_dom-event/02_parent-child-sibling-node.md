# 부모, 자식, 형제 노드

```javascript
document.querySelectorAll('p'); // NodeList(4) [p#first, p#second, p, p]

document.getElementsByTagName('p'); // HTMLCollection(4) [p#first, p#second, p, p, first: p#first, second: p#second]
```

`document.querySelectorAll()`의 반환값은 `NodeList`이고, `document.getElementsByTagName()`의 반환값은 `HTMLCollection`으로 반환값이 다르다.

둘 다 유사 배열 객체이면서 iterable이다.

```javascript
const pList1 = document.querySelectorAll('p');
const pList2 = document.getElementsByTagName('p');

pList1; // NodeList(4) [p#first, p#second, p, p]
pList2; // HTMLCollection(4) [p#first, p#second, p, p, first: p#first, second: p#second]
```

`pList1`은 `querySelectorAll()`로 가져온 리스트이고, `pList2`는 `getElementsByTagName()`으로 가져온 리스트이다.

`pList1`를 출력해보면, `NodeList`이면서 리스트 길이는 4개이다.

`pList2`를 출력해보면, `HTMLCollection`이면서 리스트 길이는 마찬가지로 4개이다.

### p 추가

```javascript
pList1; // NodeList(4) [p#first, p#second, p, p]
pList2; // HTMLCollection(5) [p, p#first, p#second, p, p, first: p#first, second: p#second]
```

p 태그를 하나 추가한 뒤에 다시 출력해보면, `pList1`은 그대로 4개인데, `pList2`는 5개로 변경된다.

`HTMLCollection`은 코드를 다시 작성하지 않아도 노드의 변경사항이 자동으로 실시간 반영이 된다.

반면에, `NodeList`는 한번 저장된 값을 계속 사용한다.

<br />

## 부모 노드

```javascript
const red = document.getElementById('red');

red.parentNode; // <ul id="color">...</ul>
red.parentElement; // <ul id="color">...</ul>
```

`parentNode`와 `parentElement`로 부모 노드에 접근할 수 있다.

```javascript
document.documentElement.parentNode; // #document

document.documentElement.pararentElement; // null
```

`parentNode`는 모든 부모 노드를 반환하기 때문에, html의 부모 노드인 document를 반환한다.

`parentElement`는 부모 노드 중에서 요소 노드만 반환하는데, document는 요소 노드가 아니기 때문에, `null`을 반환한다.

<br />

## 노드의 타입

노드에는 총 12가지의 타입이 있다.

자주 사용하는 타입은 아래와 같다.

1. Element node
2. Attribute node
3. Text node
4. Comment node
5. Document node

<br />

## 자식 노드

```javascript
const ul = document.getElementById('color');

ul.childNodes; // NOdeList(9)  [text, li#red, text, comment, text, li#blue, text, li#green, text]
ul.children; // HTMLCollection(3)  [li#red, li#blue, li#green, red: li#red, blue: li#blue, green: li#green]

ul.firstChild; // #text

ul.lastChild; // #text

ul.firstElementChild; // <li id="red">...</li>

ul.lastElementChild; // <li id="green">...</li>
```

`childNodes`는 공백과 줄바꿈, 주석과 같은 모든 자식 노드를 반환한다.

`children`은 자식 노드 중 요소 노드만 반환한다.

> 예외적으로 `childNoes`는 `HTMLCollection`과 같이 변경사항이 실시간으로 반영된다.

`firstChild`는 첫 번째 자식 노드를 반환하고, `lastChild`는 마지막 자식 노드를 반환한다.

`firstElementChild`는 첫 번째 자식 요소 노드를 반환하고, `lastElementChild`는 마지막 자식 요소 노드를 반환한다.

<br />

## 형제 노드

```javascript
const blue = document.getElementById('blue');

blue.previousSibling; // #text

blue.nextSibling; // #text

blue.previousElementSibling; // <li id="red">...</li>

blue.nextElementSibling; // <li id="green">...</li>
```

형제 노드는 이전 형제와 다음 형제로 나뉜다.

`previosSibling`은 모든 형제 노드 중에서 바로 이전 노드를 반환하고, `nextSibling`은 모든 형제 노드 중 바로 다음 노드를 반환한다.

`previousElementSibling`은 요소 노드 중에서 바로 이전 요소 노드를 반환하고, `nextElementSibling`은 요소 노드 중에서 바로 다음 요소 노드를 반환한다.

<br />

## 정리

|      |                모든 노드                |                     요소 노드만                     |
| :--: | :-------------------------------------: | :-------------------------------------------------: |
| 부모 |               parentNode                |                    parentElement                    |
| 자식 | childNodes<br/>firstChild<br/>lastChild | children<br/>firstElementChild<br/>lastElementChild |
| 형제 |     previousSibling<br/>nextSibling     |    previousElementSibling<br/>nextElementSibling    |

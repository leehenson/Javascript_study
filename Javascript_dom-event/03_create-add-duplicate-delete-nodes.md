# 노드 생성, 추가, 복제, 삭제

```html
<body>
  <h1>Welcome</h1>
  <h2>World</h2>
  <ul id="color">
    <li id="red">Red</li>
    <li id="blue">Blue</li>
    <li id="green">Green</li>
  </ul>
  <h3>A</h3>
</body>
```

<br />

## 노드 제어

```javascript
const blue = document.getElementById('blue');

blue.firstChild; // "Blue"

blue.firstElementChild; // null

const blueTextNode = blue.firstChild;

blueTextNode.nodeName; // '#text'
blueTextNode.nodeType; // 3(Text node)
blueTextNode.nodeValue; // 'Blue'
```

`firstChild`는 텍스트 노드인 `"Blue"`가 출력되고, `blue`의 자식 요소 노드는 없기 때문에, `firstElementChild`는 `null`이 출력된다.

`blue.firstChile`의 값을 `blueTextNode` 변수에 담아서 `nodeName`을 출력하면, `'#text'`로 텍스트 노드라는 것을 알 수 있다.

또한, `blueTextNode.nodeType`으로 `3`. 즉, 텍스트 노드라는 것을 알 수 있다.

`blueTextNode.nodeValue`로 해당 텍스트 노드의 값이 `Blue`라는 것을 알 수 있다.

`blueTextNode.nodeValue = '파랑'`을 통해서 노드의 값을 `'파랑'`으로 변경이 가능하다.

<br />

### 노드 수정

```javascript
blueTextNode.nodeValue = '파랑';
```

`nodeValue`로 노드의 값을 변경할 수 있다.

`nodeValue`는 모든 노드가 가지고 있는 프로퍼티이지만, 텍스트 노드가 아니면 `null`을 반환한다.

<br />

## innerHTML

```javascript
const ul = document.getElementById('color');

ul.nodeType; // 1(Element node)
ul.nodeName; // 'UL'
ul.nodeValue; // null

ul.textContent = 'xxxx'; // 'xxxx'

ul.innerHTML = '<li>RED</li>';
```

`ul`의 `nodeType`은 `1`로 요소 노드인 것을 알 수 있다.

`nodeName`은 요소 노드의 태그명을 대문자로 반환한다.

`nodeValue`는 텍스트 노드가 아니기에 `null`을 반환한다.

`textContent` 프로퍼티로 요소 노드에 텍스트를 생성 및 제어할 수 있다.

마크업을 표현하기 위해서는 `innerHTML`을 사용하면 된다.

하지만, 요소를 추가, 제거, 수정할 때마다 모든 HTML을 문자열로 작성해야 된다는 단점이 있다.

<br />

## 노드 생성, 추가

```javascript
const newLi = document.createElement('li');

newLi.innerHTML = 'green';

const ul = document.getElementById('color');

ul.appendChild(newLi);
```

`document.createElement()`로 새로운 원하는 요소를 만들 수 있다.

`innerHTML`로 새로 만든 요소에 텍스트를 추가해줄 수 있다.

`appendChild`로 만든 새로운 요소를 원하는 요소의 자식 노드로 넣어줄 수 있다.

```javascript
const newLi2 = document.createElement('li');

const newText = document.createTextNode('pink');

newLi2.appendChild(newText);

ul.appendChild(newLi2);
```

`createTextNode()`로 텍스트 노드를 생성하고, `appendChild()`로 원하는 요소의 텍스트 노드로 추가해준 다음, 만든 요소를 `appendChild()`로 자식 노드로 추가해주면 `innterHTML`없이도 텍스트 노드 생성 및 추가, 자식 노드에 추가까지 할 수 있다.

<br />

## insertBefore

`appendChild()`는 해당 요소의 마지막에 원하는 요소를 추가하는데, 원하는 위치가 마지막이 아니라면 `insertBefore`를 이용해야 한다.

특정 노드를 전달하면 그 노드 전에 삽입이 된다.

```javascript
const newLi3 = document.createElement('li');

const textNode3 = document.createTextNode('black');

newLi3.appendChild(textNode3);

const red = docuement.getElementById('red');

ul.insertBefore(newLi3, red);
```

`ul.insertBefore(newLi3, red)`을 사용하면 `red` 앞에 `newLi3`를 삽입한다.

```javascript
ul.appendChild(red);

ul.insertBefore(red, newLi3);
```

`appendChild()`와 `insertBefore()`는 새로 만든 요소뿐만 아니라 기존의 요소들도 옮길 수 있다.

<br />

## 노드 복제

```javascript
const newBlack = newLi3.cloneNode();

ul.appendChild(newBlack); // <li></li>

const newBlack2 = newLi3.cloneNode(true);

ul.appendChild(newBlack2); // <li>black</li>
```

`cloneNode()`는 boolean을 인자로 받는데, 인자를 아무것도 안주거나 `false`를 전달하면 얕은 복제를 한다. 따라서, 노드 자신만 달랑 복제가 된다.

`newLi3.cloneNode(true)`와 같이 인자를 `true`로 주게 되면 깊은 복제가 되어 텍스트 노드를 포함한 모든 자식 노드들 까지 복제가 된다.

<br />

## 삭제

```javascript
ul.removeChild(red); // red 노드 삭제
ul.removeChild(newBlack2); // newBlack2 노드 삭제

ul.removeChild(ul.firstElementChild); // ul의 첫 번째 자식 요소 노드 삭제
ul.removeChild(ul.lastElementChild); // ul의 마지막 자식 요소 노드 삭제
```

`removeChild()`로 원하는 자식 노드를 삭제할 수 있다.

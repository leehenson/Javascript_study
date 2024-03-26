# 노드에 접근하기

<br />

## DOM (Document Object Model)

DOM은 Document Object Model의 약자로 문서 객체 모델이다.

DOM은 HTML 문서의 각 요소들을 트리형식으로 표현해준다.

개발자는 자바스크립트를 이용해서 요소를 생성하거나, 수정하거나, 삭제할 수 있다.

하나의 객체를 **노드**라고 부른다.

트리에서 위쪽을 **부모 노드**, 아래쪽을 **자식 노드**라고 부른다.

`Document`를 제외한 최상단의 `html`요소는 **루트 노드**가 된다.

### 노드에 접근

```javascript
document.documentElement; // html에 접근

document.body; // body에 접근

document.head; // head에 접근
```

모든 html 태그는 객체이다.

객체는 자바스크립트로 접근하고 제어할 수 있다.

### 노드를 제어

```javascript
document.body.style; // body 스타일에 접근

document.body.style.opacity = '0'; // body의 투명도를 변경

document.body.style.opacity = '0.5'; // body의 투명도를 변경

document.body.style.padding = '100px'; // body의 padding을 변경
```

위와 같은 방식으로 html 요소에 스타일도 제어할 수 있다.

### id로 접근

```javascript
const el = document.getElementById('first'); // id가 first인 요소에 접근

el; // <p id="first">...</p>
```

### 태그이름으로 접근

```javascript
const pList = document.getElementsByTagName('p');

pList; // HTMLCollection(4) [p#first, p#second, p, p, first: p#first, second:p#second]
```

html에서 id는 한 페이지에 하나밖에 사용할 수 없지만, 태그는 같은 이름으로 여러 개를 사용할 수 있기 떄문에 `getElementsByTagName`으로 여러 개의 요소에 접근할 수 있다.

```javascript
for (p of pList) {
  p.style.fontSize = '30px'; // 모든 p 태그의 폰트 사이즈를 30px로 변경
  p.style.opacity = String(Math.random()); // 모든 p 태그의 투명도를 랜덤하게 변경
}
```

`getElementsByTagName`는 여러 개의 요소를 가져오기 때문에 `for ... of`로 반복할 수 있다.

### class 이름으로 접근

```javascript
document.getElementsByClassName('link'); // HTMLCollection(3) [a.link, a.link, a.link]
```

`getElementsByClassName()`으로 클래스 이름을 가진 요소에 접근할 수 있다.

### querySelectorAll()

```javascript
document.querySelectorAll('.link'); // NodeList(3) [a.link, a.link, a.link]
document.querySelector('#firsst'); // <p id-"first">...</p>
```

`querySelectorAll()`을 통해 css 선택자로 노드에 접근할 수 있다.

id는 한 페이지당 하나밖에 없기 때문에 `querySelector()`로 접근할 수 있다.

클래스처럼 여러 개의 요소가 있을 경우에 `querySelector()`를 사용하면 맨 처음 딱 하나만 가져온다.

```javascript
document.querySelector('h3:nth-of-type(2)'); // <h3>B</h3>

document.querySelector('h3:nth-of-type(2)').style.color = red;
```

`querySelector()`를 사용하면 `nth-of-type`과 같은 것을 사용할 수 있기 때문에 편리하다.

```javascript
const pList = document.querySelector('p:nth-of-type(2n)'); // 짝수번쨰 p에 접근

for (p of pList) {
  p.style.backgroundColor = '#000';
  p.style.color = '#fff';
}

pList[1]; // <p>...</p>

pList.length; // 2

pList.push(); // Error

pList.pop(); // Error

pList.filter(); // Error

pList.join(); // Error
```

짝수번째 p태그에만 접근하여 흑백을 반전시킬 수 있다.

자바스크립트로 여러 개의 요소에 접근하는 방식들로 얻는 요소들은 배열이 아니라, iterable한 컬렉션인 `NodeList`에 담긴다.

따라서, `for ... of`나 인덱스로 접근이 가능하다.

`length`를 통해서 개수를 알 수도 있다.

하지만, 배열이 아니기 때문에 `push()`, `pop()`, `filter()`, `join()`과 같은 메소드를 사용할 수 없다.

노드에는 다양한 타입이 있는데 개발할 때에는 HTML 요소에 주로 접근한다.

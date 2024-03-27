# 이벤트 버블링, 이벤트 위임

<br />

## 이벤트 버블링

```html
<body>
  <div id="box">
    <ul id="list">
      <li id="color">Red</li>
    </ul>
  </div>
</body>
```

위 html은 `body` 안에 `div` 안에 `ul` 안에 `li` 태그가 있다.

```javascript
const box = document.getElementById('box');
const list = document.getElementById('list');
const color = document.getElementById('color');

document.body.addEventListener('click', () => {
  console.log('1. body');
});
box.addEventListener('click', () => {
  console.log('2. div');
});
list.addEventListener('click', () => {
  console.log('3. ul');
});
color.addEventListener('click', () => {
  console.log('4. li');
});
```

위 스크립트 코드에 의해 모든 요소에 클릭 이벤트가 발생 시, 콘솔이 출력된다.

```
4. li
3. ul
2. div
1. body
```

`li`를 클릭하면 위의 순으로 콘솔이 출력된다.

```
2. div
1. body
```

`div`를 클릭하면 위의 순으로 자기 자신인 `div`와 부모인 `body`가 콘솔에 출력된다.

위와 같은 현상을 보아 알 수 있는 것은 자식 요소에서 발생된 이벤트 객체는 부모와 그 부모를 통해 전파된다는 것이다.

즉, 이벤트 객체가 하위요소에서 상위요소로 더 이상 부모 요소가 없을 때까지 반복되며 올라간다.

위와 같이 이벤트가 거슬러 올라가는 모습이 물속이 거품같이 보인다고 하여서 이것을 **이벤트 버블링**이라고 한다.

대부분의 이벤트는 버블링으로 전파가 되지만 아래와 같은 일부 이벤트는 전파가 되지 않는다.

1. `focus`
2. `blur`
3. `mouseenter`
4. `mouseleave`

만약 위와 같은 이벤트를 상위 요소로 전파를 하고 싶다면, 아래와 같은 이벤트로 대체해주면 된다.

1. `focusin`
2. `focusout`
3. `mouseover`
4. `mouseout`

위의 이벤트들과 아래 이벤트들은 동작은 같고, 버블링이 되느냐 안되느냐의 차이가 있다.

```html
<body>
  <div id="box2">
    <input type="text" id="txt" />
  </div>
</body>
```

`body` 안에 `div` 안에 `input`이 있다.

```javascript
const box2 = document.getElementById('box2');
const txt = document.getElementById('txt');

document.body.addEventListener('focus', () => {
  console.log('focus - 1. body');
});

box2.addEventListener('focus', () => {
  console.log('focus - 2. div');
});

txt.addEventListener('focus', () => {
  console.log('focus - 3. input');
});

document.body.addEventListener('blur', () => {
  console.log('blur - 1. body');
});

box2.addEventListener('blur', () => {
  console.log('blur - 2. div');
});

txt.addEventListener('blur', () => {
  console.log('blur - 3. input');
});
```

각 요소들은 `focus` 이벤트가 발생하거나, `blur` 이벤트가 발생할 때, 콘솔을 출력한다.

```
focus - 3. input
```

input 창에 포커스를 하게 되면, 위와 같이 3번 input만 콘솔에 출력된다.

```
blur - 3. input
```

포커스를 벗어날 때에도, 동일하게 3번 input만 콘솔에 출력된다.

```javascript
const box2 = document.getElementById('box2');
const txt = document.getElementById('txt');

document.body.addEventListener('focusin', () => {
  console.log('focusin - 1. body');
});

box2.addEventListener('focusin', () => {
  console.log('focusin - 2. div');
});

txt.addEventListener('focusin', () => {
  console.log('focusin - 3. input');
});

document.body.addEventListener('focusout', () => {
  console.log('focusout - 1. body');
});

box2.addEventListener('focusout', () => {
  console.log('focusout - 2. div');
});

txt.addEventListener('focusout', () => {
  console.log('focusout - 3. input');
});
```

`focus`를 `focusin`으로, `blur`를 `focusout`으로 변경 후,

```
focusin - 3. input
focusin - 2. div
focusin - 1. body

focusout - 3. input
focusout - 2. div
focusout - 1. body
```

input 창에 포커스를 하고 나서, 포커스를 해제해보면, 위와 같이 이벤트 버블링이 되는 것을 확인할 수 있다.

```javascript
const box2 = document.getElementById('box2');
const txt = document.getElementById('txt');

document.body.addEventListener('focusin', () => {
  console.log('focusin - 1. body');
});

box2.addEventListener('focusin', () => {
  console.log('focusin - 2. div');
});

txt.addEventListener('focusin', (event) => {
  event.stopPropagation();
  console.log('focusin - 3. input');
});

document.body.addEventListener('focusout', () => {
  console.log('focusout - 1. body');
});

box2.addEventListener('focusout', () => {
  console.log('focusout - 2. div');
});

txt.addEventListener('focusout', (event) => {
  event.stopPropagation();
  console.log('focusout - 3. input');
});
```

```
focusin - 3. input
focusout - 3. input
```

이벤트 버블링은 인위적으로 막을 수 있다.

위와 같이, `event`를 인수로 받아서, `event.stopPropagation()`을 사용해주면, `focusin`과 `focusout`인데도, 이벤트 버블링이 발생하지 않는 것을 확인할 수 있다.

하지만, 이벤트 버블링을 막아야 하는 경우가 거의 없기 때문에, 자주 사용되지는 않는다.

<br />

## 이벤트 위임

**이벤트 위임**은 자신에게 발생하는 이벤트를 다른 요소에서 처리하는 것을 말한다.

```html
<head>
  <style>
    #box3 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;
      width: 300px;
      height: 300px;
      border: 2px solid #000;
      background-color: green;
    }

    #list2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
      width: 200px;
      height: 200px;
      border: 2px solid #000;
      background-color: orange;
    }

    li {
      display: flex;
      align-items: center;
      padding-left: 10px;
      width: 150px;
      height: 40px;
      background-color: yellow;
      border: 2px solid #000;
    }

    .on {
      background-color: red;
    }
  </style>
</head>
<body>
  <div id="box3">
    <ul id="list2">
      <li id="red" class="on">Red</li>
      <li id="blue">Blue</li>
      <li id="green">green</li>
      <li id="pink">Pink</li>
    </ul>
  </div>
</body>
<script>
  const list2 = document.getElementById('list2');
  const colors = list2.children;

  function clickHandler(event) {
    for (c of colors) {
      c.classList.remove('on');
    }
    event.target.classList.add('on');
  }

  document.getElementById('red').addEventListener('click', clickHandler);
  document.getElementById('blue').addEventListener('click', clickHandler);
  document.getElementById('green').addEventListener('click', clickHandler);
  document.getElementById('pink').addEventListener('click', clickHandler);
</script>
```

위 html에는 `li` 4개가 있고, `li`을 클릭을 하면 클릭한 `li`가 빨간색으로 바뀐다.

`clickHandler()` 함수는 모든 `li`에서 `on` 클래스를 제거하고, 클릭된 `li`에 `on` 클래스를 추가해준다.

이 함수가 모든 `li`에 이벤트 핸들러로 등록되어있다.

하지만, `li`의 갯수가 무수히 많다면, 그만큼 상당히 코드가 길어지고, 성능적으로도 저하가 있을 수 있고, 유지보수도 힘들다.

따라서, 이럴 경우에는 `li`가 아닌 부모 요소인 `ul`에 이벤트를 위임할 수 있다.

```javascript
const list2 = document.getElementById('list2');
const colors = list2.children;

function clickHandler(event) {
  for (c of colors) {
    c.classList.remove('on');
  }
  event.target.classList.add('on');
}

document.getElementById('list2').addEventListener('click', clickHandler);
```

위와 같이 `ul`에 이벤트 핸들러를 등록하면, `li`의 갯수에 상관없이 한 줄의 코드로 이벤트 핸들러를 사용할 수 있다.

갯수가 바뀌여도, 코드의 수정이 필요가 없기 때문에, 유지보수에도 좋다.

위와 같은 동작이 가능한 이유는 **이벤트 버블링** 덕분이다.

`li`에서 발생한 이벤트가 부모 요소인 `ul`에 등록된 이벤트 핸들러를 실행시켜주는 원리이다.

이렇게 **이벤트 위임**이 이루어진다.

```html
<body>
  <div id="box3">
    <ul id="list2">
      <li id="red" class="on"><a href="#">Red</a></li>
      <li id="blue"><a href="#">Blue</a></li>
      <li id="green"><a href="#">green</a></li>
      <li id="pink"><a href="#">Pink</a></li>
    </ul>
  </div>
</body>
```

만약, 위와 같이 텍스트가 `a` 태그에 감싸져 있는 상황에서 텍스트를 클릭해보면, 텍스트의 배경색이 변경된다.

`li` 태그에 있어야 할 `on`이 `a`태그에 들어가기 때문이다.

```javascript
function clickHandler(event) {
  console.log('target', event.target); // 이벤트를 발생시키는 요소
  console.log('currentTarget', event.currentTarget); // 이벤트 핸들러가 등록된 요소
  for (c of colors) {
    c.classList.remove('on');
  }
  event.target.classList.add('on');
}
```

이벤트 핸들러에서 클릭 시, `event.target`과 `event.currentTarget`을 출력해보면,

```
target <li id=​"blue" class=​"on">​…​</li>​flex
currentTarget <ul id=​"list2">​…​</ul>​flex

target <a href=​"#" class=​"on">​Pink​</a>​
currentTarget <ul id=​"list2">​…​</ul>​flex
```

`currentTarget`은 항상 `ul`을 가르키고, `target`은 클릭된 요소를 가리킨다.

`currentTarget`은 이벤트 핸들러가 등록된 요소이고, `target`은 실제 이벤트를 발생시키는 요소이다.

따라서, 이벤트 위임을 사용하지 않았다면, `target`과 `currentTarget`은 동일하다.

```javascript
function clickHandler(event) {
  let target = event.target;
  if (target.tagName === 'A') {
    target = target.parentElement;
  } else if (target === event.currentTarget) {
    return;
  }
  for (c of colors) {
    c.classList.remove('on');
  }
  target.classList.add('on');
}
```

위의 문제를 해결하기 위해서 위와 같이, `event.target`을 `target` 변수에 넣어주고, `target`의 `tagName`이 `A`라면, `tartget`을 `a` 태그의 부모 요소로 변경해주고, 변경된 `target`에 `on` 클래스를 추가해주도록 하면 된다.

하지만, 추가적으로 `ul`를 클릭할 경우에, `ul`에 `on` 클래스가 추가되는데, 이를 방지하기 위해서, `else if`문으로 클릭한 요소가 `currentTarget`. 즉, `ul`일 경우에는 `return`믄을 통해서 이벤트 핸들러를 끝내도록 한다.

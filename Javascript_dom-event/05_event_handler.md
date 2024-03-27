# 이벤트 핸들러

마우스를 클릭하거나, 키보드를 누르는 행동들이 모두 이벤트인데, 이 외에도 input 창에 포커스가 되거나, 문서에 로드가 모두 완료가 되어도 이벤트가 발생한다.

이벤트가 발생할 떄, 특정 함수를 할당해서 실행해줄 수 가 있는데, 이것을 핸들러라고 한다.

```html
<button onclick="alert('click')">클릭</button>
```

위와 같이 `onclick`으로 버튼을 클릭했을 경우에 `alert()`을 띄우게 하는 것을 이벤트 핸들러라고 한다.

`onclick`과 같이 `on` 다음에 이벤트 타입을 정해주면 된다.

```html
<button onclick="sayHello()">클릭2</button>

<script>
  function sayHello() {
    alert('Hello');
  }
</script>
```

위와 같이, `onclick`으로 클릭 할 때, 원하는 함수를 실행시키게 할 수 있다.

```html
<button id="btn">클릭3</button>

<script>
  const el = document.getElementById('btn');
  el.onclick = sayHello;
</script>
```

위와 같이 버튼에 id값을 주고, `el.onclick`으로 핸들러를 할당할 수 있다.

이 때, `el.onclick = sayHello`와 같이 핸들러를 할당할 때에는 `()`가 없어야 한다.

왜냐하면 괄호가 있다면, 함수의 반환값이 할당되기 때문이다.

```html
<button id="btn2">클릭4</button>

<script>
  const el2 = document.getElementById('btn2');
  el2.addEventListener('click', sayHello);
</script>
```

<br />

## addEventHandler()

위와 같이, `addEventListener()`로 핸들러를 할당해줄 수 있다.

첫 번째 인자에는 이벤트를, 두 번째 인자에는 함수를 넣어주면 된다.

`addEventHandler()`는 첫 번째 인자로 넣어준 특정 이벤트가 발생하면, 두 번째 인자로 전달된 함수 즉, 핸들러가 실행된다.

```html
<button id="btn2">클릭4</button>

<script>
  const el2 = document.getElementById('btn2');
  el2.addEventListener('click', () => {
    alert('hi');
  });
</script>
```

위와 같이, 두 번째 인자에 함수를 전달하지 않고, 함수를 직접 넣어주는 것도 가능하다.

```javascript
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.backgroundColor = 'red';
}); // 적용됨

document.onDOMContentLoaded = () => {
  document.body.style.backgroundColor = 'red';
}; // 적용되지 않음
```

`addEventHandler()`를 사용하면 html와 javascript를 분리하기 쉽고, `DOMContentLoaded`와 같은 일부 이벤트는 `addEventHandler()`를 통해서만 사용할 수 있다.

따라서, 가급적이면, `addEventLinstener()`로 통일해서 사용하는 것이 좋다.

<br />

## removeEventHandler()

```javascript
document.removeEventListener('DOMContentLoaded', () => {
  document.body.style.backgroundColor = 'red';
});
```

`removeEventListener()`는 이미 할당된 핸들러를 삭제할 때 사용한다.

<br />

## 자주 사용하는 이벤트

### dblclick

```html
<button id="btn">클릭3</button>

<script>
  const el = document.getElementById('btn');
  el.addEventListener('dblclick', sayHello);
</script>
```

`dblclick` 이벤트는 더블클릭이 될 경우에, 실행된다.

### keyup

```html
<input type="text" id="txt" />

<script>
  const input = document.getElementById('txt');
  input.addEventListener('keyup', (event) => {
    console.log(event);
  });
</script>
```

위와 같이 `keyup` 이벤트로 input 창에서 키보드를 눌렀다가 땔 때, 콘솔이 찍히도록 할 수 있다.

또한, 이 핸들러는 이벤트 객체를 인수로 받는다.

인수를 받은 `event`를 출력해보면, 키보드 이벤트의 여러가지 정보를 확인할 수 있다.

### focus / blur

```html
<input type="text" id="txt" />

<script>
  const input = document.getElementById('txt');
  input.addEventListener('focus', () => {
    input.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
  });

  input.addEventListener('blur', () => {
    input.style.backgroundColor = null;
  });
</script>
```

`focus`는 input창에 포커스가 되면 이벤트가 발생하고, `blur`는 포커스를 잃을 떄 발생한다.

위의 코드는 input창에 포커스가 되면, 배경색을 바꾸고, 포커스를 잃으면, 배경색을 초기화시킨다.

### mousemove

```html
<div id="box" style="width: 100px; height: 100px; border: 2px solid red"></div>

<script>
  const box = document.getElementById('box');
  box.addEventListener('mousemove', (event) => {
    console.log(event);
  });
</script>
```

`mousemove` 이벤트는 마우스 움직일 때마다 발생하는 이벤트이다.

위 코드는 `box`라는 div 태그 안에서 마우스를 움직일 때마다, 인수로 받은 `event`를 콘솔에 출력한다.

콘솔에 찍힌 `MouseEvent`에는 `clientX`와 `clientY`가 있는데, 이것을 이용하면, 현재 마우스의 위치를 알 수 있다.

```html
<div
  id="box"
  style="
        position: relative;
        width: 100px;
        height: 100px;
        border: 2px solid red;
      "
>
  <div
    id="circle"
    style="
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: #000;
          border-radius: 50%;
        "
  ></div>
</div>

<script>
  const box = document.getElementById('box');
  const circle = document.getElementById('circle');
  box.addEventListener('mousemove', (event) => {
    circle.style.top = `${event.clientY}px`;
    circle.style.left = `${event.clientX}px`;
  });
</script>
```

위와 같이, `MouseEvent`의 정보로, `circle` div의 위치를 변경할 수 있다.

### window의 resize

```javascript
window.addEventListener('resize', () => {
  document.body.innerHTML = `현재 창 크기는 ${window.innerWidth} x ${window.innerHeight}`;
});
```

위와 같이 `window`의 `resize` 이벤트로, 창 크기가 바뀔 때마다, 너비와 높이 값을 업데이트할 수 있다.

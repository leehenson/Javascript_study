# CSS style, class 제어

<br />

## CSS Style

```css
#box {
  background-color: red;
}
```

```javascript
const box = document.getElementById('box');

box.style.backgroundColor = 'red';
```

일반적으로 css에서는 `background-color`와 같이 케밥 케이스로 표기하는데, 자바스크립트에서 css를 제어할 경우에는 `backgroundColor`와 같이 카멜 케이스로 작성해야 한다.

```javascript
box.style['margin-left'] = '30px';
```

만약 css와 같이 익숙한 케밥 케이스로 작성하고 싶다면, 위와 같은 방식으로 작성해야 한다.

```javascript
box.style; // CSSStyleDeclaration {0: 'background-color', 1: 'color', 2: 'width', 3: 'height', 4: 'margin-left', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
/**
 * 0: "background-color"
1: "color"
2: "width"
3: "height"
4: "margin-left"
accentColor: ""
additiveSymbols: ""
alignContent: ""
alignItems: ""
alignSelf: ""
alignmentBaseline: ""
all: ""
animation: ""
animationComposition: ""
animationDelay: ""
animationDirection: ""
animationDuration: ""
animationFillMode: ""
animationIterationCount: ""
animationName: ""
animationPlayState: ""
animationRange: ""
animationRangeEnd: ""
animationRangeStart: ""
animationTimeline: ""
animationTimingFunction: ""
appRegion: ""
appearance: ""
ascentOverride: ""
aspectRatio: ""
backdropFilter: ""
backfaceVisibility: ""
background: ""
backgroundAttachment: ""
backgroundBlendMode: ""
backgroundClip: ""
backgroundColor: "red"
*/
```

`box.style`를 출력해보면 `backgroundColor`와 같이 카멜 케이스로 작성되어 있는 것을 확인할 수 있다.

```javascript
box.style.border = '10px solid #000';
```

위와 같이 단축 속성도 javascript 내에서 똑같이 사용할 수 있다.

<br />

## class 제어

```javascript
const box = document.getElementById('box');

box.className; // ''

box.className = 'bg-red';
box.className = 'bg-blue';
box.className = 'txt-pink';

box.className = 'bg-blue txt-pink';
```

`box`의 클래스 이름을 알려면 `box.className`을 출력하면 된다.

`box`에는 클래스 이름이 지정이 안되어 있기 때문에 `''` 빈 문자열이 출력된다.

`box`에 클래스 이름을 지정해주려면 `box.className = 'bg-red'`와 같이 해주면 된다.

`box.className = 'bg-blue'`인 상태에서 `box.className = 'txt-pink'`으로 설정을 해주면, `bg-blue` 클래스는 사라진다.

여러 개의 클래스 이름을 설정하려면 `box.className = 'bg-blue txt-pink'` 이런 식으로 여러 개의 클래스 이름을 넣어줘야 한다.

따라서, `className`은 여러 개의 클래스를 사용할 경우에 매우 불편하다.

### classList

```javascript
box.classList; // DOMTokenList(2) ['box', 'bg-red', value: 'box bg-red']
```

`box.classList`를 출력해보면, `box`가 갖고 있는 클래스들을 리스트 형태로 보여준다.

#### add, remove

```javascript
box.classList.add('txt-white');

box.classList.remove('txt-white');
```

`add`와 `remove`로 클래스를 추가 및 제거가 가능하다.

```javascript
box.classList.add('bg-green', 'txt-yellow');
```

여러 개의 클래스를 추가 및 제거를 하려면 `,`로 구분해서 적어주면 된다.

#### replace

```html
<div id="box" class="box bg-red bg-green txt-yellow">BOX</div>
```

`bg-red`와 `bg-green`과 같이 같은 속성을 제어하는 경우 `replace`를 이용하는 것이 편하다.

```javascript
box.classList.replace('bg-red', 'bg-blue');
```

#### toggle

```javascript
setInterval(() => {
  box.classList.toggle('bg-red');
}, 1000);
```

특정 클래스를 추가했다가 제거했다가 하는 경우가 있는데, `toggle`은 해당 클래스가 없으면 추가해주고, 있으면 제거해주는 기능을 한다.

위의 코드는 1초에 한 번씩 `bg-red` 클래스를 추가와 제거를 반복하는 코드이다.

<br />

## 이벤트

```javascript
const box = document.getElementById('box');
const color = document.getElementById('color');

color.onclick = function (e) {
  const target = e.target;
  if (target.tagName !== 'LI') return;
  target.classList.toggle('txt-pink');
};
```

위 코드는 `color`를 클릭했을 때, 클릭한 것이 `LI` 태그가 아니라면 `return`을 시키고, `LI`라면 `txt-pink` 클래스를 `toggle`하는 코드이다.

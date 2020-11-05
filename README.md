# Ohmentum
### Vanilla JS로 욕심이 생겨 만드는 생산성 웹
###### <i>[Momentum](https://momentumdash.com/) 클론코딩</i>
###### <i>기본 토대 작성은 [Vanilla_JS_with_NomadCoders](https://github.com/hyesungoh/Vanilla_JS_with_NomadCoders)에 작성해둠</i>

---
### 개발 사항
##### 시계 애니메이션
- 기존 시계에 1초마다 적용되는 keyframs 애니메이션 적용은 시, 분, 초 모두 적용 됨
- html 구조와 함께 js를 이용하여 초와 분이 0일 때 상위 시간을 get하는 함수 호출, innerHTMl 호출 후 `animate` 사용
```js
function getSeconds() {
  const date = new Date();
  const seconds = date.getSeconds();

  clockSeconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  clockSeconds.animate([
    {opacity: 0,
     easing: 'ease-in-out'},
    {opacity: 1,
     easing: 'ease-in-out'}
  ], {
    duration: 1200,
    iteration: Infinity
  });

  if (seconds == 0){
    getMinutes();
  }
}
```
- Init에 시작 시간 설정 및 `setInterval`을 통해 초만 업데이트
```js
function init() {
  getTime();
  setInterval(getSeconds, 1000);
  // setInterval(getTime, 1000);
}
```

#### To do 애니메이션
- createElement 후 iteration을 1로 설정하여 적용
```js
const li = document.createElement("li");
const span = document.createElement("span");
...
li.animate([
  {opacity: 0,
   easing: 'ease-in-out'},
  {opacity: 1,
   easing: 'ease-in-out'}
], {
  duration: 1500,
  iteration: 1
});
```

- delBtn을 click시 animate duration 시간에 맞춰 setTimeout 실행
```js
function deleteAfterAni(btn){
  const li = btn.parentNode;
  toDoList.removeChild(li);

  const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;

  saveToDos();
}

function deleteToDo(event){
  const btn = event.target;
  const li = btn.parentNode;

  li.animate([
    ...
  });
  // complete, then 을 이용해도 안돼서 setTimeout으로 설정
  setTimeout(deleteAfterAni, 1400, btn);
}
```

---
### 추가하고 싶은 사항
- Css로 디자인하기
  - ~~시계~~
  - ~~이름 및 해당 Input~~
  - ~~할 일 및 해당 Input~~
  - ~~날씨~~
  - ~~할 일 hover~~
- Animation을 활용해 조금이나마 자연스럽게 만들기
  - ~~시계~~
  - 이름 입력시
  - ~~할 일 작성시~~
  - ~~할 일 삭제시~~
  - 날씨 로딩 후
- 메모장 modal 추가하기?

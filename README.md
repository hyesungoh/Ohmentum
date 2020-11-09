# Ohmentum
### Vanilla JS로 욕심이 생겨 만드는 생산성 웹
###### <i>[Momentum](https://momentumdash.com/) 클론코딩</i>
###### <i>기본 토대 작성은 [Vanilla_JS_with_NomadCoders](https://github.com/hyesungoh/Vanilla_JS_with_NomadCoders)에 작성해둠</i>

---
### 개발 사항
#### 시계 애니메이션
![e1](https://user-images.githubusercontent.com/26461307/98265001-deb29600-1fcb-11eb-9006-a679a91c061a.gif)

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

![e2](https://user-images.githubusercontent.com/26461307/98265035-ea05c180-1fcb-11eb-99cd-1ea69b212d41.gif)
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
#### 사용자 위치 및 날씨 로딩 후
- fetch를 이용하여 api 호출 후 then을 사용하여 animate 사용

- 초기 display 속성을 none으로 설정 후 display 속성이 있는 class를 추가하여 보이게 함

```js
fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
).then(function(response){
  return response.json();
}).then(function(json){
  ... something innerText
}).then(function(){
  info.classList.add("showing");

  info.animate([
    {opacity: 0},
    {opacity: 1}
  ], {
    duration: 1500,
    iteration: 1
  });
});
```

#### 이름 입력 시
![ezgif com-gif-maker](https://user-images.githubusercontent.com/26461307/98461583-a50ea480-21f0-11eb-86be-25b57d4ecd1a.gif)
- Animate duration 후 setTimeout을 이용

#### Memo Modal
![ezgif com-gif-maker](https://user-images.githubusercontent.com/26461307/98474260-a6fc5600-2238-11eb-9e40-b404f5b55b78.gif)
- Modal의 style을 수정하여 transition 이용
```js
const HIDDEN_PER = "0%";
const SHOW_PER = "110%";

function handleCloseModal() {
    modalContent.style.right = HIDDEN_PER;
}

function handleOpenModal() {
    modalContent.style.right = SHOW_PER;
    closeBtn.addEventListener("click", handleCloseModal);
}

function init(){
    openBtn.addEventListener("click", handleOpenModal);
}

init();
```
- modal(부모)를 `fixed`와 `flex`로, modal_content(자식)을 `relative`로 설정
```css
.modal {
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    /* 오른쪽 중간에 두기 위함 */
    justify-content: flex-end;
    align-items: center;
}

.modal_content {
    background-color: rgba(255, 234, 167, 0.5);
    padding: 10px 10px;
    position: relative;
}
```

- css는 [nomadcoders](https://youtu.be/V08wXKHF_Xw) 참고

- Textarea Enter시 locaStorage 저장
```js
function handleTextSubmit(event){
    if (event.keyCode == 13) {
        // shift + enter 예외처리
        if (!event.shiftKey) {
            event.preventDefault();
            
            const text = textarea.value;
            localStorage.setItem(MEMO_LS, text);
        }
    }
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
  - ~~날씨 로딩 후~~
- 메모장 modal 추가하기
  - ~~modal 추가~~
  - ~~modal transition 사용~~
  - textarea 값 LS 저장하기
- 배경화면 슬라이더 추가

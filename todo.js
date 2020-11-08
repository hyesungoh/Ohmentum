const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

let toDos = [];

const TODOS_LS = "toDos";
const ANI_TIME = 700;

function deleteAfterAni(btn){
  const li = btn.parentNode;
  toDoList.removeChild(li);

  // array.filter(fn)는 array안에 있는 요소들을 모두 함수 fn에 보내며
  // return 값이 true인 것만 모아 새 array를 반환함
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
    {opacity: 1,
     easing: 'ease-in-out'},
    {opacity: 0,
     easing: 'ease-in-out'}
  ], {
    duration: ANI_TIME,
    iteration: 1
  });

  // complete, then 을 이용해도 안돼서 setTimeout으로 설정
  setTimeout(deleteAfterAni, ANI_TIME, btn);
}

function saveToDos(){
  // JSON.stringify는 모든 객체들을 문자열 형태로 만들어줌
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = text;
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  const newId = toDos.length + 1;

  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  li.animate([
    {opacity: 0,
     easing: 'ease-in-out'},
    {opacity: 1,
     easing: 'ease-in-out'}
  ], {
    duration: ANI_TIME,
    iteration: 1
  });

  toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);

  saveToDos();
}

function handlerSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null) {
    // JSON = JavaScript Object Notation
    // JSON.parse를 이용하여 문자열을 객체로
    const parsedToDos = JSON.parse(loadedToDos);

    // array.forEach(fnc) = array안에 있는 모든 요소들을
    // fnc 함수에 적용. 괄호안에 함수를 직접 작성 가능
    // python의 map과 비슷한듯

    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    });
  }
}

function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handlerSubmit);
}

init();

// using local storage

const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      name = document.querySelector(".js-name");

// LS == localStorage, CN = className
const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function handlerSubmit(event){
  event.preventDefault();
  const currentValue = input.value;
  removeForm(currentValue);
  saveName(currentValue);
}

function askName() {
  form.classList.add(SHOWING_CN);
  name.classList.remove(SHOWING_CN);
  form.addEventListener("submit", handlerSubmit);
}

function removeForm(text){
  form.animate([
    {opacity: 1},
    {opacity: 0}
  ], {
    duration: 700,
    iteration: 1
  });

  setTimeout(paintName, 700, text);
}

function paintName(text){
  form.classList.remove(SHOWING_CN);
  name.classList.add(SHOWING_CN);
  name.innerText = `Hello ${text}`;
  name.animate([
    {opacity: 0},
    {opacity: 1}
  ], {
    duration: 700,
    iteration: 1
  });
}

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function loadName(){
  // localStorage.getItem("key");
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askName();
  } else {
    paintName(currentUser);
  }
}

function init(){
  loadName();
}

init();

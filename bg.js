const body = document.querySelector("body"),
      bg = body.querySelector(".bg");
const IMG_NUMBER = 7;
const BG_SHOWING_CN = "bg_showing";


// function handleImgLoad(){
//   console.log("img loaded")
// }

function slideBg() {
  const currentBg = bg.querySelector(`.${BG_SHOWING_CN}`);

  const randomNumber = genRandom();
  const randomBg = bg.querySelector(`#bg_${randomNumber}`);
  
  if (currentBg === null){
    randomBg.classList.add(BG_SHOWING_CN);
  } else {
    currentBg.classList.remove(BG_SHOWING_CN);
    randomBg.classList.add(BG_SHOWING_CN);
  }
  
}

// function paintImg(imgNumber){
//   const image = new Image();
//   image.src = `images/${imgNumber + 1}.jpg`;
//   image.classList.add("bgImage");
//   body.appendChild(image);

//   // api 호출 시 loadend 이벤트 사용 가능
//   // image.addEventListener("loadend", handleImgLoad);
// }

function genRandom(){
  // Math.random() * 5 = 0~5까지 랜덤으로
  // Math.floor = 나머지 버림
  // Math.ceil = 나머지 올림
  const number = Math.ceil(Math.random() * IMG_NUMBER);
  return number;
}

function handleClick() {
  slideBg();
}
function init(){
  slideBg();
  bg.addEventListener("click", handleClick);
}

init();

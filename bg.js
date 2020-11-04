const body = document.querySelector("body");

const IMG_NUMBER = 7;


// function handleImgLoad(){
//   console.log("img loaded")
// }

function paintImg(imgNumber){
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);

  // api 호출 시 loadend 이벤트 사용 가능
  // image.addEventListener("loadend", handleImgLoad);
}

function genRandom(){
  // Math.random() * 5 = 0~5까지 랜덤으로
  // Math.floor = 나머지 버림
  // Math.ceil = 나머지 올림
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init(){
  const randomNumber = genRandom();
  paintImg(randomNumber);
}

init()

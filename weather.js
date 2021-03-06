const info = document.querySelector(".weather_info");
const weather = document.querySelector(".js-weather");
const dong = document.querySelector(".js-place");

const COORD_LS = "coords";
const API_KEY = "003e227425d9d73f54ef80ac036d515c";

function getWeather(lat, lon){
  // then을 이용하여 fetch가 완료된 후에 함수 실행
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(function(response){
    return response.json();
  }).then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature}c`;
    dong.innerText = `at ${place}`;
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
}

function saveCoords(coordsObj){
  localStorage.setItem(COORD_LS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
    // 아래와 같음
    // latitude: latitude,
    // longitude: longitude
  };

  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(){
  console.log("Cant find you")
}

function askForCoords(){
  navigator.geolocation.watchPosition(handleGeoSucces, handleGeoError, {timeout:10000});

  // navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}


function loadCoords(){
  const loadedCoords = localStorage.getItem(COORD_LS);
  if (loadedCoords === null){
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init(){
  loadCoords();
}

init();

const clockContainer = document.querySelector(".js-clock"),
      clockHours = clockContainer.querySelector(".js-hours"),
      clockMinutes = clockContainer.querySelector(".js-minutes"),
      clockSeconds = clockContainer.querySelector(".js-seconds");
      // clockHours = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clockHours.innerHTML = hours < 10 ? `0${hours}` : hours;
  clockMinutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  clockSeconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

function getHours() {
  const date = new Date();
  const hours = date.getHours();

  clockHours.innerHTML = hours < 10 ? `0${hours}` : hours;
  clockHours.animate([
    {opacity: 0,
     easing: 'ease-in-out'},
    {opacity: 1,
     easing: 'ease-in-out'}
  ], {
    duration: 1200,
    iteration: Infinity
  });
}

function getMinutes() {
  const date = new Date();
  const minutes = date.getMinutes();

  clockMinutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  clockMinutes.animate([
    {opacity: 0,
     easing: 'ease-in-out'},
    {opacity: 1,
     easing: 'ease-in-out'}
  ], {
    duration: 1200,
    iteration: Infinity
  });

  if (minutes == 0) {
    getHours();
  }
}

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


// setInterver(fn, time)
// time 마다 fn 호출

function init() {
  getTime();
  setInterval(getSeconds, 1000);
  // setInterval(getTime, 1000);
}

init();

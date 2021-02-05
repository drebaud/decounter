// inspiré de https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/
// Credit: Mateusz Rybczonec

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 120;
const ALERT_THRESHOLD = 60;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

let timeLimit = 600;
let timePassed = 0;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

function onTimesUp() {
  clearInterval(timerInterval);
  document.getElementById("app").innerHTML = "";
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed += 1;
    timeLeft = timeLimit - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft <= 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = 1 + Math.floor(time / 60);

  return `${minutes}<br/>mn`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = (timeLeft % 60) / 60;
  return rawTimeFraction;
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

function start() {
  const url = window.location.pathname;

  // Le temps est tiré du nom du fichier pour faciliter la création de décompteur
  // sans toucher au contenu du fichier
  const fn = url.substring(url.lastIndexOf('/')+1);
  const startdate = fn.match(/^(\d+)h(\d*)/i);
  if (startdate === null) {
    const minutes = parseInt(fn);
    if (isNaN(minutes)) {
	  timeLimit = 600;
	} else {
	  timeLimit = minutes * 60;
	}
  } else {
    const currentDate = new Date();
    const nextDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      parseInt(startdate[1]),
      parseInt(startdate[2]),
      0
    )
    timeLimit = (nextDate.getTime() - currentDate.getTime())/1000;
    if (timeLimit < 1) {  // Too late ?
      timeLimit = 1;  // we are done
    }
  }
  timeLeft = timeLimit - 1; // Pour éviter d'afficher pendant une seconde plus que la pause max.

  if (fn.indexOf('-') > 0) {
    txtColor = fn.substring(fn.indexOf('-')+1, fn.indexOf('.'));
  } else {
    txtColor = 'black';
  }
  document.getElementById("app").innerHTML = `
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="55" cy="55" r="45"></circle>
        <path
          id="base-timer-path-remaining"
          stroke-dasharray="283"
          class="base-timer__path-remaining ${remainingPathColor}"
          d="
            M 55, 55
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">${formatTime(
      timeLeft
    )}</span>
  </div>
  `;
  document.getElementById("base-timer-label").style.color = txtColor;
  startTimer();
}

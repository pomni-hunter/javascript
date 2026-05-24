console.log("Console is ready");

let resetButton = document.querySelector("#reset-button");
let letsGoButton = document.querySelector("#lets-go-button");

let doIt = document.querySelector("#do-it");
let doItTimes = document.querySelector("#do-it-times");
let pomni = document.querySelector("#pomni-logo2");
let caine = document.querySelector("#caine-logo");
let timer = document.querySelector("#timer");

let = doItText = "";
let = doItTimesText = "";
let = timerTime = 30;
let timerId = 0;

timer.textContent = timerTime;

resetButton.addEventListener('click', (button) => {
    doIt.textContent = "";
    doItTimes.textContent = ""
    doItText = "";
    doItTimesText = "";
    pomni.src = "images/pomni_02.png";
    timer.textContent = timerTime;
    stopTimer();
});

letsGoButton.addEventListener('click', (button) => {
    if (doItText == "" && doItTimesText == "") {
        console.log("Please add a command");
        return;
    }
    doIt.textContent = doItText;
    doItTimes.textContent = doItTimesText;
    pomni.src = "images/pomni_01.png";
    startTimer(timerTime);
});

caine.addEventListener('click', (button) => {
    stopTimer();
})

function startTimer(time) {
    console.log("GO! You have ", timerTime, " seconds")
    timer.textContent = time--;
    timerId = setInterval(() => {
        timer.textContent = time--;
        if (time < 0) {
            stopTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerId);
}

function pomniDoSomething(doThis, times) {
    doItText = doThis;
    doItTimesText = times;
    console.log("Command is ready. Hit 'Lets Go!'");
}

// Let's add some new functions

// What can Pomni do? Let's think.


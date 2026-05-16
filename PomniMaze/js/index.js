console.log("Console is ready");

let resetButton = document.querySelector("#reset-button");
let letsGoButton = document.querySelector("#lets-go-button");

let doIt = document.querySelector("#do-it");
let doItTimes = document.querySelector("#do-it-times");

let = doItText = "";
let = doItTimesText = "";

resetButton.addEventListener('click', (button) => {
    doIt.textContent = "";
    doItTimes.textContent = "";
    doItText = "";
    doItTimesText = "";
});

letsGoButton.addEventListener('click', (button) => {
    doIt.textContent = doItText;
    doItTimes.textContent = doItTimesText;
});


function pomniDoSomething(doThis, times) {
    doItText = doThis;
    doItTimesText = times;
}
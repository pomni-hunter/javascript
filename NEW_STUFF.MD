```
let swStartButton = document.querySelector("#stopwatch-start");
let swStopButton = document.querySelector("#stopwatch-stop");
let swResetButton = document.querySelector("#stopwatch-reset");
let swDisplay = document.querySelector("#stopwatch-display");

let swTime = 0;
let swIntervalId = null;
let swIsRunning = false;

swStartButton.addEventListener('click', () => {
    if (swIsRunning) return; 
    swIsRunning = true;
    
    swIntervalId = setInterval(() => {
        swTime++;
        swDisplay.textContent = swTime;
    }, 1000);
});

swStopButton.addEventListener('click', () => {
    swIsRunning = false;
    clearInterval(swIntervalId);
});

swResetButton.addEventListener('click', () => {
    swIsRunning = false;
    clearInterval(swIntervalId);
    swTime = 0;
    swDisplay.textContent = swTime;
});
```
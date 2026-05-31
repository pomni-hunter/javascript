#### Pure Console Stopwatch - Change function signatures to work on window level.

// A simple global stopwatch tracker they can check
window.startTime = Date.now();

window.checkTime = function() {
  const seconds = ((Date.now() - window.startTime) / 1000).toFixed(1);
  console.log(`⏱️ Current Time: ${seconds} seconds! Hurry!`);
};

// 1. For the rocks
window.jump = function() {
  // Game/Mascot logic here...
  console.clear();
  console.log("💎 You leaped clean over the rocks!");
  window.checkTime();
};

// 2. For the brick walls
window.kick = function() {
  // Game/Mascot logic here...
  console.clear();
  console.log("💥 CRASH! The brick wall crumbled!");
  window.checkTime();
};

// 3. For the water
window.swim = function() {
  // Game/Mascot logic here...
  console.clear();
  console.log("🏊 Splish splash! You crossed the water!");
  window.checkTime();
};

----

#### Stopwatch Bound to UI

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


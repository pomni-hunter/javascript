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
let = timerTime = 5;
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
// Pomni can
//// walk
//// jump
//// jump high
//// fly
//// swim
//// smash

function walk() {
    console.log("WALK!")
}

function jump() {
    console.log("JUMP!")
}

function jumpHigh() {
    console.log("JUMP HIGH")
};

function fly() {
    console.log("FLY!")
}
function swim() {
    console.log("SWIM!")
}
function smash() {
    console.log("SMASH")
}
window.startTime = Date.now();

window.checkTime = function () {
    const seconds = ((Date.now() - window.startTime) / 1000).toFixed(1);
    console.log(`⏱️ Current Time: ${seconds} seconds! Hurry!`);
};

window.jump = function () {
    console.clear();
    console.log("💎 You leaped clean over the rocks!");
    window.checkTime();
}
window.kick = function () {
    // Game/Mascot logic here...
    console.clear();
    console.log("💥 CRASH! The brick wall crumbled!");
    window.checkTime();
};
window.swim = function () {
    // Game/Mascot logic here...
    console.clear();
    console.log("🏊 Splish splash! You crossed the water!");
    window.checkTime();
};
window.walk = function () {
    // Game/Mascot logic here...
    console.clear();
    console.log("That's a good walk, my dear Pomni.");
    window.checkTime();
};
window.fly = function () {
    // Game/Mascot logic here...
    console.clear();
    console.log("OK,Pomni, let's fly!");
    window.checkTime();
};
window.smash = function () {
    // Game/Mascot logic here...
    console.clear();
    console.log("Pomni, go smash!");
    window.checkTime();
};

// ======= 2026-06-07 ========== //
// ==== Time for Class!! ======= //

window.win = function () {
    console.clear();
    const finalTime = ((Date.now() - window.startTime) / 1000).toFixed(1);

    console.log(`
  🏆🏆🏆 SPEEDRUN COMPLETE! 🏆🏆🏆
  ✨ FINAL TIME: ${finalTime} seconds ✨
  ---------------------------------
  Take a screenshot and post to GitHub!
  `);
};

// This is a class!!
class Item {
    constructor(name, icon, durability) {
        this.name = name;
        this.icon = icon;
        this.durability = durability; // Base lifespan
    }

    // A helper to check if we can still use the item
    isBroken() {
        return this.durability <= 0;
    }
}

<<<<<<< Updated upstream
class Sword extends Item {
    constructor() {
        super("Mega Sword", "⚔️", 100); // Starts with 100 durability
    }

    use() {
        console.clear();
        if (this.isBroken()) {
            console.log(`❌ Your ${this.name} is broken and shattered!`);
            return;
        }

        //     // Calculate random damage to the sword (between 20 and 50)
        //     const wearAndTear = Math.floor(Math.random() * 31) + 20;
        //     this.durability -= wearAndTear;

        //     console.log(`⚔️ SWOOSH! Pomni slashes! (Used up ${wearAndTear} durability)`);

        //     if (this.durability <= 0) {
        //       this.durability = 0; // Keep it at 0, don't show negative numbers to kids
        //       console.log("💥 CRACK! The sword shattered on that final hit!");
        //     } else {
        //       console.log(`👍 Sword durability remaining: ${this.durability}`);
        //     }

        //     window.smash(); // Automatically triggers the physical action!
        //   }
    }
=======
class Sword extends Item{
    constructor(){
        super("So strong sword","SSS",1000);
    }
}
>>>>>>> Stashed changes

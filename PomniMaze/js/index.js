console.log("Console is ready");

// =========================================================================
// POMNI Do Something

// - In the console, tell Pomni what to do. pomniDoSomething(doThis, times)
// - Hit 'lets go!'
// - Pomni does the commands before the time runs out 
// - Hit Caine to stop the clock!
// =========================================================================

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
        console.log("Please add a 'pomniDoSomething' command!!");
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
            sorry();
        }
    }, 1000);
}

function sorry() {
    doIt.textContent = "💥💥⏱️Time is up⏱️💥💥!!!"
}

function stopTimer() {
    clearInterval(timerId);
}

function pomniDoSomething(doThis, times) {
    doItText = doThis;
    doItTimesText = times;

    console.log(`Command is ready. Hit 'Lets Go! ' you have ${timerTime} seconds`);
}

// =========================================================================
// END POMNI Do Something
// =========================================================================





// =========================================================================
// POMNI Maze. Hurry!!
// =========================================================================

let mazeTimerId;
let mazeTime;

const stopWatch = document.querySelector("#stopwatch");
const result = document.querySelector("#result");

window.go = function () {
    window.startTime = Date.now();
    console.log(`⏱️ Start time is ${new Date().toLocaleString()} `);
    stopWatch.textContent = "0:00";
    result.textContent = "";
    mazeTimerId = setInterval(() => {
        getTime();
        stopWatch.textContent = mazeTime;

    }, 1000);
};

window.stop = function () {
    clearInterval(mazeTimerId);
    result.textContent = `🏆 SPEEDRUN COMPLETE! 🏆
    
    Time is ${mazeTime}`
}

window.checkTime = function () {
    console.clear();
    const totalTime = getTime();
    console.log(`⏱️ Current Time: ${totalTime} seconds! Hurry!`);
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

window.turn = function (direction = "Which way?") {
    // Game/Mascot logic here...
    console.clear();
    console.log(`Turn, ${direction}`);
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

window.getTime = function () {
    const totalSeconds = Math.floor((Date.now() - window.startTime) / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const totalTime = `${minutes}m ${seconds}s`;

    // set formatted time for maze;
    mazeTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    return totalTime;
}

document.querySelector('#start-button').addEventListener('click', () => {
    window.go();
})

document.querySelector('#stop-button').addEventListener('click', () => {
    window.stop();
})

document.querySelector('#clear-button').addEventListener('click', () => {

    window.stop();
    result.textContent = "";

    stopWatch.textContent = "0:00"
})


// =========================================================================
// POMNI Maze. Hurry!!
// =========================================================================



// ======= 2026-06-07 ========== //
// ==== Time for Class!! ======= //



// This is a class!!
// class Item {
//     constructor(name, icon, durability) {
//         this.name = name;
//         this.icon = icon;
//         this.durability = durability; // Base lifespan
//     }

//     // A helper to check if we can still use the item
//     isBroken() {
//         return this.durability <= 0;
//     }
// }

// class Sword extends Item {
//     constructor() {
//         super("So strong sword", "SSS", 1000);
//     }

//     use() {
//         if (this.isBroken()) {
//             console.log("the sword is broken")
//             return;
//         }

//         // Calculate random damage to the sword (between 20 and 50)
//         const wearAndTear = Math.floor(Math.random() * 31) + 20;
//         this.durability -= wearAndTear;

//         console.log(`⚔️ SWOOSH! Pomni slashes! (Used up ${wearAndTear} durability)`);

//         if (this.durability <= 0) {
//             this.durability = 0; // Keep it at 0, don't show negative numbers to kids
//             console.log("💥 CRACK! The sword shattered on that final hit!");
//         } else {
//             console.log(`👍 Sword durability remaining: ${this.durability}`);
//         }

//         window.smash();

//     }
// }
// class Yoyo extends Item {
//     constructor() {
//         super("The greatest purple yoyo", "tgpy", 50000000)
//     }
//     use() {
//         if (this.isBroken()) {
//             console.log(`${this.name} is broken`);
//             return;
//         }

//         // Calculate random damage to the sword (between 20 and 50)
//         const wearAndTear = Math.floor(Math.random() * 31) + 20000000;
//         this.durability -= wearAndTear;

//         console.log(`Pomni attacks! (Used up ${wearAndTear} durability)`);

//         if (this.durability <= 0) {
//             this.durability = 0; // Keep it at 0, don't show negative numbers to kids
//             console.log("💥 CRACK! The yoyo broke on that final hit!");
//         } else {
//             console.log(`👍 Durability remaining: ${this.durability}`);
//         }

//         window.smash();
//     }
// }


/// POMNI ADVENTURE

// =========================================================================
// 1. THE DUNGEON MASTER SYSTEM (With Balanced HP & Attribute Spawning)
// =========================================================================
class DungeonMaster {
    constructor() { }

    // Spawns enemies with scaled HP and a matching weakness tag
    spawnEnemy(baseHP = 0, randomBonus = 6, type = "Slime", weakness = "fire",strength = "physical") {
        console.clear();

        // INCREMENT 1 FIX: Scale the desk roll by multiplying by 3 so they don't get one-shot!
        const scaledBase = baseHP * 3;
        const dynamicBonus = Math.floor(Math.random() * randomBonus);
        const totalHP = scaledBase + dynamicBonus;

        // Dynamic emoji picker
        let enemyEmoji = "👾";
        const upperType = type.toUpperCase();
        if (upperType.includes("WALL") || upperType.includes("BRICK")) enemyEmoji = "🧱";
        else if (upperType.includes("DRAGON")) enemyEmoji = "🐉";
        else if (upperType.includes("SLIME")) enemyEmoji = "💧";
        else if (upperType.includes("GHOST")) enemyEmoji = "👻";
        else if (upperType.includes("EYE")) enemyEmoji = "👁️";
        else if (upperType.includes("CAT")) enemyEmoji = "🐱";

        // The unified enemy data package
        const enemyProfile = {
            name: type,
            hp: totalHP,
            weakness: weakness.toLowerCase(),
            strength:strength.toLowerCase(),
            isAnalysed: false
        };

        // Your bulletproof sweet-spot console format
        console.log("%c💥👾 DUNGEON MASTER EVENT 👾💥", "color: #ff3333; font-weight: bold; font-size: 14px;");
        console.log(`--------------------------------------------------`);
        console.log(`%c🚨 AMBUSH ALERT! PARTY IN PERIL!`, "color: #ff3333; font-weight: bold;");
        console.log(`${enemyEmoji}%cYou are facing: ${upperType}!!!`, "font-weight: bold; font-size: 12px;");
        console.log(`--------------------------------------------------`);
        console.log(`%c💔 TARGET HP: ${enemyProfile.hp} %c(Scaled Base: ${scaledBase} + Variance: +${dynamicBonus})`, "color: #00ff66; font-weight: bold; font-size: 12px;", "color: #888; font-style: italic;");
        //console.log(`%c🏷️ HIDDEN WEAKNESS TYPE: %c${enemyProfile.weakness.toUpperCase()}`, "color: #fff;", "color: #ffaa00; font-weight: bold;");
        console.log(`%c🏷️ WEAKNESS: %c❓ UNKNOWN (Use .analyze() to reveal!)`, "color: #fff;", "color: #ffcc00; font-style: italic;");
        console.log(`--------------------------------------------------`);

        return enemyProfile;
    }
}

// =========================================================================
// 2. PARENT ITEM CLASS (With Default Parameter)
// =========================================================================
class Item {
    constructor(name, durability, basePower, element = "physical") {
        this.name = name;
        this.durability = durability;
        this.basePower = basePower;
        this.element = element.toLowerCase(); // e.g. "fire", "ice", "water", "fish"
    }
    scout(enemy) {
        // Safety Check: Make sure the DM actually spawned something first!
        if (!enemy) {
            console.log("❌ %cSYSTEM ERROR: No target found in this room to analyze!", "color: #ff3333; font-weight: bold;");
            return;
        }

        // 1. Flip the hidden data flag on the monster to true
        enemy.isAnalyzed = true;

        console.clear();

        // 2. Pop the tactical tactical scanning dashboard
        console.log(`🔍%c SCANNING TARGET WITH ${this.name.toUpperCase()}...`, "font-weight: bold; color: #a370f7; font-size: 13px;");
        console.log("%c==================================================", "color: #a370f7;");
        console.log(`👾 TARGET NAME: %c${enemy.name.toUpperCase()}`, "font-weight: bold; color: #fff;");
        console.log(`❤️ CURRENT HP:  %c${enemy.hp}`, "font-weight: bold; color: #f51be3;");
        console.log(`🎯 WEAKNESS:    %c${enemy.weakness.toUpperCase()}`, "font-weight: bold; color: #ffaa00;");
        console.log("%c==================================================", "color: #a370f7;");
    }
    reduceDurability(enemy) {
        // 1. Establish the normal base wear (1 to 3 damage)
        let wear = Math.floor(Math.random() * 3) + 1;
        let message = "";

        // 2. ── THE RESISTANCE PENALTY CHECK ──
        // Let's check if the enemy exists and has an innate strength against our element
        if (enemy && enemy.strength === this.element) {
            wear += 4; // 👈 Simple flat penalty modifier! +4 extra durability loss
            message = " 💥 CLANG! The monster is resistant! Extra wear penalty applied!";
        }

        // 3. Apply the final damage to the weapon
        this.durability -= wear;
        if (this.durability < 0) this.durability = 0;

        // 4. Print the result using your sweet-spot console layout
        console.log(`📉%cThe ${this.name} took ${wear} wear damage! (Remaining Durability: ${this.durability})${message}`, "color: #ff6666; font-style: italic;");
    }


    calculateDamage() {
        // Teach about Random HERE!!
        const randomBonus = Math.floor(Math.random() * 6);
        return this.basePower + randomBonus;
        // TODO: allow randomBonus to be a turn by turn input (if the power-up is available) 
    }
}

// =========================================================================
// 3. CHILD WEAPON CLASS (Accepting Custom Name & Dice Multipliers)
// =========================================================================
class Sword extends Item {

    constructor(customName, durabilityDie, powerDie, element = "physical") {
        // Multiplies raw dice properties and passes element to parent constructor
        super(customName, durabilityDie * 5, powerDie * 3, element);
    }

    slash(enemy) {
        if (this.durability <= 0) {
            console.log(`%c❌ Your ${this.name} is completely broken! It deals 0 damage.`, "color: red; font-weight: bold;");
            return;
        }

        let finalDamage = this.calculateDamage();
        let effectivenessMessage = " ✨ (NORMAL HIT!)";
        let effectiveStyle = "color: #888; font-style: italic;";

        // ── THE UNIVERSAL ENGINE MATCHMAKER ──
        if (enemy && enemy.weakness === this.element) {
            finalDamage = finalDamage * 2; // Double damage buff!
            effectivenessMessage = " ☄️ (CRITICAL WEAKNESS MATCH! DOUBLE DAMAGE!)";
            effectiveStyle = "color: #ffaa00; font-weight: bold; font-size: 13px;";
        }
        const randomBonus = finalDamage - (this.basePower * (enemy && enemy.weakness === this.element ? 2 : 1));

        console.clear();

        console.log(`⚔️%cSWISH! You slash at the ${enemy ? enemy.name.toUpperCase() : "TARGET"} with ${this.name}!`, "font-weight: bold; font-size: 13px; color: #33b5e5;");
        console.log(`💥%cDAMAGE DEALT: ${finalDamage}%c${effectivenessMessage}`, "color: #ffaa00; font-weight: bold; font-size: 14px;", effectiveStyle);
        console.log("%c--------------------------------------------------", "color: #555;");

        this.reduceDurability();
    }
}

class Yoyo extends Item {
    constructor(customName, durabilityDie, powerDie, element = "physical") {
        // Multiplies raw dice properties and passes element to parent constructor
        super(customName, durabilityDie * 5, powerDie * 3, element);
    }

    swing(enemy) {
        if (this.durability <= 0) {
            console.log(`%c❌ Your ${this.name} is completely broken! It deals 0 damage.`, "color: red; font-weight: bold;");
            return;
        }

        let finalDamage = this.calculateDamage();
        let effectivenessMessage = " ✨ (NORMAL HIT!)";
        let effectiveStyle = "color: #888; font-style: italic;";

        // ── THE UNIVERSAL ENGINE MATCHMAKER ──
        if (enemy && enemy.weakness === this.element) {
            finalDamage = finalDamage * 2; // Double damage buff!
            effectivenessMessage = " ☄️ (CRITICAL WEAKNESS MATCH! DOUBLE DAMAGE!)";
            effectiveStyle = "color: #ffaa00; font-weight: bold; font-size: 13px;";
        }
        const randomBonus = finalDamage - (this.basePower * (enemy && enemy.weakness === this.element ? 2 : 1));


        console.clear();

        console.log(`⚔️%cSWISH! You slash at the ${enemy ? enemy.name.toUpperCase() : "TARGET"} with ${this.name}!`, "font-weight: bold; font-size: 13px; color: #33b5e5;");
        console.log(`💥%cDAMAGE DEALT: ${finalDamage}%c${effectivenessMessage}`, "color: #ffaa00; font-weight: bold; font-size: 14px;", effectiveStyle);
        console.log("%c--------------------------------------------------", "color: #555;");

        this.reduceDurability();
    }
    fire(enemy) {
        if (this.durability <= 0) {
            console.log(`%c❌ Your ${this.name} is completely broken! It deals 0 damage.`, "color: red; font-weight: bold;");
            return;
        }

        const totalDamage = this.calculateDamage();

        console.clear();


        console.log(`⚔️%cSWISH! You slash at the ${enemy ? enemy.name.toUpperCase() : "TARGET"} with ${this.name}!`, "font-weight: bold; font-size: 13px; color: #33b5e5;");
        console.log(`💥%cDAMAGE DEALT: ${finalDamage}%c${effectivenessMessage}`, "color: #ffaa00; font-weight: bold; font-size: 14px;", effectiveStyle);
        console.log("%c--------------------------------------------------", "color: #555;");

        this.reduceDurability();

    }
}


class Gun extends Item {
    constructor(customName, durabilityDie, powerDie, element = "physical") {
        // Multiplies raw dice properties and passes element to parent constructor
        super(customName, durabilityDie * 5, powerDie * 3, element);
    }

    shoot(enemy) {
        if (this.durability <= 0) {
            console.log(`%c❌ Your ${this.name} is completely broken! It deals 0 damage.`, "color: red; font-weight: bold;");
            return;
        }

        let finalDamage = this.calculateDamage();
        let effectivenessMessage = " ✨ (NORMAL HIT!)";
        let effectiveStyle = "color: #888; font-style: italic;";

        // ── THE UNIVERSAL ENGINE MATCHMAKER ──
        if (enemy && enemy.weakness === this.element) {
            finalDamage = finalDamage * 2; // Double damage buff!
            effectivenessMessage = " ☄️ (CRITICAL WEAKNESS MATCH! DOUBLE DAMAGE!)";
            effectiveStyle = "color: #ffaa00; font-weight: bold; font-size: 13px;";
        }
        const randomBonus = finalDamage - (this.basePower * (enemy && enemy.weakness === this.element ? 2 : 1));


        console.clear();

        console.log(`⚔️%cSWISH! You slash at the ${enemy ? enemy.name.toUpperCase() : "TARGET"} with ${this.name}!`, "font-weight: bold; font-size: 13px; color: #33b5e5;");
        console.log(`💥%cDAMAGE DEALT: ${finalDamage}%c${effectivenessMessage}`, "color: #ffaa00; font-weight: bold; font-size: 14px;", effectiveStyle);
        console.log("%c--------------------------------------------------", "color: #555;");

        this.reduceDurability();
    }
}
// =========================================================================
// 💥 Fighting System END
// =========================================================================



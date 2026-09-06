// 1. Job Registry (Constants)
const JOBS = {
    SHERIFF: "Sheriff",
    COWGIRL: "Cowgirl",
    SPACE_RANGER: "Space Ranger"
};

// 2. Parent Character Class
class Character {
    constructor(name, job) {
        this.name = name;
        this.job = job;
        this.currentItem = null;   // Reserved for future items
        this.currentWeapon = null; // Will hold a Weapon instance
    }

    // Refactored from loose window-level functions into class methods
    walk() {
        console.log(`${this.name} is walking.`);
    }

    run() {
        console.log(`${this.name} is running!`);
    }

    jump() {
        console.log(`${this.name} jumped high!`);
    }
}




// --------------------------------------------------
// CONSOLE DEMO STEPS (To run together in DevTools)
// --------------------------------------------------

// Step A: Instantiate characters from her physical dolls
const woody = new Character("Woody", JOBS.SHERIFF);
const jessie = new Character("Jessie", JOBS.COWGIRL);

// Step B: Test movement methods
woody.walk(); // -> "Woody is walking."
jessie.jump(); // -> "Jessie jumped high!"

// Step C: Instantiate a weapon & equip it
const lasso = new Weapon("Golden Lasso", 15);
woody.currentWeapon = lasso;

// Step D: Inspect in console
console.log(woody);
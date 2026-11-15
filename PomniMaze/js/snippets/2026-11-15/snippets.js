// 1. Forge the Shurikens (High speed/hits, lower durability per star!)
const shurikens = new Weapon("Samurai Shurikens", 2, 4, "wind"); // 10 durability, 12 base power

// 2. Equip Buzz & set him as the active hero
buzz.currentWeapon = shurikens; //or buzz.equipWeapon(shurikens);
window.activeHero = buzz;

// ---------------


const party = [woody, jessie, buzz];

function switchHero(index) {
    const nextHero = party[index];
    if (!nextHero) return console.log("❌ Empty slot!");

    window.activeHero = nextHero;
    if (window.activeEnemy) {
        window.activeEnemy.target = nextHero; // Enemy immediately pivots!
    }
    console.log(`🔄 TAG TEAM! ${nextHero.name} jumps into the fight!`);
}

// Multi accack!!

let throws = 4; // Physical dice roll!
for (let i = 0; i < throws; i++) {
    activeHero.currentWeapon.attack(boss, "throws a shuriken", "SHING");
}


// execute the switch. practive this before battle time

switchHero(0);



// Mark's Job

startAutoAttack(initialTarget, maxSeconds = 10) {
    this.target = initialTarget; // Store target on the instance so it can be swapped dynamically
    console.log(`⚔️ ${this.name} gets ready for combat against ${this.target.name}!`);

    const getRandomDelay = () => {
        const minMs = 3000;
        const maxMs = maxSeconds * 1000;
        return Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
    };

    const scheduleNextAttack = () => {
        const randomDelay = getRandomDelay();
        console.log(`⏳ (${this.name} is winding up... next attack in ${(randomDelay / 1000).toFixed(1)}s)`);

        this.attackTimer = setTimeout(() => {
            // Always check whoever is currently set as this.target!
            if (this.target && this.target.currentHp > 0) {
                this.attack(this.target);
                console.log(`🛡️ ${this.target.name} HP: ${this.target.currentHp}/${this.target.maxHp}`);

                scheduleNextAttack();
            } else {
                const fallenName = this.target ? this.target.name : "The hero";
                console.log(`🏆 ${fallenName} has been defeated! ${this.name} stands victorious.`);
                this.stopAutoAttack();
            }
        }, randomDelay);
    };

    scheduleNextAttack();
}
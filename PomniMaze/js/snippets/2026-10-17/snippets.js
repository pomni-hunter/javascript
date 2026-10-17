// Instead of this (brittle and hard to read):
const activeHero = party[1];

// Teach her this (robust and expressive):
const activeHero = party.find(character => character.name === "Buzz");


class Character {
    constructor(name, maxHp) {
        this.name = name;
        this.maxHp = maxHp;
        this.currentHp = maxHp;
        this.level = 1;
        this.xp = 0;
        this.currentWeapon = null; // Active weapon assignment
    }

    gainXp(amount) {
        this.xp += amount;
        console.log(`🌟 %c${this.name} gained ${amount} XP! (${this.xp}/100 XP)`, "color: #00e5ff; font-weight: bold;");

        if (this.xp >= 100) {
            this.levelUp();
        }
    }

    levelUp() {
        this.level += 1;
        this.xp -= 100; // Carry over any extra XP overflow
        this.maxHp += 15; // Stat boost!
        this.currentHp = this.maxHp; // Full restore on level up!

        console.log(`🎉 %cLEVEL UP! ${this.name} is now Level ${this.level}!`, "color: #00ff00; font-weight: bold; font-size: 14px;");
        console.log(`❤️ Max HP boosted to ${this.maxHp}! HP fully restored!`);
    }
}


// Weapon class

handleEnemyDefeat(enemy) {
    // ... (existing coin and localStorage code) ...
    console.log(`🪙 %cMONSTER DROPPED ${coinsDropped} GOLD COINS!`, "color: #ffcc00; font-weight: bold;");
    console.log(`💰 %cTOTAL PURSE: ${currentCoins} Coins (Saved to Storage!)`, "color: #ffcc00; font-style: italic;");

    // Directly reward whichever character is currently active in the session!
    if (typeof activeHero !== 'undefined' && activeHero) {
        activeHero.gainXp(50);
    }
}
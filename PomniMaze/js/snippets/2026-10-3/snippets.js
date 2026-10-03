// --- In index.js ---

// 1. Create instances
const woody = hydrateCharacter('woody'); // Amy's hero
woody.currentHp = 100;
woody.currentItem = ITEM_CATALOG.POTION;

const boss = new Enemy('eye', 50, 8); // name, hp, attackPower

console.log(`⚠️ A wild ${boss.name} appeared! You have 10 seconds to prepare!`);

// 2. Set a 10-second timer for a single incoming attack
setTimeout(() => {
    console.log(`⏰ Time's up! ${boss.name} strikes!`);

    // Trigger the attack on her character
    boss.attack(hero);

    // Check state update
    console.log(`${hero.name}'s remaining HP: ${hero.currentHp}/${hero.maxHp}`);
}, 10000); // 10,000 ms = 10 seconds


// replace Enemy class attack with this
attack(target) {
    console.log(`💥 ${this.name} attacks ${target.name} for ${this.attackPower} damage!`);
    target.currentHp = Math.max(0, target.currentHp - this.attackPower);
}

takeDamage(amount) {
    this.hp = Math.max(0, this.hp - amount);
    console.log(`💥 ${this.name} took ${amount} damage! HP remaining: ${this.hp}/${this.maxHp}`);

    if (this.hp === 0) {
        console.log(`☠️ ${this.name} has been defeated!`);
        this.stopAutoAttack();
    }
}

// Starts the automated attack loop with randomized timing
startAutoAttack(target, maxSeconds = 10) {
    console.log(`⚔️ ${this.name} gets ready for combat!`);

    // Helper to get a random delay between 3 seconds and maxSeconds
    const getRandomDelay = () => {
        const minMs = 3000; // Minimum 3-second delay
        const maxMs = maxSeconds * 1000;
        return Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
    };

    // Recursive timeout loop to simulate random attack patterns
    const scheduleNextAttack = () => {
        const randomDelay = getRandomDelay();
        console.log(`⏳ (${this.name} is winding up... next attack in ${(randomDelay / 1000).toFixed(1)}s)`);

        this.attackTimer = setTimeout(() => {
            // Perform attack if target is still alive
            if (target.currentHp > 0) {
                this.attack(target);
                console.log(`🛡️ ${target.name} HP: ${target.currentHp}/${target.maxHp}`);

                // Schedule the next attack in the loop
                scheduleNextAttack();
            } else {
                console.log(`🏆 ${target.name} has been defeated! ${this.name} stands victorious.`);
                this.stopAutoAttack();
            }
        }, randomDelay);
    };

    // Kick off the first attack cycle
    scheduleNextAttack();
}

// Stops the enemy attack loop (e.g., when the enemy dies or battle ends)
stopAutoAttack() {
    if (this.attackTimer) {
        clearTimeout(this.attackTimer);
        this.attackTimer = null;
        console.log(`🛑 ${this.name}'s attack timer stopped.`);
    }
}
}

// start
boss.startAutoAttack(hero, 8);


class Character {
    // ... constructor and other methods ...

    attack(enemyTarget) {
        const damage = 15; // or this.attackPower
        console.log(`⚔️ ${this.name} slashes ${enemyTarget.name} for ${damage} damage!`);

        // Trigger the enemy's damage logic
        enemyTarget.takeDamage(damage);
    }
}


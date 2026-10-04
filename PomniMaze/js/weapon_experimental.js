// =========================================================================
// 1. PARENT ITEM CLASS
// =========================================================================
class Item {
    constructor(name, durability, basePower, element = "physical") {
        this.name = name;
        this.durability = durability;
        this.basePower = basePower;
        this.element = element.toLowerCase();
    }

    scout(enemy) {
        if (!enemy) {
            console.log("❌ %cSYSTEM ERROR: No target found in this room to analyze!", "color: #ff3333; font-weight: bold;");
            return;
        }

        enemy.isAnalyzed = true;
        console.clear();

        console.log(`🔍%c SCANNING TARGET WITH ${this.name.toUpperCase()}...`, "font-weight: bold; color: #a370f7; font-size: 13px;");
        console.log("%c==================================================", "color: #a370f7;");
        console.log(`👾 TARGET NAME: %c${enemy.name.toUpperCase()}`, "font-weight: bold; color: #050505;");
        console.log(`❤️ CURRENT HP:  %c${enemy.hp}`, "font-weight: bold; color: #f51be3;");
        console.log(`🎯 WEAKNESS:    %c${enemy.weakness.toUpperCase()}`, "font-weight: bold; color: #ffaa00;");
        console.log(`🎯 STRENGTH:    %c${enemy.strength.toUpperCase()}`, "font-weight: bold; color: #ffaa00;");
        console.log("%c==================================================", "color: #a370f7;");
    }

    reduceDurability(enemy) {
        let wear = Math.floor(Math.random() * 3) + 1;
        let message = "";

        if (enemy && enemy.strength === this.element) {
            wear += 4;
            message = " 💥 CLANG! The monster is resistant! Extra wear penalty applied!";
        }

        this.durability = Math.max(0, this.durability - wear);

        console.log(`📉%cThe ${this.name} took ${wear} wear damage! (Remaining Durability: ${this.durability})${message}`, "color: #ff6666; font-style: italic;");
    }

    calculateDamage(powerBonus = 0) {
        const randomBonus = Math.floor(Math.random() * 6);
        return this.basePower + randomBonus + powerBonus;
    }
}

// =========================================================================
// 2. INTERMEDIATE WEAPON CLASS (Shared Combat Engine)
// =========================================================================
class Weapon extends Item {
    constructor(name, durabilityDie, powerDie, element = "physical") {
        super(name, durabilityDie * 5, powerDie * 3, element);
    }

    // Core combat method shared by all weapons
    attack(enemy, actionVerb = "attack", soundEffect = "SWISH", powerBonus = 0) {
        console.clear();

        if (this.durability <= 0) {
            console.log(`%c❌ Your ${this.name} is completely broken! It deals 0 damage.`, "color: red; font-weight: bold;");
            return;
        }

        let finalDamage = this.calculateDamage(powerBonus);
        let effectivenessMessage = " ✨ (NORMAL HIT!)";
        let effectiveStyle = "color: #888; font-style: italic;";

        // Element Matchmaking
        if (enemy && enemy.weakness === this.element) {
            finalDamage *= 2;
            effectivenessMessage = " ☄️️ (CRITICAL WEAKNESS MATCH! DOUBLE DAMAGE!)";
            effectiveStyle = "color: #ffaa00; font-weight: bold; font-size: 13px;";
        }

        // Apply damage & evaluate defeat
        const isDefeated = enemy ? enemy.takeDamage(finalDamage) : false;

        // Render Combat Console Output
        const targetName = enemy ? enemy.name.toUpperCase() : "TARGET";
        console.log(`⚔️%c${soundEffect}! You ${actionVerb} at the ${targetName} with ${this.name}!`, "font-weight: bold; font-size: 13px; color: #33b5e5;");
        console.log(`💥%cDAMAGE DEALT: ${finalDamage}%c${effectivenessMessage}`, "color: #ffaa00; font-weight: bold; font-size: 14px;", effectiveStyle);
        console.log("%c--------------------------------------------------", "color: #555;");

        if (isDefeated) {
            this.handleEnemyDefeat(enemy);
        } else if (enemy) {
            console.log(`❤️ ${enemy.name} HP remaining: ${enemy.hp}`);
        }

        this.reduceDurability(enemy);
    }

    // Encapsulated loot & persistence logic
    handleEnemyDefeat(enemy) {
        console.log(`☠️ %c${enemy.name.toUpperCase()} HAS BEEN DEFEATED!`, "color: #ff3333; font-weight: bold;");

        const monsterKey = enemy.name.toLowerCase();
        const maxCoins = MONSTER_LOOT_TABLE[monsterKey] || 5;
        const coinsDropped = Math.floor(Math.random() * maxCoins) + 1;

        let currentCoins = parseInt(localStorage.getItem("heroCoins")) || 0;
        currentCoins += coinsDropped;
        localStorage.setItem("heroCoins", currentCoins);

        console.log(`🪙 %cMONSTER DROPPED ${coinsDropped} GOLD COINS!`, "color: #ffcc00; font-weight: bold;");
        console.log(`💰 %cTOTAL PURSE: ${currentCoins} Coins (Saved to Storage!)`, "color: #ffcc00; font-style: italic;");
    }
}

// =========================================================================
// 3. CONCRETE WEAPON SUBCLASSES (Focusing Only on Unique Behaviors)
// =========================================================================
class Sword extends Weapon {
    slash(enemy) {
        this.attack(enemy, "slash", "SWISH");
    }
}

class Yoyo extends Weapon {
    swing(enemy) {
        this.attack(enemy, "swing", "WHIRL");
    }

    // Example of a weapon-specific special move (e.g. power shot with +5 bonus damage)
    fire(enemy) {
        this.attack(enemy, "shoot out", "SNAP", 5);
    }
}

class Gun extends Weapon {
    shoot(enemy) {
        this.attack(enemy, "shoot", "BANG!");
    }
}
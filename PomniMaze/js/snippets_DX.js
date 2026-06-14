// =========================================================================
// 1. THE GAME MASTERY SYSTEM (DM Control Pad)
// =========================================================================
class DungeonMaster {
    constructor() {
        // Ready for future state tracking (e.g., this.activeMonsters = [])
    }

    // Base HP is decided by your physical dice roll at the desk
    spawnEnemy(baseHP = 0, randomBonus = 6, type = "Brick Wall") {
        console.clear();

        const dynamicBonus = Math.floor(Math.random() * randomBonus);
        const totalHP = baseHP + dynamicBonus;

        // Contextual emoji picker based on enemy type
        let enemyEmoji = "👾";
        if (type.toLowerCase().includes("brick") || type.toLowerCase().includes("wall")) {
            enemyEmoji = "🧱";
        } else if (type.toLowerCase().includes("dragon")) {
            enemyEmoji = "🐉";
        } else if (type.toLowerCase().includes("slime")) {
            enemyEmoji = "💧";
        }

        // Display output optimized for Chrome DevTools emoji rendering
        console.log("%c💥👾 DUNGEON MASTER EVENT 👾💥", "color: #ff3333; font-weight: bold; font-size: 14px;");
        console.log(`--------------------------------------------------`);
        console.log(`%c🚨 LOOK OUT!!!! PARTY IN PERIL!`, "color: #ff3333; font-weight: bold;");
        console.log(`${enemyEmoji}%cYou have encountered a wild ${type.toUpperCase()}!!!`, "font-weight: bold; font-size: 12px;");
        console.log(`--------------------------------------------------`);
        console.log(`%c💔 TOTAL OBJECTIVE HP: ${totalHP} %c(Base: ${baseHP} + Random Variance: +${dynamicBonus})`, "color: #00ff66; font-weight: bold; font-size: 12px;", "color: #888; font-style: italic;");
        console.log(`--------------------------------------------------`);

        return {
            'monster': type,
            'hp': totalHP
        };
    }
}

// =========================================================================
// 2. PARENT ITEM CLASS (With Default Parameter)
// =========================================================================
class Item {
    constructor(name, durability, basePower, type = "Weapon") {
        this.type = type;
        this.name = name;
        this.durability = durability;
        this.basePower = basePower;
    }

    reduceDurability() {
        const wear = Math.floor(Math.random() * 3) + 1;
        this.durability -= wear;
        if (this.durability < 0) this.durability = 0;

        console.log(
            `%c📉 The ${this.name} took ${wear} wear damage! (Remaining Durability: ${this.durability})`,
            "color: #ff6666; font-style: italic;"
        );
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
    constructor(customName, durabilityDie, powerDie) {
        const calculatedDurability = durabilityDie * 5;
        const calculatedPower = powerDie * 3;

        super(customName, calculatedDurability, calculatedPower);
    }

    slash() {
        if (this.durability <= 0) {
            console.log(`%c❌ Your ${this.name} is completely broken! It deals 0 damage.`, "color: red; font-weight: bold;");
            return;
        }

        const totalDamage = this.calculateDamage();

        console.clear();

        console.log(`%c⚔️ SWISH! You slash with ${this.name}!`, "font-weight: bold; font-size: 13px; color: #33b5e5;");

        console.log(
            `%c💥 DAMAGE DEALT: ${totalDamage}`,
            "color: #ffaa00; font-weight: bold; font-size: 12px;",
            "color: #888; font-style: italic;"
        );

        console.log("%c--------------------------------------------------", "color: #555;");

        this.reduceDurability();
    }
}

// =========================================================================
// 💥 Fighting System END
// =========================================================================


// =========================================================================
// 💥 HOW TO:
// =========================================================================

// Student draws a card, rolls a 5 for durability and a 6 for power.
// They pass the name right into the constructor:
const playerWeapon = new Sword("Excalibur", 5, 6);

// Checking the properties behind the scenes:
console.log(playerWeapon.type); // Output: "Weapon" (Default kicked in!)
console.log(playerWeapon.name); // Output: "Excalibur"

// Execute action on the clock:
playerWeapon.slash();


// ==========================================
// THE ITEM BAG (Off-the-Clock Prep)
// ==========================================

// create items from drawn cards
// add items to bag.
// 

// Teach about arrays here.
window.itemBag = {
    contents: [],

    addItem: function (item) {
        this.contents.push(item);
        console.log("🎒", `%c[BAG]: Tucked 1x ${item.name} safely away!`);
    },

    showBag: function () {
        console.clear();
        console.log("🎒", "%cCURRENT INVENTORY", "🎒", "color: #ffaa00; font-weight: bold; font-size: 14px;");
        if (this.contents.length === 0) {
            console.log("   (Your bag is completely empty!)");
            return;
        }
        this.contents.forEach((item, index) => {
            console.log(`[${index}] ${item.name} ──`, "💪", `%cBase Power: ${item.basePower} | `, "🛡️", `%cDurability: ${item.durability}`);
        });
    }
};


// Teacher's Note:

// ----------- About Random -------------------

// When teaching this, you can explain Math.random() as rolling a dynamic, digital set of dice.

// Math.random() always gives a decimal between 0 and 0.999...

// Multiplying it scales our dice (e.g., Math.random() * 5 gives a number between 0 and 4.999...).

// Math.floor() chops off the decimal, giving us clean whole numbers.

// ----------- END Random -------------------
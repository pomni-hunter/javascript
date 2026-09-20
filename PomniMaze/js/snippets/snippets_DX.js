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


// 2026-06-29

// Learn a little more about arrays. POP & SLICE

// DUNGEON MASTER ENEMIES

// =========================================================================
// 1. THE DUNGEON MASTER SYSTEM (With Balanced HP & Attribute Spawning)
// =========================================================================
class DungeonMaster {
    constructor() { }

    // Spawns enemies with scaled HP and a matching weakness tag
    spawnEnemy(baseHP = 0, randomBonus = 6, type = "Slime", weakness = "fire") {
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
            weakness: weakness.toLowerCase()
        };

        // Your bulletproof sweet-spot console format
        console.log("%c💥👾 DUNGEON MASTER EVENT 👾💥", "color: #ff3333; font-weight: bold; font-size: 14px;");
        console.log(`--------------------------------------------------`);
        console.log(`%c🚨 AMBUSH ALERT! PARTY IN PERIL!`, "color: #ff3333; font-weight: bold;");
        console.log(`${enemyEmoji}%cYou are facing: ${upperType}!!!`, "font-weight: bold; font-size: 12px;");
        console.log(`--------------------------------------------------`);
        console.log(`%c💔 TARGET HP: ${enemyProfile.hp} %c(Scaled Base: ${scaledBase} + Variance: +${dynamicBonus})`, "color: #00ff66; font-weight: bold; font-size: 12px;", "color: #888; font-style: italic;");
        console.log(`%c🏷️ HIDDEN WEAKNESS TYPE: %c${enemyProfile.weakness.toUpperCase()}`, "color: #fff;", "color: #ffaa00; font-weight: bold;");
        console.log(`--------------------------------------------------`);

        return enemyProfile;
    }
}




// WEAPONS

// =========================================================================
// 2. PARENT ITEM CLASS (Carrying the Innate Element Label)
// =========================================================================
class Item {
    constructor(name, durability, basePower, element = "physical") {
        this.name = name;
        this.durability = durability;
        this.basePower = basePower;
        this.element = element.toLowerCase(); // e.g. "fire", "ice", "physical", "fish"
    }

    reduceDurability() {
        const wear = Math.floor(Math.random() * 3) + 1;
        this.durability -= wear;
        if (this.durability < 0) this.durability = 0;
        console.log(`📉%cThe ${this.name} took ${wear} wear damage! (Remaining Durability: ${this.durability})`, "color: #ff6666; font-style: italic;");
    }

    calculateDamage() {
        return this.basePower + Math.floor(Math.random() * 6);
    }
}

// =========================================================================
// 3. CHILD WEAPON CLASS (The Universal Matchmaker Engine)
// =========================================================================
class Sword extends Item {
    constructor(customName, durabilityDie, powerDie, element = "physical") {
        // Multiplies raw dice properties and passes element to parent constructor
        super(customName, durabilityDie * 5, powerDie * 3, element);
    }

    // Pass the active enemy profile right into the argument slot!
    slash(enemy) {
        if (this.durability <= 0) {
            console.log(`❌%cYour ${this.name} is completely broken! It deals 0 damage.`, "color: red; font-weight: bold;");
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


/// TEST DRIVE

// 🕹️ The Pair-Programming Test Drive
// Once you drop the code above into your open browser console, you can run this sequence step-by-step with your student to test both a normal encounter and the Easter Egg boss fight:

// Scenario A: Testing the New Math and Elements
// JavaScript

const DM = new DungeonMaster();

// 1. Spawn a standard toxic slime vulnerable to fire (e.g. rolled a 6 at your desk)
const slimeTarget = DM.spawnEnemy(6, 6, "Toxic Slime", "fire");
// Output shows HP is scaled safely up to 18 + variance! No more instant kills.

// 2. Have her instantiate a Fire-labeled sword
const rubyBlade = new Sword("Ruby Firebrand", 5, 4, "fire");

// 3. Attack! Pass the whole slime object right into the sword
rubyBlade.slash(slimeTarget);
// Boom! The system catches the matching "fire" strings and doubles her output!

// Scenario B: Deploying the Legendary "Ao-chan Boss Fight"
// JavaScript
// 1. Drop the ultimate challenge on the clock!
const bossTarget = DM.spawnEnemy(333, 1, "Ao-chan's Judgmental Cat", "fish");

// 2. If she tries to hit it with her standard physical or fire sword...
rubyBlade.slash(bossTarget); // Normal hit, barely makes a dent in 999 HP.

// 3. She realizes she needs a specific counter and instantiates a fish element!
const tunaTreat = new Sword("Can of Premium Tuna", 2, 5, "fish");
tunaTreat.slash(bossTarget); // Critical weakness matched! Double damage triggered!
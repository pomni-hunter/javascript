// Charachter Class

class Character {
    constructor(name, job) {
        this.name = name;
        this.job = job;
        this.inventory = ['POTION', 'JUICE', 'HEAL_MILK']; // Array of item keys from ITEM_CATALOG
        this.currentWeapon = null;
        this.currentHp = 100;
        this.maxHp = 100;
        this.level = 1;
        this.xp = 0;
    }

    // View what's in the bag
    showInventory() {
        console.log(`🎒 %c${this.name}'s Inventory:`, "color: #ffaa00; font-weight: bold;");
        this.inventory.forEach((itemKey, index) => {
            const itemData = ITEM_CATALOG[itemKey];
            console.log(`  [${index}] ${itemData.name} (${itemData.type}: +${itemData.power})`);
        });
    }

    // Use an item from the bag by its array index
    useItemFromBag(index, targetCharacter = this) {
        if (this.inventory.length === 0) {
            console.log(`❌ ${this.name}'s bag is completely empty!`);
            return;
        }

        // Pull the item key out of the array using splice (removes it once used!)
        const itemKey = this.inventory.splice(index, 1)[0];
        const item = ITEM_CATALOG[itemKey];

        if (!item) {
            console.log(`❌ Unknown item key!`);
            return;
        }

        // Apply Healing Logic
        if (item.type === "Heal") {
            const oldHp = targetCharacter.currentHp;
            targetCharacter.currentHp = Math.min(
                targetCharacter.maxHp,
                targetCharacter.currentHp + item.power
            );
            const healedAmount = targetCharacter.currentHp - oldHp;
            console.log(`✨ ${this.name} used ${item.name} and restored ${healedAmount} HP!`);
        }
        // Apply Buff Logic (like her iPhone 11!)
        else if (item.type === "Buff") {
            console.log(`📱 ${this.name} used ${item.name}! Attack power boosted by ${item.power}!`);
            // Add buff logic here if desired
        }
    }
}


// Reviewing .find() from last week:
const healItem = hero.inventory.find(key => ITEM_CATALOG[key].type === "Heal");
console.log("Found a healing item:", healItem);

// Multi Attack for loop

// Amy rolls a 4 on her die!
let attacks = 4;

console.log(`⚡ MULTI-ATTACK UNLOCKED! Attacking ${attacks} times!`);

for (let i = 0; i < attacks; i++) {
    console.log(`💥 Hit #${i + 1}!`);
    woody.currentWeapon.slash(boss);
}
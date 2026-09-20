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

        // Calculate random damage to the sword (between 20 and 50)
        const wearAndTear = Math.floor(Math.random() * 31) + 20;
        this.durability -= wearAndTear;

        console.log(`⚔️ SWOOSH! Pomni slashes! (Used up ${wearAndTear} durability)`);

        if (this.durability <= 0) {
            this.durability = 0; // Keep it at 0, don't show negative numbers to kids
            console.log("💥 CRACK! The sword shattered on that final hit!");
        } else {
            console.log(`👍 Sword durability remaining: ${this.durability}`);
        }

        window.smash(); // Automatically triggers the physical action!
    }
}
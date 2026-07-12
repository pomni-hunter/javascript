// Inside the parent Item class
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
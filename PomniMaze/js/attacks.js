
//.conscept
// Inside the Sword class action method


slash(enemyType = "Normal") {
    let totalDamage = this.calculateDamage();

    // Simple conditional modifier based on the DM's spawn type
    if (enemyType.toLowerCase() === "ghost") {
        totalDamage = Math.floor(totalDamage / 2); // Swords are weak against ghosts!
        console.log("👻 %cIT PASSES RIGHT THROUGH! Half damage dealt!", "color: #aaa; font-style: italic;");
    }

    // Print out the damage using your bulletproof template literal format...
}



slash(enemyType = "Normal") {
    if (this.durability <= 0) {
        console.log(`❌%cYour ${this.name} is completely broken! It deals 0 damage.`, "color: red; font-weight: bold;");
        return;
    }

    let totalDamage = this.calculateDamage();
    let effectivenessMessage = "";
    let effectiveStyle = "color: #888; font-style: italic;";

    // ── GAMEPLAY MODIFIER LOGIC ──
    // Check if the student is attacking a Ghost with a physical sword
    if (enemyType.toLowerCase() === "ghost") {
        totalDamage = Math.floor(totalDamage / 2);
        effectivenessMessage = " 👻 (IT PASSES RIGHT THROUGH! RESISTED!)";
        effectiveStyle = "color: #9999ff; font-weight: bold; font-style: italic;";
    }
    // Check if they are attacking a Rock/Brick Wall (Swords might chip!)
    else if (enemyType.toLowerCase().includes("brick") || enemyType.toLowerCase().includes("wall")) {
        effectivenessMessage = " 🧱 (DENSE TARGET!)";
        effectiveStyle = "color: #ffb366; font-style: italic;";
    } else {
        effectivenessMessage = " ✨ (NORMAL HIT!)";
    }

    const randomBonus = totalDamage - this.basePower;

    console.clear();

    // Line 1: Action Header
    console.log(`⚔️%cSWISH! You slash at a ${enemyType.toUpperCase()} with ${this.name}!`, "font-weight: bold; font-size: 13px; color: #33b5e5;");

    // Line 2: The Core Damage Output using your verified syntax
    console.log(
        `💥%cDAMAGE DEALT: ${totalDamage}%c${effectivenessMessage}`,
        "color: #ffaa00; font-weight: bold; font-size: 14px;",
        effectiveStyle
    );

    console.log("%c--------------------------------------------------", "color: #555;");

    // Line 3: Durability Wear down
    this.reduceDurability();
}
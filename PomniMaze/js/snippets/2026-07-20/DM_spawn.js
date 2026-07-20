// Inside DungeonMaster class
spawnEnemy(baseHP = 0, randomBonus = 6, type = "Slime", element = "fire") {
    console.clear();

    const scaledBase = baseHP * 3;
    const dynamicBonus = Math.floor(Math.random() * randomBonus);
    const totalHP = scaledBase + dynamicBonus;

    // AUTO-LOOKUP FROM THE MATRIX:
    // 1. Weakness = What beats this monster?
    const weakness = ELEMENT_MATRIX[element.toLowerCase()] || "physical";

    // 2. Strength = What does this monster resist? (Reverse lookup)
    const strength = Object.keys(ELEMENT_MATRIX).find(key => ELEMENT_MATRIX[key] === element.toLowerCase()) || "none";

    const enemyProfile = {
        name: type,
        hp: totalHP,
        element: element.toLowerCase(),
        weakness: weakness,  // Calculated automatically!
        strength: strength,  // Calculated automatically!
        isAnalyzed: false,
        // Make drop function
    };

    console.log(`💥👾 DUNGEON MASTER EVENT: ${type.toUpperCase()} 👾💥`);
    console.log(`--------------------------------------------------`);
    console.log(`💔 HP: ${enemyProfile.hp}`);
    console.log(`🏷️ ELEMENT: ${type} [${element.toUpperCase()}]`);
    console.log(`🎯 WEAKNESS:  ❓ UNKNOWN (Run .analyze() to reveal)`);
    console.log(`🛡️ RESISTANCE: ❓ UNKNOWN (Run .analyze() to reveal)`);
    console.log(`--------------------------------------------------`);

    return enemyProfile;
}
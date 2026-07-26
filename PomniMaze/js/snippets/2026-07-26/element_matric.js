const ELEMENT_MATRIX = {
    // Key (Monster/Weapon) : Value (Its Weakness / What Beats It)
    fire: "water",     // Water beats Fire
    ice: "fire",       // Fire beats Ice
    water: "ice",      // Ice beats Water
    ghost: "magic",    // Magic beats Ghost
    cat: "fish"        // Fish beats Cat
};

// 2.
function getStrength(monsterElement) {
    // Finds the key whose value matches this monster's element
    return Object.keys(ELEMENT_MATRIX).find(key => ELEMENT_MATRIX[key] === monsterElement) || "none";
}
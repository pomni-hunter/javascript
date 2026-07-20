// make ELEMENT_MATRIX

const ELEMENT_MATRIX = {
    // Key = Monster/Weapon Element : Value = What beats it!
    fire: "ice",
    ice: "fire",
    earth: "physical",
    ghost: "magic",
    cat: "fish"
};

// 1.
const weakness = ELEMENT_MATRIX[monsterElement]; // Returns "ice"

// 2.
function getStrength(monsterElement) {
    // Finds the key whose value matches this monster's element
    return Object.keys(ELEMENT_MATRIX).find(key => ELEMENT_MATRIX[key] === monsterElement) || "none";
}
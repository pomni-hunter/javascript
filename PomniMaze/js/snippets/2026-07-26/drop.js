// Dictionary mapping Monster Type -> Max Coin Reward
const MONSTER_LOOT_TABLE = {
    slime: 5,
    eye: 12,
    dragon: 50,
    ghost: 20,
    cat: 100 // Rare boss reward!
};


// Inside slash() or damage calculation step:
enemy.hp -= calculatedDamage;

if (enemy.hp <= 0) {
    enemy.hp = 0;
    console.log(`☠️ %c${enemy.name.toUpperCase()} HAS BEEN DEFEATED!`, "color: #ff3333; font-weight: bold;");

    // 1. Look up max coins from dictionary (default to 5 if not listed)
    const monsterKey = enemy.name.toLowerCase();
    const maxCoins = MONSTER_LOOT_TABLE[monsterKey] || 5;

    // 2. Roll random coins from 1 to MAX
    const coinsDropped = Math.floor(Math.random() * maxCoins) + 1;
    console.log(`🪙 %cMONSTER DROPPED ${coinsDropped} GOLD COINS!`, "color: #ffcc00; font-weight: bold;");

    // 3. Save to localStorage
    addCoinsToStorage(coinsDropped);
} else {
    console.log(`❤️ ${enemy.name} HP remaining: ${enemy.hp}`);
}


// Helper function to handle local persistence
function addCoinsToStorage(amount) {
    // 1. Read existing coins (convert from string to number, default to 0 if null)
    let currentCoins = parseInt(localStorage.getItem("heroCoins")) || 0;

    // 2. Add new coins
    currentCoins += amount;

    // 3. Save back to localStorage
    localStorage.setItem("heroCoins", currentCoins);

    // 4. Display total purse
    console.log(`💰 %cTOTAL PURSE: ${currentCoins} Coins (Saved to Storage!)`, "color: #ffcc00; font-style: italic;");
}
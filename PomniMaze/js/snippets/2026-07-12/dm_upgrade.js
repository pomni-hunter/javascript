// Inside DungeonMaster class -> spawnEnemy()
const enemyProfile = {
    name: type,
    hp: totalHP,
    weakness: weakness.toLowerCase(),
    isAnalyzed: false // 👈 A new hidden boolean flag!
};

console.log(`%c💔 TARGET HP: ${enemyProfile.hp}`, "color: #00ff66; font-weight: bold; font-size: 12px;");
console.log(`%c🏷️ WEAKNESS: %c❓ UNKNOWN (Use .analyze() to reveal!)`, "color: #fff;", "color: #ffcc00; font-style: italic;"); // 👈
console.log(`--------------------------------------------------`);

return enemyProfile;
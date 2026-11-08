
//Fun loop feedback
let attacks = 4; // Dice result
console.log(`⚡ MULTI-ATTACK UNLOCKED! (${attacks} hits)`);

for (let i = 0; i < attacks; i++) {
    console.log(`💥 Hit #${i + 1}!`);
    woody.currentWeapon.slash(boss);
}

// Run this in the console or your setup script:
const woody = new Character("Woody", "Sheriff");
window.activeHero = woody; // 👈 Now handleEnemyDefeat() can find it!
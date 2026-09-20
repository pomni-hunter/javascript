// ==========================================
// 1. DATA DICTIONARIES (Declared at top)
// ==========================================
const ITEM_CATALOG = {
  APPLE: { name: "Juicy Apple", type: "Heal", power: 15 },
  POTION: { name: "Health Potion", type: "Heal", power: 30 },
  SHERIFF_BADGE: { name: "Sheriff Badge", type: "Buff", power: 5 },
  TECHNOLOGY: { name: "Pomni's ipad technology", type: "Buff", power: 100 },
  ICE_CREAM: { name: "Strawberry ice cream", type: "Heal", power: 55 },
};

// ==========================================
// 2. REHYDRATION & GAME LOGIC
// ==========================================
// Pull Woody out of localStorage using the rehydrate script from character.js
const woody = rehydrateCharacter("woody");

// Test the item dictionary!
if (woody) {
  woody.currentItem = ITEM_CATALOG.APPLE;
  console.log(`${woody.name} is holding a ${woody.currentItem.name}!`);
}

// ==========================================
// 3. ATTACK
// ==========================================
class Enemy {
  constructor(type, attackPower, hp, weakness, strenght, ) {
    this.name = type;
    this.attackPower = attackPower;
    this.hp= totalHP;
    this.weakness= weakness.toLowerCase();
    this.strength= strength.toLowerCase();
    this.isAnalysed= false;
  }
  // add attack here
  attack(target) {
    target.currentHp = Math.max(0, target.currentHp - this.attackPower);
    console.log(`💥 ${this.name} attacks ${target.name} you receive  ${this.attackPower} damage!`);
    console.log(`❤️ ${target.name}'s HP: ${target.currentHp}/${target.maxHp}`);

    if (target.currentHp === 0) {
      console.log(`😱 ${target.name} has been knocked out!`);
    }
  }
}




// Pass targetCharacter to use an item on anyone on the team
useItem(targetCharacter = this) {
  if (!this.currentItem) {
    console.log(`${this.name} has no item to use!`);
    return;
  }

  const item = this.currentItem;

  // Healing Item Logic
  if (item.type === "Heal") {
    const oldHp = targetCharacter.currentHp;
    targetCharacter.currentHp = Math.min(
      targetCharacter.maxHp,
      targetCharacter.currentHp + item.power
    );

    const healedAmount = targetCharacter.currentHp - oldHp;

    if (targetCharacter === this) {
      console.log(`${this.name} used ${item.name} on themselves and restored ${healedAmount} HP!`);
    } else {
      console.log(`${this.name} used ${item.name} on ${targetCharacter.name} and restored ${healedAmount} HP!`);
    }

    // Consume the item from the user
    this.currentItem = null;
  }
}


// add to character 


gainXp(amount) {
    this.xp += amount;
    console.log(`🌟 %c${this.name} gained ${amount} XP! (${this.xp}/100 XP)`, "color: #00e5ff; font-weight: bold;");

    if (this.xp >= 100) {
        this.levelUp();
    }
}

levelUp() {
    this.level += 1;
    this.xp -= 100;
    this.maxHp += 15;
    this.currentHp = this.maxHp; // Full restore on level up!
    console.log(`🎉 %cLEVEL UP! ${this.name} is now Level ${this.level}!`, "color: #00ff00; font-weight: bold; font-size: 14px;");
    console.log(`❤️ Max HP boosted to ${this.maxHp}!`);
}



// --- In index.js / Setup Script ---

// 1. Create her new elemental arsenal
const fireSword = new Sword("Flame Tongue", 4, 3, "fire");
const iceSword = new Sword("Frost Bite", 3, 4, "ice");
const thunderSword = new Sword("Volt Saber", 5, 2, "thunder");

// 2. Put them in an array
const weaponArsenal = [fireSword, iceSword, thunderSword];

// 3. Save to localStorage so they persist
localStorage.setItem("heroArsenal", JSON.stringify(weaponArsenal));

// 4. Assign her starting weapon directly on her character instance
woody.currentWeapon = fireSword;



// 1. Amy scopes the enemy in the console
weapon.scope(enemy); // Console outputs: "⚠️ Shadow Goblin is weak to ICE!"

// 2. Simple assignment swap!
woody.currentWeapon = iceSword;
console.log(`⚔️ Equipped ${woody.currentWeapon.name}!`);

// 3. Attack with active weapon!
woody.currentWeapon.slash(enemy);
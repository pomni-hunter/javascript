// 2026-07-12


// ── THE NEW SCOUT METHOD ──
analyze(enemy) {
    // Safety Check: Make sure the DM actually spawned something first!
    if (!enemy) {
        console.log("❌ %cSYSTEM ERROR: No target found in this room to analyze!", "color: #ff3333; font-weight: bold;");
        return;
    }

    // 1. Flip the hidden data flag on the monster to true
    enemy.isAnalyzed = true;

    console.clear();

    // 2. Pop the tactical tactical scanning dashboard
    console.log(`🔍%c SCANNING TARGET WITH ${this.name.toUpperCase()}...`, "font-weight: bold; color: #a370f7; font-size: 13px;");
    console.log("%c==================================================", "color: #a370f7;");
    console.log(`👾 TARGET NAME: %c${enemy.name.toUpperCase()}`, "font-weight: bold; color: #fff;");
    console.log(`❤️ CURRENT HP:  %c${enemy.hp}`, "font-weight: bold; color: #00ff66;");
    console.log(`🎯 WEAKNESS:    %c${enemy.weakness.toUpperCase()}`, "font-weight: bold; color: #ffaa00;");
    console.log("%c==================================================", "color: #a370f7;");
}
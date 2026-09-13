function rehydrateCharacter(storageKey) {
    // 1. Fetch raw JSON string from localStorage
    const rawData = localStorage.getItem(storageKey);

    if (!rawData) {
        console.warn(`No data found in localStorage for key: "${storageKey}"`);
        return null;
    }

    // 2. Parse into flat data object
    const data = JSON.parse(rawData);

    // 3. REHYDRATE: Instantiate a new Character to restore prototype methods
    const character = new Character(data.name, data.job, data.maxHp);

    // 4. Restore preserved state
    character.currentHp = data.currentHp ?? data.maxHp;
    character.currentItem = data.currentItem ?? null;
    character.currentWeapon = data.currentWeapon ?? null;

    return character;
}
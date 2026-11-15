•	[ ] Samurai Buzz's Shurikens: Instantiate Weapon with "wind" or "physical" element and low durability so they break intentionally during testing.
•	[ ] Dynamic this.target on Enemy: Ensure startAutoAttack checks this.target on each tick so switchHero() redirects boss attacks mid-fight.
•	[ ] XP Trigger (weapon.owner or window.activeHero): Confirm handleEnemyDefeat awards the 50 XP to the hero who finishes the boss.
•	[ ] (Optional Stretch) Inventory Bag (useItemFromBag): Keep JUICE or HEAL_MILK in the array in case the boss lands a heavy hit before she can tag out.


How it plays out live:
	1.	You kick off the battle with boss.startAutoAttack(buzz).
	2.	Inside the setTimeout callback, it reads this.target dynamically on every single tick rather than clinging to the original buzz reference.
	3.	The second Amy's shurikens shatter and she types switchHero(0) (updating window.activeEnemy.target = woody), the boss's very next swing lands on Woody instead—without interrupting the winding-up countdown!
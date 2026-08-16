- goals

- patch last weeks spawn. add strength to enemy profile and constructor.

- Make a matrix of Elements and weaknesses: opposite would be the strength
 - // Key = Monster/Weapon Element : Value = What beats it!
 - play around with the lookup

- incorporate matrix in setting enemy strength and weakess
  - make sure strength does damage to weapons

- test together

- upgrade the scouter to find strength
    - how to change?
    - console.log(`🎯 WEAKNESS:    %c${enemy.weakness.toUpperCase()}`, "font-weight: bold; color: #ffaa00;");

- Make drop Function
  - // takeDamage: function(damage){
        //check if received damage >= hp
        // what to do if <= 0?
        // drops the item, but what item? how? 
    // }
  - put in Item bag

[x] Make a matrix of Elements

[x] Add .analyze() Method: Implement information hiding on Item to reveal hidden enemy stats and weakness/strength tags.

[x] Wear Penalty on Resistance: Update reduceDurability(enemy) so attacking a monster's strength applies an extra wear penalty (wear + 4).

[x] fix ELEMENT_MATRIX

[x] drop Function

[x] introduction into localStorage 

[] d18 Stat Rebalancing: Implement the safety floor formulas for durability (10 + (d18 * 2)) and base power (3 + Math.floor(d18 / 2)).

[] walking with random encounters / item pickups


() {} []

= == < >

<=
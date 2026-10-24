
[] code review updated Characteer Class, giving each character default items
    [look at the constructor together to see where to add inventory field from the snippet or if there are other updates needed]
[] recreate characters (take weapons off the backup characters) and attach them to new ones, put them into local storage.
[] play game with new inventory game play
  [select character to use based on Jax's choice]
  [roll for player/enemy turn]
  [showInventory, useItemFromBag(index)]
 
// Key Points

•	showInventory(): Uses forEach (or maps over the keys) so she can run woody.showInventory() in the console and see a numbered list of items.
•	useItemFromBag(index): Pulls an item out of this.inventory using splice(index, 1).
•	array.find() Quick Review: When picking an item out of ITEM_CATALOG or searching her inventory array for a specific item name (like finding "JUICE" or "Iphone11" by type or key), she can use .find() to review what you covered last week:


// Make sure Level up etc. was working 
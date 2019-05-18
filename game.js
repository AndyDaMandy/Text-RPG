// Game Canvas properties
var canvas = document.getDocumentById("gameScreen");
var ctx = document.getContext("2d");

// character attributes below:
var player = {
  name: 'Hidalgo',
  level: 1,
  weapon: playerWeapon,
  armor: playerArmor,
  basePower: 10,
  baseDefense: 10,
  healthPoints: 20,
  
};
//player weapons below:

var windSword = {
  name: 'Wind Sword',
  power: 10,
  element: 'wind'
};
var fireSword = {
  name: 'Fire Sword',
  power: 10,
  element: 'fire'
};
var waterSword = {
  name: 'Water Sword',
  power: 10,
  element: "water"
};
var lightningSword = {
  name: 'Lightning Sword',
  power: 10,
  element: 'lightning'
};

//player armor below
var ironArmor = {
  name: "Iron Armor",
  defense: 10,
  element: 'Neutral'
};

// basic enemy
var enemy = {
  [name: 'Circle Man',
  power: 5,
  defense: 5,
  healthPoints: 20,
  element: 'lightning',
  drawEnemy: function(){
  canvas;
  ctx;
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
}],
  
  //boss?
  [name: 'Potato Dude',
  power: 10,
  defense: 11,
  heathPoints: 20,
  element: 'water']
};

// the actual game!


var gameSequence = [];

gameSequence[0] = {text; "Welcome to the game!"};

gameSequence[1] = {text: "I hope that this isnt best practices for creating dialogue"};

gameSequence[2] = {text: "Okay, time to battle"};

gameSequence[3] = battle;

//battle mode:

var battle = while(player.healthPoints > 0 || enemy.healthPoints > 0) {
  if (player.healthPoints > 0 && enemy.healthPoints > 0)
    //load menu options
    //choose weapon?
    //if attack, call playerAttack function
    // if defend
}
//functions for attack, etc. would go here. Note, I'd like to find a way to calculate damage within a range.

function playerAttack() {
  var damage = player.basePower + player.playerWeapon - enemy.defense
}

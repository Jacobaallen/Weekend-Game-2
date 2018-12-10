function playGame() {

let readlineSync  =  require('readline-sync');

console.log("Welcome to Elder Tale.");

console.log("Choose your name.");

let name = readlineSync.question('Insert name here: ');

console.log('Your name is'+ ' ' + name + '. ' + 'Now choose your class.');

let classes = ['Guardian', 'Samurai', 'Swashbuckler', 'Assassin', 'Bard', 'Sorcerer', 'Cleric', 'Druid: '];

//Future idea: Hard and Easy level.

let classIndex = readlineSync.question('Select class: 0 :Guardian, 1 :Samurai, 2 :Swashbuckler, 3 :Assassin, 4 :Bard, 5 :Sorcerer, 6 :Cleric, 7 :Druid ');

let archetype = classes[Number(classIndex)];

console.log('Your name is' + ' ' + name + ' ' + 'and your class is' + ' ' + archetype + '.');

console.log(`Welcome to Elder Tale:` + ' ' + name + '. ' + `Lets start your adventure. You come across your first dungeon "The Depths of Palm." You are now entering. `);


  userChoiceOne= readlineSync.question(`You are walking along in the "Depths of Palm" and come across a fork in the road. Do you choose "right" or "left"? `);

if(userChoiceOne == "right") {
  console.log(`You move deeper into the "Depths of Palm". `);
    userChoiceTwo= readlineSync.question( `You come across a group of Goblins. Will you attack with a "high" level attack or "low" level attack. `);

if(userChoiceTwo == "high") {
  console.log("You defeated the Goblins. Congratulations! ")
    monster = readlineSync.question(`You have entered the lord of the dungeon layer, "Ruseato of Seven Prison." Do you wish to attack with a: "high" level attack or "low" level attack.`);

      if (monster == "high") {
        console.log(`You scored a critical hit killing Ruseato of Seven Prison and conquered the "Depths of Palm." All the treasure and rare iteams are yours` + ' ' + name + '.' + `Your class` + ' ' + archetype + ' ' + `has risen to level 90. Thanks for playing. Please support Jacob A Allen on patreon and follow jacobaallen on instagram. `);
        playAgain();
      } else {
        console.log(`Your attack was to weak and you were killed by Ruseato of Seven Prison. `);
        playAgain();
      }
} else {
  console.log("Your attack was to weak. The goblins stabbed and tortured you to death.");
  playAgain();
}
} else {
  console.log("You choose the wrong path, fell into a trap, and were brutally killed.");
  playAgain();
}


function playAgain() {
let continuePlaying = readlineSync.question(`Do you wish to "play again" or "quit"? `)

if (continuePlaying =='play again') {
  playGame()
} else {
  console.log(`Thank you for playing see you soon.`);
};
}

}

playGame();

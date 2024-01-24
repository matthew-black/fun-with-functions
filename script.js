// INPUT: A string that is the person's name that
//        we want to say hello to.
// OUTPUT: Nothing! It doesn't return anything!
// SIDE-EFFECT: A console.log will appear in the
//              browser console.
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

// Call the function with an argument of 'Crystal':
// sayHello('Crystal');
// sayHello('Kirby');
// sayHello('Matt');


// INPUT: Two numbers.
// OUTPUT (AKA: The return value): 
//      The sum of the two numbers.
// SIDE-EFFECT: No side-effect.
function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

// let sum = add(2, 5);     // 7
// console.log('expect a 7:', sum);

// let otherSum = add(50, 100);  // 150
// console.log('expect a 150:', otherSum);


let yourTiles = [
  { tile: 'M', score: 5 },
  { tile: 'X', score: 8 },
  { tile: 'I', score: 2 },
  { tile: 'P', score: 3 }
]
let myTiles = [
  { tile: 'A', score: 1 },
  { tile: 'B', score: 2 },
  { tile: 'C', score: 1 },
  { tile: 'D', score: 4 }
]

// INPUT: An array of "tile objects" that looks like:
    // [
    //   { tile: 'A', score: 1 },
    //   { tile: 'B', score: 2 },
    //   { tile: 'C', score: 1 },
    //   { tile: 'D', score: 4 }
    // ]
// OUTPUT: The sum of all "tile objects" scores.
// SIDE-EFFECT: None!
function calculateScore(tiles) {
  // Declare a variable "total" and set its value to 0:
  let total = 0;

  // Loop through tiles:
  for (let tile of tiles) {
    // Add the current tile's score to the "total" variable:
    total += tile.score
  }

  // Return the "total" variable:
  return total;
}

let yourScore = calculateScore(yourTiles);
console.log('expect 18:', yourScore)

let myScore = calculateScore(myTiles);
console.log('expect 8:', myScore);

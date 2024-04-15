// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};



function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 };

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let chooseWord = input.question ("Let's play some scarbble! Please enter a word: ");
   userWord = chooseWord;
  
   return userWord;
};


let simpleScorer =function(word){
   vPoints = 0;                                                                      
   validWord = word.toLowerCase();
       
   for (i = 0; i< validWord.length; i++){                                        //Validates then returns single point (vPoints) for any valid letter entered//

      if ("abcdefghijklmnopqrstuvwxyz".includes(validWord[i])){                 //also returns validWord in LowerCase for further scoring//
         vPoints += 1; 
      }                                                                        // assigned alias validPoint for future calling//
   }
   return validWord, vPoints;
};                                                                   


let validPoint = simpleScorer;


let vowelBonusScorer = function (word) { 
   
    validPoint(word);
   
   let points = 0 + vPoints;
   
   for (let i = 0; i < validWord.length; i++){ 
      
      if ("aeiou".includes(validWord[i])){
         newPoints = points += 2;
      }
   }
   
   return newPoints;
};
   


let scrabbleScorer = function(word){
   
   validPoint(word);
   
   let wordScore = 0;
   
   for (let key in newPointStructure){
      
      for (i = 0; i < validWord.length; i ++){
         let userLetter = validWord[i]
         let letterCheck = key
         let pointAdd = newPointStructure[key]
         
         if (userLetter === letterCheck){
            
            wordScore += pointAdd;
            
         }   
      }
   }
   return wordScore;
};   


const scoringAlgorithms = [
   
   {
      Name: "Simple Score",
      Description: "Each letter is worth 1 point.",
      scorerFunction: simpleScorer,
   },
   
   {
      Name: "Bonus Vowels",
      Description: "Vowels are 3 pts, consonants are 1pt.",
      scorerFunction: vowelBonusScorer,
   },
   
   {
      Name: "Scrabble",
      Description: "The traditional scoring algorithm.",
      scorerFunction: scrabbleScorer,
   },
   
];


function scorerPrompt() {
   let isValid = false;
   console.log ("Which Algorithm would you to use when scoring your word?\n\n0 - Simple: One point per character.\n1 - Vowel Bonus: Vowels are worth 3 points.\n2 - Scrabble: Uses scrabble point system.\n");
   
   while (!isValid){
      let numberChose = input.question(`Enter 0, 1, or 2: `);
      numChose = Number(numberChose);
      
      if (numChose >= 0 && numChose <= 2){ 
         isValid = true;
      }
      else if (!isValid){ 
         console.log("invalid input, Please try again.\n");
      }
      
   }    
   
   algoChose = scoringAlgorithms[numChose];

   return algoChose;
};


function transform(object) {
   let newObject ={};
   
   for (let key in oldPointStructure){
      let currentArray = oldPointStructure[key];
      
      for (i = 0; i < currentArray.length; i++){
         lowLetter = currentArray[i];
         letter = lowLetter.toLowerCase();
         newObject[letter] = Number(key);
      }
   }
   return newObject;
};


newPointStructure = transform(oldPointStructure);                    //Moved from underneath function transform to fix Scoping issue for scrabbleScorer//


function printResult(){
   console.log("\n---------------------------------------------------------------------------")
   console.log (`\n Your word ${userWord} is worth ${algoChose.scorerFunction(userWord)} points using the ${algoChose.Name} algorithm!`)
   console.log("\n---------------------------------------------------------------------------")
   
}


function runProgram() {
   initialPrompt();
   scorerPrompt();
   printResult();
   

};



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

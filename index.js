//Array containing the delivery lines of each joke
const jokeArray = [
    "What do you call a pile of cats?",
    "What's a cat's favorite TV show?",
    "What's a cat's favorite cereal?",
    "What does a cat say after telling a bad joke?",
    "Why did the cat file for bankrupcy?",
    "Why can't cats play poker in the wild?",
    "Why did the cat go to medical school?",
    "Why do cats make such bad storytellers?",
    "Why was the cat so small?",
    "Why was the cat sitting on the computer?",
    ];

let previousJokeIndex = -1;
let randomJokeIndex = -1;

//Function to generate a random joke index different than previous one
function generateRandomJokeIndex () {
while(randomJokeIndex === previousJokeIndex) {
randomJokeIndex= Math.floor(Math.random() * jokeArray.length);
}
previousJokeIndex = randomJokeIndex;
};

//Get the initial random Index from array and print delivery line from jokeArray
generateRandomJokeIndex();

//define randomJoke
const randomJoke = jokeArray[randomJokeIndex];

//Print delivery line of the joke
console.log(randomJoke);

//Switch containing the punchline for randomJoke
switch (randomJoke) {
case "What do you call a pile of cats?":
console.log("A meowtain!"); 
break;
case "What's a cat's favorite TV show?":
console.log("Claw and Order"); 
break;
case "What's a cat's favorite cereal?":
console.log("Mice Krispies!"); 
break;
case "What does a cat say after telling a bad joke?":
console.log("Just kitten!"); 
break;
case "Why did the cat file for bankrupcy?":
console.log("They got caught up in a purr-amid scheme!"); 
break;
case "Why can't cats play poker in the wild?":
console.log("Too many Cheetas!"); 
break;
case "Why did the cat go to medical school?":
console.log("To become a purr-amedic!"); 
break;
case "Why do cats make such bad storytellers?":
console.log("They only have one tail!"); 
break;
case "Why was the cat so small?":
console.log("Becuase it only drank condensed milk!"); 
break;
case "Why was the cat sitting on the computer?":
console.log("To keep an eye on the mouse!"); 
break;
default:
console.log("Invalid joke");
break;
};


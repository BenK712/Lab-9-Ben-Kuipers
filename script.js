//Q1
let characters = ["Harry", "Hermione", "Ron", "Draco", "Luna"];
for( let i = 0; i<= 4; i++)
{
    console.log(characters[i]);
}

//Q2
let firstName = "Harry";
let house = "Gryffindor";

console.log(`Welcome, ${firstName} of ${house}!`);

//Q3
let characterName = "Hermione";
console.log("UpperCase:", characterName.toUpperCase());
console.log("LowerCase", characterName.toLowerCase());

//Q4
let spell = " Expelliarmus ";
console.log( `"${spell.trim()}"`);

//Q5
let quote = "I solemnly swear that I am up to no good";
console.log(quote.slice(11,16));

//Q6
let firstname = "Ron";
let lastname = "Weasley";
console.log(firstname.concat(" ", lastname));

//Q7
let sentence = "Draco is a good Wizard";
console.log(sentence.replace("good", "bad"));

//Q8
let houses = ["Gryffindor", "Hufflepuff", "Ravenclaw"];
houses.push("Slytherin");
houses.pop("Slytherin)");
console.log(houses);

//Q9
let sPells = ["Alohomora", "Lumos", "Nox"];
sPells.unshift("Accio");
sPells.shift();
console.log(sPells);

//Q10
let professors = ["Dumbledore", "McGonagall", "Snape", "Hagrid"];
let slice = professors.slice(1,3)
console.log(slice);

//Q11
let students = ["Neville", "Seamus", "Dean", "Parvati"];
console.log(students.splice(1,2));

//Q12
let phrase = " Mischief Managed ";
trimmed =`"${phrase.trim()}"`;
trimmed = trimmed.toLowerCase();
signoff = "-Harry";
console.log(trimmed.concat(" ", signoff));

//Q13
let wizards = ["Harry", "Hermione", "Ron"];
wizards.push("Luna", "Draco");
console.log(wizards);

//Q14
let message = "Welcome to Hogwarts School of Witccraft and Wizardry";
message = message.slice(10,19);
title = "Castle";
console.log(message.concat(" ",title));
// Variables and Values
const country = "India",
  continent = "Asia";
let population = 1373.8;

// console.log("country : ", country);
// console.log("continent : ", continent);
// console.log("population : ", population);

// Data Types
const isIsland = false;
let language;

// console.log("typeof isIsland : ", typeof isIsland);
// console.log("typeof population : ", typeof population);
// console.log("typeof country : ",typeof country);
// console.log("typeof language : ", typeof language);

// let, var and const
language = "Hindi";

// isIsland = true; // TypeError: Assignment to constant variable
// country = "USA"; // TypeError: Assignment to constant variable
// continent = "North America"; // TypeError: Assignment to constant variable

// Basic Operators

// count half population
// let halfPopulation = population / 2;
// console.log("Half Population : ", halfPopulation);

// increase population by 1
// population = (population * 1000000)
// console.log("Old Population : ", population);
// population += 1;
// console.log("New Population (Increased by 1) : ", population);
// population = population / 1000000;
// console.log("population in million : ", population);

// let populationFinland = 6; // million
// console.log("Population of India is more than Finland? : ", population > populationFinland);

let averagePopulation = 33; //million
/*
console.log("Does India have less people than the average country? : ", averagePopulation > population);

let description = country + ' is in ' + continent + ', and its ' + population + ' speak ' + language;
console.log(description);


// Strings ans Template Literals
description = `${country} is in ${continent}, and its ${population} speak ${language}`;
console.log(description);

// Taking Decisions: if / else Statements

// temporary change
// population = 13;
// population = 130; 
if(population > averagePopulation){
    console.log(`${country}'s population is above average`);
}
else{
    console.log(`${country}'s population is ${averagePopulation - population} below average `);
}

//  Type Conversion and Coercion

'9' - '5'; // 4
'19' - '13' + '17'; // 617
'19' - '13' + 17; //23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // 1143
*/
// Equality Operators: == vs. ===

// const numNeighbours = prompt('How many neighbour countries does your country have?');
// if(Number(numNeighbours) === 1){
//     console.log(`Only 1 border!`);
// }
// else if(numNeighbours > 1){
//     console.log(`More than 1 border`);
// }
// else{
//     console.log('no borders');
//     console.log(typeof numNeighbours);
// }

// Here prompt gets the input in the form of a string which causes trouble in the case of strict equality check, To avoid any kind of type
// errors in the future one should always use === operator which doesn't apply type coercion

// Logical Operators

// if (language === 'English' && population < 50 && !isIsland) {
//     console.log(`You should live in ${country} :)`);
// }
// else {
//     console.log(`${country} does not meet your criteria :(`);
// }

// Switch Statement

// switch (language) {
//     case 'Chinese':
//     case 'Mandarian':
//         console.log('Most number of native speakers!');
//         break;
//     case 'Spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'English':
//         '3rd place'
//         break;
//     case 'Hindi':
//         console.log('Number 4');
//         break;
//     case 'Arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');
// }

// Ternary operator

// (population > averagePopulation) ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);

// JavaScript Fundamentals – Part 2

// Functions
const capitalCity = "Delhi";

// function describeCountry(country, population, capitalCity){
//     return (`${country} has ${population} million people and its capital city is ${capitalCity}`);
// }

// const result1 = describeCountry(country, population, capitalCity);
// const result2 = describeCountry('USA', '334.3', 'Washington D.C.');
// const result3 = describeCountry('Australia', '27', 'Canberra');

// console.log(result1);
// console.log(result2);
// console.log(result3);

// Function Declarations vs. Expressions

const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population * 100) / worldPopulation;
}

// const result1 = percentageOfWorld1(population);
// const result2 = percentageOfWorld1(334.3);
// const result3 = percentageOfWorld1(27);

// console.log(result1);
// console.log(result2);
// console.log(result3);

// const percentageOfWorld2 = function (population){
//     return (population * 100) / worldPopulation;
// }

// const result4 = percentageOfWorld2(population);
// const result5 = percentageOfWorld2(334.3);
// const result6 = percentageOfWorld2(27);

// console.log(result4);
// console.log(result5);
// console.log(result6);

// Arrow Functions

// const percentageOfWorld3 = (population) => {
//     return (population * 100) / worldPopulation;
// }

// const result4 = percentageOfWorld3(population);
// const result5 = percentageOfWorld3(334.3);
// const result6 = percentageOfWorld3(27);

// console.log(result4);
// console.log(result5);
// console.log(result6);

// Functions Calling Other Functions

// function describePopulation(country, population){
//     return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)} % of the world.`
// }

// console.log(describePopulation(country, population));
// console.log(describePopulation("USA", 334.3));
// console.log(describePopulation("Australia", 27));

// Introduction to Arrays

const populations = [population, 334.3, 27, 5.27];

// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// console.log(percentages);

// Basic Array Operations (Methods)

const neighbours = ["Pakistan", "Lanka", "China"];

// neighbours.push("Utopia");
// neighbours.pop();
// let found = false;

// for (let i = 0; i < neighbours.length; i++) {
//   if (neighbours[i] === "Germany") {
//     found = true;
//     break;
//   }
// }

// if(found===false){
//     console.log('Probably not a central European country :D');
// }

// console.log(neighbours);
neighbours[neighbours.indexOf("Lanka")] = "Sri Lanka";
// console.log(neighbours);

// Introduction to Objects

const myCountry = {
  country: country,
  population: population,
  language: language,
  capital: capitalCity,
  neightbours: neighbours,

  describe: function () {
    console.log(
      `'${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neightbours.length} neighbouring countries and a capital called ${this.capital}.'`
    );
  },

  checkIsland: function () {
    neighbours.length ? (this.isIsland = false) : (this.isIsland = true);
  },
};

// console.log(myCountry);

// Dot vs. Bracket Notation

// console.log(
//   `'${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neightbours.length} neighbouring countries and a capital called ${myCountry.capital}.'`
// );

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry["population"] -= 2;
// console.log(myCountry["population"]);

// Object Methods

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry.isIsland);

// Iteration: The for Loop

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }

// Looping Arrays, Breaking and Continuing
let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

// console.log(percentages2);

//  Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

// for(let i=0;i<listOfNeighbours.length;i++){
//     for(let j=0;j<listOfNeighbours[i].length;j++){
//         console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//     }
// }

// The while Loop
let i = 0,
  percentages3 = [];
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

// console.log(percentages3);

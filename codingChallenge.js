// Section 2 : Challenge 1

var massMark = 78,
    heightMark = 1.69;
var massJohn = 92,
    heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

// Section 2 : Challenge 2 

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark < BMIJohn)
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's! ${BMIMark})`);
else console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);

// Section 2 : Challenge 3

var scoreDolphins = 96 + 108 + 89 / 3;
var scoreKoalas = 88 + 91 + 110 / 3;

if (scoreDolphins > scoreKoalas) console.log("Dolphins win the trophy");
else if (scoreDolphins < scoreKoalas) console.log("Koalas win the trophy");
else console.log("Both win the trophy");

// Section 2 : Challenge 4

const bill = 275;
var tip = bill > 50 && bill < 300 ? (bill * 15) / 100 : (bill * 20) / 100;
console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);

// Section 3 : Challenge 1

var calcAverage = (a, b, c) => (a + b + c) / 3;

var scoreDolphins = calcAverage(44, 23, 71);
var scoreKoalas = calcAverage(65, 54, 49);

var checkWinner = (avgDolphins, avgKoalas) => {
    if (avgKoalas * 2 <= avgDolphins)
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    else if (avgKoalas >= 2 * avgDolphins)
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    else console.log("No team wins...");
};

checkWinner(scoreDolphins, scoreKoalas);

// Section 3 : 
// Coding Challenge 2 (Exercise 6)

// let bills = [125, 555, 44], tips = [], totals = [];

// function calcTip(bill) {
//     let tip;
//     if (bill >= 50 && bill <= 300) {
//         tip = bill * 0.15;
//     }
//     else {
//         tip = bill * 0.2;
//     }
//     return tip;
// }

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(tips[i] + bills[i]);
// }


// Section 3 : Challange 3

// const mark = {
//     fullname: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.myBMI = (this.mass / (this.height * this.height));
//         console.log(this.myBMI);
//         return this.myBMI;
//     }
// }

// const john = {
//     fullname: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.myBMI = (this.mass / (this.height * this.height));
//         return this.myBMI;
//     }
// }

// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`${mark.fullname}'s BMI (${mark.myBMI}) is higher than ${john.fullname}'s (${john.myBMI})!`);
// }
// else {
//     console.log(`${john.fullname}'s BMI (${john.myBMI}) is higher than ${mark.fullname}'s (${mark.myBMI})!`);
// }

// // Coding Challeneg - 4

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [], totals = [];

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(tips[i] + bills[i]);
// }

// function calcAverage(arr) {
//     let average = 0;
//     for (let i = 0; i < arr.length; i++) {
//         average += arr[i];
//     }

//     return average /= arr.length;
// }

// console.log(calcAverage(bills));
// console.log(calcAverage(tips));
// console.log(calcAverage(totals));


// Section 9: Challenge 1

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//         'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

// const players1 = game.players[0];
// const players2 = game.players[1];
// const [gk1, ...fieldPlayers1] = [...players1];
// const [gk2, ...fieldPlayers2] = [...players2];
// const allPlayers = [...players1, ...players2];
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// const { team1, x: draw, team2 } = game.odds;

// function printGoals(...players) {
//     console.log(...players);
//     console.log(`${players.length} goals were scored`);
// }

// console.log(players1);
// console.log(players2);
// console.log(gk1);
// console.log(gk2);
// console.log(fieldPlayers1);
// console.log(fieldPlayers2);
// console.log(allPlayers);
// console.log(players1Final);
// console.log(team1, draw, team2);
// printGoals(...game.scored);

// (team1<team2 && console.log('team1 is more likely to win')) || (team2<team1 && console.log('team2 is more likely to win'));

// Section 9: Challenge - 2

// for(const [i, player] of game.scored.entries()){
//     console.log(`Goal ${i+1}: ${player}`);
// }

// let avg = 0, odds = Object.values(game.odds);
// for (const odd of odds) {
//     avg = (avg + Number(odd)); // 1.33, 3.25, 6.5
// }

// avg /= odds.length
// console.log(avg);

// for(const [team, odd] of Object.entries(game.odds)){
//     console.log(`Odd of ${team !== 'x' ? `victory ${game[team]}` : 'draw'}: ${odd}`);
// }

// const scorers = {};

// for (const [, scorer] of game.scored.entries()) {
//     scorers[scorer] ? scorers[scorer]++ : scorers[scorer] = 1;
// }
// console.log(scorers);

// Section 9: Challenge - 3 
// const gameEvents = new Map([
//     [17, '⚽ GOAL'],
//     [36, '� Substitution'],
//     [47, '⚽ GOAL'],
//     [61, '� Substitution'],
//     [64, '� Yellow card'],
//     [69, '� Red card'],
//     [70, '� Substitution'],
//     [72, '� Substitution'],
//     [76, '⚽ GOAL'],
//     [80, '⚽ GOAL'],
//     [92, '� Yellow card'],
// ]);

// for(const [minute, event] of gameEvents){
//     minute === 64 && gameEvents.delete(minute);
// }

// console.log(gameEvents);

// let difference = 0, previous;
// for(const [minute, event] of gameEvents){
//     difference += (difference === 0) ? minute : (minute - previous) ; 
//     previous = minute;
// }

// difference /= gameEvents.size;
// console.log(`An event happened, on average, every ${difference} minutes`);

// Section 9: Challenge - 4

// let textArea = document.createElement('textarea');
// textArea.rows=10;
// textArea.cols=30;
// document.body.append(textArea);

// let btn = document.createElement('button');
// btn.innerHTML = 'Enter';
// document.body.append(btn);

// btn.onclick = function(){
//     let inputArray = textArea.value.split('\n');

//     for(let [i, line] of inputArray.entries()){
//         let [element1, element2] = line.toLowerCase().trim().split('_');
//         line = element1 + element2[0].toUpperCase() + element2.slice(1);
//         line = line.padEnd(20) + "✅".repeat(i+1);
//         console.log(line);
//     }
// }

// Section 10: Challenge - 1

// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//     answers: new Array(4).fill(0),

//     registerNewAnswer() {
//         // console.log(this.options);
//         let userAnswer = window.prompt(`${this.question}\n${this.options.join('\n')} \n`);

//         if (userAnswer < 4) {
//             this.answers[userAnswer]++;
//         }
//         else {
//             console.log('Please answer the question within the given options only (0 to 3)');
//         }
//         this.displayResults();
//     },

//     displayResults() {
//         let type = prompt('Please type the format you like to see the Poll results?\n- array\n- string');

//         if (type.toLowerCase() === 'array') {
//             console.log(this.answers);
//         }
//         else if (type.toLowerCase() === 'string') {
//             console.log(`Poll results are ${this.answers.join(',')}`);
//         }
//         else {
//             console.log('Please enter valid input... either string or array');
//         }
//     }
// }

// let btn = document.createElement('button');
// btn.innerHTML = 'Answer Poll';
// document.body.append(btn);

// btn.addEventListener('click', poll.registerNewAnswer.bind(poll));

// const test1 = { answers: [5, 2, 3] };
// const test2 = { answers: [1, 5, 3, 9, 6, 1] };

// poll.displayResults.call(test1);
// poll.displayResults.call(test2);

// Section 10: Challenge 2

// document.body.append(document.createElement('h1'));

// (function () {
//     const header = document.querySelector('h1');
//     header.innerHTML = 'This is a simple Header';
//     header.style.color = 'red';
//     document.body.addEventListener('click', function () {
//         header.style.color = 'blue';
//     })
// })();

// Section 11: Challenge 1

// const dogsJulia = [9, 16, 6, 8, 3]
// const dogsKate = [10, 5, 6, 1, 4]

// function checkDogs(dogsJulia, dogsKate){
//     const dogsJuliaCopy = dogsJulia.slice();
//     dogsJuliaCopy.splice(-2);
//     // dogsJuliaCopy.splice(-3,1);
//     // dogsJuliaCopy.splice(0,1);
//     dogsJuliaCopy.shift();

//     const mergedArr = [...dogsJuliaCopy, ...dogsKate];
//     console.log(mergedArr);

//     mergedArr.forEach(function(dog,index){
//         dog >= 3 && console.log(`Dog number ${index+1} is an adult, and is ${dog} years old`);
//         dog < 3 && console.log(`Dog number ${index+1} is still a puppy 🐶`);
//     })
// }

// checkDogs(dogsJulia, dogsKate)

// Section 11: Challenge 2

// const ages1 = [5, 2, 4, 1, 15, 8, 3]
// const ages2 = [16, 6, 10, 5, 6, 1, 4]

// function calcAverageHumanAge(ages) {
//     let humanAges = ages.map(age => (age <= 2) ? age * 2 : 16 + (age * 4))

//     let adultAges = humanAges.filter(age => age >= 18);

//     console.log(adultAges);
//     let humanAgesAvg = adultAges.reduce((acc, curr, i, adultAges) => acc += (curr / adultAges.length), 0);
//     // let humanAgesAvg = adultAges.reduce((acc, curr) => acc += (curr / adultAges.length), 0); // works fine

//     console.log(humanAgesAvg);
// }

// calcAverageHumanAge(ages1);
// calcAverageHumanAge(ages2);

// Section 11: Challenge 3

// function calcAverageHumanAge(ages) {
//     let humanAgesAvg = ages.map(age => (age <= 2) ? age * 2 : 16 + (age * 4)).filter(age => age >= 18).reduce((acc, curr, i, adultAges) => acc += (curr / adultAges.length), 0);

//     console.log(humanAgesAvg);
// }

// calcAverageHumanAge(ages1)
// calcAverageHumanAge(ages2)

// Section 11: Challenge 4

// const dogs = [
//     { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//     { weight: 8, curFood: 200, owners: ['Matilda'] },
//     { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//     { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// // 1.
// dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));

// let ownersEatTooMuch = [], ownersEatTooLittle = [], ownersEatExact = [];

// const eating = (dog) => {
//     if (dog.curFood > dog.recommendedFood) {
//         // console.log('Sarah\'s dog is eating too much');
//         dog.owners.forEach(owner => {
//             if (!ownersEatTooMuch.includes(owner)) {
//                 ownersEatTooMuch.push(owner)
//             }
//         })

//         return 'dog is eating too much';
//     }
//     else if (dog.curFood < dog.recommendedFood) {
//         // console.log('Sarah\'s dog is eating too less');
//         dog.owners.forEach(owner => {
//             if (!ownersEatTooLittle.includes(owner)) {
//                 ownersEatTooLittle.push(owner)
//             }
//         });
//         return 'dog is eating too less'
//     }
//     else if (dog.curFood === 0.9 * dog.recommendedFood) {
//         dog.owners.forEach(owner => {
//             if (!ownersEatExact.includes(owner)) {
//                 ownersEatExact.push(owner)
//             }
//         })
//         return 'dog is eating exact amount of recommended food'
//     }
// }

// dogs.forEach(dog => {
//     // 3.
//     eating(dog)

//     // 2.
//     const owner = dog.owners.find(owner => owner === 'Sarah')
//     owner && console.log(`${owner}'s ` + eating(dog));
// })

// console.log(ownersEatTooLittle);
// console.log(ownersEatTooMuch);

// // 4. 

// console.log(ownersEatTooMuch.join(' and ') + '\'s dogs eat too much!');
// console.log(ownersEatTooLittle.join(' and ') + '\'s dogs eat too little!');

// // 5.
// console.log('If there is a dog who eat exact the same amount of recommended food: ', ownersEatExact.length > 0);
// // Alternate way
// // console.log(dogs.some(dog=> dog.recommendedFood === dog.curFood))

// // 6.
// console.log('If there is a dog who eat okay amount of recommended food: ', dogs.some(dog => dog => dog.curFood > (dog.recommendedFood * 0.9) && dog.curFood < (dog.recommendedFood * 1.1)));

// // 7.
// const okayFood = dog => dog.curFood > (dog.recommendedFood * 0.9) && dog.curFood < (dog.recommendedFood * 1.1);
// console.log(dogs.some(okayFood));
// // const okayFood = dog => {
// //     if (dog.curFood > (dog.recommendedFood * 0.9) && dog.curFood < (dog.recommendedFood * 1.1)) console.log(dog);
// //     return dog
// // }

// // 8.
// const dogsCopy = [...dogs];
// dogsCopy.sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(dogsCopy);

// Section 14: Challenge 1

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(this.speed);
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h.`);
    return this;
    // console.log(this.speed);
}

// const bmw = new Car('BMW', 120);
// const merc = new Car('Mercedes', 95);

// console.log(bmw.speed, bmw.make);
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// console.log(bmw.speed, bmw.make);
// console.log(merc.speed, merc.make);
// merc.accelerate();
// merc.brake();
// merc.brake();
// merc.brake();
// console.log(merc.speed, merc.make);

// Section 14: Challenge 2

// class carCL {
//     constructor(make, speed) {
//         // this.speed = speed;
//         this.make = make;
//     }

//     accelerate() {
//         this.speed += 10;
//         console.log(this.speed);
//     }

//     brake() {
//         this.speed -= 5;
//         console.log(this.speed);
//     }

//     get speedUS() {
//         return (this.speed / 1.6);
//     }

//     set speedUS(speed) {
//         this.speed = speed * 1.6;
//     }
// };

// const bmw2 = new carCL('BMW', 190);
// bmw2.accelerate();
// bmw2.brake();
// console.log(bmw2.speedUS);

// Section 14: Challenge 3

// const EV = function (make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// }

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//     this.charge = chargeTo;
// }

// EV.prototype.accelerate = function () {
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`);
// }

// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla.speed);
// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(90);
// console.log(tesla.charge);

// Section 14: Challenge 4
// class EVCl extends Car {
//     // private fields
//     #charge;

//     constructor(make, speed, charge) {
//         super(make, speed);
//         this.#charge = charge;
//     }

//     accelerate() {
//         this.speed += 20;
//         this.#charge -= 1;
//         console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge} %`);
//         return this;
//     }

//     chargeBattery(chargeTo) {
//         this.#charge = chargeTo;
//         return this;
//     }

//     brake() {
//         this.speed -= 10;
//         console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge} %`);
//         return this;
//     }

//     get battery() {
//         return this.#charge;
//     }
//     set battery(chargeTo) {
//         return this.#charge = chargeTo;
//     }
// }

// const rivian = new EVCl('Rivian', 120, 24);
// // rivian.accelerate();
// // rivian.brake();
// // rivian.chargeBattery(70);
// rivian.accelerate().brake().chargeBattery(90);
// console.log(rivian.battery);
// console.log(rivian.speedUS);
// // console.log(rivian.speed);

// Section-16 : Challenge-1
// function whereAmI(lat, long) {
//     fetch(`https://geocode.xyz/${lat},${long}?geoit=json&auth=951506793640046167454x58955`)
//         .then(res => {
//             // console.log(res)
//             if (res.ok) {
//                 return res.json()
//             }
//             throw new Error('Wrong country!!')
//         })
//         .then(data => {
//             if (data.error) throw new Error('Something went wrong!!');
//             // console.log(data)
//             if (data.standard?.city == 'Nan') throw new Error('Enter proper co-ordinates!!!')
//             console.log(`You are in ${data.city}, ${data.country}`)
//             getCountryDetails(data.country);
//         })
//         .catch(e => {
//             console.log(e)
//         })
// }

// function getCountryDetails(country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then((response) => {
//             return response.json()
//         })
//         .then((data) => {
//             // rendering the country data
//             renderCountry(data[0]);
//         })
// }

// function renderCountry(data) {
//     const countryDiv = document.createElement('div');
//     const html = `
//     <article class="country">
//     <img class="country__img" src="${data.flags.svg}" />
//     <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} M people</p>
//         <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
//     </div>
//     </article>`
//     countryDiv.insertAdjacentHTML('beforeend', html)
//     document.body.append(countryDiv);
//     document.querySelector('.country__img').style.width = '25rem';
//     document.querySelector('.country__img').style.height = "15rem";
//     document.querySelector('.country__img').style.objectFit = "cover";
// }

// // document.getElementById('btn').addEventListener('click', function (e) {
// whereAmI(19.037, 72.873);
// })

// Section-16 : Challenge-2
const imgContainer = document.querySelector('.images');
function createImage(imgPath) {
    return new Promise((resolve, reject) => {
        const image = document.createElement('img');
        image.src = imgPath;

        image.addEventListener('load', () => {
            imgContainer.append(image);
            resolve(image);
        })
        image.addEventListener('error', () => {
            reject(new Error('Image not found !!'));
        })
        resolve(image);
    })
}

function wait(time) {
    return new Promise((resolve,) => {
        setTimeout(() => resolve(true), time * 1000);
    })
}

// let currentImg;

// createImage('./img-1.jpg')
//     .then(img => {
//         console.log('img-1 loaded successfully')
//         currentImg = img;
//         console.log(img)
//         return wait(2)
//     })
//     .then(() => {
//         currentImg.style.display = "none";
//         return createImage('./img-2.jpg')
//     })
//     .then((img) => {
//         console.log('img-2 loaded successfully')
//         currentImg = img;
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = "none";
//     })
//     .catch(e => console.log(e))

// Section-16 : Challenge-3

const loadNPause = async function () {
    try {
        // loading image-1
        let image = await createImage('./img-1.jpg');
        console.log('Img-1 loaded');
        await wait(2);
        image.style.display = 'none';

        // loading image-2
        img = await createImage('./img-2.jpg');
        console.log('Img-2 loaded');
        await wait(2);
        image.style.display = 'none';
    } catch (err) {
        console.log(err);
    }
}

// loadNPause();

const loadAll = async function (imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img));
        console.log(imgs)
        const imgsEl = await Promise.all(imgs);
        console.log(imgsEl)
        imgsEl.forEach(img => img.classList.add('parallel'));
    } catch (err) {
        console.log(err);
    }
}

loadAll(['./img-1.jpg', './img-2.jpg', './img-3.jpg'])
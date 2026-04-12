// 1. Type Coercion

/* console.log("" + 1 + 0); //10

console.log(true + false); //1

console.log(6 / "3"); //2

console.log("2" * "3"); //6

console.log(4 + 5 + "px"); //9px


console.log("$" + 4 + 5); //$45

console.log("4" - 2);  // 2

console.log("4px" - 2); //NaN

console.log("  -9  " + 5); //-9 5

console.log("  -9  " - 5); //-14

console.log(null + 1); //1

console.log(undefined + 1); //NaN

console.log(" \t \n" - 2); //-2 */

// 2. String vs. Number Operations

/*let three = "3";
let four = "4";
let thirty = "30";

// What is the value of the following expressions?
let addition = three + four; //result is 34 because the three and four are strings - adding two strings concatenates
let multiplication = three * four;
let division = three / four;
let subtraction = three - four; // Fix this line - Added subtraction symbol to correct this line
let lessThan1 = three < four;
let lessThan2 = thirty < four; // Although thirty is a string, it is coerced to a number for the comparison, so the result is false because 30 is not less than 4 but I cam getting true because the string "30" is being compared to the string "4"  "3" is less than"4".

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2); */

// 3. Truthy and Falsy Values

/* if (0) {
  console.log("#1: zero is true"); //not logged because  0 is falsy, so this won't work
}

if ("0") {
  console.log("#2: zero string is true"); // logged because it's in a non-empty string so it is truthy
}

if (null) {
  console.log("#3: null is true"); //not logged because null is falsy
}

if (-1) {
  console.log("#4: negative is true"); //  logged because since it's a non-zero number this is truthy
}

if (1) {
  console.log("#5: positive is true"); // logged because this is also a non-zero number so it is truthy
} */

// 4. The Ternary Operator

/* let a = 2,
  b = 3;
//let result = `The sum of ${a} and ${b} is `;

//if (a + b < 10) {
  //result += "less than 10";
//} else {
  //result += "greater than 10";
//}

let result = `The sum of ${a} and ${b} is ${a + b < 10 ? "less than 10" : "greater than 10"}`; */

// 5. Function Syntax

// Original function declaration
/* function getGreeting(name) {
  return `Hello, ${name}!`;
}

// a) Function expression syntax
const getGreetingExpression = function (name) {
return `Hello, ${name}!`;
};  

// b) Arrow function syntax
const getGreetingArrow = (name) => `Hello, ${name}!`;

console.log(getGreeting("Alisa"));
console.log(getGreetingExpression("Alisa"));
console.log(getGreetingArrow("Alisa")); */

// 6. Objects and this

/* const westley = {
  name: "Westley",
  numFingers: 5,
};

const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};

const inigo = {
  firstName: "Inigo",
  lastName: "Montoya", // a) Add a lastName property

  greeting(person) {
    let greeting = `Hello, ${person.name}. My name is ${this.firstName} ${this.lastName}. `;  // b) Update this greeting
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    if (person.numFingers === 6) {// c) Complete this method
    return "You Killed my father. Prepare to die.";
    }
    else {
        return "Nice to meet you.";
    }
  },
};

inigo.greeting(westley);
inigo.greeting(rugen); */

//7. Method Chaining

/* const basketballGame = {
  score: 0,
  fouls: 0, // c) Add a fouls property
  freeThrow() {
    this.score++;
    return this;
  },
  
  basket() {
    this.score += 2;
     return this;
  },

  threePointer() {
    this.score += 3;
     return this;
  },

  halfTime() {
    console.log(`Halftime score is ${this.score}. The amount of fouls is ${this.fouls}.`);
     return this;

  },
  
  // b) Add a fullTime method
  fullTime() {
    console.log(`Fulltime score is ${this.score}. The amount of fouls is ${this.fouls}.`);
     return this;

  }, 
  
   // c) Add a method to increment fouls
  foul() {
    this.fouls++;
     return this;

  },   
};

// Modify the methods to enable chaining like this:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime()
  .basket()
  .foul()
  .threePointer()
  .basket()
  .basket()
  .foul()
  .freeThrow()
    .fullTime(); */

// 8. Iterating Over Objects

/* const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const riodejaneiro = {
  name: "Rio de Janeiro",
  population: 13_860_000,
  state: "RJ",
  founded: "1 March 1565",
  timezone: "America/Rio_de_Janeiro",
};

function printCityInfo(city) {
  for (const property in city) {
    console.log(`${property}: ${city[property]}`);
  } 
}

console.log("Sydney Info:");
printCityInfo(sydney);

console.log("Rio de Janeiro Info:");
printCityInfo(riodejaneiro); */

// 9. Primitives vs. Reference Types

/* let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

let moreSports = teamSports;
moreSports.push = ("Basketball", "Soccer", "Swimming"); 

let dog2 = dog1;
dog2 = "Prince";

let cat2 = cat1;
cat2.name = "Puck";

console.log( "Team Sports:", teamSports);
console.log("Dog 1:", dog1);
console.log("Cat 1:", cat1);

// moreSports is referenced to the same array as teamSports so when it's pushed with the new sports it adds to the array.
//dog 1 doesnt't change because it's a primitive type and when we assign dog2 to dog1, it creates a copy of the value of dog1, so when we change dog2 to "Prince", it doesn't affect dog1.
// cat 1 changes because it is referenced to the same objects as cat1 so the name changes


// using the spread operator so the the original variables remain unchanged

let moreSportsCopy = [...teamSports]; 
console.log(moreSportsCopy);

let cat2Copy = { ...cat1 };
console.log(cat2Copy); */

//10. Constructor Functions vs. Classes

// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}

// Class Syntax
// b) Rewrite the constructor as a class


class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  canDrive() {
    return this.age >= 16;
  }
}


const person1 = new Person("Alisa", 31);
const person2 = new Person("Luiza", 35);
const person3 = new PersonClass("Kam", 10);


Person.prototype.canDrive = function () {
  return this.age >= 16;
};

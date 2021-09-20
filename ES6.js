/* Let and Var differences */
var x = 1; // var allows for variable redeclarations without errors or warnings
var x = 2;
//console.log(x); // and that is no good sometimes, dont overwrite things that dont need to be overwritten

let y = 1; // Use let so that redeclarations of y are blocked 
//let y = 2; // The program throws an error here, saying that y has already been declared 
//console.log(y);
// However you can still change the value of y
y = 2;
//console.log(y);

/* Let in scope */
//Using let inside a block, statement, or expression limits the scope to only that block, statement, or expression
var printNumTwo; // Using var i = 0 determines the variable i as a global variable
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
} // which is bad because it returns the global value of i, and not the local i in the loop block
//console.log(printNumTwo()); // Returns 3
//console.log(i); // Returns 3
let printNumTwoFixed;
for (let j = 0; j < 3; j++) { // using let limits j to only the for loop
  if (j === 2) {
    printNumTwoFixed = function() {
      return j;
    };
  }
}
//console.log(printNumTwoFixed()); // Returns 2
//console.log(j); // Throws error

/* Const */
const CONSTANT = 1; // Const is much like let, but prevents its value from be changed
//CONSTANT = 2; // Attempting to do so will throw an error
//It is common practice to use UPPERCASE for constants/immutables, and camelCase for mutables
//However, objects, arrays, and functions assigned as const can still have its contents changed
const s = [5, 6, 7];
//s = [1, 2, 3]; // Throws an error here because of reassignment to the const variable s
s[2] = 100; // This works though
//console.log(s); // s cannot point to other arrays because of const, but we can still change its contents
let obj = { "red": false, "blue": true };
Object.freeze(obj); // Use this command to make objects immutable
obj.orange = true; //Throws error
obj.purple = false; //Throws error
//console.log(obj); 

/* Arrow functions and function perks */
const fun1 = function() { // This function is fine if we want to name and use the function in 
    const PI = 3.14;      // different parts of the code
    return PI;
}
const fun2 = () => { // Use this arrow notation when we only need this function inline and not
    const PI = 3.14; // anywhere else
    return PI;
}
const fun3 = () => 3.14; // Use this if the function only has a return value and no body
const incrementer = (num) => num + 1; // Can use arguments in arrow functions, same as other functions
// If there is only one argument, then you can remove the () and get
//const incrementer = num => num + 1;
const subtractor = (subtractee, subtractor) => subtractee - subtractor; // Can have multiple arguments
const sayHello = (name = "Default Andy") => "Hello " + name; // Arguments can have default states, if not given one
//console.log(sayHello());
//console.log(sayHello("Tim Spirits"));
const summer = (...args) => { // We can use the rest operator ... to have a varying number of inputs
    let sum = 0;
    for (let i of args) sum += i;
    return sum;
}
//console.log(summer(1,2,3,4,5,6,7,8,9,10));
const arr1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
let arr2;
arr2 =  [...arr1]; // The ... operator is also called a spread operator, because it spreads an array
//console.log(arr2); // Used in place, like in an argument or array literal, not standalone
// arr2 = ...arr1 does not work

/* Destructuring assignment */
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES; // We can use destructuring assignment to extract values from objects
//const today = HIGH_TEMPERATURES.today; // This is the equivalent ES5 code 
//const tomorrow = HIGH_TEMPERATURES.tomorrow;
//console.log(today);
//console.log(tomorrow);

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES; // Use destructuring assignment to assign variables
//const highToday = HIGH_TEMPERATURES.today; //  This is equivalent ES5 code
//const highTomorrow = HIGH_TEMPERATURES.tomorrow
//console.log(highToday);
//console.log(highTomorrow);

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
const {today: {low: lowToday, high: highToday2}} = LOCAL_FORECAST; // Use destructuring assignment for nested objects
//const lowToday = LOCAL_FORECAST.today.low; // This is equivalent ES5 code
//const highToday2 = LOCAL_FORECAST.today.high;
//console.log(lowToday);
//console.log(highToday2);

let a = 8, b = 6; // Can use destructuring assignment on arrays
[a, b] = [b, a];
//console.log(a, b); // now a = 6, b = 8

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) { // Can use destructuring assignment and rest assignment to reassign array elements
    const [a, b, ...arr] = list; 
    return arr;
}
const arr = removeFirstTwo(source);
//console.log(arr);

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = ({max, min}) => (stats.max + stats.min) / 2.0; // Can use destructuring assignment to pass arguments to functions
//console.log(half(stats));
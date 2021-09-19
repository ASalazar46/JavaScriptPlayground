// This is a single line comment
/* This is a multi line 
    comment */

var variable; // This is a variable, declare it with var and give its name
variable = 5; // "=" is the assignment operator, set variable to 5
var elbairav;
elbairav = variable; // I can assign variables to other variables
var asdf = 0; //I can initialize variables with a value in a single line
// A reminder that uninitialized variables have value "undefined"
var ASDF = 1; // Note that variables are CASE SENSITIVE, so asdf != ASDF
var camelCase; // Best practice for variable naming is camel case

/* Doing math operations in JavaScript*/
var x = 1 + 1; // Addition
x = 2 - 1; // Subtraction
x = 2 * 2; // Multiplication
x = 2 / 1; // Division
x++; // Increment, same as x = x + 1;
x--; // Decrement, same as x = x - 1;
x = 6.9; // A float, or decimal number
x = 3 % 2; // Remainder operator, NOT modulus, finds remainders
x += 5; // Augmented addition, math and assignment in a single line
x -= 5; // Augmented subtraction
x *= 5; // Augmented multiplication
x /= 5; // Augmented division

/* Strings */
var myName = "Andrew Salazar"; // This is a string literal
var escapeLiteral = "And he said, \"BIIIIIIIIII-\"."; // Use \" operators to use double quotes in a literal
var singleQuoteLiteral = 'That is Jim\'s hackey sack. "F*ck you," Tim said.'; // Use \' operators to use single quotes in a literal
/* Some common escape operators are 
\' single quote
\" double quote
\\ backslash
\n new line
\t tab */
var lit = "What " + "the " + "f*ck?!"; // Concatenation of string literals using a + operator
var litty = "W"; // Concatenate string literals with a += operator
litty += "T";
litty += "F?!";
var word1 = "What "; // Concatenate string literals with variables
var word2 = "the ";
var word3 = "f*ck?!";
var word = word1 + word2 + word3;
word1 += word2; // Append string literal variables with a += operator
word1 += word3;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var abLength = alphabet.length; // Acquire length of the string literal
var firstLetter = alphabet[0]; // Indexing starts at 0, not 1
var lastLetter = alphabet[alphabet.length - 1]; // is the same as lastLetter = alphabet[25]
/* NOTE: String literals are immutable, meaning unchangeable once created  */

/* Arrays */
var breakfast = ["coffee", 1, "bacon", 3, "toast", 2, "eggs", 2]; // An array of multiple value types
var breakfast = [["coffee", 1], ["bacon", 3], ["toast", 2], ["eggs", 2]]; // A multi dimensional array of multiple value types
var numArr = [1, 2, 3]; // Access and modify array values with bracket notation
// Notice that string literals are read-only arrays of character values
numArr[0] = 999;
var item1 = breakfast[0][0]; // Access values in multi-dimensional arrays with this notation
var value1 = breakfast[0][1];
var opArr = [1, 2, 3];
opArr.push(4); // Push appends the value passed to the end of the array
var caughtPops = opArr.pop(); // Pop removes the last value of the array and returns it
var caughtShift = opArr.shift(); // Shift removes the first value of the array and returns it
opArr.unshift(999); // Unshift adds a passed value to the front of the array

/* Functions */
function HelloWorld() { // Create functions using this format
    console.log("Hello World!");
}
//HelloWorld(); // Invoke functions using the name of it
function RectanglePerimeter(x, y) { // Functions can retrieve arguments via parameters
    console.log((2*x) + (2*y));
}
//RectanglePerimeter(10, 20);
function twoTimes(num) { // Result of a function can be returned using 'return'
    return num * 2;      // Not using 'return' will result in a returned value of 'undefined'
}
var ans = twoTimes(5);

/* Booleans and Conditionals */
// Booleans are "true" or "false"

// if statements execute code blocks depending on the condition given
/* 
if (condition is true) {
      // execute some code here
}
// more code here
...
*/

// else statements are executed if an attached if statement fails
/*
if (condition is false) {
    //execute not this code
}
else {
    //execute this code instead
}
*/

// Use else if statements if you have more than one condition to check for
/* 
if (condition1) {
    //code
}
else if (condition2) {
    //code2
}
else if (condition3) {
    //code3
}
else {
    //code else
}
*/
// Order of the if statements matters, so be careful when writing conditions in these statements
// You dont want code that can never be reached because one condition is aiways true (and thus executes all the time)
// Dont have unreachable code

function equalsTen(num) {
    if (num == 10) return true; // Use equality operator == to check for equality between two values
    return false;
}
function equalsTenStrict(num) {
    if (num === 10) return true; // Use strict equality opeator === to check for strict equality between values
    return false;
}
function notEqualsTen(num) { // Use inquality operator != to check for inequality
    if (num != 10) return true;
    return false;
}
function notEqualsTenStrict(num) { // Use strict inquality operator !== to check for inequality
    if (num !== 10) return true;
    return false;
}
/* Other conditionals are
- greater than (val1 > val2)
- greater than or equal to (val1 >= val2)
- less than (val1 < val2)
- less than or equal to (val1 <= val2)
- logical AND (cond1 && cond2) 
- logical OR (cond1 || cond2) */

// Switch statements can be used to execute code blocks based on values other than booleans
// Cases are strict values, so the block will only execute if the given value strictly matches a case
// Use breaks to stop executing that block of code. Not doing so causes the next-in-order case's code to execute.
    // Avoid breaks if you want multiple cases to have the same functionality/code.
// Default is a case where the given value matches none of the previous cases
/*
switch (some value) {
    case value1:
        //code1
        break;
    case value2:
        //code2
        break;
    case value3:
    case value4:
        //code3 + code4 are the same
        break;
    default:
        //code default
        break;
}
*/
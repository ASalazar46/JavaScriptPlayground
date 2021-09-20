/* Objects */
var cat = { // This is an object. Think of it like an array
    "name": "milkshakes", // but with properties instead of indices
    "legs": 4,            // Different properties of differnt types can be stored
    "furColor": "black",  // Single worded strings can be properties, casted as strings
    1: "one",
    species: "uh-oh"
}
var prop1Val = cat.name; // Access property values with dot notation
var prop2Val = cat["species"]; // Access property values with bracket notation
var sgel = "legs"; // Can use variables for property value access, so long as the variable matches a property in the object
var legCount = cat[sgel];
// Object properties are mutable, so change them as you like
cat.name = "Jad";
cat["legs"] = 6;
cat.furColor = "Red";
cat[1] = 999;
cat.species = "Tz-Haar";
cat.combatLevel = 728; // Add a new property with dot notation
cat["Reward"] = "Fire cape"; // Add a new property with bracket notation
delete cat[1]; // Delete a property using the delete keyword and bracket notation
cat.asdf = "asdf";
delete cat.asdf; // Delete a property using delete and dot notation
/* Think of object properties as key/value pairs. If you know input data is limited to a range, 
maybe use an object instead of if-else statements or a switch */
if (cat.hasOwnProperty("name")) { // Use the object.hasOwnProperty function to check if an object has a property given by the argument
    //console.log("Cat has a property called \"name\".");
}
if (!cat.hasOwnProperty("killCount")) {
    //console.log("Cat does not have a property called \"killCount\".");
}
var myMusic = [ // This is an array containing objects, which contain meta data of music
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
          "CD",
          "8T",
          "LP"
        ],
        "gold": true
      }
]
// I now attempt to add in one more object
var newSong = {
    "artist": "Michael Wyckoff",
    "title": "Analog Sunrise",
    "release_year": 2019,
    "formats": [
        "digital",
        "vinyl"
    ],
    "gold": true
};
myMusic.push(newSong);
var song2Release = myMusic[1].release_year; // Access nested contents with dot and bracket notation
var song1Format2 = myMusic[0]["formats"][1];

/* Loops and Recursion */
var i = 0;
while (i < 10) { // A while loop will keep executing its code block until the condition becomes false
    //console.log(i);
    i++;
}
// Make sure the condition is capable of becoming false, otherwise you get an infinite loop
var i = 0; // A for loop is a different way to iterate; the final expression is the same line as the condition
for (i; i < 10; i++) {
    //console.log(i);
}
// Loops can have loops nested inside
var i = 1; // Counts to 100 
var sum = 0;
while (i <= 10) {
    var j = 1;
    for (j; j <= 10; j++) {
        sum++;
        //console.log(sum);
    }
    i++;
}
var i = 1; // Do while loops always guarantees one loop, then keeps going until condition is false
do {
    //console.log(i);
    i++;
} while(i <= 10);
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // Sum should be 55
function adder (arr, n) { // This is a function that does recursion to sum an array's values together
    if (n <= 0) return 0;
    else return adder(arr, n - 1) + arr[n - 1];
}
var sum = adder(numArr, numArr.length);
//console.log(sum);
// A reminder that there should be a base case to break recursion and return an answer

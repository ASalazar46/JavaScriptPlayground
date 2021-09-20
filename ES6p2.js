const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) { // We can use template literals to make a literal with variables inside
    const failureItems = [];
    for (let i = 0; i < 3; i++) {
        failureItems.push(`<li class=\"text-warning\">${arr[i]}</li>`);
    }
    return failureItems;
}
const failuresList = makeList(result.failure);
//console.log(failuresList);

// We can use write more concise object literal declarations 
// using object property shorthand
//equivalent ES5 code
/*
const createPerson = (name, age, gender) => {
    return {
      name: name,
      age: age,
      gender: gender
    };
};
*/
const createPerson = (name, age, gender) => ({name, age, gender});
//console.log(createPerson("Zodiac Hasbro", 56, "male"));

// We can write concise declarative functions within objects
// Remove the colon, :, and function keyword
/* 
//equivalent ES5 Code
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
      this.gear = newGear;
    }
};
*/
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
bicycle.setGear(3);
//console.log(bicycle.gear);

// We can create objects with the class syntax, giving it a constructor
// Not a full-fledged class system like other languages, just syntax
//equivalent ES5 Code
/*
var Vegetable = function(targetName) {
    this.name = targetName;
}
*/
class Vegetable {
    constructor(targetName) {
        this.name = targetName; 
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);

// We can use getters and setters to obtain and set values of an object
class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

// Export code using the export keyword
export const uppercaseString = (string) => {
    return string.toUpperCase();
}
export const lowercaseString = (string) => {
    return string.toLowerCase();
}
// or like this
/* 
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export { uppercaseString, lowercaseString };
*/

// Import code using the import keyboard
//import { uppercaseString, lowercaseString } from 'FILE LOCATION';
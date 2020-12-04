/* Excercise 1. Need to change the order of result variable "cat" and "dog" using only one additional variable
let cat = 'cat';
let dog = 'dog';
Result:
console.log(cat); // Should equal 'dog'
console.log(dog); // Should equal 'cat' */




let cat = 'cat';
let dog = 'dog';

let temp = cat;
cat = dog;
dog = temp;

console.log(dog); // cat
console.log(cat); // dog
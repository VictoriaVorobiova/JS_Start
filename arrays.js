// create array which contain array of object, function with some console.log, boolean, string, and undefined 
// and try to get value of function by index

let arr = [{name: "Max", age: 11}, function sayHello(){let message = "Hello"; console.log(message);}, true, "string", undefined]; 
console.log(arr[1]);

// Exercise 1
//Write a function which should return sum of all numbers inside array

const numbers = [1, -1, 2, 3];

function calcSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;

}
console.log(calcSum(numbers));

// Exercise 2
// When you run arrayFromRange function should dispayd numbers from min to max 
// Also this function should accept negative numbers

const num = [15, 2, -25, -10, 78];

console.log(num.sort((a, b) => a - b));

function FromRange(a, b){
    for(let i = 0; i = num.length; i++){
    if(a<b) return 1;
    if(a=b) return 0;
    if(a>b) return -1;
    }
    return
}
console.log(num.sort(FromRange));

// Exercise 3
// Need to create function which display the max number from the array

const number = [-15, -2, -25, 10, -78];

function getMax(number){
let max = number[0];
for(let i = 1; i < number.length; i++){
if(max < number[i]){
    max = number[i];
    } 
}
return max
}
console.log(getMax(number));

// Exercise 4
// Ruturn all movies in 2019 with rating > 4
// Sort them by their rating in descending order
// Pick their title 'a', 'b' ...
// So, the result should be ["a", "c"] 

let movies = [
    {title: 'a', year: 2019, rating: 4.7},
    {title: 'b', year: 2018, rating: 4.4},
    {title: 'c', year: 2019, rating: 4.3},
    {title: 'd', year: 2019, rating: 3.9},
]

function returnMuvies(movies){
    if(movies.length){
        return movies.filter(item => item.year == 2019 && item.rating > 4)
        .sort((a, b) => b - a )
        .map(item => item.title)
    }
    return "inval";
}
console.log(returnMuvies(movies));

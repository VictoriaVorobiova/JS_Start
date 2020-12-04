// Excercise 1. Rewrite if with ?
//let result; if (a + b < 10) { result = 'Few'; } else { result = 'Many'; }


let a = 5;
let b = 2;
let finalResult = a + b < 10 ? "Few": "Many";
console.log(finalResult);


/* Excercise 2. Write an if condition to verify that the age variable is between 18 and 90 inclusive. 
Inclusive means that the value of age can be either 18 or 90.*/


//example 1:

let age = 14;

if (age >= 18 && age <= 90){
    console.log("Age is valid");
}else {
    console.log("Age is not valid");
}


//example 2:

let isAgeAcceptable = (age >= 18 && age <= 90) ? "Age is valid" : "Age is not valid";
console.log(isAgeAcceptable);


/* Excercise 3. Write a script which will convert number into corresponding letter, and print(or alert) result:
The grades should be computed as follows : Range Grade <60 F <70 D <80 C <90 B <100 A */


let input = prompt ("Enter the number");
if(input < 60){
    alert("F");
}else if(input < 70){
    alert("D");
}else if(input < 80){
    alert("C");
}else if(input < 90){
    alert("B");
}else if (input < 100){
    alert("A");
}else{
    alert("Your number can not converted into any letter");
}
   






/* Excercise 2. Write an if condition to verify that the age variable is between 18 and 90 inclusive. 
Inclusive means that the value of age can be either 18 or 90.*/

let age = 25;
if(age >= 18 && age <= 90){
    console.log("true");
}else{
   console.log("false"); 
}

/* Excercise 3. Write script that will:
accept user name
welcome user with his username
ask his birthday year
calculate how old is user, and print (or alert) his calculated age*/

/*
let name = prompt("Please, enter your first name"); 
let age = prompt("Hello, " + name + "! Nice to meet you! Please, enter your birthday year");
alert(2020 - age);
*/

// Excercise 4. Write a script which will convert number into corresponding letter, and print(or alert) result:
//The grades should be computed as follows : Range Grade <60 F <70 D <80 C <90 B <100 A

let x = 90;
if(x < 60){
    console.log ("F");
}else if(x < 70){
    console.log("D");
}else if(x < 80){
     console.log("C");
}else if(x < 90){
    console.log("B");
}else {
    console.log("A");
}
   

// Excercise 1. Rewrite if with ?
//let result; if (a + b < 10) { result = 'Few'; } else { result = 'Many'; }

let result = 5 + 2;
if(result < 10){
    console.log("Few");
} else {
    console.log("Many");
}

let a = 5;
let b = 2;
let finalResult = a + b < 10 ? "Few": "Many";
console.log(finalResult);
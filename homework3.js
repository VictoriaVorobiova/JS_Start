/* Excercise 1. Create object "post" which should contain title body author views comment 
which contain information about the authot first and last name and 
comment body isLive someFunction: result of calling console.log()
const post = { }
then get comment body and someFunction values using dots and bracket notation*/


const Post = {
    title: "Crossroad",
    body: "Some body",
    author: "Eva Green",
    views: 2,
    comment: {
        ferstName: "Eva",
        lastName: "Green",
    },
    isLive: true,
    someFunction: function (){
        console.log("Helo");
    }
    
}

console.log(Post.comment);
console.log(Post["comment"]);
Post.someFunction();


/* Excercise 1.1 get the length of post object and write the script 
which should return the list the properties values of a Post object*/


console.log(Object.keys(Post).length);
console.log(Object.values(Post).length)

for(let key in Post){
console.log(Post[key]);
}

/* Excercise 2. Write the function called "helloColleagues" which should accept two parameter "company" and "team" and shoud return 
the string with 'I am working in "company" in amazing "team"' */
function helloColleagues(campany = "teeko", team = "team"){
    let message = `I am working in   ${campany}  in amazing   ${team}`;
    console.log(message);
    }
    helloColleagues();


/* Excercise 2.1. Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.  */

function isEmpty(a = "Hello!", b = "Goodbye" ){
    if (a) {
        return "true";
    }else {
        return "false"
    }
}
let c = isEmpty();
console.log(c);

/* Excercise 2.2. Write the function that takes two numbers and returns the maximum of two  */

function maxNumber(a = 5, b = 10) {
    if(a > b){
        return a ;
    }else {
        return b
    }
}
let max = maxNumber();
console.log(max)

/* Excercise 3. We have an object storing salaries of our team: 
let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 } 
Write the function to sum all salaries and return it. Should be 1000 in the example above.
If salaries is empty, then the result must be 0.  */

let salaries = { 
    Mykola: 250, 
    Pavlo: 250, 
    Petro: 500,
   
}
function sumSalaries(sum = 0){
for(let key in salaries){
    sum += salaries[key];
};
return sum;
} 
let result = sumSalaries();
console.log(result);

/* Excercise 3.1. We have an object storing salaries of our team:
let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 } 
Write the function that returns name and value of employer that gets biggest salary*/
let salaries = { 
    Mykola: 250, 
    Pavlo: 250, 
    Petro: 500 
}

    let name = "";
        function maxSalaries(max = 0){
        for(let key in salaries){
            if(max < salaries[key]){
               max = salaries[key]; 
               name = key;
            };
            };
        return `${name}:   ${max}`;
              
        } 
        let result = maxSalaries();
        console.log(result);

/* Excercise 4. Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
*/
let menu = { 
    width: 200, 
    height: 300, 
    title: "My menu" 
};


function multiplyNumeric(obj = 2){
    for(let key in menu){
            if(typeof menu[key] == "number"){
            menu[key] *= obj;
           }
        console.log(`${key}: ${menu[key]}`)
    }
}
multiplyNumeric();


/* Excercise 5. Show stars function showStars(rows) { for (let row = 1; row < rows; rows++ ){ let star = *; for() } }
showStars(4) // * ** *** ****
*/

let star = "";
function showStars(rows){
    for (let row = 0; row < rows; row ++) {
        star += "*"; 
        console.log(star);
      
        }
    }
    
    showStars (4); 










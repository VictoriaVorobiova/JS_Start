/* Excercise 1. Create object "post" which should contain title body author views comment 
which contain information about the authot first and last name and 
comment body isLive someFunction: result of calling console.log()
const post = { }
then get comment body and someFunction values using dots and bracket notation*/


const post = {
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
console.log(post.comment);
console.log(post["comment"]);
post.someFunction();


/* Excercise 2. Get the length of post object and write the script 
which should return the list the properties values of a Post object*/

console.log(Object.keys(post).length);


for (let key in post){
    console.log(post[key])
}


/* Excercise 3. Write the function called "helloColleagues" which should accept two parameter "company" and "role" and shoud return 
the string with 'I am working in "company" in role "role" */

function helloColleagues(company, role){
    if (company && role){
    let string = `I am working in ${company} in role ${role}`;
    return string;
    } else {
    return `Please enter company or role parameter`
    }
    }
    console.log(helloColleagues("BBC", "CEO")); // I am working in BBC in role CEO


/* Excercise 4. Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise. */

let isEmpty = (emptyObj) => Object.keys(emptyObj).length === 0;

console.log(isEmpty({key: "key"}));


/* Excercise 5. Write the function that takes two numbers and returns the maximum of two  */

function maxNumber(a, b) {
    if (typeof(a, b) === "number"){
        if(a > b){
            return a;
        }else if (a === b){
            return "They are equal";
        }else {
            return b;
        }
    }else {
        return "Not a number"
    }
}
console.log(maxNumber(5, 10));


/* Excercise 6. We have an object storing salaries of our team: 
let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 } 
Write the function to sum all salaries and return it. Should be 1000 in the example above.
If salaries is empty, then the result must be 0.  */

let salaries = { 
    Mykola: 250, 
    Pavlo: 250, 
    Petro: 500,
}

function sumAllSalaries(SalaryObject){
    let sum = 0;
    for(let key in SalaryObject){
       sum += SalaryObject[key];
      }
    return sum;
}
console.log(sumAllSalaries(salaries));


/* Excercise 7. We have an object storing salaries of our team:
let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 } 
Write the function that returns name and value of employer that gets biggest salary*/


let salaries = { 
    Mykola: 250, 
    Pavlo: 250, 
    Petro: 500 
}

function biggestSalary(salaiesObj){
    let biggest = 0;
    let name;
    for(let key in salaiesObj){
        if(biggest < salaiesObj[key]){
            biggest = salaiesObj[key];
            console.log(biggest);
            name = key;
        }
       
    }
    return `${name}: ${biggest}`;
}
console.log(biggestSalary(salaries));   // Petro: 500


/* Excercise 8. Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
*/

let menu = { 
    width: 200, 
    height: 300,
    title: "My menu"
};

function NewMenu(menuObj){
    for(let key in menuObj){
        if(typeof menuObj[key] === "number"){
        menuObj[key] *= 2;
        }
    }
    return menuObj;

}
console.log(NewMenu(menu));


/* Excercise 9. Show stars function showStars(rows) { for (let row = 1; row < rows; rows++ ){ let star = *; for() } }
showStars(4) // * ** *** ****
*/

function showStars(rows) {
    let star = "";  
   for(let i = 0; i < rows; i++){
       star += "*";
       console.log(star);
   }
}
showStars(4);










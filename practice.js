function hello(){
    console.log("hello");
}

setTimeout(hello, 4000); //after 4000ms hello will print 


let a = 1; //number
let b = 5; //numbeer
let c = "5"; //string

console.log("a = ", a);
console.log("b = " , b);
console.log("c = ", c);

console.log("a = b" , a == b); //false
console.log("a != b" , a != b); //true

console.log("b = c" , b == c); //true
console.log("b != c" , b != c); //false
console.log("b !== c" , b !==  c); //true ,  strictly focus on datatype also



let x = null;
let y = BigInt("123");
let z = Symbol("Hello!");

const student = {
    fullName : "Sonakshi",
    age : 20,
    cgpa : 8.5,
    isPass : true
};

console.log(student.age);


const profile = {
    fullName : "Sonakshi Badgurjar",
    followers : 260,
    posts : 10,
    following : 211,
    occupation : "student",
    isFollow : false
};

console.log(profile.fullName);


// conditional statements

let age = 16;

if(age>=18){
    console.log("You can Vote");
}
if(age<18){
    console.log("You canNOT Vote");
}


let mode = "light";
let color;
if(mode === "dark-mode"){
    color="black";
} else{
    color="white";
}
console.log(color);


//ternary operator 
// syntax: condition?true output:false output

console.log(age >= 18? "adult" : "not adult")


//switch

const expr = "papayas";
switch (expr) {
    case "oranges":
        console.log("oranges are $0.59 a pound.");
        break;
    case "mangoes" :
    case "papayas" :
        console.log("mangoes and papayas are $2.79 a pound.");
        break;
    default :
        console.log("sorry, we are out of ${expr}");
}



// let name = prompt("hello!"); //takes input 
// console.log(name);


// let num = prompt("enter a number ");
// if(num%5 === 0){
//     console.log(num , " is multiple of 5 ");
// } else {
//     console.log(num, "is not a multiple of 5 ");
// }


// loops 
for(let i=1; i<=5; i++){
    console.log("happy");
}


for(var j=1; j<=5; j++){
    console.log(j,"kaju");
}

console.log(j); // no error
// console.log(i); //error

// while(condition){
//     Work;
// }

// do{
//     work;
// }while(condition)


//for-of loop(for strings)
let str = " Sonakshi";

for(let i of str){
    console.log("i = " , i);
}

//for-in loop(for objects)
let studentss = {
    name : "rahul",
    age : 20,
    cgpa : 7.5,
    isPass : true
};

for(let i in studentss){
    console.log("key = ", i,"     ", "value = ", studentss[i]);         //will return keys of object studentss
}

let Name = `name of student is ${studentss.name}`; //string interpolation : to create strings by doing substitution of placeholders
console.log(Name); 

console.log("the name of student is ", studentss.name);

let specialString = `this is a template literal`;
console.log(typeof specialString);

let speString = `this is a template literal ${1+2+3}`;
console.log(speString);
console.log(typeof speString);


console.log(" Sumer\nSingh"); //enter
console.log(" Sumer\tSingh"); //tab

let kaju = " Sumer\tSingh";
console.log(kaju.length);

let h = "hellolololo";


console.log(kaju.toUpperCase());
console.log(kaju.toLowerCase());
console.log(kaju.trim()); //removes whitespaces
console.log(kaju);


console.log(str.slice(0,5));//return part of string
console.log(str.slice(0));
console.log(str.concat(kaju));//merge
console.log(str + kaju);
console.log(kaju.replace("Singh" , "Sonakshi")); //search and replace
console.log(h.replace("lo" , "p")); //replace the 1st appearance of lo only
console.log(h.replaceAll("lo" , "p"));//replace all appearance
console.log(kaju.charAt(1));



let arr = [" Sumer" , " Billi" , " kaju" , " Baby Chick" , " Monkey"];
console.log(arr.toString()); //convert arr to string

let marvelHeroes = [" thor", " spiderman", " ironman"];
let dcHeroes = [ " superman", " batman" ];
let indianHeroes = [" shaktiman", " krish"];
console.log(marvelHeroes.concat(dcHeroes , indianHeroes));

marvelHeroes.unshift("antman"); //will add antman in the start of marvelHeroes
console.log(marvelHeroes);
marvelHeroes.shift(" antman"); //will delete antman from  the marvelHeroes
console.log(marvelHeroes);


// splice(startIdx , delCount, newEl1, newEl2,...) : add the new elements at the same from where the old element is deleted
console.log(arr.splice(4 , 1 , " Shaitan"));
console.log(arr);
// arr.splice(4): in such type of cases it will act as slice and delete all el from idx 4


function myfunction(){
    console.log("missing you my Billi :( ");
    console.log("come back to me ");
}
myfunction();

function mymine(msg){
    console.log(msg);
}
mymine("Chhumel");

//Arrow function - modern js
const arrowSum = (a,b) => {     // arrowSum will return its defination 
    console.log(a+b);           // arrowSum(3,4) will return 7
}

const printHello = () => { console.log("hello :) "); }



// forEach loop in arrays - {higher order function/ method }
// arr.forEach(callbackfunction) :to execute for each element in the array 
// a callback is a function passed an argument to another function

let ar = [1 , 2, 3 , 4 , 5];

ar.forEach(function printVal(val){
    console.log(val);
});

arr.forEach((val) => {       //generally we use arrow function in this 
    console.log(val.toUpperCase());
});


// Map : creates a new array with the result of some operation .  the value check its callback returns are used to form new array 
let num = [67, 52, 39];
let newArr = num.map((val) => {
    return val*val;
});
console.log(newArr);

//Filter : create a new array of elements that gives true for condition / filter.
let Arr = num.filter( (val) => {
    return val%2 == 0;
})
console.log(Arr);

// Reduce : performs some operations & reduce the array to a single value . it returns that single value .
const arr1 = [5, 1, 7, 2, 3, 4];

const SUM = arr1.reduce((res , curr) => {
    return res + curr;
});
console.log(SUM);

const max = arr1.reduce((prev , curr) => {
    return prev>curr? prev : curr;
});
console.log(max);

const min = arr1.reduce((prev , curr) => {
    return prev<curr? prev : curr;
});
console.log(min);




//QUESTION
let n = prompt("Enter a number :")

let nums = [];

for(let i=1; i<=n; i++){
    nums[i-1]=i;
} 
console.log("nums = ", nums);

let sum = nums.reduce((res, curr) => {
    return res+curr;
});
console.log("sum = ", sum);

let factorial = nums.reduce((res, curr) => {
    return res*curr;
});
console.log("factorial = ", factorial);




/** 
Window object : the window object represents an open window in a browser. it is browser's object (not javascript)
& is automatically created by browser
it is a global object with lots of properties & methods 
*/
console.log(window);




/** 
WHAT IS DOM ?
When a web page is loaded , the browser creates a document object model (DOM) of the page 
                                        window
                                           |
                                       document
                                           |
                                          html
                                         /     \
                                        /       \
                                       /         \
                                      /           \
                                     /             \
                                   head            body
                                / /  |  \          /   \
                             /  /    |   \        /     \
                        meta meta tittle link    div   script
 div have 4 parts img, h1, p, div
*/
console.log(document.body.childNodes[1]);


// DOM - querry selecter
let firstEl = document.querySelector("p"); //which starts with p , like <p><p/> n all , only one 
console.dir(firstEl); // to store this 
console.log(firstEl); // to print 

let allEl = document.querySelectorAll("p"); // extract all
console.dir(allEl);
console.log(allEl);

let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currMode);
})






const { Console } = require("console");

//1.max-min
let a =  Math.floor(Math.random()*10)%3;
let b =  Math.floor(Math.random()*10)%3;
let c =  Math.floor(Math.random()*10)%3;
let d =  Math.floor(Math.random()*10)%3;
let e =  Math.floor(Math.random()*10)%3;

let max = 0;
let min = 3;
if(a>max){max = a;}
if (b>max){max = b;}
if (c>max){max = c;}
if (d>max){max = d;}
if (e>max){max = e;}
console.log(a+" "+b+" "+c+" "+d+" "+e+" max = "+max)
if(a<min){min = a;}
if (b<min){min = b;}
if (c<min){min = c;}
if (d<min){min = d;}
if (e<min){min = e;}
console.log(a+" "+b+" "+c+" "+d+" "+e+" min = "+min);

//2. Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise
let day = process.argv[3];
let month = process.argv[2];
let year = "2020";
let date = new Date(parseInt(year),parseInt(month)-1,parseInt(day));
let startDate = new Date(2020,2,20);
let endDate = new Date(2020,6,20);

if(date>=startDate && date<= endDate){
    console.log(true);
}
else{
    console.log(false);
}

//3. Write a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
year = process.argv[4];

if(year.length==4){
    console.log((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0));
}
else{
    console.log(false);
}
//4. Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

const HEADS = 0;
const TAILS = 1;

let tossResult = Math.floor(Math.random()*10)%2;

if(tossResult==HEADS){
    console.log("Heads");
}
else{
    console.log("Tails");
}
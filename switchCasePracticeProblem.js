//1. Read a single digit number and write the number in word
let number = parseInt(process.argv[2]);

switch(number){
    case 0:
        console.log("zero");
        break;
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    case 5:
        console.log("five");
        break;
    case 6:
        console.log("six");
        break;
    case 7:
        console.log("seven");
        break;
    case 8:
        console.log("eight");
        break;
    case 9:
        console.log("nine");
        break;
}

//2. Read a Number and Display the week day (Sunday, Monday,...)
let day = parseInt(process.argv[3]);

switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
}
//3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
let num = process.argv[4];
switch(num.length){
    case 1:
        console.log("Unit");
        break;
    case 2:
        console.log("Ten");
        break;
    case 3:
        console.log("Hundred");
        break;
    case 4:
        console.log("Thousand");
        break;
}

//4. Write a program that takes User Inputs and does Unit Conversion of different Length units 1. Feet to Inch 3. Inch to Feet 2. Feet to Meter 4. Meter to Feet
let option = parseInt(process.argv[5]);
let length = 10;

let factorFeetToInch = 12;
let factorInchToFeet = 1/12;
let factorFeetToMetre = 0.305;
let factorMetreToFeet = 1/0.305;

switch(option){
    case 1:
        console.log(length*factorFeetToInch);
        break;
    case 2:
        console.log(length*factorFeetToMetre);
        break;
    case 3:
        console.log(length*factorInchToFeet);
        break;
    case 4:
        console.log(length*factorMetreToFeet);
        break;
}



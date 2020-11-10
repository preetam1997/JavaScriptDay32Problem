//1. Read a single digit number and write the number in word
let number = parseInt(process.argv[2]);

if(number == 0){console.log("zero");}
else if(number == 1){console.log("one");}
else if(number == 2){console.log("two");}
else if(number == 3){console.log("three");}
else if(number == 4){console.log("four");}
else if(number == 5){console.log("five");}
else if(number == 6){console.log("six");}
else if(number == 7){console.log("seven");}
else if(number == 8){console.log("eight");}
else if(number == 9){console.log("nine");}

//2. Read a Number and Display the week day (Sunday, Monday,...)
let day = parseInt(process.argv[3]);

if(day == 0){console.log("Sunday");}
else if(day == 1){console.log("Monday");}
else if(day == 2){console.log("Tuesday");}
else if(day == 3){console.log("Wednesday");}
else if(day == 4){console.log("Thursday");}
else if(day == 5){console.log("Friday");}
else if(day == 6){console.log("Saturday");}

//3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
let num = process.argv[4];

if(num.length == 1){console.log("Unit");}
else if(num.length == 2){console.log("Ten");}
else if(num.length == 3){console.log("Hundred");}
else if(num.length == 4){console.log("Thousand");}

//4. Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum 1. a + b * c 3. c + a / b 2. a % b + c 4. a * b + c
let a = parseInt(process.argv[5]);
let b = parseInt(process.argv[6]);
let c = parseInt(process.argv[7]);

let op1 = a+b*c;
let op2 = c+a/b;
let op3 = a%b+c;

let max = op1;
let min = op1;

if(max<op2){max = op2;}
else if(max<op3){max = op3;}

if(min>op2){min=op2;}
else if(min>op3){min = op3;}

console.log(a+" "+b+" "+c+" "+"op1 "+op1+" op2 "+op2+" op3 "+op3+" max operation value = " + max +" min operation value = "+ min);

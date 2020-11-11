//1. Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n till 256 is reached..

let n = parseInt(process.argv[2]);
let power = 1;
while(power<=Math.pow(2,n) && power<256){
    power = power*2;
}
console.log(power);

//3. Extend the Flip Coin problem till either Heads or Tails wins 11 times.
const HEADS = 0;
const TAILS = 1;

let countHead = 0;
let countTail = 0;
while(countHead!=11 && countTail!=11){
    let tossResult =  Math.floor(Math.random()*10)%2;
    if(tossResult==HEADS){
        countHead++;
    }
    else{
        countTail++; 
    }
}
if(countHead==11){
    console.log("got heads 11 times");
}
else{
    console.log("got tails 11 times");
}

//4. Write a Program where a gambler starts with Rs 100 and places Re 1 bet until he/she goes broke i.e. no more money to gamble or reaches the goal of Rs 200. Keeps track of number of times won and number of bets made.
const dec = 0;
const inr = 1;

let totalMoney = 100;

while(totalMoney!=0 && totalMoney!=200){
    tossResult =  Math.floor(Math.random()*10)%2;
    if(tossResult == dec){
        totalMoney--;
    }
    else{
        totalMoney++;
    }
}

console.log(totalMoney);
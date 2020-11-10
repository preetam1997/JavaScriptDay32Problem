// sum and avg 
let a =  Math.floor(Math.random()*10)%2;
let b =  Math.floor(Math.random()*10)%2;
let c =  Math.floor(Math.random()*10)%2;
let d =  Math.floor(Math.random()*10)%2;
let e =  Math.floor(Math.random()*10)%2;

let sum = a+b+c+d+e;
let avg = sum/5;
console.log(sum+","+avg);

// unit conversion
//a: 1ft = 12 in
let factor = 1/12;
let ans = 42*factor;
console.log("42in = "+(42*factor)+"ft");
//b: 1foot = 0.305 metre
factor = 0.305;
let area = 60*factor*40*factor;
console.log("60 feet x 40 feet = "+60*factor+" metre x "+40*factor+" metre");
//c: 1 acre = 4047 m^2
factor = 1/4047;
ans = (25*area)*factor
console.log("ans = "+(25*area)*factor+" acres");
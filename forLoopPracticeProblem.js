//1. Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.

let n = parseInt(process.argv[2]);
let power = 1;
for(var i =0;i<n;i++ ){
    power = power*2;
    console.log(power);
}

//2. Write a program that takes a command-line argument n and prints the nth harmonic number.

n = parseInt(process.argv[3]);
let sum = "";
for(var i =1;i<=n;i++ ){
    if(i!=n){
        sum = sum+1+"/"+i+"+";
    }
    else{
        sum = sum+1+"/"+i;
    }
    
}
console.log(sum);

//3. Write a program that takes a input and determines if the number is a prime.
n = parseInt(process.argv[4]);


let flag = 0;
for ( i = 2; i <= n; i++){
    if (n % i == 0)
        flag=1;
}
    
if(flag==0){
    console.log("Prime");
}
else{
    console.log("non-prime");
}
  

//4. Extend the program to take a range of number as input and output the Prime Numbers in that range.

let start = parseInt(process.argv[5]);
let end = parseInt(process.argv[6]);


for(i = start; i <= end; i++){
    flag = 0;
    for(let j =2;j<i;j++){
        if(i%j==0){
            flag=1;
        }
    }
    if(flag == 0){
        console.log(i);
    }
}

//5. Write a program that computes a factorial of a number taken as input. 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

n = parseInt(process.argv[7]);
let factorial = 1;
for(i=1;i<=n;i++){
    factorial = factorial*i;
}
console.log(factorial);

//6. Write a program to compute Factors of a number N using prime factorization method.
n = parseInt(process.argv[8]);
while (n % 2 == 0)  
    {  
        console.log(2+" ");  
        n = n/2;  
    }  
  
for (i = 3; i*i <= n; i = i + 2)  
{  
    while (n % i == 0)  
    {  
        console.log(i+" ");  
        n = n/i;  
    }  
}  
if (n > 2)  
    console.log(n+" ");
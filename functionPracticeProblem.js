//1. Temperature Conversion

function temperatureConversion(scale,temp){
    switch(scale){
        case "fahrenheit":
            if(temp>=32 && temp<=212){
                console.log(temp+" F = "+(temp-32)*5/9+" C");
            }
            else{
                console.log("Out Of Range");
            }
            break;
        case "celsius":
            if(temp>=0 && temp<=100){
                console.log(temp+" C = "+((temp*9/5)+32)+" F");
            }
            else{
                console.log("Out Of Range");
            }
            break;
        }
       
}

temperatureConversion("fahrenheit", 45);
temperatureConversion("celsius",23);

//2. Check Palindrome

function checkPalindrome(number){
    let copyNumber = number;
    let reversedNumber = 0;
    let currentNumber = 0;
    while(copyNumber!=0){
        currentNumber = Math.floor(copyNumber%10);
        reversedNumber = (reversedNumber*10) + currentNumber;
        copyNumber = Math.floor(copyNumber/10); 
    }
    return [number == reversedNumber,reversedNumber];
}

console.log(checkPalindrome(353));

//3. Check Prime and Palindrome

function checkPrime(number){
    let flag = 0;
    if(number==2){
        return true;
    }
    for ( let i = 2; i < number; i++){
        if (number % i == 0)
            flag=1;
    }
    
    if(flag==0){
        return true;
    }
    else{
        return false;
    }
}

console.log(checkPrime(11));

palindrome = checkPalindrome(353);
console.log(palindrome[0] && checkPrime(palindrome[1]));

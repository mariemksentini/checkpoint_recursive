//_________________________________________________Iterative_______________________________________________
//Leap Year Checker: 
//Create a function that takes a year as input and determines whether it is a leap year or not. 
//Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return(`${year} is a leap year.`);
    } else {
        return(`${year} is not a leap year.`);
    }
}
console.log(isLeapYear(201))


// Ticket Pricing: 
//Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:
// - Children (age <= 12): $10
// - Teenagers (age 13-17): $15
// - Adults (age >= 18): $20
function TicketPricing(age){
    return age<= 12 ? `the price for the ticket is $10.` : age >=18 ? `the price for the ticket is $20.` : `the price for the ticket is $15.`
}


//Weather Clothing Adviser: 
//Develop a program that asks the user for the current temperature and whether it is raining or not. Based on this information, 
//advise the user on what clothing to wear.
function WeatherClothingAdviser(T){
    return T<20 ? 'wear warm.' : T>30 ? 'it s summer.' : 'wear what you want'
}

//___________________________________________________Recursive_________________________________________________


//Fibonacci Sequence: 
//Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, 
//and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).
function Fibonacci(n) {
    if (n == 0 || n== 1){
        return 1
    }
    else {
        return Fibonacci(n-1) + Fibonacci(n-2)
    }
}


//Palindrome Checker: Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), 
//ignoring spaces, punctuation, and capitalization.
function Palindrome(ch) {
    if (ch.length <=1){
        return true
    }
    if ((ch[0] === ch[ch.length - 1])) {
        return Palindrome((ch.slice(1, -1)))
    }
    return false
}

//Power Function: 
//Write a recursive function to calculate the result of raising a number to a given power.
function power(x,n){
    if (n==1){
        return x
    }
    else{
        return x * power(x,n-1)
    }
}
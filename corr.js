// Leap year
// First methode
const LeapYear = (y) => ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)) ? 'leap' : 'not leap'
console.log(LeapYear(4))
// Second method
function LeapYear (y){
    if ((y%4==0 && y%100 !=0) || (y%400==0)){
      return 'leap'
    }
    else {
      return 'not leap'
    }
  
}

//Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:
// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20
const wearAge =(age)=> age <= 12 ? '$10' : age <18 ? '$15' : '$20' 
console.log(wearAge(15))


//Palindrome 
function palindrome (str){
    if (str.length <= 1){
      return true
    }
    if (str[0] === str[str.length -1]){
      console.log(str.slice(1, -1))
      return palindrome(str.slice(1,-1))
    }
    return false 
}
console.log(palindrome('kr'))
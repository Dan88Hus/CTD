//ASSIGNMENT JAVASCRIPT BASICS AND NUMBERS. GOOD LUCK!

// INSTRUCTIONS - You need to fork this repl.it and then will turn in the new link to it that is created as your homework assignment once the work is completed

//NOTE ABOUT DEBUGGING your work console.log('any string here', varName) to console log values to see your answers before you run test. 

//NOTE ABOUT TESTING your work. You should be able to test your answers by clicking into Shell on the right and typing 'npm test'. Question 6 will also need to be graded by hand, the test is not contain adequate coverage. 




// QUESTION 1. Assign string values based on your own information to the variables firstName, lastName and homeCountry below.

const firstName = "Huseyin";
const lastName = "OZDOGAN";
const homeCountry = "Turkey";


// QUESTION 2. String addition - Add your firstName and lastName variables together and set them equal to the fullName variable as a string. Don't forget to add a space.

const fullName = `${firstName} ${lastName}`;



//QUESTION 3. String Addition 2. - Create a sentence and set it equal to the mySentence variable that says "My full name is (your fullName variable). I am from (country)." Try and use string literal notation!

const mySentence = `My full name is ${firstName}. I am from ${homeCountry}.`; 


//QUESTION 4. FUNKY INITIALS. Using multiple string methods and your firstName and lastName variables from above (think length, slice, indexOf, charAt, that kind of thing) programmatically place the last letter of your first name and the last letter of your last name into the reverseInitials variable below. Also make sure they are capitalized. Hint: You may want to create new variables as intermediary steps before finally setting or resetting the value of funkyInitials.

let firstNameLast = firstName.charAt(firstName.length - 1).toUpperCase()
let lastNameLast = lastName.charAt(lastName.length - 1).toUpperCase()
let funkyInitials = firstNameLast + lastNameLast


// QUESTION 5. Conditional 1 - We've had and have a lot of developers named Jorge at Code the Dream.  So now we want to check programatically to see if you are the newest Jorge passing through the halls of CtD. Create an if/else statement that sets the variable isJorge to true if your firstName variable is "Jorge" and false if it is anything else.  

let isJorge;

if (firstName === "Jorge"){
  isJorge = true
} else {
  isJorge = false
}



//Question 6. Conditional 2 - You are given a randonNumber generator that will create a number between 1 and 3 in the randonNumber variable (do not change this code). Create a condtional where if the randomNumber variable is equal to 1 set theAnswer variable to "perhaps it is so", if randomNumber is equal to 2 set theAnswer variable to "yes, definitely" and if randomNumber is equal to three set theAnswer to "no, never"


/// DO NOT TOUCH THE CODE HERE - it is creating a random number between 1 and three for you to test against
const randomNumber = Math.floor((Math.random() * 3) + 1)
///// WRITE YOUR CODE BELOW 

let theAnswer;
if(randomNumber === 1){
  theAnswer = "perhaps it is so"
} else if (randomNumber ===2){
  theAnswer = "yes, definitely"
} else if (randomNumber === 3){
  theAnswer = "no, never"
}



// QUESTION 7. Given the variable x, using JS round it to it's nearest two decimal number on the line immediately below the line that initially sets the x variable. 

let x = 21.45729.toFixed(2);





// QUESTION 8. Given the variable y as a string, convert it to the an integer with no decimal places. Round down. 

let y = "15.3522";
y = Math.floor(parseInt(y))



//QUESTION 9. Without removing the string delimitors from var1 (the " "), add var1 and var2 so that they add up to 42 as an integer and are stored in the variable var3.

const var1 = "24"

const var2 = 18

//code here
let var3 = +var1 + var2


//QUESTION 10 - MODULUS/REMAINDER and some other JS. If the variable var4q is divisible by exactly 6 then have the variable var4a set to the string "It is divisible." If it is not divisible by 6 then set it to the string. "I am not divisible."

const var4q = 42;
let var4a;
if (var4q % 6 === 0){
  var4a = "It is divisible."
} else {
  var4a = "I am not divisible."
}






// export functions and variables you want to check against here. Do not touch this if you are a student. 

module.exports = {
  theAnswer, firstName, lastName, homeCountry, fullName, mySentence, isJorge, funkyInitials, x, y, var1, var2, var3, var4q, var4a
}
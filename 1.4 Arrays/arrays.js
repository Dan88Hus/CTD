// You need to fork this repl.it and then will turn in the link in your browser as your homework assignment once you are done answering the following questions.

// TESTING you should be able to test your answers by clicking into Shell on the right and typing 'npm test'.

// DEBUGGING type console.log('any string here', varName) to console log values to see your answers before you run test.


// QUESTION 1: Write a function that takes one Array parameter and returns true if the parameter is empty, false if not

/**
 * Checks if an array is empty
 * @param {array}
 * @returns {boolean}
 */
 function isEmpty(arr) {
    if (arr.length === 0){
        console.log("its empty")
        return true
    }else {
        console.log("itsNOT empty")
        return false
    }
}
isEmpty([])

// QUESTION 2: Write a function that takes one Array parameter and one Number parameter and returns the element in the array at the given number index, null if it doesn't exist

/**
 * Finds the element in array at a given index
 * @param {array}
 * @param {number}
 * @returns {(string|number|null)}
 */
function getElementAt() {

}


// QUESTION 3: Write a function that takes one Array parameter, inserts the value `0` at the second index, and returns the new Array

/**
 * Inserts zero value at the second index in an array
 * @param {array}
 * @returns {array}
 */
function insertZeroInArray() {

}


// QUESTION 4: Write a function that takes two Array parameters (containing numbers or strings only) and returns true if they are equal, false if not

// HINT: In JavaScript, 1 === '1' is false, but 1 == '1' is true. You'll need to use the triple equals operator which is more strict because it compares data type.

/**
 * Checks if two arrays are equal
 * @param {array}
 * @param {array}
 * @returns {boolean}
 */
function isEqual() {

}


// QUESTION 5: Write a function that takes one Array parameter and returns the sum of all the Array elements
// BONUS: use the `reduce()` method

/**
 * Finds the sum of all elements in an array
 * @param {array}
 * @returns {number}
 */
const calculateArraySum = () => {

}


// QUESTION 6: Write a function that takes one Array parameter and returns a new Array of all the even numbers
// BONUS: use the `filter()` method

/**
 * Find all even numbers in an array
 * @param {array}
 * @returns {array}
 */
const findEvenNumbers = () => {

}


// QUESTION 7: Write a function that takes one Array parameter and returns a new Array of all the odd numbers
// BONUS: use the `filter()` method

/**
 * Find all odd numbers in an array
 * @param {array}
 * @returns {array}
 */
const findOddNumbers = () => {

}


// QUESTION 8: Write a function that takes one Array parameter and returns a new Array with the squared values of each of the numbers
// EXAMPLE: The squared value of 4 is 4^2 = 4 * 4 = 16
// BONUS: use `map()` method

/**
 * Squares all the numbers in an array
 * @param {array}
 * @returns {array}
 */
const squareNumbers = () => {

}

// QUESTION 9. STRETCH GOAL --- Back in the old days, the early 2000s, this was a famous technical interview question. Write a function definition that takes no parameters. The function will loop from 1 to 10 and return an array of numbers. While looping,the function will check if the current value in the loop is divisible by 3, 5, or by both. If the current value in the loop is divisible by 3, the function will add the string "Fizz" to an array. If the current value in the loop is divisible by 5, the function will add the string "Buzz" to the array. If the current value in the loop is divisible by both, the function will add the value "FizzBuzz" to the array. The function will return the array of values.

/**
 * Adds correct strings to an array
 * @param none
 * @returns {array}
 */
const fizzBuzz = () => {

}

// DO NOT EDIT BELOW THIS LINE

module.exports = {
  isEmpty,
  getElementAt,
  insertZeroInArray,
  isEqual,
  calculateArraySum,
  findEvenNumbers,
  findOddNumbers,
  squareNumbers,
  fizzBuzz
}

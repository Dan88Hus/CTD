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
    if (arr.length === 0) {
        // console.log("its empty")
        return true
    } else {
        // console.log("itsNOT empty")
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
function getElementAt(arr, num) {
    if (arr[num]) {
        // console.log("element exist")
        return arr[num]
    } else {
        // console.log("element NOT exist")
        return null
    }
}
getElementAt(["asdasdasd"], 0)


// QUESTION 3: Write a function that takes one Array parameter, inserts the value `0` at the second index, and returns the new Array

/**
 * Inserts zero value at the second index in an array
 * @param {array}
 * @returns {array}
 */
function insertZeroInArray(arr) {
    arr.splice(1, 0, 0) // arr.splice(index, 0, item); mutate array, slice method is not mutate
    // console.log("arr", arr)
    return arr
}

insertZeroInArray([1, 2, 3, 4])


// QUESTION 4: Write a function that takes two Array parameters (containing numbers or strings only) and returns true if they are equal, false if not

// HINT: In JavaScript, 1 === '1' is false, but 1 == '1' is true. You'll need to use the triple equals operator which is more strict because it compares data type.

/**
 * Checks if two arrays are equal
 * @param {array}
 * @param {array}
 * @returns {boolean}
 */
function isEqual(arr1, arr2) {
    const arr = arr1.every((val, index) => val === arr2[index]);
    // console.log(arr)
}
const arr1 = [1, '2', 3, 4]
const arr2 = [1, '2', 3, 4]

isEqual(arr1, arr2)

// function isEqual(arr1, arr2) {
//     for (let i=0; i<=arr2.length; i++){
//         if(arr1[i] !== arr2[i]){
//             // console.log("are NOT equal")
//             return false   
//         } 
//         // console.log("out of if")
//         continue
//     }
//     // console.log("out of for")
//     return true
// }
// const arr1 = [1, '2', 3, 4]
// const arr2 = [1, '2', 3, 4]

// QUESTION 5: Write a function that takes one Array parameter and returns the sum of all the Array elements
// BONUS: use the `reduce()` method

/**
 * Finds the sum of all elements in an array
 * @param {array}
 * @returns {number}
 */
const calculateArraySum = (arr) => {
    let sum = arr.reduce((p, c) => {
        return p + c
    })
    // console.log(sum)
}
calculateArraySum([1, 2, 3, 4, 5])



// QUESTION 6: Write a function that takes one Array parameter and returns a new Array of all the even numbers
// BONUS: use the `filter()` method

/**
 * Find all even numbers in an array
 * @param {array}
 * @returns {array}
 */
const findEvenNumbers = (arr) => {
    const result = arr.filter(el => el % 2 === 0)
    // console.log(result)
}
findEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])


// QUESTION 7: Write a function that takes one Array parameter and returns a new Array of all the odd numbers
// BONUS: use the `filter()` method

/**
 * Find all odd numbers in an array
 * @param {array}
 * @returns {array}
 */
const findOddNumbers = (arr) => {
    const result = arr.filter(el => el % 2 !== 0)
    // console.log(result)
    return result
}
findOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])



// QUESTION 8: Write a function that takes one Array parameter and returns a new Array with the squared values of each of the numbers
// EXAMPLE: The squared value of 4 is 4^2 = 4 * 4 = 16
// BONUS: use `map()` method

/**
 * Squares all the numbers in an array
 * @param {array}
 * @returns {array}
 */
const squareNumbers = (arr) => {
    let result = arr.map((el) => el * el)
    // console.log(result)
    return result
}
squareNumbers([1, 2, 3, 4, 5])

// QUESTION 9. STRETCH GOAL --- Back in the old days, the early 2000s, this was a famous technical interview question. 
// Write a function definition that takes no parameters. The function will loop from 1 to 10 and return an array of numbers. 
//While looping,the function will check if the current value in the loop is divisible by 3, 5, or by both. 
//If the current value in the loop is divisible by 3, the function will add the string "Fizz" to an array. 
//If the current value in the loop is divisible by 5, the function will add the string "Buzz" to the array. 
//If the current value in the loop is divisible by both, the function will add the value "FizzBuzz" to the array.
// The function will return the array of values.

/**
 * Adds correct strings to an array
 * @param none
 * @returns {array}
 */
const fizzBuzz = () => {
    let arr = []
    for (let i=1; i<=10; i++){
        console.log(i)
        if (i % 3 === 0){
            arr.push("Fizz")
            // console.log("3ten",arr)
        } else if (i % 5 === 0) {
            arr.push("Buzz")
            // console.log("5ten",arr)
        } else {
            arr.push(i)
        }
    }
    console.log(arr)

}
fizzBuzz()

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

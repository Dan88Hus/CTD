// You need to fork this repl.it and then will turn in the link in your browser as your homework assignment once you are done answering the following questions.

//TESTING you should be able to test your answers by clicking into Shell on the right and typing 'npm test'.

//DEBUGGING type console.log('any string here', varName) to console log values to see your answers before you run test.


// QUESTION 1. Write a standard function definition that takes 1 parameter of data type number and prints out the string, "Happy Birthday!", to the console the same number of times as the parameter. (Each console message should be in a new line)

function happyBirthday(par) {
    for (let i = 0; i < parseInt(par); i++) {
        console.log("Happy Birthday!")
    }

}
happyBirthday(6)


// QUESTION 2 (new). Write a standard function definition that takes 1 parameter. The parameter is a number and the function should return the sum of that number and all of the numbers greater than 0 below it. Test it with the number 25. Example - if it was 3, it should return 6.

function sum(para) {
    let countSum = 0
    for (let i = 0; i <= parseInt(para); i++) {
        countSum += i
    }
    console.log(countSum)
    return countSum
}
sum(25)


//QUESTION 3 (new). Write a standard function definition that will remove vowels from a string using a loop that takes a parameter of type string and removes all of the vowels. Test it against the variable myString which is set to "elephant".

const myString = "elephant"

function removeVowels(myString) {
    let newString = myString.replace(/[aeiou]/gi, ''); //regex
    console.log(newString)
    return newString
}
removeVowels(myString)


// QUESTION 4 (new). Write a function definition that takes 1 parameter. The parameter is a number and the function should return the number of odd numbers between 0 and that number, including the number. (Remember the modulo operator)

const oddChecker = (para) => {
    let oddNumber = 0
    for (let i = 0; i <= parseInt(para); i++) {
        if (i % 2 !== 0) {
            oddNumber++
        }
    }
    return oddNumber
}
oddChecker(5)



// QUESTION 5. Write a function definition that takes 1 parameter. The parameter is a string and the function should return the number of vowels in the string. 

const vowelsChecker = (para) => {
    let check = para.match(/[aeiou]/gi).length;
    return check
}
vowelsChecker('abc')

module.exports = {
    happyBirthday,
    sum,
    removeVowels,
    oddChecker,
    vowelsChecker,
}

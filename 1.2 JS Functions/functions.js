// You need to fork this repl.it and then will turn in the link in your browswer as yoru homework assignment once you are done answering the following questions.

// TESTING you should be able to test your answers by clicking into Shell on the right and typing 'npm test'.

// DEBUGGING type console.log('any string here', varName) to console log values to see your answers before you run test.

// Note: In Usage examples below, the notation <- is used to indicate a return value.

// QUESTION 1. Write a function that takes a String as a parameter and logs that parameter to the console (hint: use console.log).

// Usage:
// > logString('hello')
// hello
// <- undefined
// > logString('bye!')
// bye!
// <- undefined

function logString(value) {
    console.log(value)
  }
  
  // QUESTION 2. Write a function definition that returns today's date in unix format (https://www.unixtimestamp.com/).
  
  // Usage:
  // today()
  // <- 1622131797631
  // today()
  // <- 1622131798770
  
  function today() {
    return Math.round((new Date()).getTime() / 1000);
  
  }
  
  console.log(today())
  
  // QUESTION 3. Write a function definition that takes 2 String parameters and returns a new string that concatenates both parameters.
  
  // Usage:
  // concat('foo', 'bar')
  // <- 'foobar'
  
  function concat(a,b) {
      if(isNaN(a) && isNaN(b)){
          return console.log(a+b)
      } else {
          return console.log('parameters are not a string')
      }
  }
  concat('foo', 'bar')
  
  // QUESTION 4. Write a function definition that takes a String parameter and returns that string with the first letter capitalized.
  
  // Usage:
  // capitalizeFirstLetter('bob malarky')
  // <- 'Bob malarky'
  
  function capitalizeFirstLetter(a) {
      if(isNaN(a)){
          let firstLetter = a[0].toUpperCase()
          let rest = a.slice(1)
          return console.log(firstLetter.concat(rest))
      } else {
          console.log('paramenter is not a string')
      }
  }
  capitalizeFirstLetter('bob malarky')
  
  // QUESTION 5. Write a function definition that takes 2 Number parameters and returns the modulus of parameter 1 by parameter 2. 
  
  // Usage:
  // mod(7, 4)
  // <- 3
  // mod(13, 4)
  // <- 1
  
  function mod(a,b) {
    if(!isNaN(a) && !isNaN(b)){
        return console.log(a % b)
    }
    else {
        return console.log('params are not number')
    }
  }
  mod(13, 4)
  
  // QUESTION 6. Write a function definition that takes 2 whole Number (integer) parameters and returns their average (hint: there is no built-in average operator in JavaScript).
  
  // Usage:
  // avg(3, 5)
  // <- 4
  // avg(1, 10)
  // <- 5
  
  function avg(a,b) {
      let average = 0
    if(!isNaN(a) && !isNaN(b)){
        average =  Math.floor((a+b)/2)
    }
    else {
        console.log('params are not number')
    }
    return console.log(average)
  }
  avg(1, 10)
  
  // QUESTION 7. Write a function definition that takes 2 Number parameters and returns the absolute difference between those numbers. For example, 
//   if the first parameter is smaller than the second, the first parameter will be subtracted from the second. If the first parameter is larger than the second, the second parameter will be subtracted from the first. If they are both equal, return the first parameter subtracted by the second.
  
  // Usage:
  // absoluteDifference(3, 5)
  // <- 4
  // absoluteDifference(1, 10)
  // <- 5
  
  function absoluteDifference(a,b) {
    let abs = 0
    if(!isNaN(a) && !isNaN(b)){
        abs =  Math.abs(b-a)
    }
    else {
        console.log('params are not number')
    }
    return console.log(abs)
  }
  absoluteDifference(1, 10)
  absoluteDifference(3, 5)

  // QUESTION 8. Write a function definition that takes 2 String parameters and returns the length of the longest string. If they are of equal length, just return that length.
  
  // Usage:
  // longestStringLength('supercalafragalisticexpialadoshus', 'neat')
  // <- 33
  // longestStringLength('hello', 'world')
  // <- 5
  
  function longestStringLength(a,b) {
      let max = 0
      aLength = a.length
      bLength = b.length 
      return console.log(Math.max(aLength,bLength))
 
  }
  longestStringLength('supercalafragalisticexpialadoshus', 'neat')
  longestStringLength('hello', 'world')
  
  module.exports = {
    logString, today, concat, capitalizeFirstLetter, mod, avg, absoluteDifference, longestStringLength
  }
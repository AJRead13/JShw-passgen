// //GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// function generatePassword() {
//   String.fromCharCode()
// }
// console.log(String);

// let UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
// let LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
// let NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57)
// let SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64))
// .concat(arrayFromLowToHigh(91, 96)
// )
// .concat(arrayFromLowToHigh(123, 126)
// )

// console.log(UPPERCASE_CHAR_CODES);
// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
//creating variables to split for arrays

const alphaLow = "abcdefghijklmnopqrstuvwxyz";
const alphaHigh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

//established arrays for password

let low = alphaLow.split("")
//console.log(low);
let high = alphaHigh.split("")
//console.log(high);
let num = numbers.split("")
//console.log(Num);
let sym = symbols.split("")
//console.log(sym);
//
//randomizing arrays
let lowRandom = Math.floor(Math.random(low) * low.length)
//console.log(lowRandom);
let highRandom = Math.floor(Math.random(high) * high.length)
//console.log(highRandom);
let numRandom = Math.floor(Math.random(num) * num.length)
//console.log(numRandom);
let symRandom = Math.floor(Math.random(sym) * sym.length)
//console.log(symRandom);
//
//catching index to actual output
var alphaLowOut = alphaLow[lowRandom];
//console.log(alphaLowOut);
var alphaHighOut = alphaHigh[highRandom];
//console.log(alphaHighOut);
var numOut = numbers[numRandom];
//console.log(numOut);
var symOut = symbols[symRandom];
//console.log(symOut);

//empty array
var randomPassword = []

var randomAssort = Math.floor(Math.random(randomPassword)*randomPassword.length)
console.log(randomAssort);
// // Assignment Code

var generateBtn = document.querySelector("#generate");

// let length = prompt("How many characters would you like? \n"  + "Min=8: Max=128")

// let upperCase = confirm("Do you wish to use Uppercase Letters?")
// let lowerCase = confirm("Do you wish to use Lowercase Letters?")
// let numbs = confirm("Do you wish to use Numbers Letters?")
// let syms = confirm("Do you wish to use Symbols Letters?")
//function to generate random uppercase letters
function generateHigh() {
  var randomHigh = Math.floor(Math.random() * high.length);
  var chosenHigh = high[randomHigh];
  return chosenHigh;
}
//function to generate random lowercase characters
function generateLow() {
  var randomLow = Math.floor(Math.random() * low.length);
  var chosenLow = low[randomLow];
  return chosenLow;
}
//function to generate random numbers
function generateNum() {
  var randomNum = Math.floor(Math.random() * num.length);
  var chosenNum = sym[randomNum];
  return chosenNum;
}
//function to generate random symbols
function generateSym() {
  var randomSym = Math.floor(Math.random() * sym.length);
  var chosenSym = sym[randomSym];
  return chosenSym;
}
var genUp = []
var genLow = []
var genNum = []
var genSym = []
var genPass = []





// let length = prompt("How many characters would you like? \n" + "Min=8: Max=128");
// let upperCase = confirm("Do you wish to use Uppercase Letters?");
// let lowerCase = confirm("Do you wish to use Lowercase Letters?");
// let numbs = confirm("Do you wish to use Numbers Letters?");
// let syms = confirm("Do you wish to use Symbols Letters?");

var displayedPassword = randomPassword.toString()

function writePassword() {
let length = prompt("How many characters would you like? \n" + "Min=8: Max=128");
let upperCase = confirm("Do you wish to use Uppercase Letters?");
let lowerCase = confirm("Do you wish to use Lowercase Letters?");
let numbs = confirm("Do you wish to use Numbers Letters?");
let syms = confirm("Do you wish to use Symbols Letters?");

  if (length < 8 || length > 128) {
    alert("Passwords must be between 8 and 128 characters!")
  } else {
    alert("Password Length Accepted");

    for (let i = 0; i < length; i++) {
      var letterUp = generateHigh()
      randomPassword.push(letterUp)
    }
  }
  if (lowerCase) {
    var letterDown = generateLow()
    randomPassword.push(letterDown)
  }
  if (numbs) {
    var number = generateNum()
    randomPassword.push(number)
  }
  if (syms) {
    var symbol = generateSym()
    randomPassword.push(symbol)
  }
  if (upperCase) {
    var capital = generateHigh()
    randomPassword.push(capital)
  }
  console.log(randomPassword);
  randomPassword = randomPassword.join("");
  return randomPassword;
  // var writePassword = 
  //function writePassword()
}
  // Write password to the #password input

  function passwordWrite() {
    var password = writePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  //   let length = prompt("How many characters would you like? \n" + "Min=8: Max=128");
  //   let upperCase = confirm("Do you wish to use Uppercase Letters?");
  //   let lowerCase = confirm("Do you wish to use Lowercase Letters?");
  //   let numbs = confirm("Do you wish to use Numbers Letters?");
  //   let syms = confirm("Do you wish to use Symbols Letters?");
   }
  //   }
  //   // 


  // //   // // Add event listener to generate button
  generateBtn.addEventListener("click", passwordWrite);

// // //need to indicate whether or not the user input is between 8-128 characters.
// // //if not within range, display alert telling them to input again
// // //if within display password options windows
// //
//creating variables to split for arrays
const alphaLow = "abcdefghijklmnopqrstuvwxyz";
const alphaHigh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
//
//established arrays for password
//
let low = alphaLow.split("")
let high = alphaHigh.split("")
let num = numbers.split("")
let sym = symbols.split("")
//
//randomizing arrays
let lowRandom = Math.floor(Math.random(low) * low.length)
let highRandom = Math.floor(Math.random(high) * high.length)
let numRandom = Math.floor(Math.random(num) * num.length)
let symRandom = Math.floor(Math.random(sym) * sym.length)
//
//catching index to actual output
var alphaLowOut = alphaLow[lowRandom];
var alphaHighOut = alphaHigh[highRandom];
var numOut = numbers[numRandom];
var symOut = symbols[symRandom];
//
var generateBtn = document.querySelector("#generate");
//
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
  var chosenNum = num[randomNum];
  return chosenNum;
}
//function to generate random symbols
function generateSym() {
  var randomSym = Math.floor(Math.random() * sym.length);
  var chosenSym = sym[randomSym];
  return chosenSym;
}
//empty arrays
var genUp = []
var genLow = []
var genNum = []
var genSym = []
var genPass = []
function writePassword() {
  var randomPassword = [];
  randomPassword.length = 0;
  let characters = prompt("How many characters would you like? \n" + "Min=8: Max=128");
  if (characters < 8 || characters > 128) {
    alert("Passwords must be between 8 and 128 characters!");
    return;
  } else {
    alert("Password Length Accepted");
    let upperCase = confirm("Do you wish to use Uppercase Letters?");
    let lowerCase = confirm("Do you wish to use Lowercase Letters?");
    let numbs = confirm("Do you wish to use Numbers Letters?");
    let syms = confirm("Do you wish to use Symbols Letters?");
    //
    for (let i = 0; i < characters; i++) {
      var letterUp = generateHigh()
      genUp.push(letterUp);
      var letterDown = generateLow()
      genLow.push(letterDown);
      var number = generateNum()
      genNum.push(number)
      var symbol = generateSym()
      genSym.push(symbol)
    }
    if (upperCase) {
      genPass.push(...genUp);
    }
    if (lowerCase) {
      genPass.push(...genLow);
    }
    if (numbs) {
      genPass.push(...genNum);
    }
    if (syms) {
      genPass.push(...genSym);
    }
  }
  for (let i = 0; i < characters; i++) {
    var rando = Math.floor(Math.random() * genPass.length);
    var randomizer = genPass[rando];
    randomPassword.push(randomizer);
    // rando is another variable for randomPassword   
  }
  randomPassword = randomPassword.join("");
  return randomPassword;
}
// Write password to the #password input
//
function passwordWrite() {
  var password = writePassword();
  var passwordText = document.querySelector("#password");
  //
  passwordText.value = password;
}
// //   // // Add event listener to generate button
generateBtn.addEventListener("click", passwordWrite);
//creating variables to split for arrays
const alphaLow = "abcdefghijklmnopqrstuvwxyz";
const alphaHigh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
//
//established arrays for password
//
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
//
//
//
var generateBtn = document.querySelector("#generate");
//
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
var genUp = []
var genLow = []
var genNum = []
var genSym = []
var genPass = []
//var randomizer =[]
//
function writePassword() {
  var randomPassword = [];
  randomPassword.length = 0;
  let characters = prompt("How many characters would you like? \n" + "Min=8: Max=128");
  //
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
//
// //   // // Add event listener to generate button
generateBtn.addEventListener("click", passwordWrite);
//
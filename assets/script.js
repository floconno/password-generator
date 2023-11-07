// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
var uppercaseList = lowercaseList.toLocaleUpperCase();
var specialList = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 
var numberList = "0123456789";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // Logic for prompting the user for length, special, numeric, lower, upper case characters
  // prompt user for length
  var length = prompt("How many characters would you like to include in your password?");

  // if length is > 128 or length is < 8
  // Let the user know they need to be within our constraints
  // Prompt user for special
  // store the response
  // Prompt user for 

  // Write an algo for creating a password with the selected characters constrained by the length the user provided.
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
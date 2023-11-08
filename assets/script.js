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
  console.log(length);
  if (length < 8 || length > 128) {
    return "Password must be within the constraints of a minimum of 8 characters and a maximum of 128 characters.";
  }
  // if length is > 128 or length is < 8
  // Let the user know they need to be within our constraints
  // Prompt user for special
  var special = confirm("Do you want to include special characters in your password?")
  if (special) {
    var val = getRandomItem(specialList);
    console.log(val);
  }
  // store the response
  // Prompt user for uppercase
  var uppercase = confirm("Do you want to include uppercase characters in your password?");
  if (uppercase) {
    var val = getRandomItem(uppercaseList);
    console.log(val);
  }

  // Store the response
  // Prompt user for lowercase
  var lowercase = confirm("Do you want to include lowercase characters in your password?");
  if (lowercase) {
    var val = getRandomItem(lowercaseList);
    console.log(val);
  }
  // Store the response
  // Write an algo for creating a password with the selected characters constrained by the length the user provided.
}
// This function will randomly select needed characters that user says they need from our lists above.
function getRandomItem(str) {
  return str[Math.floor(Math.random() * str.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
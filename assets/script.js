// Created strings of each of the types of characters needed that the user can choose from.
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

// Function to generate the password
function generatePassword() {
  var password = "";
// Prompts user to enter desired password length.
  var length = prompt("How many characters would you like to include in your password?");
// If the user is not within the character constraints, they will be informed that they need to be with in the constraints.
  if (length < 8 || length > 128) {
    return "Password must be within the constraints of a minimum of 8 characters and a maximum of 128 characters.";

  }
// Used confirms for the users to confirm if they would like special, uppercase, and lowercase characters in their password.
  var special = confirm("Do you want to include special characters in your password?");
  var uppercase = confirm("Do you want to include uppercase characters in your password?");
  var lowercase = confirm("Do you want to include lowercase characters in your password?");

  var characterSet = "";
// If the user needs a special character, one will be pulled from the specialList.
  if (special) {
    characterSet += specialList;
  }
// If the user needs an uppercase character, one will be pulled from the uppercaseList.
  if (uppercase) {
    characterSet += uppercaseList;
  }
// If the user needs a lowercase character, one will be pulled from the lowercaseList.
  if (lowercase) {
   characterSet += lowercaseList;
  }
// Will continue to pull random characters based on the users desired length and what they want included.
  for (var i = 0; i < length; i++) {
    password += getRandomItem(characterSet);
  }
// Returns the created password to the user.
  return password;  
}
// This function will randomly select needed characters that user says they need from our lists above.
function getRandomItem(str) {
  return str[Math.floor(Math.random() * str.length)];
}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);
 
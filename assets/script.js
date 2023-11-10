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
  console.log(length);
// If the user is not within the character constraints, they will be informed that they need to be with in the constraints.
  if (length < 8 || length > 128) {
    return "Password must be within the constraints of a minimum of 8 characters and a maximum of 128 characters.";

  }
// Used confirms for the users to confirm if they would like special, uppercase, and lowercase characters in their password.
  var special = confirm("Do you want to include special characters in your password?");
  var uppercase = confirm("Do you want to include uppercase characters in your password?");
  var lowercase = confirm("Do you want to include lowercase characters in your password?");

  var characterSet = "";

  if (special) {
    characterSet += specialList;
  }
  // store the response

  // Prompt user for uppercase
  if (uppercase) {
    characterSet += uppercaseList;
  }
  // Store the response
  // Prompt user for lowercase
  if (lowercase) {
   characterSet += lowercaseList;
  }

  for (var i = 0; i < length; i++) {
    password += getRandomItem(characterSet);
  }
  // Store the response
  // Write an algo for creating a password with the selected characters constrained by the length the user provided.
  return password;  
}
// This function will randomly select needed characters that user says they need from our lists above.
function getRandomItem(str) {
  return str[Math.floor(Math.random() * str.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
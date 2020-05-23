// Assignment Code
var generateBtn = document.querySelector("#generate");
var alpha1 = ("abcdefghijklmnopqrstuvwxyz");
var alpha2 = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numbers = ("1234567890");
var specialchar = ("!@#$%^&*_+")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write functions for password generation 
function generatePassword() {
  // Ask for user input
  enter = parseInt(prompt("How many characters do you want for password? Must be between 8 and 128"))


}


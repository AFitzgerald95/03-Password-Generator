// Characters to be included in the password
var specialCharacters = "!@#$%^&*()-_.,/`~{}[]|:;+="
var lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz"
var upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericCharacters = "0123456789"

// Password Builder with Given Criteria
function generatePassword() { 
  var randPassword = ""
  length = parseInt(
    prompt("How many characters would you like your password to contain?")
  )

  if (length === null) {
    return null
  }

  if (Number.isNaN(length)) {
    alert("Password must be a valid numerical value.")
    return null;
  }

  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters.");
    return null;
  }

  var characterTypes = ""
  var inclLowerCase = confirm("Select OK to include lower case characters.")
  var inclUpperCase = confirm("Select OK to include upper case characters.")
  var inclNumericCharacters = confirm("Select OK to include numeric characters.")
  var inclSpecialCharacters = confirm("Select OK to include special characters.")

  if (
    inclLowerCase === false &&
    inclUpperCase === false &&
    inclNumericCharacters === false &&
    inclSpecialCharacters === false 
  ) {
    alert("At least one character type must be selected.");
    return null
  }

  if (inclLowerCase) {
    characterTypes += lowerCasedCharacters
    randPassword += lowerCasedCharacters.charAt(Math.floor(Math.random() * lowerCasedCharacters.length))
  }

  if (inclUpperCase) {
    characterTypes += upperCasedCharacters
    randPassword += upperCasedCharacters.charAt(Math.floor(Math.random() * upperCasedCharacters.length))
  }
    
  if (inclNumericCharacters) {
    characterTypes += numericCharacters
    randPassword += numericCharacters.charAt(Math.floor(Math.random() * numericCharacters.length))
  }
    
  if (inclSpecialCharacters) {
    characterTypes += specialCharacters
    randPassword += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length))
  }

    // Password Generator
  for (var i = randPassword.length; i < length; i++) {
    randPassword += characterTypes.charAt(Math.floor(Math.random() * characterTypes.length));
  }
  return randPassword
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

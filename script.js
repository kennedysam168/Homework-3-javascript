// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
// how to do the uppercase????
// try array


var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var specialcharacters = ["!", "@", "#", "$", "%", "&", "^", "*", "(", ")", "?"];

// Write password to the #password input
function userChoices() {
    var passwordLength = parseInt(prompt ("your password can be between 8 and 128 characters"))
    
    if (Number.isNaN(passwordLength))
    {alert ("this needs to be a number"); return null;}
    if (passwordLength < 8)
    {alert ("please use at least 8 characters"); return null;}
    if (passwordLength > 128)
    {alert ("please use less than 128 characters"); return null;}
    
    var confirmLower = confirm ("do you want lowercase letters?")
    var confirmUpper = confirm ("do you want uppercase letters")
    var confirmNumber = confirm ("do you want to use numbers")
    var confirmSpecial = confirm ("do you want to add special characters")

    if (confirmLower === false 
        && confirmUpper === false 
        && confirmNumber === false 
        && confirmSpecial === false)
        {alert ("pick at least one character"); return null;}

    var options = {
        passwordLength: passwordLength,
        confirmLower: confirmLower,
    }
    return options;

}

function generatePassword() {
    var choices = userChoices()

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

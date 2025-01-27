// Min length 8 chars
// Must contain 1 special char
// No spaces
// One uppercase letter
// One lowercase letter
// One digit

const minPasswordLength = 8;
let passHasEightChars = true;
let passHasSpecialChar = true;
let passHasNoSpace = true;
let passHasUpper = true;
let passHasLower = true;
let passHasDigit = true;
let passIsValid = true;

// Calls an anonymous function when the button is clicked
document.getElementById("button").onclick = function() {
    let userPassword = document.getElementById("password").value;
    validateAll(userPassword);
}

// Calls all validating functions, displays message if password is not valid
function validateAll(password) {
    hasEightChars(password);
    hasSpecialChar(password);
    hasNoSpace(password);
    hasUpper(password);
    hasLower(password);
    hasDigit(password);
    allValid(password);
}

// Checks if password has more than 8 characters
function hasEightChars(password) {
    if (password.length >= minPasswordLength) {
        document.getElementById("too-short").style.display = "none";
        passHasEightChars = true;
    }
    else {
        document.getElementById("too-short").style.display = "block";
        passHasEightChars = false;
    }
}

// Checks if password has a special character
function hasSpecialChar(password) {
    for (let i = 0; i < password.length; i++) {
        if (whatIsChar(password[i]) == "special" && password.charCodeAt(i) !== 32) {
            document.getElementById("no-special").style.display = "none";
            passHasSpecialChar = true;
            return;
        }
    }
    document.getElementById("no-special").style.display = "block";
    passHasSpecialChar = false;
}

// Checks if password has a space
function hasNoSpace(password) {
    if (!password.includes(" ")) {
        document.getElementById("has-space").style.display = "none";
        passHasNoSpace = true;
    }
    else {
        document.getElementById("has-space").style.display = "block";
        passHasNoSpace = false;
    }
}

// Checks if password has an uppercase letter
function hasUpper(password) {
    for (let i = 0; i < password.length; i++) {
        if (whatIsChar(password[i]) == "upper") {
            document.getElementById("no-upper").style.display = "none";
            passHasUpper = true;
            return;
        }
    }
    document.getElementById("no-upper").style.display = "block";
    passHasUpper = false;
}

// Checks if password has a lowercase letter
function hasLower(password) {
    for (let i = 0; i < password.length; i++) {
        if (whatIsChar(password[i]) == "lower") {
            document.getElementById("no-lower").style.display = "none";
            passHasLower = true;
            return;
        }
    }
    document.getElementById("no-lower").style.display = "block";
    passHasUpper = false;
}

// Checks if password has a digit
function hasDigit(password) {
    for (let i = 0; i < password.length; i++) {
        if (whatIsChar(password[i]) == "digit") {
            document.getElementById("no-digit").style.display = "none";
            passHasDigit = true;
            return;
        }
    }
    document.getElementById("no-digit").style.display = "block";
    passHasUpper = false;
}

// Checks if all password requirements are met
function allValid() {
    if (passHasEightChars && passHasSpecialChar && passHasNoSpace && passHasUpper
        && passHasLower && passHasDigit) {
            document.getElementById("not-valid").style.display = "none";
            document.getElementById("valid").style.display = "block";
            passIsValid = true;
    }
    else {
        document.getElementById("not-valid").style.display = "block";
        document.getElementById("valid").style.display = "none";
        passIsValid = false;
    }
}

// Returns a string describing the character
function whatIsChar(char) {
    let charCode = char.charCodeAt(0);
    // test if char is a number
    if (charCode > 47 && charCode < 58) {
        return "digit";
    }
    // test if char is a CAPTIAL letter
    else if (charCode > 64 && charCode < 91) {
        return "upper";
    }
    // tests if char is a lowercase letter
    else if (charCode > 96 && charCode < 123) {
        return "lower";
    }
    // test a special char is found return true
    return "special";
}

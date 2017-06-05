//Add, subtract, multiply, and divide some numbers.
23 + 45
100 - 48
10 * 58
200 / 2
//Find the remainder of dividing two numbers by using the modulo operator.
5 % 2
//Divide a number by 0.
15 / 0
//Divide 0 by 0.
0 / 0
//Set a variable called favoriteNumber equal to your favorite number.
var favoriteNumber = 12;
// Calculate what your favorite number divided by 2 is.
favoriteNumber / 2
// Set another variable called someonesFavorite equal to 13.
var someonesFavorite = 13;
// Change the value of someonesFavorite to 7.
someonesFavorite = 7;
// Subtract your favorite number from mine.
favoriteNumber - someonesFavorite;
// Change the value of my favorite number to be 26 times its current value.
someonesFavorite * 26;
// Make a C to F and F to C temperature converter based on the steps here:
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output something like: "xC is xF".
var xC = 50;
function celciusToFahrenheit(celcius) {
  return (celcius * 1.8) + 32;
}
console.log(xC + " C is " + celciusTofahrenheit(xC) + " F.")
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output something like: "xF is xC."
var xF = 122;
function fahrenheitToCelcius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}
fahrenheitToCelcius(xF);
console.log(xF + " F is " + fahrenheitToCelcius(xF) + " C.")

// Write functions of your own to:
//
// Subtract two numbers
// Use the example of how to add two numbers from the previous lesson as a reference.
// Multiply two numbers
// Divide two numbers
// Take somebody's name and say a greeting to them.
// Hint: prompt the user for their name, store it in a variable, then use alert them with a greeting.
// Write a function that reverses a string character by character; so reverseCharAt("hello", 0) returns "o" and reverseCharAt("hello", 4) returns "h".
// Hint use .length and .charAt() and some clever arithmatic.

function substractTwoNumbers(num1, num2) {
  return num1 - num2;
}
substractTwoNumbers(10, 5);

function multiplyTwoNumbers(num1, num2) {
  return num1 * num2;
}
multiplyTwoNumbers(5, 2);

function divideTwoNumbers(num1, num2) {
  return num1 / num2;
}
divideTwoNumbers(15, 4);

function greeting() {
  var name = prompt("Please enter your name?");
  return "Hello " + name + " How are you today?";
}
greeting();

//Reverse the string of the input
function reverseString (input, num) {
  var name = input;
  var rev = name.length - (num + 1);
  return name.charAt(rev);
}
reverseString("history", 2);

function reverseString(string) {

})


// Takes 2 arguments: age, amount per day.
// Calculates the amount consumed for rest of the life (based on a constant max age).
// Outputs the result to the screen using console.log.
// Call that function three times, passing in different values each time.
function calcLife(age, amountPerDay) {
  var maxAge = 100;
  return (amountPerDay * 365) * (maxAge - age);
}
console.log(calcLife(100, 10));

User ID and password cannot be the same
User ID and password have to be at least six characters long
User ID cannot contain the following characters: !#$
Password has to contain at least one of: !#$
Password cannot be "password"

function userID(string) {
  return string.length >= 6 && !string.includes("#") && !string.includes("$") && !string.includes("!");
}
userID("123456");

function userPassword(pass) {
  return pass.length >= 6 && pass !== "password" && (pass.includes("#") || pass.includes("$") || pass.includes("!"));
}
userPassword("password#");

function userLogin(userName, pw) {
  return userID(userName) && userPassword(pw) && userName === pw;
}
userLogin("123456$", "123456$");

// Drop the last digit from the number. The last digit is what we want to check against
// Reverse the numbers
// Multiply the digits in odd positions (1, 3, 5, etc.) by 2 and subtract 9 to all any result higher than 9
// Add all the numbers together
// The check digit (the last number of the card) is the amount that you would need to add to get a multiple of 10 (Modulo 10).
// Assume that the credit card number is 16 digits.
// To return a specified character from a string use charAt( ). See: Description.
// You do not need to reverse the numbers.
// Create a function that accesses the digits string at the right (in reverse).
// To create a number from a string in javascript use parseInt( ). See: Description.
// (x>9)*(-9) returns -9 if x is higher than 9.

  // Step																	Total
  // Original Number:	              4	5	5	6	7	3	7	5	8	6	8	9	9	8	5	5
  // Drop the last digit:	          4	5	5	6	7	3	7	5	8	6	8	9	9	8	5
  // Reverse the digits:	          5	8	9	9	8	6	8	5	7	3	7	6	5	5	4
  // Multiple odd digits by 2:	   10	8	18	9	16	6	16	5	14	3	14	6	10	5	8
  // Subtract 9 to numbers over 9:	1	8	9	9	7	6	7	5	5	3	5	6	1	5	8
  // Add all numbers:	1	8	9	9	7	6	7	5	5	3	5	6	1	5	8		85
  // Mod 10:	85 modulo 10 = 5 (last digit of card)

function checkCreditCard(num) {
  var numStr = num.toString();
  return numStr.length === 16;
}
checkCreditCard(4556737586899855);

function dropLastDigit(num) {
  var numStr = num.toString();
  var allButLast = numStr.slice(0, -1);
  return allButLast;
}
dropLastDigit(4556737586899855);


function reverseDigits(num) {
  var numStr = num.toString();
  var strArray = numStr.split("");
  var reverseNum = strArray.reverse();
  return reverseNum;
}
reverseDigits(455673758689985);

function multiByTwo(num) {
  var numStr = num.toString();
  var strArray = numStr.split("");
  var reverseNumArray = strArray.reverse();
  var a = parseInt(reverseNumArray[0] * 2);
  var b = parseInt(reverseNumArray[1]);
  var c = parseInt(reverseNumArray[2] * 2);
  var d = parseInt(reverseNumArray[3]);
  var e = parseInt(reverseNumArray[4] * 2);
  var f = parseInt(reverseNumArray[5]);
  var g = parseInt(reverseNumArray[6] * 2);
  var h = parseInt(reverseNumArray[7]);
  var i = parseInt(reverseNumArray[8] * 2);
  var j = parseInt(reverseNumArray[9]);
  var k = parseInt(reverseNumArray[10] * 2);
  var l = parseInt(reverseNumArray[11]);
  var m = parseInt(reverseNumArray[12] * 2);
  var n = parseInt(reverseNumArray[13]);
  var o = parseInt(reverseNumArray[14] * 2);

  var multiOfTwo = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o];

  return multiOfTwo;
}
multiByTwo(455673758689985);

function minusOverNine(num) {

}

function creditCardValid (num) {
  checkCreditCard(num);
  dropLastDigit(num);
}
creditCardValid(4556737586899855);

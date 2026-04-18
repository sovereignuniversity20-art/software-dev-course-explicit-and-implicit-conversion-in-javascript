/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false" === "true"); /* Used Boolean() to convert the result of the comparison to a boolean value */
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5; /* Used Number() to convert the string from the age variable to a number */
console.log("Total Age: " + totalAge);


let totalYears = "50" - 12; /* The string "50" is converted to a number before performing the subtraction due to implicit type conversion */
  console.log("Total Years: " + totalYears);

  let monetaryValue = 500;
  let stringValue = String(monetaryValue); /* Used String() to convert the number from the monetaryValue variable to a string */
  console.log("Monetary Value: " + stringValue);
  console.log("Type of Value: " + typeof stringValue); /* This will show that stringValue is now of type 'string' */

let accumulatedValue = undefined;
console.log("Accumulated Value: " + accumulatedValue); /* This will show NaN because undefined is not a number and cannot be used in arithmetic operations */

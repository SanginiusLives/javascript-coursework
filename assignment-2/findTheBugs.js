/*Snippet A: Count Down from 5 */

let count = 5;
while (count >= 0) {
    console.log(count);
    count = count - 1;
}
console.log("Blast off!");

/* The isse with this code is that it prints 0 as well since when dealing with numerical values 0 is alwasys included as a value. As such it will always print a 0 unless it is intentionally told to be left out. */

let newCount = 5;
while (newCount >= 1) {
    console.log(newCount);
    newCount = newCount - 1;
}
console.log("Blast off!");

/* Snippet B: Check if Passing */

let score = 60;

if (score > 60) {
    console.log("pass");
} else {
    console.log("fail");
}

/* The issue with this code is that when checking if the score is 60 or above, it is not being checked to see if the score is GREATER THAN OR EQUAL to 60, only if it is greater than. By that logic the code will always return the fail value if the variable for score is set to 60.*/

let newScore = 60;

if (newScore >= 60) {
    console.log("pass");
} else {
    console.log("fail");
}

// Snippet C: Add Up Numbers

let numbers = [10, 20, 30, 40];
let total = 0;

for (let i = 0; i <= numbers.length; i++) {
    total = total + numbers[i];
}

console.log("Total: " + total);

/* The issue with this code stems from the portion 'i <= numbers.length' as since javascript starts from 0, when it hits the 4th value, it is undefined. This means that the 4th value is read as an i of 3 so fixing it by removing the equal symbol will allow the code to work. */

let newNumbers = [10, 20, 30, 40];
let newTotal = 0;

for (let i = 0; i < newNumbers.length; i++) {
    newTotal = newTotal + newNumbers[i];
}

console.log("Total: " + newTotal);
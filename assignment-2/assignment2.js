const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log(total); // 55


/* 
What does the code do step by step?
The code snippet has an array of numbers 'numbers' and a variable 'totals' which is equal to 0. It loops through each number in the array and adds that number to total, saving that total value each time it does and it only stops once there are no more numbers to go through. Then it prints the total that we have after it is done with the loop.

What type of loop does the code use?
My code uses a standard for loop as it is the most effective one for adding all the numbers in an array. It is able to get the length of the array and use that as a metric for when to stop the loop, making sure it does not continously go through the loop.


What would happen if the array was empty?
If the array was empty, the total would print as 0. This is due to the fact that even if the array is empty, that array still holds a value and thus is not undefined.
*/

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

/* Unedited code */

var x = 85;
var g = "";

if (x >= 90) {
    g = "A";
} else {
    if (x >= 80) {
        g = "B";
    } else {
        if (x >= 70) {
            g = "C";
        } else {
            if (x >= 60) {
                g = "D";
            } else {
                g = "F";
            }
        }
    }
}

console.log(g);

/* Edited Code */

let numberGrade = 85;
let letterGrade = '';

if (numberGrade >= 90) {
    letterGrade = 'A';
} else if (numberGrade >= 80) {
    letterGrade = 'B';
} else if (numberGrade >= 70) {
    letterGrade = 'C';
} else if (numberGrade >= 60) {
    letterGrade = 'D';
} else {
    letterGrade = 'F';
}

console.log(letterGrade);

/* I changed the variable names for ease of understanding what both variables mean and thus, easier readability. Next, I structured the code into an else if statement to decrease the amount of nested if states inside of each other which decreases a bit of the bloat and further increases code readablity.*/

// Part 4 Write YOur Own Code

let num = 5;  // Test with different values: 5, -3, 0

// Write an if/else if/else statement that:
// - Prints "positive" if num is greater than 0
// - Prints "negative" if num is less than 0
// - Prints "zero" if num equals 0

// Your code here:

if (num > 0) {
    console.log("Positive")
} else if (num == 0) {
    console.log("Zero")
} else {
    console.log("Negative")
}


// Test by changing the value of num and running your code again

let numbers = [1, -2, 3, -4, 5];
let total = 0;

// Use a loop to go through each number in the array
// If the number is positive (greater than 0), add it to total
// Skip negative numbers and zero

// Your code here:

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        total = total + numbers[i]
    }
}


// Print the total
// Expected output: 9 (because 1 + 3 + 5 = 9)
console.log("Total of positive numbers: " + total);

// After it works, test with these arrays:
// [-1, -2, -3]     Expected output: 0
// [10, 20, 30]     Expected output: 60

let number = 3;

// Use a for loop that counts from 1 to 10
// Each time through the loop, print: num x counter = result
// For example, if num is 3:
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// ... and so on up to 3 x 10 = 30

// Your code here:

for (let i = 1; i < 11; i++) {
    let result = number * i
 console.log(`${number} x ${i} = ${result}`)
}


// After it works, change num to a different value and run again
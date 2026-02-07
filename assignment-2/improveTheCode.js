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
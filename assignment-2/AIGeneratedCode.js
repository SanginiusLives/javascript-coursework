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
My ccode uses a standard for loop as it is the most effective one for adding all the numbers in an array. It is able to get the length of the array and use that as a metric for when to stop the loop, making sure it does not continously go through the loop.


What would happen if the array was empty?
If the array was empty, the total would print as 0. This is due to the fact that even if the array is empty, that array still holds a value and thus is not undefined.
*/
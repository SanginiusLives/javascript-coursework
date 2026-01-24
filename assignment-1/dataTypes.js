let age = 25;
let fullName = 'Elijah Camacho';
let isEnrolled = true;
let futureGoal;
let completedisEnrolled = null;

console.log(`Age: ${age}, Type:${typeof age}`);
console.log(`Name: ${fullName}, Type:${typeof fullName}`);
console.log(`isEnrolled: ${isEnrolled}, Type:${typeof isEnrolled}`);
console.log(`Future Goal: ${futureGoal}, Type:${typeof futureGoal}`);
console.log(`isEnrolled Completed: ${completedisEnrolled}, Type:${typeof completedisEnrolled}`);

/* I would have to say for this task, I mostly learned about the the typeof feature. I did not know it was something that I could call to get the type of a specific variable.*/

const ageAsString = String(age);
console.log(`Original: ${age} (${typeof age}) → Converted: ${ageAsString} (${typeof ageAsString})`);
const nameBoolean = Boolean(fullName);
console.log(`Original: ${fullName} (${typeof fullName}) → Converted: ${nameBoolean} (${typeof nameBoolean})`);
const courseAsNumber = Number(isEnrolled);
console.log(`Original: ${isEnrolled} (${typeof isEnrolled}) → Converted: ${courseAsNumber} (${typeof courseAsNumber})`);
const completedAsNumber = Number(completedisEnrolled);
console.log(`Original: ${completedisEnrolled} (${typeof completedisEnrolled}) → Converted: ${completedAsNumber} (${typeof completedAsNumber})`);

/* The null value, completedisEnrolled, returns a value of 0 when converted to a number. Javascript returns this value because the language treats the value of null as a no value, because of this it returns it as a default value of 0, which I find very fascinating. */

const x = 2;
const y = 3;

const addition = x + y;
const subtraction = x - y;
const multiplication = x * y;
const division = x / y;
const modulus = x % y;

console.log(`Addition result: ${addition}`);
console.log(`Subtraction result: ${subtraction}`);
console.log(`Multiplication result: ${multiplication}`);
console.log(`Division result: ${division}`);
console.log(`Modulus result: ${modulus}`);

const divideByZero = x / 0;
console.log(`Divide By Zero result: ${divideByZero}`)

/* The value that I got when attempting to divide by zero was 'Infinity' this is likely because dividing by zero results in an unquantifiable value much like how we'd get with a calculator.*/

const hasCompletedAssignment = false;
const andResult = isEnrolled && hasCompletedAssignment;
const orResult = isEnrolled || hasCompletedAssignment;
const notIsEnrolled = !isEnrolled;
const notHasCompleted = !hasCompletedAssignment;

console.log(`isEnrolled AND hasCompletedAssignment = ${andResult}`);
console.log(`isEnrolled OR hasCompletedAssignment = ${orResult}`);
console.log(`Not isEnrolled = ${notIsEnrolled}`);
console.log(`Not hasCompletedAssignment = ${notHasCompleted}`);

/*

| A     | B     | A && B | A || B |
|-------|-------|--------|--------|
| true  | true  | true   | true   |
| true  | false | false  | true   |
| false | true  | false  | true   |
| false | false | false  | false  |

*/
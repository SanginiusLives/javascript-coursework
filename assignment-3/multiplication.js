const readline = require('readline');
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

rl.question('Please enter a number to multiply.', (number) => {
  tableGen();


function tableGen() {
    for(let i = 0; i < numArray.length; i++) {
        multiply(numArray[i]);
    }
}

function multiply(num) {
    let result = number * num;
    console.log(`${number} x ${num} = ${result}`);
}
})



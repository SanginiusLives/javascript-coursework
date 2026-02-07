const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

rl.question("Enter a number. ", (numberOne) => {
    rl.question("Enter a larger number. ", (numberTwo) => {
        if (numberOne >= 0 && numberTwo >= 0 ) {
            if (numberOne < numberTwo) {
                let primeNumbers = GeneratePrimes(numberOne, numberTwo);
                console.log(primeNumbers);
            } else {
                console.log('The first value must be smaller than the second value.')
            }
        } else {
            console.log('Both numbers must be positive integers');
        }

        function GeneratePrimes(startNum, endNum) {
            let primes = [];

            for (let number = Math.max(2, startNum); number <= endNum; number++) {
            let isPrime = true;    

                for (let i = 2; i <= Math.sqrt(number); i++) {
                    if (number % i === 0) {
                        isPrime = false;
                        break;
                    } 
                }

                if(isPrime) {
                    primes.push(number);
                }

                
            }

            return primes.join(", ");
        }



    })
})
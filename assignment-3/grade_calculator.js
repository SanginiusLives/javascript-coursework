const testArray = [75, 82, 60, 45, 95];

console.log(`Test Scores: ${testArray.join(", ")}`);
console.log(`Average Score: ${averageScores()}`);
console.log(`Highest Score: ${highScore()}`);
console.log(`Lowest Score: ${lowScore()}`);
console.log(`Number of Students Passed: ${passedStudents()}`);
console.log(`Number of Students Failed: ${failedStudents()}`);
console.log(`Students Who Failed: ${failedArray()}`);
console.log(`Students Who Scored 90 or Above: ${passedArray()}`);



function averageScores() {
    let sum = 0;

    for (let i = 0; i < testArray.length; i++) {
        sum += testArray[i];
    }

    const average = sum / testArray.length;

    return average;
}

function highScore() {
    let highest = 0;

    for (let i = 0; i < testArray.length; i++) {
        if (testArray[i] > highest) {
            highest = testArray[i]
        }
    }

    return highest;
}

function lowScore() {
    let lowest = 100;

    for (let i = 0; i < testArray.length; i++) {
        if (testArray[i] < lowest) {
            lowest = testArray[i]
        }
    }

    return lowest;
}

function passedStudents() {
    let passed = 0;

    for (let i = 0; i < testArray.length; i++) {
        if (testArray[i] >= 60) {
            passed = passed + 1;
        }
    }

    return passed;
}

function failedStudents() {
    let failed = 0;

     for (let i = 0; i < testArray.length; i++) {
        if (testArray[i] < 60) {
            failed = failed + 1;
        }
    }

    return failed;
}

function failedArray() {
    let failed = [];

    for (let i = 0; i < testArray.length; i++) {
        if (testArray[i] < 60) {
            failed.push(testArray[i]);
        }
    }

    return failed;
}

function passedArray() {
    let passed = [];

    for (let i = 0; i < testArray.length; i++) {
        if (testArray[i] >= 90) {
            passed.push(testArray[i]);
        }
    }

    return passed;
}
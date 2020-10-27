var fs = require('fs');

const addNumbersReducer = (currentNumber, nextNumber) => currentNumber + nextNumber;

const calculate = () => {
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            throw new Error(err)
        }

        const result = data
            .split('\r\n')
            .filter(e => e)
            .map(parseFloat)
            .reduce(addNumbersReducer);
        console.log('RESULT: ', result);
    });
}

calculate();
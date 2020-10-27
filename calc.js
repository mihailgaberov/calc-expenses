var fs = require('fs');

const addNumbersReducer = (currentNumber, nextNumber) => currentNumber + nextNumber;

calculate = () => {
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            throw new Error(err)
        }

        const arr = data.split('\r\n');
        const result = arr
            .filter(e => e)
            .map(parseFloat)
            .reduce(addNumbersReducer);
        console.log('RESULT: ', result);
    });
}

calculate();
var fs = require('fs');

calculate = () => {
    fs.readFile('data.txt', 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        const arr = data.split('\r\n');
        const result = arr
            .filter(e => e)
            .map(parseFloat)
            .reduce((curr, next) => curr + next);
        console.log('RESULT: ', result);
    });
}

calculate();
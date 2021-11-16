const fs = require('fs')

function day1Data() {
    const data = fs.readFileSync('./day1.txt', 'utf8').trim();
    return data.split('\n').map(n => parseInt(n));
}

module.exports = {day1Data};

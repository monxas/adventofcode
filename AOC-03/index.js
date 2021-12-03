var fs = require('graceful-fs')


// fetch the data from the API
function getData() {
   
    const response = fs.readFileSync('AOC-02/data.txt', 'utf8');
    const body = response;
    // array of lines linebreak
    const lines = body.split('\n');

    firstPart(lines);
    secondPart(lines);
};
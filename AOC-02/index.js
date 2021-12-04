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

function firstPart(lines) {
    
    let depth = 0;
    let forward = 0;

    lines.forEach(line => {
        let rule = line.split(' ');
        switch (rule[0]) {
            case 'forward':
                forward += +rule[1];
                break;
            case 'up':
                depth -= +rule[1];
                break;
            case 'down':
                depth += +rule[1];
                break;
        }
    });
    console.log(`depth: ${depth}, forward: ${forward}, result: ${depth * forward} 🎉`);
}

function secondPart(lines) {
     
    let aim = 0;
    let forward = 0;
    let depth = 0;

    lines.forEach(line => {
        let rule = line.split(' ');
        switch (rule[0]) {
            case 'forward':
                forward += +rule[1];
                depth = depth + aim * +rule[1];
                break;
            case 'up':
                aim -= +rule[1];
                break;
            case 'down':
                aim += +rule[1];
                break;
        }
    });
    console.log(`depth: ${depth}, forward: ${forward}, result: ${depth * forward} 🎉`);

}
getData();
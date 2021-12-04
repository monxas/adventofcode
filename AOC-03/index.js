var fs = require('graceful-fs')


// fetch the data from the API
function getData() {
   
    const response = fs.readFileSync('AOC-03/data.txt', 'utf8');

    // array of lines linebreak
    const lines = response.split('\r\n');
    firstPart(lines);
    // secondPart(lines);
};

firstPart = (lines) => {
    let positions = [];
    lines[0].split('').forEach(x => {
        positions.push({a: 0, b: 0});
    });
    lines.forEach(line => {
        let row = line.split('');
        row.forEach((position, i) => {
            if (position === '1') {
                positions[i].a++;
            } else {
                positions[i].b++;
            }
        });
    });
    console.log(positions);
    const gamma = positions.map(position => {
        return position.a > position.b ? '1' : '0';
    });
    const epsilon = positions.map(position => {
        return position.a < position.b ? '1' : '0';
    });
    console.log(gamma.join(''));
    console.log(epsilon.join(''));

    console.log('Power consumption: ', parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2), ' 🎉');
}

getData();
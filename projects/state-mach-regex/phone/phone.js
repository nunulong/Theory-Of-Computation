var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

// Come up with the phone regex
const reg = /(\d)+(\)?)(^-|^\s)?(\d)/g;

// This code reads a line at a time from stdin
rl.on('line', function(line) {
    // Find matches
    const data = line.match(reg);
    // If match found, print number with no spaces, parens, or dashes
    if (data) {
        console.log(data.join(''));
    } else {
        console.log('No Number Found');
    }
    // Else print that no number was found
});

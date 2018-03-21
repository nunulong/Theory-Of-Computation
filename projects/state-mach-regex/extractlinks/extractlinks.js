const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error('usage: extractlinks inputfile');
    process.exit(1);
}

const filename = args[0];

// Read file
const data = fs.readFileSync(filename, { encoding: 'utf8' });

// Set up regex
const reg = /https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g;

// Find matches
const match = data.match(reg);

// Print all matches
console.log(match);

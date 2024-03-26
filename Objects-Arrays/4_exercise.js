const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

const people = [
    ["Hans", "Muller", 22],
    ["Georg", "Huber", 37],
    ["Fritz", "Mayr", 19],
];

const column = {
    "hans": 0,
    "georg": 1,
    "fritz": 2,
};

async function execute() {
    const columnName = await prompt("Please enter column name (Hans, Georg, Fritz): ");
    const row = await prompt("Please enter row number (1 - 3): ");
    console.log(people[column[columnName.toLowerCase()]][row - 1]);
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
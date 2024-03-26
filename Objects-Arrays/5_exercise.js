const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

const people = {
    "hans": ["Hans", "Muller", 22],
    "georg": ["Georg", "Huber", 37],
    "fritz": ["Fritz", "Mayr", 19],
};

async function execute() {
    const columnName = await prompt("Please enter column name (Hans, Georg, Fritz): ");
    const row = await prompt("Please enter row number (1 - 3): ");
    console.log(people[columnName.toLowerCase()][row - 1]);
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
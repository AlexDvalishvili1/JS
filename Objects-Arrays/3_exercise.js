const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

const people = [
    ["Hans", "Muller", 22],
    ["Georg", "Huber", 37],
    ["Fritz", "Mayr", 19],
]

async function execute() {
    const column = await prompt("Please enter column number (1 - 3): ");
    const row = await prompt("Please enter row number (1 - 3): ");
    console.log(people[column - 1][row - 1]);
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());

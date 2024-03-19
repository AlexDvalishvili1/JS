const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const digit1 = await prompt("Please enter first digit: ");
    const digit2 = await prompt("Please enter second digit: ");
    const digit3 = await prompt("Please enter third digit: ");
    const digit4 = await prompt("Please enter fourth digit: ");

    let highest;
    highest = parseFloat(digit1) > parseFloat(digit2) ? parseFloat(digit1) : parseFloat(digit2);
    highest = highest > parseFloat(digit3) ? highest : parseFloat(digit3);
    highest = highest > parseFloat(digit4) ? highest : parseFloat(digit4);

    console.log(highest)
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
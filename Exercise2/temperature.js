const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const temperature = await prompt("Please enter degree: ");

    if (temperature <= 0) {
        console.log("Cold");
    } else if (temperature > 25) {
        console.log("Hot");
    } else {
        console.log("Warm");
    }
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const password = "scoobydoo1";
    const input = await prompt("Please enter password: ");

    console.log("Password is",input === password ? "correct" : "incorrect")
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());
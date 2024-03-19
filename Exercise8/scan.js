const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const userNumber = await prompt("Please enter number: ");

    const isFloat = Number(userNumber) % 1 !== 0;
    console.log("Number is float: " + isFloat);
    if (!isFloat) {
        const numberType = Number(userNumber) % 2 === 0 ? "Even" : "Odd";
        console.log("Number type is:", numberType);
    }

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
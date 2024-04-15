const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const day = await prompt("Please enter day number: ");

    if (day == 1) {
        console.log("Monday");
    } else if (day == 2) {
        console.log("Tuesday");
    } else if (day == 3) {
        console.log("Wednesday");
    } else if (day == 4) {
        console.log("Thursday");
    } else if (day == 5) {
        console.log("Friday");
    } else if (day == 6) {
        console.log("Saturday");
    } else if (day == 7) {
        console.log("Sunday");
    } else {
        console.log("Incorrect number");
    }
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());
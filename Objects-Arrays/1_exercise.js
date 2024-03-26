const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));


const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

async function execute() {
    const day = await prompt("Please enter number (1 - 7): ");
    console.log(week[day - 1]);
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
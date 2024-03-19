const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const day = await prompt("Please enter day number: ");

    switch (day) {
        case "1":
        console.log("Monday");
        break;
        case "2":
        console.log("Tuesday");
        break;
        case "3":
        console.log("Wednesday");
        break;
        case "4":
        console.log("Thursday");
        break;
        case "5":
        console.log("Friday");
        break;
        case "6":
        console.log("Saturday");
        break;
        case "7":
        console.log("Sunday");
        break;
        default:
        console.log("Incorrect number");
    }
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());
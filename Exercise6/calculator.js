const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const digit1 = await prompt("Please enter first digit: ");
    const digit2 = await prompt("Please enter second digit: ");
    const action = await prompt("Please enter action (+, -, *, /, **): ");

    switch (action) {
        case "+":
            console.log(digit1, action, digit2, "=", Number(digit1) + Number(digit2));
            break;
        case "-":
            console.log(digit1, action, digit2, "=", Number(digit1) - Number(digit2));
            break;
        case "*":
            console.log(digit1, action, digit2, "=", Number(digit1) * Number(digit2));
            break;
        case "/":
            console.log(digit1, action, digit2, "=", Number(digit1) / Number(digit2));
            break;
        case "**":
            console.log(digit1, action, digit2, "=", Number(digit1) ** Number(digit2));
            break;
        default:
            console.log("You entered wrong operator :(")
    }
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
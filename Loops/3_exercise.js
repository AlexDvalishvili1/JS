const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    let input = async () => {
        let check;
        let number;
        do {
            number = parseInt(await prompt("Please enter number (1 - 100): "));
            check = number >= 1 && number <= 100;
        } while (!check);
        return number;
    };
    let userNumber = await input();
    console.clear();
    console.log("Game started!")
    let check = false;
    let tries = 0;
    while (!check) {
        let playerNumber = await input();
        if (playerNumber === userNumber) {
            check = true;
            console.log("You win!");
        } else {
            userNumber > playerNumber ? console.log("More") : console.log("Less");
        }
        tries++;
    }
    console.log("Player tries: " + tries);
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
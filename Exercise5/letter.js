const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const letter = await prompt("Please enter letter: ");

    switch (letter.toLowerCase()) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log("Vowel");
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
        case "n":
        case "p":
        case "q":
        case "r":
        case "s":
        case "t":
        case "v":
        case "w":
        case "x":
        case "y":
        case "z":
            console.log("Consonant");
            break;
        default:
            console.log("Not english letter");
    }
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
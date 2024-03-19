const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const letter = await prompt("Please enter letter: ");

    switch (letter.toLowerCase()) {
        case "a":
            console.log("Vowel");
            break;
        case "e":
            console.log("Vowel");
            break;
        case "i":
            console.log("Vowel");
            break;
        case "o":
            console.log("Vowel");
            break;
        case "u":
            console.log("Vowel");
            break;
        case "b":
            console.log("Consonant");
            break;
        case "c":
            console.log("Consonant");
            break;
        case "d":
            console.log("Consonant");
            break;
        case "f":
            console.log("Consonant");
            break;
        case "g":
            console.log("Consonant");
            break;
        case "h":
            console.log("Consonant");
            break;
        case "j":
            console.log("Consonant");
            break;
        case "k":
            console.log("Consonant");
            break;
        case "l":
            console.log("Consonant");
            break;
        case "m":
            console.log("Consonant");
            break;
        case "n":
            console.log("Consonant");
            break;
        case "p":
            console.log("Consonant");
            break;
        case "q":
            console.log("Consonant");
            break;
        case "r":
            console.log("Consonant");
            break;
        case "s":
            console.log("Consonant");
            break;
        case "t":
            console.log("Consonant");
            break;
        case "v":
            console.log("Consonant");
            break;
        case "w":
            console.log("Consonant");
            break;
        case "x":
            console.log("Consonant");
            break;
        case "y":
            console.log("Consonant");
            break;
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
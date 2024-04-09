const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

const people = [
    {fname: "Hans", lname: "Muller", age: 22},
    {fname: "Georg", lname: "Huber", age: 37},
    {fname: "Fritz", lname: "Mayr", age: 19},
];

const columnNames = {
    "hans": 0,
    "georg": 1,
    "fritz": 2,
}

const rowKeys = {
    1: 'fname',
    2: 'lname',
    3: 'age',
}

async function execute() {
    console.table(people);
    const column = await prompt("Please enter column name (Hans, Georg, Fritz): ");
    const row = await prompt("Please enter row number (1 - 3): ");
    console.log(people[columnNames[column.toLowerCase()]][rowKeys[row]]);
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
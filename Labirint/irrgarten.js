const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

const labirint = [
    [' ', ' ', ' ', ' ', ' ', ' ', '#'],
    [' ', '#', ' ', '#', '#', ' ', '#'],
    [' ', '#', ' ', '#', '#', ' ', '#'],
    [' ', '#', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '#', '#', '#', ' '],
    [' ', '#', ' ', '#', '#', '#', ' '],
    [' ', '#', ' ', ' ', ' ', ' ', ' '],
];

const win = [6, 6];

async function execute() {
    let game = true;
    let x = 0;
    let y = 0;
    while (game) {
        labirint[y][x] = 'X';
        labirint[win[1]][win[0]] = 'O';

        for (let column of labirint) {
            let line = "";
            for (let row of column) {
                line += "[" + row + "]";
            }
            console.log(line);
        }
        if (x === win[0] && y === win[0]) {
            console.log("You win!");
            game = false;
        } else {
            let check;
            do {
                const direction = await prompt('Please enter next step ("u" - up, "d" - down, "l" - left, "r" - right, "x" - break): ');
                switch (direction.toLowerCase()) {
                    case 'x':
                        console.log("Good luck :)");
                        check = true;
                        game = false;
                        break;
                    case 'u':
                        if (y - 1 > 0 && labirint[y - 1][x] !== '#') {
                            labirint[y][x] = ' ';
                            y--;
                            check = true;
                        }
                        break;
                    case 'd':
                        if (y + 1 < labirint[0].length && labirint[y + 1][x] !== '#') {
                            labirint[y][x] = ' ';
                            y++;
                            check = true;
                        }
                        break;
                    case 'l':
                        if (x - 1 > 0 && labirint[y][x - 1] !== '#') {
                            labirint[y][x] = ' ';
                            x--;
                            check = true;
                        }
                        break;
                    case 'r':
                        if (x + 1 < labirint[0].length && labirint[y][x + 1] !== '#') {
                            labirint[y][x] = ' ';
                            x++;
                            check = true;
                        }
                        break;
                    default:
                        console.log("Incorrect input :(");
                }

            } while (!check);
        }
    }
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
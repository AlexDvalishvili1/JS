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
    [' ', '#', '#', '#', '#', '#', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

const win = {y: 6, x: 6};
const whole = {y: 4, x: 1};
const box = {y: 2, x: 2};

async function execute() {
    let game = true;
    let x = 0;
    let y = 0;
    while (game) {
        console.clear();
        labirint[y][x] = 'X';
        labirint[win.y][win.x] = 'W';
        labirint[whole.y][whole.x] = 'O';
        labirint[box.y][box.x] = '∎';

        for (let column of labirint) {
            let line = "";
            for (let row of column) {
                line += "[" + row + "]";
            }
            console.log(line);
        }
        if (x === win.x && y === win.y) {
            console.log("You win!");
            game = false;
        } else if (x === whole.x && y === whole.y) {
            console.log("You get in whole! You loose :(");
            game = false;
        } else {
            let check;
            do {
                const direction = await prompt('Please enter next step ("u" - up, "d" - down, "l" - left, "r" - right, "x" - break): ');
                let stepCheck = true;
                switch (direction.toLowerCase()) {
                    case 'x':
                        console.log("Good luck :)");
                        check = true;
                        game = false;
                        break;
                    case 'u':
                        if (y - 1 >= 0 && labirint[y - 1][x] !== '#') {
                            stepCheck = true;
                            if (labirint[y - 1][x] === '∎') {
                                stepCheck = false;
                                if (y - 2 >= 0 && (labirint[y - 2][x] === ' ' || labirint[y - 2][x] === 'W')) {
                                    labirint[box.y][box.x] = ' ';
                                    box.y--;
                                    stepCheck = true;
                                }
                            }
                            if (stepCheck) {
                                labirint[y][x] = ' ';
                                y--;
                                check = true;
                            }
                        }
                        break;
                    case 'd':
                        if (y + 1 < labirint.length && labirint[y + 1][x] !== '#') {
                            stepCheck = true;
                            if (labirint[y + 1][x] === '∎') {
                                stepCheck = false;
                                if (y + 2 < labirint.length && (labirint[y + 2][x] === ' ' || labirint[y + 2][x] === 'W')) {
                                    labirint[box.y][box.x] = ' ';
                                    box.y++;
                                    stepCheck = true;
                                }
                            }
                            if (stepCheck) {
                                labirint[y][x] = ' ';
                                y++;
                                check = true;
                            }
                        }
                        break;
                    case 'l':
                        if (x - 1 >= 0 && labirint[y][x - 1] !== '#') {
                            stepCheck = true;
                            if (labirint[y][x - 1] === '∎') {
                                stepCheck = false;
                                if (x - 2 >= 0 && (labirint[y][x - 2] === ' ' || labirint[y][x - 2] === 'W')) {
                                    labirint[box.y][box.x] = ' ';
                                    box.x--;
                                    stepCheck = true;
                                }
                            }
                            if (stepCheck) {
                                labirint[y][x] = ' ';
                                x--;
                                check = true;
                            }
                        }
                        break;
                    case 'r':
                        if (x + 1 < labirint.length && labirint[y][x + 1] !== '#') {
                            stepCheck = true;
                            if (labirint[y][x + 1] === '∎') {
                                stepCheck = false;
                                if (x + 2 >= 0 && (labirint[y][x + 2] === ' ' || labirint[y][x + 2] === 'W')) {
                                    labirint[box.y][box.x] = ' ';
                                    box.x++;
                                    stepCheck = true;
                                }
                            }
                            if (stepCheck) {
                                labirint[y][x] = ' ';
                                x++;
                                check = true;
                            }
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
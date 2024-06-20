import {readFile, writeFile, readFileSync, writeFileSync} from 'node:fs';

import readline from "readline";

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

// Callback

readFile('data.json', 'utf8', async (err, data) => {
    if (err) {
        console.log('Error reading file');
    } else {
        let main = true;
        const products = JSON.parse(data);
        while (main) {
            let check;
            let userInput;
            do {
                userInput = await prompt('What would you like to do? ("a" - add, "f" - find, "x" - save and exit)')
                userInput = userInput.toLowerCase();
                check = userInput === 'a' || userInput === 'f' || userInput === 'x';
            } while (!check);

            switch (userInput) {
                case 'x':
                    console.log('Saving...');
                    const changes = JSON.stringify(products, null, 2);
                    writeFile('data.json', changes, 'utf8', (err) => {
                        err ? console.log('Error writing file') : console.log('File saved successfully');
                    })
                    setTimeout(() => console.log('Exiting...'), 2000);
                    setTimeout(() => console.log('Bye :)'), 2500);
                    main = false;
                    break;
                case 'a':
                    const productNr = await prompt('Enter product number: ');
                    const productName = await prompt('Enter product name: ');
                    const productPrice = await prompt('Enter product price: ');
                    let result = {
                        productNr,
                        productName,
                        productPrice
                    };
                    products.push(result);
                    break;
                case 'f':
                    const searchProductNr = await prompt('Enter product number: ');
                    let founded = false;
                    for (let object of products) {
                        if (searchProductNr === object.productNr) {
                            console.log(object);
                            founded = true;
                        }
                    }
                    if (!founded) {
                        console.log('Nothing found :(');
                    }
                    break;
            }
        }
    }
})

// Synchronus

// try {
//     let main = true;
//     const data = readFileSync('data.json', 'utf8');
//     const products = JSON.parse(data);
//     while (main) {
//         let check;
//         let userInput;
//         do {
//             userInput = await prompt('What would you like to do? ("a" - add, "f" - find, "x" - save and exit)')
//             userInput = userInput.toLowerCase();
//             check = userInput === 'a' || userInput === 'f' || userInput === 'x';
//         } while (!check);
//         switch (userInput) {
//             case 'x':
//                 console.log('Saving...');
//                 const changes = JSON.stringify(products, null, 2);
//                 writeFileSync('data.json', changes, 'utf8');
//                 setTimeout(() => console.log('Saved.'), 2000);
//                 setTimeout(() => console.log('Exiting...'), 2000);
//                 setTimeout(() => console.log('Bye :)'), 2500);
//                 main = false;
//                 break;
//             case 'a':
//                 const productNr = await prompt('Enter product number: ');
//                 const productName = await prompt('Enter product name: ');
//                 const productPrice = await prompt('Enter product price: ');
//                 let result = {
//                     productNr,
//                     productName,
//                     productPrice
//                 };
//                 products.push(result);
//                 break;
//             case 'f':
//                 const searchProductNr = await prompt('Enter product number: ');
//                 let founded = false;
//                 for (let object of products) {
//                     if (searchProductNr === object.productNr) {
//                         console.log(object);
//                         founded = true;
//                     }
//                 }
//                 if (!founded) {
//                     console.log('Nothing found :(');
//                 }
//                 break;
//         }
//     }
// } catch (err) {
//     console.log('Error processing file')
// }
//const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min); //Arg. max included thanks w3schools.com
//const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min); //Arg. max is not included thanks w3schools.com

//Lets extend it
const getRandom = (min, max, decimal) => {
    return result = decimal ? Math.random() * (max - min + 1) + min : Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandom(2, 5, false));
console.log(getRandom(2, 5, true));

//JavaScript is the best
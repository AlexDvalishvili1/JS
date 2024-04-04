const bestTeacher = {
    firstname: "Markus",
    lastname: "Kurzmann",
    hasBeard: true,
};

console.log(Object.keys(bestTeacher));

//2nd way
let entries = Object.entries(bestTeacher);
let data = entries.map(([key]) => {
    return key;
});
console.log(data);

//We know entries from JAVA also we learnt HashMaps
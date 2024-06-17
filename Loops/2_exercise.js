const people = [
    {firstName: "Alex", lastName: "Dvalishvili", age: 16},
    {firstName: "Elon", lastName: "Musk", age: 52},
    {firstName: "Cristiano", lastName: "Ronaldo", age: 39},
];

for (let person of people) {
    for (let info in person) {
        console.log(person[info]);
    }
}
const myFans = {
    fan1: "Cristiano Ronaldo",
    fan2: "Conor McGregor",
    fan3: "Elon Musk",
    fan4: "Peter Parker",
    fan5: "Mr.Proper", //A man from cleaning agent advertisement
    bestFan: function () {
        return "Adnan";
    },
};

console.log(JSON.stringify(myFans));

//AND I KNOW THAT THIS METHOD DOES NOT DISPLAY FUNCTIONS AND IF YOU WANT TO DISPLAY IT YOU NEED TO CONVERT IT TO STRING BEFORE
//THANKS W3SCHOOLS.COM

myFans.bestFan = myFans.bestFan.toString();

//ONE MORE TIME
console.log(JSON.stringify(myFans));

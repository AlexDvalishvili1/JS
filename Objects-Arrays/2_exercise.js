const car = {
    brand: "Mercedes",
    model: "C-Class",
    year: 2013,
    coupe: true,
    info: function () {
        console.log(`Sexiest car ever: ${this.brand} ${this.model} ${this.year}`);
    },
    //info: () =>
    //    console.log(`Sexiest car ever: ${car.brand} ${car.model} ${car.year}`), //Without "this" )))
};

car.info();
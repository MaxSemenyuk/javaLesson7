// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, year, maxSpeed, engine){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive= console.log(`I drive with ${this.maxSpeed} max speed!`);
//     this.info = console.log(`model - ${this.model}, producer - ${this.producer}, year - ${this.year}, maxSpeed - ${this.maxSpeed}, engine - ${this.engine}`)
//     this.increaseMaxSpeed = value => this.maxSpeed + value
//     this.changeYear = newYear => this.year = newYear
//     this.addDriver = function () {this.driver = arguments}
// }
// let newCar = new Car('XT', 'BMW', 2000, 230, 300);
// newCar.drive;
// newCar.info;
// newCar.changeYear(2015)
// console.log(newCar.year)
// newCar.increaseMaxSpeed(100)
// console.log(newCar.maxSpeed)
// newCar.addDriver('Max', 'Mad', 230)
// console.log(newCar.driver)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive() {
        console.log('I drive with ' + this.maxSpeed + ' max speed!')
    }

    info() {
        console.log('model - ' + this.model + ', producer - ' + this.producer + ', year - ' + this.year + ', maxSpeed - ' + this.maxSpeed + ', engine - ' + this.engine)
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed
    }

    changeYear(newValue) {
        this.year = newValue
    }

    addDriver(driver) {
        this.driver = driver
    }

}

let newCar = new Car('XT', 'BMW', 2000, 230, 300);
newCar.drive()
newCar.info()
newCar.changeYear(2015)
console.log(newCar.year)
newCar.increaseMaxSpeed(100)
console.log(newCar.maxSpeed)
newCar.addDriver({name : 'Max', surname: 'Mad', age: 33})
console.log(newCar.driver)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Sinderella {
    constructor(name, age, feetSize) {
        this.name = name;
        this.age = age;
        this.feetSize = feetSize;
    }
}

class Prince {
    constructor(name, age, sinderellaFeetSize) {
        this.name = name;
        this.age = age;
        this.sinderellaFeetSize = sinderellaFeetSize;
    }
}

let sinderellas = [];
let sinderella1 = new Sinderella('Vika', 27, 39);
let sinderella2 = new Sinderella('Lera', 48, 41);
let sinderella3 = new Sinderella('Katya', 25, 37);
let sinderella4 = new Sinderella('Vlada', 28, 35);
let sinderella5 = new Sinderella('Dusya', 35, 44);
let sinderella6 = new Sinderella('Sasha', 27, 38);
let sinderella7 = new Sinderella('Barbara', 33, 36);
let sinderella8 = new Sinderella('babaKira', 65, 40);
let sinderella9 = new Sinderella('Svetka', 18, 42);
let sinderella10 = new Sinderella('Masha', 23, 41);
sinderellas.push(sinderella1, sinderella2, sinderella3, sinderella4, sinderella5, sinderella6, sinderella7, sinderella8, sinderella9, sinderella10)
let princePetya = new Prince('Petya', 30, 37)
sinderellas.find(value => {
    if (princePetya.sinderellaFeetSize === value.feetSize) return console.log(value.name + ' you my princess!!')
})
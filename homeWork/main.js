// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone
// }
// let base = [];
// let user1 = new User(1, 'Vasya', 'Pupkin', 'VasyaPupkin@gmail.com', 12345);
// let user2 = new User(2, 'Petya', 'Sapkin', 'PetyaSapkin@yahoo.com', 12648);
// let user3 = new User(3, 'Katya', 'Pupkina', 'KatyaPupkina@gmail.com', 26365);
// let user4 = new User(4, 'Lera', 'Sapkina', 'LeraSapkina@gmail.com', 85746);
// let user5 = new User(5, 'Sasha', 'Kurkin', 'SashaKurkin@yahoo.com', 95735);
// let user6 = new User(6, 'Dasha', 'Kurkina', 'DahsaKurkina@gmail.com', 98763);
// let user7 = new User(7, 'Dima', 'Drinkin', 'DimaDrinkin@yahoo.com', 47602);
// let user8 = new User(8, 'Masha', 'Drinkina', 'MashaDrinkina@gmail.com', 24546);
// let user9 = new User(9, 'Kolya', 'Murkin', 'KolyaMurkin@yahoo.com', 46795);
// let user10 = new User(10, 'Dusya', 'Murkina', 'DusyaMurkina@yahoo.com', 38934);
// base.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
// console.log(base)

// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(base.filter(item => item.id % 2 === 0));

// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(base.sort((a, b) => b.id - a.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let baseClients = [];
let client1 = new Client(1, 'Vasya', 'Pupkin', 'VasyaPupkin@gmail.com', 12345, ['milk', 'bread']);
let client3 = new Client(3, 'Katya', 'Pupkina', 'KatyaPupkina@gmail.com', 26365, ['bread', 'sugar', 'vodka', 'yogurt']);
let client2 = new Client(2, 'Petya', 'Sapkin', 'PetyaSapkin@yahoo.com', 12648, ['meat', 'sugar', 'juice']);
let client4 = new Client(4, 'Lera', 'Sapkina', 'LeraSapkina@gmail.com', 85746, ['vodka', 'coca-cola', 'chips']);
let client5 = new Client(5, 'Sasha', 'Kurkin', 'SashaKurkin@yahoo.com', 95735, ['beer', 'more beer', 'vodka', 'meat', 'sugar']);
let client6 = new Client(6, 'Dasha', 'Kurkina', 'DahsaKurkina@gmail.com', 98763, ['water', 'bread', 'cheese', 'cookies', 'yogurt', 'species']);
let client7 = new Client(7, 'Dima', 'Drinkin', 'DimaDrinkin@yahoo.com', 47602, ['cookies', 'yogurt', 'species']);
let client8 = new Client(8, 'Masha', 'Drinkina', 'MashaDrinkina@gmail.com', 24546, ['spagetti', 'tomato', 'cheese', 'meat']);
let client9 = new Client(9, 'Kolya', 'Murkin', 'KolyaMurkin@yahoo.com', 46795, ['redbull', 'vodka', 'shampaign']);
let client10 = new Client(10, 'Dusya', 'Murkina', 'DusyaMurkina@yahoo.com', 38934, ['fish', 'meat']);
baseClients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(baseClients.sort((a, b) => a.order.length - b.order.length));
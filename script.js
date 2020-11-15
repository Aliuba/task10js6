// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

let numbers = [2, 4, 6, 51, 23, 20, 14, 78, 19, 555, 1, 0, 2, -5, -6, -9, 50, -3, 25, 63];

let sortIncrease = numbers.sort((a, b) => a - b) //зростання
console.log(sortIncrease)

let sortDecrease = numbers.sort((a, b) => b - a) //спадання
console.log(sortDecrease)

// -- при помощи filter получить числа кратные 3

let multiplyThree = numbers.filter(val => val % 3 == 0)
console.log(multiplyThree)

// -- при помощи filter получить числа кратные 10

let multiplyTen = numbers.filter(val => val % 10 == 0);
console.log(multiplyTen);

// // -- перебрать (проитерировать) массив при помощи foreach()

numbers.forEach(element => {
    console.log(element);
});

// -- перебрать массив при помощи map() и получить новый массив
//  в котором все значения будут в 3 раза больше

let riseThree = numbers.map(val => val * 3);
console.log(riseThree);


// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.



let strings = [
    "fff", "ab", "abc", "cbd", "htraaaaa", "abcde", "faaa", "fbaa", "fbc", "fbk", "klm", "kln", "kkl",
    "ghfhf", "gjghj", "po", "pow"
];

// let strSort = strings.sort();
// console.log(strSort)

// -- отсортировать его по алфавиту  в нисходящем порядке.

let strSort = strings.sort((a, b) => {
    if (a > b) {
        return -1;
    }
    return 1;
});
console.log(strSort)

// -- отфильтровать слова длиной менее 4х символов

let symbFor = strings.filter(val => val.length < 4)
console.log(symbFor)

// -- перебрать массив при помощи map() и получить новый массив

let strMap = strings.map((val, ind) => val + " " + ind)
console.log(strMap)


//  в котором все значения будут со знаком "!" в конце

let strMap = strings.map(val => val + "!")
console.log(strMap)


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [{ name: 'vasya', age: 31, status: false }, { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true }, { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true }, { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false }, { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true }, { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
// - відсортувати його за  віком (зростання , а потім окремо спадання)

let s = JSON.stringify(users)
let users1 = JSON.parse(s)

let sortIncrease = users1.sort((a, b) => {
    return a.age - b.age;
});
console.log(sortIncrease)

let sortDecrease = users.sort((a, b) => {
    return b.age - a.age;
});
console.log(sortDecrease)

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

let s = JSON.stringify(users);
let users1 = JSON.parse(s);

let sortIncrease = users1.sort((a, b) => {
    return a.name.length - b.name.length;
});
console.log(sortIncrease);

let sortDecrease = users.sort((a, b) => {
    return b.name.length - a.name.length;
});
console.log(sortDecrease);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор 
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив 
// (первинний масив залишиться без змін)

let s = JSON.stringify(users);
let users1 = JSON.parse(s);

let id = users1.map((val, ind) => val.ID = ind + val.name.length + val.age);
console.log(id);
console.log(users1);


// - відсортувати його за індентифікатором

let usSort = users1.sort((a, b) => a.ID - b.ID);
console.log(usSort);

// -- написать функцию калькулятора с 2мя числами и колбеком

function calculate(a, b, callback) {
    callback(a, b);
};

let add = (a, b) => console.log(a + "+" + b + "=" + (+a + +b));
let mines = (a, b) => console.log(a + "-" + b + "=" + (a - b));
let multiply = (a, b) => console.log(a + "*" + b + "=" + a * b);
let divide = (a, b) => console.log(a + "/" + b + "=" + a / b);
calculate(36, 5, add);
calculate(36, 5, mines);
calculate(36, 5, multiply);
calculate(36, 5, divide);

// --наисать функцию калькулятора с 3 мя числами и колбеком

function calculate(a, b, c, callback) {
    callback(a, b, c);
};

let add = (a, b, c) => console.log(a + "+" + b + "+" + c + "=" + (+a + +b + +c));
let mines = (a, b, c) => console.log(a + "-" + b + "-" + b + "=" + (a - b - c));
let multiply = (a, b, c) => console.log(a + "*" + b + "*" + c + "=" + a * b * c);
let divide = (a, b, c) => console.log(a + "/" + b + "/" + c + "=" + a / b / c);
calculate(25, 5, 5, add);
calculate(25, 5, 5, mines);
calculate(25, 5, 5, multiply);
calculate(25, 5, 5, divide);

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================




let cars = [{
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    },
    {
        producer: "bmw",
        model: "320",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
];
// Відфільтрувати масив за наступними крітеріями :

// - двигун більше 3х літрів
console.log(cars.filter(vol => vol.volume > 3))

// - двигун = 2л
console.log(cars.filter(vol => vol.volume = 2))

// - виробник мерс
console.log(cars.filter(vol => vol.producer = "mercedes"))

// - двигун більше 3х літрів + виробник мерседес
console.log(cars.filter(vol => ((vol.volume > 3) && (vol.producer = "mercedes"))))

// - двигун більше 3х літрів + виробник субару
console.log(cars.filter(vol => ((vol.volume > 3) && (vol.producer = "subaru"))))

// - сили більше ніж 300
console.log(cars.filter(vol => vol.power > 300))

// - сили більше ніж 300 + виробник субару
console.log(cars.filter(vol => ((vol.power > 300) && (vol.producer = "subaru"))))

// - мотор серіі ej
console.log(cars.filter(vol => vol.engine.startsWith("ej")))

// - сили більше ніж 300 + виробник субару + мотор серіі ej
console.log(cars.filter(vol => ((vol.power > 300) && vol.engine.startsWith("ej"))))

// - двигун меньше 3х літрів + виробник мерседес
console.log(cars.filter(vol => ((vol.volume < 3) && (vol.producer = "mercedes"))))

// - двигун більше 2л + сили більше 250
console.log(cars.filter(vol => ((vol.volume > 2) && (vol.power > 250))))

// - сили більше 250  + виробник бмв
console.log(cars.filter(vol => ((vol.power > 250) && (vol.producer = "bmw"))))


-
// взять слдующий массив
let usersWithAddress = [{
        id: 1,
        name: 'vasya',
        age: 31,
        status: false,
        address: { city: 'Lviv', street: 'AShevchenko', number: 16 }
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true,
        address: { city: 'Lviv', street: 'Shevchenko', number: 1 }
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: { city: 'Lviv', street: 'BShevchenko', number: 121 }
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false,
        address: { city: 'Lviv', street: 'DShevchenko', number: 90 }
    },
    {
        id: 5,
        name: 'max',
        age: 30,
        status: true,
        address: { city: 'Lviv', street: 'PShevchenko', number: 115 }
    },
    {
        id: 6,
        name: 'anya',
        age: 31,
        status: false,
        address: { city: 'Lviv', street: 'OShevchenko', number: 2 }
    },
    {
        id: 7,
        name: 'oleg',
        age: 28,
        status: false,
        address: { city: 'Lviv', street: 'Shevchenko', number: 22 }
    },
    {
        id: 8,
        name: 'andrey',
        age: 29,
        status: true,
        address: { city: 'Lviv', street: 'LShevchenko', number: 43 }
    },
    {
        id: 9,
        name: 'masha',
        age: 30,
        status: true,
        address: { city: 'Lviv', street: 'KShevchenko', number: 12 }
    },
    {
        id: 10,
        name: 'olya',
        age: 31,
        status: false,
        address: { city: 'Lviv', street: 'UShevchenko', number: 16 }
    },
    {
        id: 11,
        name: 'max',
        age: 31,
        status: true,
        address: { city: 'Lviv', street: 'VShevchenko', number: 121 }
    }
];
// // --отсортировать его по id пользователей
let s = JSON.stringify(usersWithAddress);
let usersWithAddress1 = JSON.parse(s);
usersWithAddress1 = usersWithAddress1.sort((a, b) => a.id - b.id);
console.log(usersWithAddress)
console.log(usersWithAddress1)

// --отсортировать его по id пользователей в обратном опрядке
usersWithAddress1 = usersWithAddress1.sort((a, b) => b.id - a.id);


// --отсортировать его по возрасту пользователей
usersWithAddress1 = usersWithAddress1.sort((a, b) => a.age - b.age);
console.log(usersWithAddress)
console.log(usersWithAddress1)
    // --отсортировать его по возрасту пользователей в обратном порядке
usersWithAddress1 = usersWithAddress1.sort((a, b) => b.age - a.age);
console.log(usersWithAddress);
console.log(usersWithAddress1);
--отсортировать его по имени пользователей
usersWithAddress1 = usersWithAddress1.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    return -1;
});
console.log(usersWithAddress1)

// --отсортировать его по имени пользователей в обратном порядке
usersWithAddress1 = usersWithAddress1.sort((a, b) => {
    if (a.name > b.name) {
        return -1;
    }
    return 1;
});
console.log(usersWithAddress1)

// // --отсортировать его по названию улицы в алфавитном порядке
usersWithAddress1 = usersWithAddress1.sort((a, b) => {
    if (a.address.street > b.address.street) {
        return 1;
    }
    return -1;
});
console.log(usersWithAddress1)

// // --отсортировать его по номеру дома по возрастанию
usersWithAddress1 = usersWithAddress1.sort((a, b) => a.address.number - b.address.number);
console.log(usersWithAddress1);

// --отфильтровать(оставить) тех кто младше 30
let usersFilter = usersWithAddress1.filter(user => user.age < 30);
console.log(usersFilter)

//     --отфильтровать(оставить) тех у кого отрицательный статус
let usersFilter = usersWithAddress1.filter(user => user.status == false);
console.log(usersFilter);

//     --отфильтровать(оставить) тех у кого отрицательный статус и младше 30 лет
let usersFilter = usersWithAddress1.filter(user => (user.status == false) && (user.age < 30));
console.log(usersFilter);

//     --отфильтровать(оставить) тех у кого номер дома четный
let usersFilter = usersWithAddress1.filter(user => (user.address.number % 2 == 0));
console.log(usersFilter)


// ===
// === === === === === === === ===
// ===
// === ДОПОЛНИТЕЛЬНО === === ==
//     ===
//     === === === === === === === ===

//     Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору,
// що збільшить потужність автомобілів на 10 % (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв(переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно брати кожну другу машинку(цикл з кроком в 2),
//     та робити їй підвищення потужності двигуна на 10 % та ціну на 5 %


let cars = [{
        producer: "subaru",
        year: 2010,
        engine: 10,
        price: 2004440,
        driver: { name: "Vas", age: 25, exp: 1 }
    },
    {
        producer: "subaru1",
        year: 2015,
        engine: 36,
        price: 20000,
        driver: { name: "Vas1", age: 35, exp: 1 }
    },
    {
        producer: "subaru2",
        year: 2000,
        engine: 5,
        price: 60000,
        driver: { name: "Vas2", age: 25, exp: 2 }
    },
    {
        producer: "subaru3",
        year: 2005,
        engine: 56,
        price: 2856898,
        driver: { name: "Vas55", age: 25, exp: 5 }
    },
    {
        producer: "subaru4",
        year: 2010,
        engine: 50,
        price: 255500,
        driver: { name: "Vas4", age: 25, exp: 3 }
    },
    {
        producer: "subaru5",
        year: 2010,
        engine: 56,
        price: 255860,
        driver: { name: "Vas5", age: 25, exp: 5 }
    },
    {
        producer: "subaru6",
        year: 2010,
        engine: 46,
        price: 20850,
        driver: { name: "Vas6", age: 15, exp: 15 }
    },
    {
        producer: "subaru7",
        year: 2010,
        engine: 25,
        price: 23005,
        driver: { name: "Vas7", age: 25, exp: 15 }
    },
    {
        producer: "subaru8",
        year: 2010,
        engine: 300,
        price: 78005,
        driver: { name: "Vas8", age: 35, exp: 5 }
    },
    {
        producer: "subaru9",
        year: 2010,
        engine: 102,
        price: 56000,
        driver: { name: "Vas9", age: 25, exp: 5 }
    },

];

for (let i = 0; i < cars.length; i = i + 2) {
    cars[i].engine = Math.round(cars[i].engine * 1.1);
    cars[i].price = Math.round(cars[i].price * 1.05);
    cars[i].driver.name = "VasNew" + i;
    cars[i].driver.age = (i + 5) * 10;
    cars[i].driver.exp = cars[i].driver.exp + i;
};

console.log(cars)

// //     Після того зробити перевірку досвіду ВСІХ наших водіїв.
// // Якщо досвід водія менший за 5 років, але його вік більший за 25,
// // то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

cars.forEach(element => {
    if ((element.driver.exp < 5) && (element.driver.age > 25)) {
        element.driver.exp++;
        console.log(element);
    }

});

// // Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
let sum = 0;
cars.forEach(element => {
    sum = sum + element.price;
});
console.log(sum);


let reduce = cars.reduce((sum, value) => {
    return sum + value.price
}, 0);

console.log(reduce);


// Задача: дан отсортированный по возрастанию массив целых чисел.
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr— массив целых чисел значения которых по модулю не больше 10.
//  Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента.
// Если такого элемента нет в массиве, выведите - 1.

// Пример:
let Arr = [1, 1, 1, 1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

let a = prompt("input number")

let MinIndex = Arr.findIndex(val => val == a);
console.log(MinIndex);
let MaxIndex = Arr.filter(val => val == a).length;

(MinIndex == -1) ? MaxIndex = -1: MaxIndex = MinIndex + MaxIndex - 1;
console.log(MaxIndex);
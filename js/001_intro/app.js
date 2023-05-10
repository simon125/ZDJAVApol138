/**
 * ZMIENNE, hoisting
 *
 * var -
 *
 *
 * const
 * let
 *
 */

// let userName = "John";

// userName = "Jane";

/**
 * console.log
 *
 * narzędzia deweloperskie
 */

// console.log(userName);
// console.log("trelemorele");
// console.log(123);

/**
 * typy danych
 *
 * prymitywne:
 * string
 * number
 * boolean
 *
 * undefined
 * null
 *
 * typy referencyjne
 * obiekty
 * tablice
 * funkcje
 *
 */

// let age = 23; // typ number

// let exampleFloat = 23.123123; // typ number

// const userLastName = "John"; // typ string

// const isAdult = true;

// const isAdult1 = false;

// console.log(age);

/**
 * funkcje warunkowe
 *
 *
 */

// if ((age === 20 && age > 10) || isAdult === true) {
//   console.log(20);
// } else if (age > 30) {
//   console.log(123);
// } else {
//   console.log(312);
// }

/**
 * Zadanie:
 * Napisz warunek który będzie sprawdzał
 * czy zmienna age jest większa niż 18 jeżeli tak wyświetl w konsoli informacje że user jest dorosły
 * w przeciwnym wypadku wyświetl wiadomosc odwrotną
 *
 */
// const age1 = 17;

// if (age1 >= 18) {
//   console.log("user jest dorosły");
// } else {
//   console.log("user jest nieletni");
// }

/**
 * struktury danych
 * obiekty (słowniki) i tablice (listy)
 *
 * - tworzenie obiektów/tablic
 * - *tworzenie obiektów za pomocą klas
 * - odczytywanie pól/elementów z obiektów/tablic
 * - dodawanie nowych pól/elementów do obiektów/tablic
 *
 */

// const user = {
//   name: "John",
//   lastName: "Doe",
//   age: 22,
//   sayHello: () => {
//     console.log("Hello I'm John");
//   },
// };

// const user1 = {
//   name: "Jane",
//   lastName: "Doe",
//   age: 20,
//   sayHello: () => {
//     console.log("Hello ");
//   },
// };

// user.sayHello();

// console.log(user.age);

// class User {
//   constructor(name, lastName) {
//     this.name = name;
//     this.lastName = lastName;
//   }

//   sayHello() {
//     console.log(`Hello I'm ${this.name} ${this.lastName}`);
//   }
// }

// const userBasedOnClass = new User("John", "Doe");

// userBasedOnClass.sayHello();

/**
 * Tablice
 */

// List<string> userzy = new List<string>();

// const nazwaTablicy = [1, 2, 3, 4, 5, "trelemorele", "John", true, false];

// console.log(nazwaTablicy[0]);
// console.log(nazwaTablicy[5]);

// const tablicaUserow = [{ name: "John" }, { name: "Jane" }];

// const tablicaFunckji = [
//   () => {
//     console.log(123);
//   },
//   () => {
//     console.log(321);
//   },
// ];

// tablicaFunckji[0]();

/**
 * Porównywanie obiektów za pomocą JSONa
 *
 * 1) serializacja obiektów do JSONa
 * 2) porównać te 2 JSONy
 */

// const string1 = "test123";
// const string2 = "test123" + "test123"; // konkatenacja stringów
// const string3 = `test123

// ${string2}

// test123
// `;

// const newUser = {
//   name: "John",
//   email: "email@email.com",
//   password: "test123",
// };

// const userInJsonFormat = JSON.stringify(newUser);

// console.log(newUser);

// console.log(userInJsonFormat);

/**
 * Obiekty są porównywane za pomocą referencji nie jest porównywana struktura
 */

/**
 * Zdanie:
 * Utwórz obiekt (literał obiekt/słownik) user który będzie posiadał
 * następujące pola:
 *
 * name: string
 * lastName: string
 * age: number
 * todos: array of strings
 *
 * Zadanie:
 * Utwórz listę/tablicę obiektów typu user niech lista będzie zawierała 3 elementy/obiekty
 *
 * rezultat możesz wykonsolować za pomocą console.table(users)
 */

// const user = {
//   name: "John",
//   lastName: "Rambo",
//   age: 80,
//   todos: ["pouczyć się HTMLa", "Poczuyć się JSa"],
// };

// console.log(user);

// // const users = [{name:' adsf'}, {name: 'adfas'}, {name: 'asdsad'}]

// const users = [{ user }, { user }, { user }];

// console.log(users);

// const nazwaKlucza = "hello";

// const object = {
//   nazwaKlucza: nazwaKlucza
// }

// krótsza wersja ekwiwalent tego co wyżej
// const object = {
//   nazwaKlucza,
// };

// console.log(object);

// console.table(users);

/**
 * pętle
 *
 * for, while, do while
 *
 * funkcje wyższego rzędu
 *
 * map, filter, forEach
 */

for (let i = 0; i < 10; i++) {
  console.log(i);
}

/**
 * Zadanie
 * Przeiteruj się przez tablicę userów
 * i sprawdż czy userzy są dorośli (age > 18) jeżeli tak ustaw nowo dodane pole isAdult na true
 * w przeciwnym wypadku ustaw je na false
 *
 */

const todo = {
  name: "pouczyć się JSa",
};

todo.priority = "high";

const user1 = {
  name: "Bill",
  lastName: "Cosby",
  age: 13,
};

const user2 = {
  name: "Bill",
  lastName: "Cosby",
  age: 23,
};

const user3 = {
  name: "John",
  lastName: "Rambo",
  age: 70,
};

const user4 = {
  name: "Janet",
  lastName: "Jackson",
  age: 15,
};

const users = [user1, user2, user3, user4];

// users.forEach((user)=>{
//   if(user.age >=18){
//     user.isAdult = true;
//   }else{
//     user.isAdult = false;
//   }
// })

users.forEach((user) => {
  user.isAdult = user.age >= 18;
});

console.table(users);

/**
 * funkcje
 *
 * function
 *
 * arrow functions
 */

const sayHello = () => {
  console.log("Hello world");
};

sayHello();

const addTwoNumbers = (number1, number2) => {
  return number1 + number2;
};

console.log(addTwoNumbers(50, 20));

const wynikDodawania = addTwoNumbers(10, 20);

console.log(wynikDodawania);

function multipleTwoNumber(number1, number2) {
  return number1 * number2;
}

// function isUserAdult(user){
//   if(user.age>18){
//     return true
//   }else{
//     return false;
//   }
// }

function isUserAdult(user) {
  if (typeof user === "object" && typeof user.age === "number") {
    return user.age > 18;
  }
}

// isUserAdult("adfasd");

function isUserAdult(age) {
  return age > 18;
}

const isUserAdult = (user) => {
  return user.age > 18;
};

/**
 * Zadanie:
 * stwórz funkcje isUserAdult zwracająca true lub false w zależności czy user przekazany w parametrze ma age>18
 *
 * ** obsłuż przypadek gdy do funkcji przekazane są nie poprawne dane
 *
 * Zadanie:
 * stwórz funkcje getAvarageAge która przyjmie tablicę użytkowników i zwróci średnią arytmetyczną wieku użytkówników
 *
 *
 * ** Zadanie
 * stwórz funckje getNumbersOfAdultsPerGender która przyjmie tablicę/listę użytkowników i zwróci obiekt
 * z dwoma kluczami numberOfAdultMales i numberOfAdultFemales
 *
 * {
 *    numberOfAdultMales: 25,
 *    numberOfAdultFemales: 12
 * }
 *
 *
 */

const isUserAdult = (user) => {};

function getNumbersOfAdultsPerGender() {
  /**
   * Miejsce na Twój kod
   */
  return {
    numberOfAdultMales: undefined,
    numberOfAdultFemales: undefined,
  };
}

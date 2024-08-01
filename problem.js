// 1. Array Filtering and Mapping
const people = [
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 25, gender: "male" },
  { name: "Carol", age: 27, gender: "female" },
  { name: "Dave", age: 35, gender: "male" },
];

function filterAndMap(people) {
  return people
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
}

const result1 = filterAndMap(people);
console.log(result1);

// 2. Object Manipulation
const books = [
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
];

function getBookTitles(books) {
  return books.map((book) => book.title);
}

const result2 = getBookTitles(books);
console.log(result2);

//   3. Function Composition

function square(num) {
  return num * num;
}

function double(num) {
  return num * 2;
}

function addFive(num) {
  return num + 5;
}

function composeFunctions(num) {
  return addFive(double(square(num)));
}

const result3 = composeFunctions(3);
console.log(result3);

//   4. Sorting Objects

const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Ford", model: "Focus", year: 2008 },
];

function sortCarsByYear(cars) {
  return cars.sort((a, b) => a.year - b.year);
}

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);

//   5. Find and Modify
const peoples = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Carol", age: 27 },
];

function findAndModify(peoples, targetName, newAge) {
  return peoples.map((person) => {
    if (person.name === targetName) {
      return { ...person, age: newAge };
    }
    return person;
  });
}

const updatedPeoples = findAndModify(peoples, "Bob", 26);
console.log(updatedPeoples);

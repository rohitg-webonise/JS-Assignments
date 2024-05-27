///Question 1
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  greet: function () {
    return (
      "Hello, my name is " +
      this.fullName() +
      " and I am " +
      this.age +
      " years old."
    );
  },
};

// What is the full name of the person?
// Answer :-
console.log("Person's FullName - " + person.fullName());
//Output - John Doe
// Add a new property city with the value 'New York' to the person object.
// Answer :-
person.city = "New York";
console.log("Person's car " + person.city);
//Output - New York

//Write a code snippet to log the updated person object to the console.
console.log("Person - " + person);
//output -
// John Doe
// {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   fullName: [Function: fullName],
//   greet: [Function: greet],
//   city: 'New York'
// }
console.log();
// Explain the differences between the freeze and seal method of Object.
//Answer -
//  In JavaScript, the Object.freeze() and Object.seal() methods are used to
// control modifications to objects.

//Freeze -
// Object.freeze() makes an object immutable. Once an object is frozen,
// you cannot change its properties or add new properties.

//Properties can not be added or removed.
//Properties cannot be modified
//Example -
const Bike = {
  name: "Hero",
  price: "5M",
};
Object.freeze(Bike);
Bike.name = "TVS";
console.log("Bike's name - " + Bike.name); // it will still print Hero, we can not change its properties
Bike.owner = "Rohit";
console.log("Bike's owner - " + Bike.owner); // it will give you undefined because we can not add new property either.

//Seal -
// Object.seal() makes an object non-extensible and prevents properties from being deleted.
//Properties can not be added or removed.
//Properties can be modified
//Example -
Object.seal(Bike);
Bike.name = "TVS";
console.log("Bike's name - " + Bike.name); //this will not give error and it will change the value accordingly.
cars.owner = "Ravi";
console.log("Bike's owner - " + Bike.owner); // This will fail because as we discussed that we can't add the prop.
delete Bike.price; //This will fail because as we discussed that we can't delete prop.
console.log("Bike - " + Bike);
console.log();
// How can you determine if an object has been sealed or frozen in JavaScript?
// Provide an example of how you might check this programmatically.
//Answer -
//Example -

const Book = {
  bookName: "RashmiRathi",
  author: "Dinkar",
  ISBN: 123456,
};

// Initially, the object is neither sealed nor frozen
console.log("IsSealed - " + Object.isSealed(Book)); // false
console.log("IsFrozen" + Object.isFrozen(Book)); // false

Object.seal(Book);
console.log("IsSealed - " + Object.isSealed(Book)); // true
console.log("IsFrozen" + Object.isFrozen(Book)); // false

Book.bookName = "Up65";
console.log("Book's Name - " + Book.bookName); // Up65

Object.freeze(Book);
console.log("IsSealed - " + Object.isSealed(Book)); // true (a frozen object is also sealed)
console.log("IsFrozen" + Object.isFrozen(Book)); // true

// Attempting to modify a property (not allowed on a frozen object)
Book.bookName = "Hidden Hindu";
console.log("Book's Name - " + Book.bookName); // will print Up65 because modification is not allowed here.

// Discuss potential use cases for using seal and freeze in JavaScript applications.
// When might you choose one method over the other
//Answer -
// In javascript, Object.seal() and Object.freeze() are methods used to control the mutability of objects.
// While they both restrict modifications to an object, they have some key differences.

//Use cases for Object.seal()-
//Preventing addition and removal of properties.
//Intermediate Immutability - It insures object maintains its fields(name,age,etc)
// but allowing updates to those fields when user updates their information

//Use cases for Object.freeze() -
//Insuring complete Immutability - object remains completely unchanged,
//including its properties and values.
//Security and integrity - when you need to protect objects from any form of tampering.
console.log();
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  drive: function () {
    return "Driving a " + this.make + " " + this.model;
  },
  setYear: function (newYear) {
    this.year = newYear;
  },
};

// Change the year of the car to 2022 using the setYear() method.
// Answer -
car.setYear(1975);
console.log("car year - " + car.year);

console.log();
// Write a code snippet to drive the car using the drive() method.
// Answer -
console.log("Drive method called - " + car.drive());

const numbers = [1, 2, 3, 4, 5];
// Use the slice() method to create a new array containing the elements from index 1 to index 3 (inclusive).
// Answer -
const newArray = numbers.slice(1, 4);
console.log("NewArray After slcing from index 1 to 3 - " + newArray);
console.log();
// Use the splice() method to remove the element at index 2 and insert the number 10 in its place.
// Answer -
numbers.splice(2, 1, 10);
console.log(
  "Numbers array after splicing at index 2 and insert the number 10 its place - " +
    numbers
);
console.log();
// How can you find the index of number 4 in numbers array.
// Answer -
const index = numbers.indexOf(4);
console.log("Number at index 4 - " + index);
console.log();
// Given that another arr = [6,7,8], How will you add ‘arr’ array elements to numbers array.
// Answer -
const arr = [6, 7, 8];
const combined = numbers.concat(arr); // way-1
//const combined = [...numbers, ...arr]; // way-2
//numbers.push(...arr); // way-3
// arr.forEach(element => {
//     numbers.push(element);  // way-4
//   });
console.log("After adding arr elements to the numbers array - " + combined);
console.log();
// How can you find the length of an array?
const length = numbers.length;
console.log("length - " + length);
console.log();

const fruits = ["apple", "banana", "cherry", "date"];
// Use the splice() method to remove the last two elements from the fruits array.
fruits.splice(-2, 2);
console.log("After removing last two elements using splice() - " + fruits);
console.log();

const obj = {
  name: "john",
  lastname: "doe",
  Age: 30,
  location: "India",
};

// Print the above object in below format using loop Key name = value of key
for (const key in obj) {
  console.log(`${key} = ${obj[key]}`);
}

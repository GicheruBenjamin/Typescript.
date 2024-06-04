

// number
let age: number = 25;

// string
let n: string = "John Doe";

// boolean
let isStudent: boolean = true;

// null and undefined
let optionalValue: string | null = null;
let unknownValue: unknown = undefined;

// void
function printMessage(): void {
  console.log("Hello, World!");
}

// any
let dynamicValue: any = 42;
dynamicValue = "Hello";

// never
function throwError(): never {
  throw new Error("Something went wrong!");
}


// Object type
interface Person {
  name: string;
  age: number;
}

const Andy: Person = {
  name: "John Doe",
  age: 25,
};

// Function type
function salam(name: string): string {
  return `Hello, ${name}!`;
}


// Tuple type
let person: [string, number] = ["John Doe", 25];

console.log(person[0]); 
console.log(person[1]);

// Enum type
enum Color {
  Red,
  Green,
  Blue,
}

let favoriteColor: Color = Color.Green;

console.log(favoriteColor); 

// Array type
let numbers: number[] = [1, 2, 3, 4, 5];

console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

// Type alias
type User = {
  name: string;
  age: number;
};

function greet(user: User) {
  console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
}

const john: User = { name: "John", age: 25 };
greet(john); // Output: Hello, John! You are 25 years old.

// Union type
type ID = number | string;

function printID(id: ID) {
  console.log(`Your ID is: ${id}`);
}

printID(123); // Output: Your ID is: 123
printID("abc"); // Output: Your ID is: abc

// Intersection type
type Name = {
  first: string;
  last: string;
};

type Age = {
  age: number;
};

type colly = Name & Age;

const ken: colly = { first: "John", last: "Doe", age: 25 };
console.log(`${ken.first} ${ken.last} is ${ken.age} years old.`); // Output: John Doe is 25 years old.


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

const person: Person = {
  name: "John Doe",
  age: 25,
};

// Function type
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet(person.name)); // Output: Hello, John Doe!


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
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet(Andy.name)); 

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
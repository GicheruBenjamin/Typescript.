

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
// number
var age = 25;
// string
var n = "John Doe";
// boolean
var isStudent = true;
// null and undefined
var optionalValue = null;
var unknownValue = undefined;
// void
function printMessage() {
    console.log("Hello, World!");
}
// any
var dynamicValue = 42;
dynamicValue = "Hello";
// never
function throwError() {
    throw new Error("Something went wrong!");
}
var Andy = {
    name: "John Doe",
    age: 25,
};
// Function type
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet(Andy.name));
// Tuple type
var person = ["John Doe", 25];
console.log(person[0]);
console.log(person[1]);
// Enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Green;
console.log(favoriteColor);
// Array type
var numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

# INTRO
Typescript is a superset of javascript.
U add types to the lady Javascript.

##  Primitives 
Primitive types:
1. number: Represents numeric values, including integers and floating-point numbers.
2. string: Represents textual data.
3. boolean: Represents true or false values.
4. null and undefined: Represents the absence of a value.
5. void: Used to indicate that a function doesn't return a value.
6. any: A dynamic type that allows any value to be assigned to it. It's generally not recommended to use any unless necessary, as it bypasses TypeScript's type checking.
7. never: Represents a value that never occurs. It's typically used to indicate that a function never returns or always throws an error.
## Object types:
1. object: Represents a non-primitive value, such as an array, function, or a user-defined object.
2. Array: Represents an ordered collection of values. You can specify the type of elements in the array using square brackets, e.g., number[] or string[].
3. Tuple: Represents a fixed-length array with each element having a specific type.
4. Enum: Represents a set of named constants.
## Function types:
Function: Represents a function. You can specify the types of the function's parameters and return value.
## Union and intersection types:
1. |: Allows you to create a type that can be one of several types.
2. &: Allows you to combine multiple types into a single type.
## Interface:
interface: Allows you to define a contract for an object, specifying the types of its properties and methods.

### View the output
<div>tsc index </div>
<div>node index</div>
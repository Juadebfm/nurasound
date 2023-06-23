# Basic JavaScript Concepts Important In Learning React

## Arrow Functions

```js
//Normal Function Declaration
function doSomething() {
  // Logic
}

// To export normal function declaration
export default function doSomething() {
  // Logic
}

// Arrow Function // you can use "const", "let" and "var"
const doSomething = () => {
  // Logic
};

// To export Arrow function
export const doSomething = () => {
  // Logic
};
```

## Anonymous Function

```js
// Examples in normal javascript

<button onclick="doSomething()"></button>

// Anonymous in react
<button onClick={()=>{console.log("Hello World")}}>

</button>
```

## Ternary Operator

Because the essence of react is to minimize the code base and workload for developers, ternary operators come in hand so much, you have to start learning how to write it. Especially the syntax

```js
// Normal
if (condition) {
  // Logic
} else {
  // Logic
}
// Ternary Operator
condition ? doSomething() : doSomethingElse();

// OR

let age = 10;
let name = "";

if (age > 10) {
  name = "Juadeb";
} else {
  name = "Agba Dev";
}

// Ternary
let name = age > 10 ? "Juadeb" : "Agba Dev";
// God Mode
let name = age > 10 && "Juadeb";
let name = age > 10 || "Juadeb";
```

### Explanation of line 68

The line of code let name = age > 10 && "Juadeb"; uses a logical operator called "&&" (which stands for "AND") to assign a value to the variable "name" based on two conditions:

- The condition age > 10 checks if the value of the variable "age" is greater than 10.
- The value "Juadeb" is the second condition, which will be considered only if the first condition is true.

Here's how the code works:

- If the value of "age" is greater than 10, the first condition evaluates to true.
- Since both conditions are connected by the "&&" operator, the second condition is also evaluated.
- In this case, the second condition is a non-empty string "Juadeb", which is considered a truthy value in JavaScript.
- As a result, the variable "name" will be assigned the value "Juadeb".

On the other hand, if the value of "age" is less than or equal to 10, the first condition evaluates to false. Since JavaScript short-circuits logical operations, it doesn't evaluate the second condition because it's unnecessary. In this case, the variable "name" will be assigned a falsy value (undefined).

In summary, this line of code assigns the value "Juadeb" to the variable "name" only if the value of "age" is greater than 10. Otherwise, the variable "name" will be assigned a falsy value.

### Explanation of line 69

The line of code let name = age > 10 || "Juadeb"; uses a logical operator called "||" (which stands for "OR") to assign a value to the variable "name" based on two conditions:

- The condition age > 10 checks if the value of the variable "age" is greater than 10.
- The value "Juadeb" is the second condition, which will be considered only if the first condition is false.

Here's how the code works:

- If the value of "age" is greater than 10, the first condition evaluates to true.
- Since both conditions are connected by the "||" operator, the second condition is not evaluated because it's unnecessary. In this case, the variable "name" will be assigned the value of the first condition, which is true.

On the other hand, if the value of "age" is less than or equal to 10, the first condition evaluates to false.
Since the first condition is false, the second condition "Juadeb" is evaluated.
In this case, the second condition is a non-empty string "Juadeb", which is considered a truthy value in JavaScript.
As a result, the variable "name" will be assigned the value "Juadeb".

In summary, this line of code assigns the value "Juadeb" to the variable "name" if the value of "age" is less than or equal to 10. Otherwise, if the value of "age" is greater than 10, the variable "name" will be assigned the value of the first condition, which is true.

### Use in React JS

```js
// Ternary
const Component = () => {
    return age > 10 <div> Juadeb </div> : <div> Agba Dev </div>
}

// React
import React from "react";

const Banner = ({ active, children }) => (
  <div
    className={`banner large ${active ? "active" : ""} ${
      disabled ? "disabled" : ""
    }`}
  >
    {children}
  </div>
);

export default Banner;
```

## Objects Destructuring

```js
const person = {
  name: "Juadeb",
  age: 20,
  isActive: false,
  address: {
    city: "Lagos",
    state: "Nigeria",
  },
};

//Normally
const name = person.name;
const age = person.age;
const isLoggedIn = person.isActive;

const { name, age, isActive } = person;

// Also
const name = "Juadeb";
const age = 20;

const person = {
  name,
  age,
  isActive: false,
  address: {
    city: "Lagos",
    state: "Nigeria",
  },
};
```

## Objects Spread Operator

```js
//For Objects
const person2 = { ...person, name: "New Juadeb" };

// For arrays
const names = ["Juadeb", "Jack", "Jessica"];

const name = [...names, "Joel"];
```

## Important Array Functions in React

- .map()
- .filter()
- .reduce()

```js
// -> MAP
let names = ["Josh", "Bola", "Nneka", "Josh", "Matthew"];

//Normal
names.map((name) => {
  return name + "1";
});

// React
names.map((name) => {
  return <div>{name}</div>;
});

// -> FILTER
names.filter((name) => {
  return name !== "";
});
```

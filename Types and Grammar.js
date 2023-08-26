// Chapter 1 -Types-



// Built-in types 
// - null
// - undefined
// - boolean 
// - number 
// - string 
// - object 
// - symbol added in ES6



console.log(typeof undefined === "undefined"); //true

console.log(typeof true === "boolean"); //true

console.log(typeof 42 === "number"); //true

console.log(typeof "42" === "string"); //true

console.log(typeof {life : 100} ==="object"); //true

console.log(typeof Symbol() === "symbol"); //true

console.log(typeof null === "object"); //true



var a=null;

console.log((!a) && typeof a==="object"); //true
console.log(!(!a) && typeof a==="object"); //false



console.log(function a(){} ==="function"); //false
console.log(typeof function a(){} ==="function"); //true



// The fact that functions are objects has really useful benefits

// the function has a length property set to the number of formal parameters 

function a(b,c){
    // ......
}
a.length; //2

console.log(typeof [1,2,3] === "object") //true



// Values as types

// in JS, variables don't have types, but values have types

var a=42;
typeof a; //number



a=true;
typeof a; //boolean



typeof typeof 42; //string
// The first typeof is number and the typeof number is string



// undefined vs undeclared

var a;
typeof a; //undefined
console.log(typeof typeof a); //string


var b=42;
var c;
b=c;
typeof b; //undefined
typeof c; //undefined



var a;
a; //undefined
b; //ReferenceError: b is not defined



var a;
typeof a; //undefined
typeof b; //undefined
// Even if the error is "ReferenceError" the typeof is undefined



// in JS, undefiend and undeclared are not the same thing, undefined is a value...
// ...that a declared variable can hold.

// undeclared means that the variable has never been declared


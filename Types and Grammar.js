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


// ---------------------------------------------



// Chapter 2



// String methods

// A JavaScript string is zero or more characters written inside quotes.
let name = "John";
// You can use single or double quotes
// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

let x = "It's alright";
let y = "He is called 'omar'";
let z = 'He is called "omar"';

// To find the length of a string, use the built-in length property:



let n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;



let text = "Iam \"omar\" goda";
let text1= 'Iam \'Omar\' goda';
let text2 = "The character \\ is called backslash."; //The character \ is called backslash.

// \n	New Line
// strings can also be defined as objects with the keyword new:

let y1 = new String("Omar");

// "Omar"==new String("Omar") //true
// "Omar"===new String("Omar") //false
// new String("Omar")==new String("Omar") //false
// new String("Omar")===new String("Omar") //false

// slice(start, end)
// substring(start, end)
// substr(start, length)

let t = "Apple, Banana, Kiwi";
let part = text.slice(7, 13); //Banana

let t1 = "Apple, Banana, Kiwi";
let part1 = text.slice(7); //Banana, Kiwi

// This example slices out a portion of a string from position -12 to position -6:

let text3 = "Apple, Banana, Kiwi";
let part2 = text.slice(-12, -6); //Banana

// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring()

let str = "Apple, Banana, Kiwi";
let pa = str.substring(7, 13); //Banana



// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.

let str1 = "Apple, Banana, Kiwi";
let part3 = str.substr(7, 6); 



text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools"); //Please visit W3Schools!

// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match

// The replace() method is case sensitive 

// To replace case insensitive, use a regular expression with an /i flag (insensitive):

 text = "Please visit Microsoft!";
 newText = text.replace(/MICROSOFT/i, "W3Schools");

//  To replace all matches, use a regular expression with a /g flag (global match):

 text = "Please visit Microsoft and Microsoft!";
 newText = text.replace(/Microsoft/g, "W3Schools");



text1 = "Hello World!";
text2 = text1.toUpperCase(); //HELLO WORLD


text1 = "Hello World!";
text2 = text1.toLowerCase(); //hello world


text1 = "Hello";
text2 = "World";
text3 = text1.concat(" ", text2); //Hello World


text1 = "     Hello World!     ";
text2 = text1.trimStart(); //Hello World


text = "HELLO WORLD";
let char = text.charAt(0); //H


text = "HELLO WORLD";
char = text.charCodeAt(0); //72


// A string can be converted to an array with the split() method:
text ="Hello";
text.split("");



let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate"); //7

let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate"); //21 else -1

// The search() method searches a string for a string (or a regular expression) and returns the position of the match:

let text = "Please locate where 'locate' occurs!";
text.search("locate"); //7

//regular expression

let text = "Please locate where 'locate' occurs!";
text.search(/locate/); //7

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

let text = "Hello world, welcome to the universe.";
text.includes("world"); //true



let text = "Hello world, welcome to the universe.";
text.startsWith("world"); //false

let text = "Hello world, welcome to the universe.";
text.startsWith("world", 6); //true



// Numbers in Javascript

// JavaScript has only one type of number. Numbers can be written with or without decimals.

let x = 123e5;    // 12300000
let y = 123e-5;  //  0.00123

let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000

let x = 0.2 + 0.1; //Floating point arithmetic is not always 100% accurate

// To solve the problem above, it helps to multiply and divide:

let x = (0.2 * 10 + 0.1 * 10) / 10;

let x = 10;
let y = 20;
let z = x + y; //1020

let x = 10;
let y = 20;
let z = "The result is: " + x + y; //1020

let x = 10;
let y = 20;
let z = "30";
let result = x + y + z; //3030

let x = "100";
let y = "10";
let z = x / y; //10

let x = "100";
let y = "10";
let z = x * y; //1000

let x = "100";
let y = "10";
let z = x - y; //90

// NaN - Not a Number
let x = 100 / "Apple"; //NaN

let x = 100 / "10"; //NaN

let x = NaN;
let y = "5";
let z = x + y; //NaN

typeof NaN; //number, confunsing right -_- ?

// Infinity

let x =  2 / 0; //infinity
let y = -2 / 0; //-infinity

typeof Infinity; //number



let x = BigInt(999999999999999);
let type = typeof x; //bigint

let x = 5n;
let y = x / 2;
// Error: Cannot mix BigInt and other types, use explicit conversion.

let x=5n;
let y=Number(x)/2; //Legal

// The toString() Method
// The toString() method returns a number as a string.



let x = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);
// 9.66e+0
// 9.6560e+0
// 9.656000e+0


let x = 9.656;
x.toFixed(0); //10
x.toFixed(2); //9.66
x.toFixed(4); //9.6560
x.toFixed(6); //9.656000

Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33");
Number("10,33"); //NaN
Number("10 33"); //NaN
Number("John"); //NaN

Number(new Date("1970-01-01")) //0

Number(new Date("1970-01-02")) //86400000

parseInt("10.33"); //Number
parseInt("10 20 30"); //Number
parseInt("10 years"); //Number
parseInt("years 10"); //NaN

Number.isInteger(10); //true
Number.isInteger(10.5); //false

Number.isSafeInteger(10); //true
Number.isSafeInteger(12345678901234567890); //false

// MAX_VALUE is the largest number in js

// MIN_VALUE is the smallest number in js

// Arrays



const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;



const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();  //delete the last element

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop(); //Mango

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");



// The shift() method removes the first array element and "shifts" all other elements to a lower index.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();



const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

const x = [3, 1 , 4, 6];
fruits.sort();
fruits.reverse();

// splice and slice 

let arr=[1,2,3,4,5];
console.log(arr);
let arr1=arr.slice(0,4);
let arr1=arr.slice(1); //1 --> arr.length-1
console.log(arr1);
console.log(arr);
slice() doesn't change the original array

let arr=[1,2,3,4,5];
console.log(arr);
// splice(start index deleted , length of the deleted , add elements at the start element)
let arr1=arr.splice(0 , 4 , 9 ,5 ,6 ,7);
console.log(arr1);
console.log(arr);

// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 3, 4 ]
// [ 9, 5, 6, 7, 5 ]



// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)

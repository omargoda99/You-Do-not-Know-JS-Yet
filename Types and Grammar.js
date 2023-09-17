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



//---------------------------------------------


// Chapter 3

// Most used natives

String()
Number()
Boolean()
Array()
Object()
Function()
RegExp()
Date()
Error()
Symbol() //added in ES6

var s=new String("Hello World");
console.log(s.toString()); //Hello World

var a=new String("abc");
typeof a; //Object not string

a instanceof String; //true

// The point is, new String("abc") creates a string wrapper object around "abc", not just the 
// primitive "abc" value itself

// There are no Null() and Undefined() native constructors, but nevertheless "Null", 
// and "Undefined" are internal [[class]] values exposed

Object.prototype.call("abc"); //"[object String]"
Object.prototype.call(42); //"[object Number]"

// Boxing Wrappers
// primitive types don't have methods or properties so to access .length or .toString(), 
// you need an object wrapper around the value

var a="Omar";
a.length; //4
a.toUpperCase(); //OMAR

var a=new Boolean(false);
if(!a){
    console.log("Oops"); //never runs
}

// You created an object wrapper around the false value, but objects themselves are truthy...
// so using the object makes it behave the opposite way



var a="abc";
var b=new String("abc");
var c=Object(a);

typeof a; //string
typeof b; //object
typeof c; //object

b instanceof String; //true
c instanceof String; //true

Object.prototype.call(b); //"[object String]"
Object.prototype.call(c); //"[object String]"



// Unboxing

var a=new String("Omar");
var b=new Number(120);
var c=new Boolean(true);

a.valueOf(); //Omar
b.valueOf(); //120
c.valueOf(); //true

var a=new String("Hi");
var b=a+" ";

typeof a; //object
typeof b; //string



// Natives as constructors

// Array()

var a=new Array(1,2,3); //[1,2,3]
var c=Array(1,2,4); //[1,2,4]
// Doesn't require new keyword

var b=[1,2,3]; //[1,2,3]

a==b; //true
a===b; //false
a==c; //false
a===c; //false

// An array with atleast one "empty slot" in it is often called sparse array

var a=new Array(3);
a.length; //3

// to visualize the difference 
var a=new Array(3);
var b=[undefined , undefined ,undefined];
var c=[];
c.length; //3

// Object(...), Function(...) and RegExp(...)
var c=new Object();
c.foo="bar";
c; // {foo : "bar"}

var d={foo : "bar"};
d; //{foo : "bar"}

var e=new Function("a" , "return a*2;");
var f=function(a){
    return a*2;
}
var h=new RegExp("^a*b+","g");
var j=/^a*b+/g;



// Date(...) and Error(...)

// Date and Error are the most useful natives among all of those, and you must use the new keyword

// The time starts counting from 1/1/1970 in milliseconds

if(!Date.now){
    Date.now=function(){
        return (new Date()).getTime();
    };
}

// The Error constructor behaves the same like Array() but with the new keyword or not

function foo(x){
    if(!x){
        throw new Error("x is not provided");
    }
}

// Symbol (added in ES6)

// They are designed for special built-in behaviors of ES6 constructors

var mysym =Symbol("my own symbol");
mysym; //Symbol(my own symbol)
mysym.toString(); //"Symbol(my own symbol)"
typeof mysym; "symbol"

var a=[];
a[mysym]="footbar";
Object.getOwnPropertySymbols(a);
// [Symbol(my own symbol)]

// Symbols are not objects, they are simple scalar primitives



//--------------------------------------------



// Chapter 4

// Type conversion
// There is implicit and Explicit type conversion

// Explicit type converstion

var age=window.prompt("Enter your age");
age+=1;
console.log(age); //18 --> 181 

var age=window.prompt("Enter your age");
age=Number(age);
age+=1;
console.log(age); //18 --> 19 

var my=Boolean(null); //false
var my=Boolean(""); //false
var my=Boolean(0); //false
var my=Boolean(undefined); //false
var my=Boolean(NaN); //false

var my=Boolean("false"); //true



// Implicit type converstion

// numeric string used with + gives string type
let result;

result = '3' + 2; 
console.log(result) // "32"

result = '3' + true; 
console.log(result); // "3true"

result = '3' + undefined; 
console.log(result); // "3undefined"

result = '3' + null; 
console.log(result); // "3null"

result;

result = '4' - '2'; 
console.log(result); // 2

result = '4' - 2;
console.log(result); // 2

result = '4' * 2;
console.log(result); // 8

result = '4' / 2;
console.log(result); // 2

// non-numeric string used with - , / , * results to NaN

result;

result = 'hello' - 'world';
console.log(result); // NaN

result = '4' - 'hello';
console.log(result); // NaN



// if boolean is used, true is 1, false is 0

result;

result = '4' - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4



// null is 0 when used with number
result;

result = 4 + null;
console.log(result);  // 4

result = 4 - null;
console.log(result);  // 4



// Arithmetic operation of undefined with number, boolean or null gives NaN

result;

result = 4 + undefined;
console.log(result);  // NaN

result = 4 - undefined;
console.log(result);  // NaN

result = true + undefined;
console.log(result);  // NaN

result = null + undefined;
console.log(result);  // NaN

// JavaScript Abstract Operations

// Primitive is immutable 
var name="Omar";
console.log(name.toUpperCase()); //OMAR
console.log(name); //Omar

// primitive stored by value , non-primitive stored by reference
// Implicit coercion

false*10; //0

// Explicit coercion

Number("6")+Number("2"); //4
 
// To convert non primitive to primitive 

var a={}+1; //1

toPrimitive(input, "number");
valueOf(input);
toString(input);

[4 ,5] *2 ; //NaN
"Omar" *2 ; //NaN
"10" *2; //20

// in ToNumber conversion 
// undefined Returns NaN
// null +0
// Boolean if true 1 else +0 
// Symbol TypeError 
// BigInt TypeError
// Object, first if it's not a primitive type convert it into a primitive type, then Return ? ToNumber

a="10";
b=20;
console.log(+a+b); //30
console.log(a+b); //1020



[] //0
[].toString(); ""
[].valueOf(); []

{} //NaN
toPrimitive({} , number);
{}.valueOf(); //{}
{}.toString(); //"[object,object]"

Array=[1,2,3,4];
const myA=Array.toString();
console.log(myA); //"1 ,2 ,3 ,4"

1==true //true

// loose equality compares values 2=="2" true, ''==0 true
// Strict equality compares values and types 2==="2" false

// Operator precedence 
var a = 4*10+4; 
// First multi. then add. --> 44

// ++	Postfix Increment	i++
// --	Postfix Decrement	i--
// ++	Prefix Increment	++i
// --	Prefix Decrement	--i
// !	Logical NOT	!(x==y)
// ~	Bitwise NOT	~x
// +	Unary Plus	+x
// -	Unary Minus	-x
// typeof	Data Type	 typeof x
// void	Evaluate Void	 void(0)
// delete	Property Delete	 delete myCar.color
// <<	Shift Left	x << 2
// >>	Shift Right (signed)	x >> 2
// >>>	Shift Right (unsigned)	x >>> 2
// in	Property in Object	"PI" in Math
// instanceof	Instance of Object	x instanceof Array
// Comparison Operators
// <	Less than	x < y 
// <=	Less than or equal	x <= y
// >	Greater than	x > y
// >=	Greater than or equal	x >= Array
// ==	Equal	x == y
// ===	Strict equal	x === y
// !=	Unequal	x != y
// !==	Strict unequal	x !== y
// Bitwise Operators
// &	Bitwise AND	x & y
// ^	Bitwise XOR	x ^ y
// |	Bitwise OR	x | y
// &&	Logical AND	x && y
// ||	Logical OR	x || y
// ??	Nullish Coalescing ES2020	x ?? y
// ? :	Condition	? "yes" : "no"
// =	Simple Assignment	x = y
// :	Colon Assignment	x: 5
// +=	Addition Assignment	x += y
// -=	Subtraction Assignment	x -= y
// *=	Multiplication Assignment	x *= y
// **=	Exponentiation Assignment	x **= y
// /=	Division Assignment	x /= y
// %=	Remainder Assignment	x %= y
// <<=	Left Shift Assignment	x <<= y
// >>=	Right Shift Assignment	x >>= y
// >>>=	Unsigned Right Shift	x >>>= y
// &=	Bitwise AND Assignment	x &= y
// |=	Bitwise OR Assignment	x |= y
// ^=	Bitwise XOR Assignment	x ^= y
// &&=	Logical AND Assignment	x &&= y
// ||=	Logical OR Assignment	x ||= y
// =>	Arrow	x => y
// yield	Pause / Resume	yield x
// yield*	Delegate	yield* x
// ...	Spread	... x
// ,	Comma	x , y



// ---------------------------------------



// Chapter 5

// Try,catch and finally

let x=10;
try{
    var a=x/0;
}
catch(err){
    console.log("You can't devide by 0");
}
finally{
    console.log("Try another number other than zero");
}

// The try...catch...finally statements combo handles errors without stopping JavaScript.

// The try statement defines the code block to run (to try).

// The catch statement defines a code block to handle any error.

// The finally statement defines a code block to run regardless of the result.

// The throw statement defines a custom error.

// Both catch and finally are optional, but you must use one of them.

try {
    // tryCode - Code block to run
  }
  catch(err) {
    // catchCode - Code block to handle errors
  }
  finally {
    // finallyCode - Code block to be executed regardless of the try result
  }



//  Switch

switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }
//   This is how it works:
  
//   The switch expression is evaluated once.
//   The value of the expression is compared with the values of each case.
//   If there is a match, the associated block of code is executed.
//   If there is no match, the default code block is executed.

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
//   Saturday



// The break Keyword
// When JavaScript reaches a break keyword, it breaks out of the switch block.

// This will stop the execution inside the switch block.

// It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.



// The default keyword specifies the code to run if there is no case match:

// Example
// The getDay() method returns the weekday as a number between 0 and 6.

// If today is neither Saturday (6) nor Sunday (0), write a default message:

switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
// Today is Saturday

// Sometimes you will want different switch cases to use the same code.

// In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:



switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}

// Strict Comparison
// Switch cases use strict comparison (===).

// The values must be of the same type to match.

// A strict comparison can only be true if the operands are of the same type.

// In this example there will be no match for x:

let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}



//---------------------------------------------------------------------------

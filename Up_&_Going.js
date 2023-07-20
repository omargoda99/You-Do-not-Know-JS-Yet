// Chapter One



/* To take an input from the user*/
var age = prompt("What is your name?");
console.log(age);



// example of assignement
var a = 20;
a += 1;
a *= 2;
console.log(a);//42



// Object property access
//. as in console.log()



//when you need to convert the value to a string, it's called coercion



//to convert a string to number
var a = "42";
var b = Number(a);
console.log(a); //"42"
console.log(b); //42



console.log(999 == "999"); //loose-equals == make the left side 
//a number so 999==999 is true 



// code without comments is suboptimal
// too many comments is a sign of poorly written code
// comments should explain why not what



var a = /* It's legal */ 42;



var amount = 99.99;
amount *= 2;
console.log(typeof amount); //Number
amount = String(amount);
console.log(typeof amount) //String



var TAX_RATE = 0.08; //8% sales tax
var amount = 99.99;
amount *= 2;
amount += (amount * TAX_RATE);
console.log(amount); //215.9784
console.log(amount.toFixed(2));  //"215.98"



// toFixed(n) 
// Round the number like 2.6 = 3
// n should be > 6 to make the number up 
// toFixed(2) --> 5.768 = 5.77
// toFixed(1) --> 5.768 = 5.8



// Constants are useful just like variables with unchanged values, and it gives error in strict mode



// Note: blocks are valid, but isn't as commonly seen in JS programs



// Conditional statement example
const a = 99.9;
var b = 302.5;
var m = 9.99;
m *= 2;
if (m < b) {
  console.log("Ok");
  m += a;
}
else {
  console.log("No");
}



// Example of (do while loop)
do {
  console.log(OK);
  n -= 1;
}
while (n > 0);



// Example of (while loop)
var i = 0;
while (true) {
  if (i <= 9) {
    console.log(i);
    i += 1;
  }
  else {
    break;
  }
}
// 0 1 2 3 4 5 6 7 8 9



// Example of (for loop)
for (var i = 0; i <= 9; i++) {
  console.log(i);
  // 0 1 2 3 4 5 6 7 8 9
}


// Example of (functions)
function k() {
  console.log(a.toFixed(2));
}
var a = 99.946;
k();
a *= 2;
k();



// Example of a function with an argument
function f(a) {
  console.log(a * 2);
}
function str() {
  return "$" + a;
}
var a = 13;
f(a);
a = str();
console.log(a);
// 26
// $13



// Scope 
function one() {
  var a = 1;
  console.log(a); //1
}
function two() {
  var a = 2;
  console.log(a); //2
}
one(); //1;
two(); //2;

function outer() {
  var a = 1;
  function inner() {
    var b = 2;
    console.log(a + b); //3
  }
  inner();
  console.log(a) //1
}
outer();

//inner has access to a and b
//outer has only access to a 






//----------------------------------------------


// Chapter 2 (Into JavaScript)

// Values and Types
// -string
// -number
// -boolean
// -null and undefined
// -object
// -sympol (new to ES6)




var a;
typeof a; //undefined

a="hi";
typeof a; //string

a=54;
typeof a; //number

a=true;
typeof a; //boolean

a=null;
typeof a; //object --weird, bug

a=undefined;
typeof a; //undefined

a={b: "c"};
typeof a; //object



// Objects 

var obj={
  a:"Hello",
  b:65,
  c:true
};
obj.a; //"Hello"
obj.b; //65
obj.c; //true
//or
obj["a"];
obj["b"];
obj["c"];
//dot notation is preferred



var obj={
  a:"Hi",
  b:54
};
var b="a";
obj[b] // "Hi"
obj["b"] // 54




// Arrays 
var arr=["hello world",43,true];
arr[0]; //"hello world"
arr[1]; //43
arr[2]; //true



// Functions example 
function foo() {
  return 42;
}
foo.bar="Hello World";
typeof foo; //fumction
typeof foo(); //number
typeof foo.bar; //string




//Built-in type methods
var a="Hi";
var b=23.546;
a.length; //2
a.toUpperCase(); //HI
b.toFixed(2); //23.55



// Note : String is an Object Wrapper , string is a primitive type
// ToUpperCase() belongs to String object wrapper
// If you use toUpperCase() method on a string primitive data type...
// ..JS boxes the value to its object wrapper
// string value can be wrapped by a string object and the same with...
//the number and boolean



var a="42";
var b=Number(a);
a; //"42"
b; // 42



var a ="42";
var b=a*1;
a; //"42"
b; // 42



// falsy

// "" empty String
// 0,-0,NaN invalid Number
// null,undefined
// false



// truthy
// "hello"
// 53
// true
// [] , [34 , 5 ,6] arrays
// {} , {a:54}   objects
// function foo(){} function



var a ="42";
var b =42;
a==b //true
a===b //false

// == loose equality compares values onplay
// === strict-equality compares values and type

// Note avoid == and use === instead



var a=[1,2,3];
var b=[1,2,3];
var c="1,2,3";

a==c //true
b==c //true 
a==b //false

a===c //false
b===c //false 
a===b //false




var a=41;
var b="42";
var c="43";

a<b //true
b<c //true



var a=42;
var b="foo";

a<b //false
a>b //false
a==b //false



// Function scope

// Hoisting
var a=2;
foo();
function foo(){
  a=3;
  console.log(a); //3
  var a; //declaration is "hoisted" to the top of foo()
}
console.log(a); //2;

//in other words hoisting is using a var before declaring it
a=5;
var a;
console.log(a); //5
// It's not common or good idea to rely on variable...
// hoisting to use a variable eariler




// Nested scopes
function foo(){
  var a=1;
  function bar(){
    var b=2;
    function baz(){
      var c=3;
      console.log(a,b,c); // 1 2 3
    }
    baz();
    console.log(a,b); // 1 2
  }
  bar();
  console.log(a); // 1
}
foo();

//baz has access on a and b
//bar has access on a
//Always declare your variables, in strict mode it gives an error



function foo(){
  var a=1;
  if(a>=1)
  {
    let b=2;
    while(b<5)
      {
        let c=b*2;
        b++;
      }
    conole.log(a+c);
  }
}
// 5 7 9



var a=12;
switch(a){
  case 4:
    console.log(35);
    break;
    case 12:
    case 10:
    console.log(345);
    break;
    default :
    console.log(123);
}
//345
var a=23;
var b=(a>20) ? "OK" : "NO" ;



// Strict mode
// Strict mode prevernts you from using a variable without a decleration

function foo(){
  "use strict";
    // this code is strict mode
  function bar(){
    // this code is strict mode
  }
}
// This code is not strict mode



"use strict";
function foo(){
  // this code is strict mode
  function bar(){
    // this code is strict mode
  }
}
// this code is strict mode



function foo(){
  "use strict";
  a=1; // RefrenceError
}
foo();



// Functions as values
var x=function bar() {
  // some code
};
// named function (preferable)
var x=function() {
  // some code
}
// anonymous function



// Immediately Invoked Function Expressions (IIFEs)
(function() {
  console.log(5);
})();
// first () makes it an expression and the last () calls the anonymous function instantly



// Example of (IIFE)
(answer=function(num=3) {
  console.log(num);
})();



var a=2;
(function() {
  var a=3;
  console.log(a);
})();

console.log(a) //2



let b=2;
{
  var b=5;
  console.log(b);
}
console.log(b) //2



// all variables were global before ES6
// so no need to the function expressions as much as we used to



// Closure 
// Example

function Adder(x) {
  function add(y){
  return x+y;
  };
  return add;
}
var plusTen=Adder(13); //23



// Modules 
// Example
function user() {
  var username,password;
  function Login(user,pw) {
    username=user;
    password=pw;
  }
}
var publicAPI={login:Login};
return publicAPI;
var fred=user();
fred.login("fred","@#rhrt%$45");



// this identifier
function foo(){
  console.log(this.bar);
}
var bar="global";
var obj1={
  bar:"obj1";
  foo:foo;
};
var obj2={
  bar:"obj2";
};
foo() //"global"
obj1.foo() //"obj1"
obj2.foo() //"obj2"
new foo(); //undefined



// Prototypes :
// The internal prototype refernce linkage from one object to its fall-back happens
// at the time the object is created. The simplest way to illustrate it is with a built-in utility called
// Object.create(...)



// Example
var foo={a:42};
var bar=Object.create(foo);
bar.b="hello world";
bar.b; //"hello world"
bar.a; //42



// Polyfilling
// it refers to taking the definition of a newer feature and producing a 
// piece of code that's equalivant to the behavior, but is able to run
// on older JS environments
// Example
if(!Number.isNaN)
{
  Number.isNaN=function isNaN(x){
    return x!==x;    //true, NaN is the only value that is not equalivant to itself so it's true
  };
}

// Transpiling 
// a tool to convert a new JS code to an old one 
// example 



// ES6 added a feature called "default parameter values" it look like this
function foo(a=2) {
  console.log(a);
}
foo(); //2
foo(42); //42
// The same code before ES6
function foo() {
  var a=argument[0] !== (void 0) ? arguments[0] : 2;
  console.log(a);
}


// -----------------------------------------------------------------------------------------------

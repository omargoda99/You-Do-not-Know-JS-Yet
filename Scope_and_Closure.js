// Chapter 1 from 4 to 253


// How does JS know which variables are accessible by any given statements and how does it handle two variables of the same
// name ? ---> Defined rules called scope



// The difference between compilation and interpretation 
// Code compilation is a set of steps that process the text of your code and turn it into a list of instructions, 
// the computer can understand typically, the whole source code is transformed at once 



// interpretation performs a similar task to compilation, in that it transforms your program into machine-understandable
// instructions, but the source code is transformed line by line 



// classic compiler theory : 
// 1st Tokenizing/Lexing 
// 2nd Parsing
// 3rd Code generation



// Tokenizing :
// Breaking up a string of characters into meaningful..
// ..chunks, called tokens like var a =2 ; 
// var / a / = / 2 / ; 
// A lexer does the same plus attachs extra information to each token. If we tokenize into words, a lexer would attach tags like number, word, punctuation etc.
// A parser usually uses the output of a lexer and constucts a parse tree.



// Parsing : 
// taking a stream -array- of tokens and turning it into a..
// ..tree of nested elements called Abstract Syntax Tree..
// aka AST
// Parent node : var => VariableDecleration
// Child nodes :
// a => Identifier has a value of a
// = => AssignmentExpression
// 2 => NumericalLiteral



// Code generation : 
// Taking an AST and turning it into executable code, and..
// ..part depends on the language you use, it turns AST into..
// ..set of instructions to create a variable called a, and..
// ..then store a value into a



// There are three program characteristics you can observe to..
// prove this to yourself: Syntax errors, early errors, ..
// .. and hoisting
// Example of Syntax error : 

var greeting = "hello";
console.log(greeting);
greeting =."Hi"; //SyntaxError: unexpected token.



// Early Errors

console.log("Howdy");
saySomething("Hello", "Hi");
function saySomething(greeting, greeting) {
  "use strict";
  console.log(greeting);
}
//SyntaxError because of the strict mode



// Hoisting
// let and const can't be hoisted
function func() {
  var a = 12;
  {
    a = 15;
    let a = 98;
    console.log(a);
  }
}
func(); //RefrenceError

function func() {
  var a = 12;
  {
    a = 15;
    var a = 98;
    console.log(a);
  }
}
func(); //98

function func() {
  var a = 12;
  {
    a = 15;
    var a;
    console.log(a);
  }
}
func(); //15



// What is the scope in javascipt ?
// Global Scope
// Function Scope
// Block Scope



// GLobal Scope --> global variables can be accessed from anywhere 
// var can be found in window object 
// let and const can't be found



// Function Scope --> variables declared within a function 
// can only be accessed within that funcion 
// the older var keyword appears in the window object used
// in funcion scope
// Example : 

function func() {
  var a = 12;
  a = 54;
  a = 90;
  console.log(a);
}
func(); //90
//window.a --> 90



// Block Scope --> The newest form of scope variables 
// declared within " {} " can't be accessed outside it
// made possible with let and const
// Global scoping example :

var a = 20;
let b = 40;
function dcode() {
  return b;
}
console.log(b); //40
// -IN CONSOLE-
window.a //20
window.b //undefined
dcode() //40



// Function Scoping example : 

function dcode() {
  var a = 20;
}
console.log(a); //RefereceError
// -IN CONSOLE-
dcode(); //undefined



// Function scope is not used widely because of var keyword
// Why shouldn't you use var in JS ?
// 1- Scoping
// 2- Hoisting 
// 3- GLobal Object Biding
// 4- Redecleration 



// Scoping (Main reason) :
// function scope is using var and it's confusing and
// one of the main sources of bugs in JS



// Hoisting : 

function run() {
  console.log(foo); //undefined 
  //Hoisting in action
  var foo = "Foo";
  console.log(foo); //Foo
}
run();

function checkHoisting() {
  console.log(foo); //RefernceError
  let foo = "Foo";
  console.log(foo); //Foo
}
checkHoisting();



// Global Object Binding : 

var foo = "Foo"; //Globaly scoped 
let bar = "Bar"; //not allowed to be globally scoped
console.log(window.foo); //Foo
console.log(window.bar); //undefined



// Redecleration "not good with let keyword"
// in strict mode, var will let you redeclare the same variable
// but the let keyword is not gonna do it

"use strict";
var foo = "Foo1";
var foo = "Foo2"; //No problem here
let bar = "Bar1";
let bar = "Bar2"; //SyntaxError
// identifier bar has already been declared



// Block Scope ( Preffered why ? const has the obvious advantage that it's a constant binding. let is forbidden to redeclare an identifier in the same scope, so it helps to prevent certain mistakes. ) :

if (100 > 20) {
  let a = 20;
}
console.log(a); //RefenceError

let a;
{
  a = 20;
}
console.log(a); //20



// Lexical Scoping : 
// This is a classic way to write javascipt, and How it works ?
// -Any inner function can have access to its outer scope variables
// Example :

const u = "Hi";
function call() {
  console.log(u); // call has access to its outer scope variable u 
}
call(); //Hi


// ----------------------------------------------------------------------------------

// Chapter 2 : Illustrating Lexical Scope



// Example :

var students = [
  { id: 14, name: 'Omar' },
  { id: 73, name: 'Ali' },
  { id: 112, name: 'Ahmed' },
  { id: 6, name: 'Hend' },
];
function getStudentName(studentID) {
  for (let student of students) {
    if (student.id == studentID) {
      return student.name;
    }
  }
}
var nextStudent = getStudentName(14);
console.log(nextStudent); //Omar



// We've desigated three scope colors with code comments
// RED --> Outermost global scope
// BLUE --> Scope of function getStudentName
// GREEN --> Scope inside the for loop



// Red has only access on Red's variables
// Blue has access on both Red's and Blue's variables
// Green has access on all variables of the code



// Difference between Engine, Scope manager and the Compiler
// Engine --> Resposible for start-to-finish compilation...
// ...and execution of JS program
// Compiler --> handles all the dirty work of parsing...
// ...and code-generation
// Scope Manager --> collects and maintains a lookup list...
// of all declared variables/identifiers, and enforces...
// a set of rules as to how these are accessible to...
// ...currently executing code



// Nested scope :
// Green has access on all Red and Blue variables



// Undefined Mess
var studentName;
console.log(typeof studentName); //undefined
console.log(typeof doesntExist); //undefined



// Examples of general and local scope



// 1st

var a = 13;
let b = 24;
console.log(`${a}`); //13
console.log(`${b}`); //24



// 2nd

var a = 53;
let b = 98;
function myfunc() {
  console.log(`${a}`);
  console.log(`${b}`);
}
myfunc();
//53
//98



// 3rd

var a = 75;
function myfunc() {
  console.log(`${a}`);
  let a = 43;
}
myfunc(); // ReferenceError



// 4th

var a = 75;
function myfunc() {
  console.log(`${a}`);
  var a = 43;
}
myfunc(); // undefined



// 5th

var a = 75;
function myfunc() {
  console.log(`${a}`);
  a = 43;
}
myfunc(); //75



// 6th
var a = 13;
function myfunc() {
  var a = 87;
  console.log(`${a}`);
}
myfunc(); // 87
// The function searches for its own variables in..
// its scope in first place then it searches outer



// 7th (not recommended)

var a = 13;
function myfunc() {
  a = 87;
  console.log(`${a}`);
}
myfunc(); //87



// 8th (weird and not recommended)

a = 13;
function myfunc() {
  "use strict";
  a = 87;
  console.log(`${a}`);
}
myfunc(); //87



// 9th

"use strict";
a = 13;
function myfunc() {
  "use strict";
  var a = 87;
  console.log(`${a}`);
}
myfunc(); //RefernceError 



// Block-scoping examples



// 1st

var x=10;
if(x==10)
{
    var x=50;
}
console.log(50); //50



// 2nd

let x=10;
if(x==10)
{
    var x=50;
}
console.log(x); //SyntaxError: Identifier 'x' has already been declared



// 3rd

var x=10;
if(x==10)
{
    let x=50;
}
console.log(x); //10
//only var that has access out of its scope, so let 
// and const are recommended



// 4th

var x=10;
if(x==10)
{
    console.log(x);
    var x=15;
}
console.log(x); 
// 10
// 15



// 5th

var x=10;
if(x==10)
{
    console.log(x);
    let x=15;
}
console.log(x); //RefernceError



// Examples of Lexical Scope


// 1st

function parent(){
    let a=10;
    function child(){
        console.log(a);
    }
    child();
}
parent(); //10



// 2nd

function parent(){
    let a=10;
    function child(){
        let a=340;
        console.log(a);
    }
    child();
}
parent();//340



// 3rd

function parent(){
    let a=10;
    function child(){
        console.log(a);
        let a=340;
    }
    child();
}
parent(); //ReferenceError: Cannot access 'a' before initialization



// 4th

function parent(){
    let a=10;
    function child(){
         a=340;
        console.log(a);
    }
    child();
}
parent(); //340



// 5th

function parent(){
    let a=23;
    function child(){
        let a=12;
        function grand(){
            console.log(a);
        }
        grand();
    }
    child();
}
parent(); //12



// 6th

function parent(){
    let a=23;
    function child(){
        let a=12;
        function grand(){
            let a=87;
            console.log(a);
        }
        grand();
    }
    child();
}
parent();//87



// 7th

function parent(){
    let a=23;
    function child(){
        let a=12;
        function grand(){
            console.log(a);
             a=87;
        }
        grand();
    }
    child();
}
parent(); //12



// 8th

function parent(){
    function child(){
        function grand(){
            console.log(a);
              a=87;
        }
        grand();
    }
    child();
}
parent(); //ReferenceError



// 9th

function parent(){
    function child(){
        function grand(){
            console.log(a);
              var a=87;
        }
        grand();
    }
    child();
}
parent(); //undefined



// 10th

function parent(){
    function child(){
        function grand(){
            console.log(a);
              let a=87;
        }
        grand();
    }
    child();
}
parent(); //ReferenceError



//--------------------------------------------------------------------------------------

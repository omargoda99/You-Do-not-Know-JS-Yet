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

var greeting="hello";
console.log(greeting);
greeting=."Hi"; //SyntaxError: unexpected token.



// Early Errors

console.log("Howdy");
saySomething("Hello","Hi");
function saySomething(greeting,greeting){
    "use strict";
    console.log(greeting);
}
//SyntaxError because of the strict mode



// Hoisting
// let and const can't be hoisted
function func(){
    var a=12;
    {
        a=15;
        let a=98;
        console.log(a);
    }
} 
func(); //RefrenceError

function func(){
    var a=12;
    {
        a=15;
        var a=98;
        console.log(a);
    }
} 
func(); //98

function func(){
    var a=12;
    {
        a=15;
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

function func(){
    var a=12;
    a=54;
    a=90;
    console.log(a);
}
func(); //90
//window.a --> 90



// Block Scope --> The newest form of scope variables 
// declared within " {} " can't be accessed outside it
// made possible with let and const
// Global scoping example :

var a=20;
let b=40;
function dcode(){
    return b;
}
console.log(b); //40
// -IN CONSOLE-
window.a //20
window.b //undefined
dcode() //40



// Function Scoping example : 

function dcode(){
    var a=20;
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

function run(){
    console.log(foo); //undefined 
    //Hoisting in action
    var foo="Foo";
    console.log(foo); //Foo
}
run();

function checkHoisting(){
    console.log(foo); //RefernceError
    let foo="Foo";
    console.log(foo); //Foo
}
checkHoisting();



// Global Object Binding : 

var foo="Foo"; //Globaly scoped 
let bar="Bar"; //not allowed to be globally scoped
console.log(window.foo); //Foo
console.log(window.bar); //undefined



// Redecleration "not good with let keyword"
// in strict mode, var will let you redeclare the same variable
// but the let keyword is not gonna do it

"use strict";
var foo="Foo1";
var foo="Foo2"; //No problem here
let bar="Bar1";
let bar="Bar2"; //SyntaxError
// identifier bar has already been declared



// Block Scope ( Preffered why ? const has the obvious advantage that it's a constant binding. let is forbidden to redeclare an identifier in the same scope, so it helps to prevent certain mistakes. ) :

if(100>20)
{
    let a=20;
}
console.log(a); //RefenceError

let a;
{
    a=20;
}
console.log(a); //20



// Lexical Scoping : 
// This is a classic way to write javascipt, and How it works ?
// -Any inner function can have access to its outer scope variables
// Example :

const u="Hi";
function call(){
    console.log(u); // call has access to its outer scope variable u 
}
call(); //Hi


// ----------------------------------------------------------------------------------




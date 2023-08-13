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

// Chapter 2



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


// Chapter 3



// LookUp
// Engine doesn't need to lookup through a bunch of scopes to figure out which scope...
// ...bucket a variable comes from



var name="Hi";
console.log(name , "There");
function say(){
    console.log(name , "There");
}
say();
// Hi There
// Hi There
// Function "say" can read variables from outer scope, the opposite is wrong



// Shadowing



function Do(){
    const count=10; //outer count
    if(true)
    {
        const count=20; //inner count
        console.log(count); //20;
    }
    console.log(count); //10;
}
Do();



// Shadowing occurs when a variable is declared in a certain scope (local scope)...
// ..., has the same name as a variable in an outer scope -global variable-
// The outer variable is shadowed by the inner one
// in JS variables can be shadowed in both the global and function scope, global vars...
// ... can be shadowed by function-scope variables and the opposite is true
// Function-scoped variables can be shadowed by block-scoped variables -let or const-



// Variable shadowed in global scope 

var x=5;
function foo(){
    let x=3;
    console.log(x); //3
}
foo();
console.log(x); //5



// Variable shadowed in function scope

function foo(){
    var x=3;
    console.log(x); //3
    {
        let x=5;
        console.log(x); //5
    }
    console.log(x); //3
}
foo();



// Pros and cons of shadowing



// Pros

// 1st : can be used to improve code readability and clearity

function foo(x){
    if(x>10)
    {
        let y="big";
    }
    else
    {
        let y="small";
    }
}
console.log(y);
try{
    foo(20);
}
catch(err)
{
    console.log(err);
}
// ReferenceError: y is not defined



function foo(x){
    if(x>10)
    {
        let y="big";
    }
    else
    {
        let y="small";
    }
    console.log(y);
}
try{
    foo(20);
}
catch(err)
{
    console.log(err);
}
// ReferenceError: y is not defined



// 2nd : reducing errors

function foo(x){
    let y=x; //y is shadowed by x
    y=101;
    console.log(x); //10
}
foo(10);



// Cons 

// 1st : can make code hard to understand 

function foo(x){
    let y=x;
    {
        let x=10;
        y=20;
        console.log(x); //10
    }
    console.log(x); //20
}
foo(20);



// 2nd : more hard to debug

function foo(x){
    let y=x;
    console.log(y); //10
    {
        let x=20;
        let y=30;
        console.log(x); //20
    }
    console.log(x); //10
}
foo(10);



// Shadowing examples



var s="suzy";
function p(s){
    s=s.toUpperCase();
    console.log(s); //SUZY
}
p("Omar"); //OMAR
p(s); //SUZY
console.log(s); //suzy



// Global unshadowing trick -not a good practice-

var s="Ali";
function p(){
    console.log(s); //Omar
    console.log(window.s); //Ali in console
}
p("Omar");



var one=1;
let two=2;
const three=3;
class cl {}
window.one // 1
window.two //undefined
window.three //undefined
window.cl //undefined



// Example 

var special =42;
function lookingFor(special)
{
    function keepLooking(){
        var special=3.141592;
        console.log(special);
        console.log(window.special);
    }
    keepLooking();
}
lookingFor(1352534636);
// 3.141592
// 42



var special=42;
function lookingFor(special)
{
    var another={
        special: special
    };
    function keepLooking(){
        var special=3.141592;
        console.log(special);
        console.log(another.special);
        console.log(window.special);
    }
    keepLooking();
}
lookingFor(500);
// 3.141592
// 500
// 42



// Illegal shadowing
// let can shadows var, but var can't shadow let

function something(){
    var special="JS";
    {
        let special=56;
        //Fine
    }
}



function something(){
    {
        let special=56;
    }
    var special="JS"
    // SyntaxError
}



// Function Name Scope



var ask=function t(){
    console.log(t);
};
ask();// [Function: t]
console.log(t); // RefernceError: t is not defined 



var ask=function t(){
    "use strict";
    t=42; // TypeError
};
ask();
// TypeError



// in strict-mode the program fails with type error
// in non-strict-mode fails silently with no exception



// A function that doesn't have a name identifier is called an "anonymous function expression"
// leaving off a name from a function makes it harder for the reader to tell what...
// ...the function's purpose is



// Arrow Function

function print(){
    return 10;
}
console.log(print()); //10
console.log(print); //[Function: print]



let print=function(){
    return 10;
};
console.log(print()); //10



let print=()=>10;
console.log(print()); //10



let print=_=>10;
console.log(print); //[Function: print]
console.log(print()); //10



let print=()=>{
    console.log(54);
    return 34;
}
console.log(print());
//54
//34



let print=()=>{
    return 34;
    console.log(54);
}
console.log(print());
// 34
// console.log(54) will be ghosted



let p=function(num){
    return num;
};
console.log(p(5)); //5



let print=(num1,num2)=>{
    return num1+num2;
}
console.log(print(12,43)); //55



let p=num=>num;
console.log(p(43)); //43



// Backing out

// when a function is defined, a new scope is created, the positioning of scopes...
// ...nested inside one another creates a natural scope hierarchy throughout the program...
// ...called scope chain



// --------------------------------------------



// Chapter 4



// JS exposes its built-ins:

// primitive: undefined, null, Infintiy, NaN
// natives: Date(), Object(), String(), etc
// global functions: eval(), parseInt(), etc
// namespaces: Math, Atomics, JSON, etc
// friends of JS: Intl, WebAssembly



// The environment hoisting the JS engine exposes its own built-ins:

// console (and its methods)
// the DOM 
// timers
// web platform APIs



// Window Object
// var is showed in window object unlike let and const 

window.alert("Hi"); //undefined

// globalThis : is meant to fill the gap between the window object...
// and global and give us one keyword to refer to whatever the global object is



let lll="let";
var vvv="var";
nnn="none";
(
    function test(){
        nnn="declared with neither";
        console.log(lll);
        console.log(vvv);
        console.log(nnn);
    }
)();
// let
// var
// declared with neither



let l="let";
var v="var";
(
    function test(){
        nnn="neither";
        console.log(l,globalThis.l);
        console.log(v,globalThis.v);
        console.log(nnn,globalThis.nnn);
    }
)();
// let undefined
// var undefined
// neither neither



console.log(this); // {}
console.log(global); 
console.log(global.this); //undefined



// global without this is not a good practice choice

// console.log(global) :
/* <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 46.92689999938011,
      nodeStart: 7.436200000345707,
      v8Start: 10.797900006175041,
      bootstrapComplete: 38.26170000433922,
      environment: 23.387600004673004,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1691881387376.089
  },
  fetch: [AsyncFunction: fetch]
} */



// globalThis was added in Node.js 12

// Difference between the browser and Node.js
// node : var is undefined in globalThis
// browser : var is defined in globalThis



typeof globalThis //object
typeof global //object
typeof this //object
typeof window //undefined
typeof self //undefined



// -------------------------------



// Chapter 5



greeting(); //Hello
function greeting(){
    console.log("Hello"); //Works fine 
}



// The term most commonly used for a variable being visible from the beginning of its enclosing...
// ...scope, even though its declaration may appear further down in the scope, is called...
// ...hoisting 



greeting(); //TypeError
var greeting=function greeting(){
    console.log("Hello");
};



// Variable Hoisting 

greeting ="Hello";
console.log(greeting);
// Hello
var greeting ="Omar";

// the identifier is hoisted 
// and it's auto intialized to the value undefined from the top of the scope
// using this kind of hoisting feels unnatural and weird 



var greeting;
greeting="hi";
console.log(greeting); //hi
greeting="there"; //var is gone 



// The hoisting (metaphor) proposes that pre-processes the original program and re-arrange it a bit

// Example of re-arrangement

s="Mike";
greeting();
// Hello Mike!
function greeting(){
    console.log(`Hello${s}!`);
}
var s;



// After the re-arrangement

function greeting(){
    console.log(`Hello${s}`);
}
var s;
s="Mike";
greeting();
//Hello Mike



// Re-declaration

var sn="Omar";
console.log(sn); // Omar
var sn;
console.log(sn); // Omar



// Which is equivalent to :

var sn;
var sn; //pointless
sn="Omar";
console.log(sn); //Omar
console.log(sn); //Omar



// var sn; doesn't mean that var sn=undefined;

var sn="Omar";
console.log(sn); //Omar
var sn;
console.log(sn); // still "Omar"
var sn=undefined;
console.log(sn); //undefined



var greeting;
function greeting(){
    console.log("Hello");
}
var greeting;
typeof greeting; //function
var greeting="Hello";
typeof greeting; //string



let sn="Frank";
console.log(sn);
let sn="Suzy";
// SyntaxError: Identifier 'sn' has already been declared



var x=3;
let x=1;
console.log(x);



let y=2;
var y=5;
console.log(y);

// both throw SyntaxError
// the only way to re-declare a variable is to use var for all



// Constants

const empty; //SyntaxError



const v="Hi";
console.log(v);
// Hi
v="Mike";
// TypeError: Assignment to constant variable -Not a SyntaxError-
// The v variable cannot be re-assigned cuz it's declared with a const



// Loops 

var keepGoing=true;
while(keepGoing){
    let value=Math.random();
    if(value>0.5)
    {
        keepGoing=false;
    }
}



// Will the program get errors thrown? No
// It's not re-declaration, all this rules are applied per scope instance,
// in other words, each time a scope is entered during execution, everything resets



var keepGoing=true;
while(keepGoing){
    var value=Math.random();
    if(value>0.5)
    {
        keepGoing=false;
    }
}



// Is value being "re-declared" here? No...
// ...cuz var ain't treated as a block-scoping declaration, no re-declaration here either



for(let i=0;i<3;i++)
{
    let value=i*10;
    console.log(`${i}: ${value}`);
}
// 0: 0
// 1: 10
// 2: 20
// what about "re-declaraion in for-loop"? : the same like while loop



// for(let i=0;i<3;i++)
// {
//     let value=i*10;
//     console.log(`${i}: ${value}`);
// }
// This code is equivalent to :  
{
    let $$i=0;
    for(;$$i<3;$$i++)
    {
        let i=$$i;
        let value=i*10;
        console.log(`${i}:${value}`);
    }
    // 0: 0
    // 1: 10
    // 2: 20 
}



// declared once per scope instance, No re-declaration here

for(let index in sn){
    // Fine
}

for(let s of sn)
{
    // Fine
}



// How constants impact ?
// Consts are fine with all types of loops except the classic form of for-loop

for(const i=0;i<3;i++)
{
    // TypeError after the first iteration
}



for(const i=0; true;)
{
    // This is fine, but kinda pointless
}



// Uninitialized variables aka, TDZ
// let and const declarations are not quite the same in this respect, consider



console.log(k);
let k="Omar";
//ReferenceError



n="Suzy";
console.log(n);
let n;
//ReferenceError



let z;
z=43;
console.log(z); //43



// var x; != var x=undefined
// let x; == let x=undefined



// A var has a TDZ, but it's zero in length, only let and const have an observable TDZ



askQ();
let m="suzy";
function askQ(){
    console.log(m);
}
// ReferenceError



askQ();
var m="suzy";
function askQ(){
    console.log(m);
}
// Undefined



// there is a misconception that TDZ means let and const don't hoist, this is inaccurate
// the actual difference is that let/const declarations don't auto initialize at the beginning...
// ...of the scope that way that var does 



var f=3;
{
    console.log(f); //ReferenceError
    let f=1;
    console.log(f); //1
}



// The TDZ is the time window where a variable exists but is still...
// ...uninitialized 
// The term coined by TC39 to refer to the period of time from entering of a scope...
// to where the auto-initialization of the variable is
// How to avoid TDZ ?
// always put let and const at the top of any scope



// ------------------------------------------------------

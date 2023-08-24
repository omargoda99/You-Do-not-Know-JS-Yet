// Chapter 1   



function indentify(){
    return this.name.toUpperCase();
}
function speak(){
    var greeting ="Hello, I'm "+indentify.call(this);
    console.log(greeting);
}
var me={
    name:"Omar"
};
var you={
    name:"Ahmed"
};
indentify.call(me); //OMAR
indentify.call(you); //AHMED
speak.call(me); //"Hello, I'm OMAR"
speak.call(you); //"Hello, I'm AHMED"



// Instead of this use : 

function indentify(context){
    return context.name.toUpperCase();
}
function speak(context){
    var greeting ="Hi "+indentify(context);
    console.log(greeting);
}
indentify(you); //AHMED
speak(me); //Hi OMAR



// the this mechanism provides a more elegant way og implicity "passing along"...
// ...an object reference, leading to cleaner API design and easier reuse



// this doesn't let a function get a reference to itself consider this :

function foo(num){
    console.log("foo: "+num);
    this.count++; //keeps track of how many times 'foo' is called
}
 count=0;
for(var i=0;i<10;i++)
{
    if(i>5){
        foo(i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
console.log(foo.count); //0



// foo.count is still 0,that what it means in (this.count++)



function foo(num){
    console.log("foo: "+num);
    count++;
}
var count=0;
for(var i=0;i<10;i++)
{
    if(i>5){
        foo(i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
console.log(foo.count); //undefined



function foo(num){
 console.log("foo: "+num);
 data.count++;   
}
var data={
    count : 0
};
var i;
for (i=0 ; i<10; i++) {
    if(i>5)
    {
        foo(i);
    }
}
console.log(data.count);
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// 4 



// While it solves the problem, but it simply ignores the real problem...
// ... -lack of understanding what this means and how it works and instead...
// ... falls back to the comfort zone: lexical scope



// consider these two functions : 

function foo(){
    foo.count=4; // 'foo' refers to itself
}

sellTimeOut(
    function(){
        //anonymous function can't refer to itself
    },
10)

// another solution without using this

function foo(num)
{
    console.log("foo: "+num);
    foo.count++; //keep track of how many times 'foo' is called
}
foo.count=0;
var i;
for (i = 0; i< 10; i++) {
    if(i>5)
    {
        foo(i);
    }
}
console.log(foo.count);

// foo: 6
// foo: 7
// foo: 8
// foo: 9
// 4



// The this solution 
function foo(num)
{
    console.log("foo: "+num);
    this.count++;
}
foo.count=0;
var i;
for(i=0;i<10;i++)
{
    if(i>5)
    {
        // using call(), we ensure the this
        // points at the function foo itself
        foo.call(foo,i);
    }
}
console.log(foo.count);

// foo: 6
// foo: 7
// foo: 8
// foo: 9
// 4



// consider code that attemps to use this to implicitly refer to a function's lexical scope
function foo(){
    var a=2;
    this.bar();
}
function bar(){
    console.log(this.a);
}
foo(); // ReferenceError
// you can't use a this reference to look something up in a lexical scope


// --------------------------


// Chapter 2

// Call-Site

// To understand 'this' binding, we have to understand the call-site:
// The location in code where is a function is called not declared 
// Finding the call-site is generally "go locate where a function is called from,"
// What's important is to think about the call-stack 
// Call-Stack : the stack of functions that have been called to get us to the...
// ...current moment in execution 
// The Call-Site we care about is in the invocation before the currently execution function
// Consider this code : 

function baz(){
    // call stack is: baz
    // so our call site is the global scope
}
function bar(){
    // call stack is: baz => bar
    // call site is baz
}
function foo(){
    // call stack is baz => bar => foo
    // our call site is bar
    console.log("foo");
}
baz(); //call-site for baz
// Take care while analyzing the code to find the actual call-site from call-stack...
// ...because it's the only thing that matters for 'this' binding



// Default binding

function g(){
    console.log(this.a);
}
var a=2;
g();  //undefined



function g(){
    "use strict";
    console.log(this.a);
}
var a=2;
g(); //TypeError: 'this' is undefined



// Strict mode : the strict mode state of the call-site foo() is irrelevant :
function foo(){
    console.log(this.a);
}
var a=2;
(
    function(){
        "use strict";
        foo();//undefined
    }
)();



// implict binding 

function foo(){
    console.log(this.a);
}
var obj={
    a:2 ,
    foo:foo
};
obj.foo();

function foo(){
    console.log(this.a);
}
var obj2 ={
    a: 42,
    foo :foo
};
var obj1={
    a: 2,
    obj2 : obj2
};
obj1.obj2.foo(); //42

// only the top/last level of an object property reference...
// ... chain matters to the call-site



//implicitly lost 
function foo(){
    console.log(this.a);
}
var obj ={
    a:2,
    foo:foo
};
var bar =obj.foo; //function reference
var a="Oops";
bar(); //undefined



// new Binding

// somethind=new MyClass();

// consider this code

function foo(a){
    this.a=a;
}
var bar=new foo(2);
console.log(bar.a); //2



// Everything in order 

function foo(){
    console.log(this.a);
}
var obj1 ={
    a:2,
    foo:foo
};
var obj2={
    a:3,
    foo:foo
};
obj1.foo(); //2
obj2.foo(); //3
obj1.foo.call(obj2); //3
obj2.foo.call(obj1); //2



// example

function foo(something)
{
    this.a=something;
}
var obj1={
    foo:foo
};
var obj2={};
obj1.foo(2);
console.log(obj1.a); //2
obj1.foo.call(obj2 ,3);
console.log(obj2); //3
var bar =new obj1.foo(4);
console.log(obj1.a); //2
console.log(bar.a); //4



// So let's reverse on "Binding" again in a hurry

function print(){
  console.log(this.x +" "+ this.y);
}
let obj1={
  x : 12,
  y : 54
};
let obj2={
  x: 3,
  y: 4
};
print();
// undefined undefined



function print(){
  console.log(this.x +" "+ this.y);
}
let obj1={
  x : 12,
  y : 54
};
let obj2={
  x: 3,
  y: 4
};
let obj1_func=print.bind(obj1);
obj1_func();



function print(){
  console.log(`${this.x} ${this.y}`);
}
obj1 ={
  x: 14,
  y:76
};
obj2={
  x:90,
  y:11
}
let obj2_func=print.bind(obj2);
obj2_func();
// 90 11



function print(){
  console.log(`${this.x} ${this.y}`);
}
obj1 ={
  x: 14,
  y:76
};
obj2={
  x:90,
  y:11
}
let obj2_func=print.bind(obj2);
let obj1_func=print.bind(obj1);
obj1_func();
obj2_func();
// 14 76
// 90 11



function print(){
  console.log(this);
}
obj1 ={
  x: 14,
  y:76
};
obj2={
  x:90,
  y:11
}
print();
// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 41.56460800021887,
//       nodeStart: 0.2200789973139763,
//       v8Start: 1.354445993900299,
//       bootstrapComplete: 30.531448997557163,
//       environment: 15.322795994579792,
//       loopStart: -1,
//       loopExit: -1,
//       idleTime: 0
//     },
//     timeOrigin: 1692146240847.964
//   },
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   obj1: { x: 14, y: 76 },
//   obj2: { x: 90, y: 11 }
// }


// ---------------------------------


// Chapter 3



// Objects have properties and methods

let a={
    num: 5,
};
a.num; //5
a["num"]; //5



// Example :

// Book object
// proberties : title, price, author and description
// methods : buy, read, review and info



//  There are 4 ways to define a javascript object 

// Keyword new :
let book=new Object();
book.property="value";
book.method=function (){};

// Object literals 
let book ={
    property: "value" ,
    method : function (){}
};

// Singleton 
let book =new function (){
    this.property="value";
    this.method=function(){};
}

// Function
function book(){
    this.property="value";
    this.method=function(){};
    this.method=method;
}
book.prototype.method();
let book=new book();



// Example

let book =new Object();
typeof book; //object
book.title="You don't know js yet";
book.price=24.99;
book.getInfo=function(){
    return this.title +" is "+this.price +" $";
}
console.log(book.getInfo());



// Example of object literals

let book={
    title: "You don't know js yet",
    prices: [24.99 , 51.99],
    getInfo : function (){
        return this.title+" books has a range of "+this.prices+"$";
    }, //Tralling or hanging comma
}
console.log(book);
// {
//     title: "You don't know js yet",
//     price: 24.99,
//     getInfo: [Function: getInfo]
// }
console.log(book.getInfo());



// Example of Function
function book(title , price){ //Constructor
    this.title="You don't know js yet";
    this.price=24.99;
    this.getInfo=function(){
        return this.title+" is "+this.price+"$";
    };
    this.getInfo=getInfo;
}
book.prototype.getInfo=function (){
    return this.title + " is "+this.price+"$";
}
let book=new book();
console.log(book.getInfo());



// Singleton example
let book=function(){
    this.title="You don't know js yet";
    this.price=24.99;
    this.getInfo=function(){
        return this.title+" is "+this.price+"$";
    }
}
let mybook=new book(); //Error --> book is not a constructer
console.log(book.getInfo());



// Getter and setter
// for simple syntax

showInfo() //Method
get showInfo() //Property



function changeName(newName){
    this.name=newName;
}
// object's original name is Omar
object.changeName("Ali");

function changeEmail(newEmail){
    this.email=email;
}
// setter
set changeEmail(newEmail){
    this.email=newEmail;
}
object.changeEmail("oooo@ooo.com");



// JS doesn't support the actual usage of setters and getters 
// but it makes the variable private and provides the definition of ( Encapsulation )


const student = {

    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
console.log(student.getName()); // error



const student = {
    firstName: 'Monica',
    
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};



// -------------------------------------



// Chapter 4

// Constructor



const user1={
    id : 100,
    username : "Omar",
    salary : 5000
};
const user2={
    id : 101,
    username : "Saleh",
    salary : 3500
};
const user3={
    id : 102,
    username : "Waleed",
    salary : 5500
};

// Is it logical to increase each object's salary ? No
// Use a constructor



function User(name,id,salary){
    this.name=name;
    this.id=id;
    this.salary=salary;
    // this.salary=salary+1000; //to add each employees' salaries
}
let userOne=new User("Omar",100,5000);
let userTwo=new User("Ahmed",101,4500);
let userThree=new User("Khaled",102,5500);



// Inheritance

const me={
    talk(){
        return "Talking";
    }
}
me.talk(); //Talking

const you={
    talk(){
        return "Talking";
    }
}
you.talk(); //Talking
// We both are talking and human right ? 



function person(){}
person.prototype.talk=function(){
    return "Talking";
}
const me=new person();
me.talk(); //Talking


function person(){
    this.talk=function(){
        return "Talking";
    }
}
const me=new person();
me.talk() //Talking



function person(){
    this.age=12;
}
const me=new person();
person.age=40;
me.age //12



class SuperMan extends person{
    fly(){
        return "Flying";
    }
}
const u=new SuperMan();
u.fly(); //Flying
u.talk(); //Talking



// ------------------------------------



// Chapter 5



// Prototypes

const dude={};
console.log(dude);
// __proto__: object

dude.name="Omar";
dude.age=20;

// dude --> 
// {
//     name:"Omar",
//     age:20,
//     __proto__: object
// }
dude.talk() //undefined



const humans=['Omar','Ali'];
// --> humans
// (2) ["Omar","Ali"]
//     0: "Omar"
//     1: "Ali"
//     length: 2
//     __proto__: Array(0)
// Array has concat, find, filter, split, etc,...



const human={
    type : "human"
};
const omar=Object.create(human);

// omar --> __proto__
//          type: "human"
//          __proto__: object

// const me={} == const me=new Object();

function Dude(name){
    this.name=name;
}
const me=new Dude("Omar");

// me.__proto__ === Dude.prototype is True



// ---------------------------------



// Chapter 6



// Behavior Delegation leverages JavaScript’s prototype mechanism...
// ...(linking objects to other objects) which lets some object provide...
// ...a delegation to common utility objects for property or method references...
// ...if not found on the object itself.



const User = {
    init(name) {
        this.name = name;
    },
    getName() {
        return this.name;
    }
};
const Employee = Object.create(User);
Employee.build = function(name, position) {
    this.init(name);
    this.position = position;
};
Employee.outputDetails = function() {
    console.log(this.getName() + " is a " + this.position);
};
const omar = Object.create(Employee);
john.build("Omar", "Developer"); 
const goda = Object.create(Employee);
mary.build("Goda", "Manager");
omar.outputDetails(); // John is a Developer
goda.outputDetails(); // Mary is a Manager



// In JavaScript, the [[Prototype]] mechanism links objects to other objects. There are no abstract mechanisms like "classes",
// ...no matter how much we try to convince ourselves otherwise.



// As we can see, behavior delegation is the more natural way to model objects in JavaScript...
// ...It leverages the prototype lookup process to enable peered objects to... 
// ...delegate behavior with each other without strictly declaring class hierarchy, like in traditional object-oriented languages

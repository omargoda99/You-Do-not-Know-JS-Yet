// Follow ES6, ES7, ES8, ES9 and ES10 in (new in javascript website)
// In this summarization we will focus on ES6 (2015)

// in ES6 const and let were released

const x=5;
console.log(x); //5

let y=10;
console.log(y); //10

// You can redeclare variables in let but not in const

const r=2;
r=1; //TypeError
console.log(r);

const q; //missing intializer
q=4; 



// Deference between let, const and var
// 1st Hoisting : 

console.log(a); //undefined
var a=10;
console.log(a); //10

a=10;
console.log(a); //10
var a;

// There is no hoisting in let and const

console.log(s); //cannot access variable before intialization
const s=13;

console.log(e); //cannot access variable before intialization
let e=13;

// 2nd Scope : 

var d=4;
function f(){
    var k=12;
    console.log(d); //4
}
console.log(k); //ReferenceError k is not defined

if(true){
    let x=12;
}
console.log(x); //RefernceError

if(true){
    var f=123;
}
console.log(f); //123

// Use let to handle memory garbadge
// To make your lifetime variable's limited is great to save the memory



// Template literals
"hello\nworld"
// hello
// world

`hello
world`
// hello
// world

// String concatenation
let z="hello";
x=3;
"hello"+z //hello world

`hello${z}` //hello world

"hello"+x; //hello3
"hello"+x+2 //hello32
"hello"+(x+2) //hello5
"hello"+x*2 //hello6

console.log(`hello ${x>2?6:5}`); //hello6

// Default paremeters

function func(name,age){
    if(age===undefined)age=20;
    console.log(name+" "+age);
}
func("Omar"); //20
func("Omar",21); //21

// Or ,

function func(name,age){
    if(!age /*age is undefined so it's false then the opposite of the undefiend is true*/)age=20;
    console.log(name+" "+age);
}
func("Omar"); //20
func("Omar",21); //21

// Or ,

function func(name,age){
    age=age||20; // or operator will take the first true condition
    console.log(name+" "+age);
}
func("Omar"); //20
func("Omar",21); //21

// Or , 

function func(name,age=20){
    console.log(name+" "+age);
}
func("Omar"); //20
func("Omar",21); //21
func("Omar",undefined); //20



// Arrow Function is an anoynomous function

const func=(n)=>{  /*const func=n=>{return Math.pow(n,10);} or const func=n=>Math.pow(n,10);*/
    return(Math.pow(n,10));
}
console.log(func(n=10));


let obj={
    name:"omar",
    friend:"ahmed",
    greetFriend:function(){
    function getFriend(){
            return this.friend; 
        }
        return `Hello${getFriend()}, I'm${this.name}`;
    }
}
console.log(obj.greetFriend());
// Hello undefiend, I'm omar



let obj1={
    name:"omar",
    friend:"ahmed",
    greetFriend:function(){
        let that=this;
    function getFriend(){
            return that.friend; 
        }
        return `Hello${getFriend()}, I'm${this.name}`;
    }
}
console.log(obj.greetFriend());
// Hello ahmed, I'm omar



// There is much more simpler solution to this problem using arrow functiion

let obj2={
    name:"omar",
    friend:"ahmed",
    greetFriend:function(){
    let getFriend=()=>this.friend;
        return `Hello${getFriend()}, I'm${this.name}`;
    }
}
console.log(obj.greetFriend());
// Hello ahmed, I'm omar

// Since arrow function does't make any context, this value comes from the context (greetFriend)



// for of iterable objects
// iterable objects has @@iterator and next method
// @@iterator comes form Symbol.iterator
// next methods returns done and value
// Built-in itarable objects : set, map, string and array
// the object is not iterable you can't use for of

let arr=[1,2,3,4,5];
let i=(arr[Symbol.iterator]());
console.log(i.next()); //{value: 2 , done:false} until it's undefined and done is true



for(let i of arr){
    console.log(i); // 1 2 3 4 5
}

// For in works with any kinda object in JS

// Array.of() and Array.from()

let k=Array(1,2,4); // 1 2 4,  Array's constructor is stored in k
let j=Array(5); //Empty array of length 5

let c=Array.of(1,2,3); // 1 2 3
let b=Array.of(5); //5 of length 1

let arr1=Array.from("Hello"); //[H , e , l , l , o], converts string to array
let ar=Array.from({length: 50}); //array of undefined 
ar=ar.map((e,i)=>i+1); //1 --> 50
// Or ,
let ar2=Array.from({length: 50},(e,i)=>i+1);



// Find

let ar1=[1,2,3,4,5];
let res=ar1.find(function (e){
    if(e>3) return true;
    else 
    return false;    
});
console.log(res); //4

// Or , 



let arr2=[1,2,3,4,5];
let resu=ar1.find(function (e){
    return e>3;    
});
console.log(res); //4



// Or , 



let a2=[1,2,3,4,5];
let u=ar1.find(e => e>3);
console.log(res); //4



let arrr2=[1,2,3,4,5];
let ut=ar1.find(e => e>20);
console.log(res); //undefined



// Destructing Assignments

let a12={
    a3: 12,
    b3: 34,
    c3: 1
};
let [a3,b3,c3]=a12;
// [a3,b3,c3,g3] --> g3 is undefined



// Spread operator (...array)

let ki=[1,2,3];
function func(a,b,c){
    console.log(a+b+c);
}
func(...ki); //6

func(ki); //1 2 3 undefined undefined , It treats the array ki as the first parameter (string) and the b and c are undefined



// And it can spread the variable itself

let ji=[1,2,3,4];
let [y1,y2,...yn]=ji;
console.log(a); //1
console.log(b); //2
console.log(c); //[3,4]

// [a,...b,c] --> SyntaxError
// You can copy the array using the spread operator

let g12=[1,3,4];
let arr34=[...gf];
for(let i of arr34){
    console.log(i);
}



// Set data structure

let set=new Set();
set.add(12);
set.add(43);
set.add(90);
set.add(12);
//12 43 90
console.log(set.size); //3
console.log(set.has(90)); //true
console.log(set.delete(12));
console.log(set);//--> [43,90]
console.log(set.clear()); 
console.log(set); //undefined

// Some higher order functions like find and filter

// Map 

let map=new Map([
    ["key","value"]
]);

let map1=new Map([
    ["key1",undefined]
]);
map.set("key2","value2");
// If I have the following values It will be adjusted else it will be added
console.log(map.get("key")); //"value"
console.log(map.get("key2")); //"value2"
console.log(map.get("key3")); //undefined
console.log(map1.get("Key1")); //undefined but it doesn't mean that the value of the key is missing but its value is undefined
console.log(map.has("key3")); //false
console.log(map.delete("key1")); //true
console.log(map); "key2 , value2"
console.log(map.clear()); //it clears all map's elements
console.log(map.size()); //1
// map is an iterable object you can use for each method or for of since it's iterable object which can use @@iterable

// What is the difference between the Map and the Object
// 1st : Order of keys matters in the Map

let m=new Map([
    ["K2,V2"]
]);
m.set("K1","V1");
console.log(m); //{K2=>V2 , K1=>V1}

let obj3={
    K1:"V1",
    K2:"V2"
};

// The order in the objects depends on the unicode

for(let i in obj3){
    console.log(obj3[i]);
}
// V1
// V2
 
// Case : String and Symbol together, then use map to order

// 2nd : Keys in Object can be just string, symbol or number but in map it can be an object or function or anything
// 3rd : you can get the size of the map easily unlike the object
// 4th : Map is iterable unlike the object (you can use the for of)
// 5th : if you wanna set or get keys it's a piece of cake in map unlike the object



// Promises is explained in Async & performance

// Classes 

class PersonClass{
    name 
    age
    constructor(name ,age){
        this.name=name;
        this.age=age;
    }
    getInfo(){
        return this.name+" : "+this.age;
    }
}

let p=new PersonClass("Omar",20);
console.log(p.getInfo()); //Omar : 20

class studentClass extends PersonClass{
    faculty
    // You can override the method getInfo
    constructor(name,age,faculty){
        // this.age=age;
        // this.name=name;
        // Or you can just use super
        super(name,age);
        this.faculty=faculty;
    }
    getInfo(){
        return this.name+" : "+this.age+" : "+this.faculty;
    }
}
let std=new studentClass("Omar",20,"Computer Science");
console.log(str.getInfo());

let company = {
    name: "A",
    pay: function () {
      console.log("Paying");
    },
  }; //company object
  let worker = {
    id: 1,
    work: function () {
      console.log("Working");
    },
  }; //worker object
  worker.__proto__=company; //worker object inherits company object
  console.log(worker); //prints Paying using the worker
  worker.pay(); // takes the pay function from the company

let company = {
  name: "prototype inheritance",
};
console.log(company.hasOwnProperty("name")); //true

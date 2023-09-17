// Sync code runs step by step

var name="Omar"
console.log(name); //omar



//runs step by step
// there is memory allocation for the variable then writing the actual string into 
// the memory and the second line of code is paused



let x;
function getNum(){
    setTimeout(()=>{
        x=20 
    },2000)
}
console.log("The number is "+x); //The number is undefined
// Cuz our function took 2 seconds to set the value of x, but the console log didn't wait for it



let y;
function getNum(){
	console.log("Hi There");
    setTimeout(()=>{
        y=20;
        console.log(`y`);
    },2000)
    console.log("Welcome");
}
getNum();
console.log("Hello World");
console.log("The number is "+y);



// The output in console

// Hi There
// Welcome
// Hello World
// The number is undefined
// 20



// You call your friend while cooking is done, can you do it ?
// of course yes, you don't have to wait the dinner to call your friend



// Call backs
// The previous code is a bad practice



function getNum(callback){
	setTimeout(()=>{
		const x=12;
		callback(x);
	},2000);
}
function Num(x){
	console.log(x);
}
getNum(Num);
console.log("call you friend");
// call your friend
// 12

// Call back hell is the reason of making promises more cooler and has clearer syntax



function thing1(callback){
    // order pizza
    callback();
}

function thing2(callback){
    // wait for the pizza
    callback();
}

function thing3(callback){
    // eat the pizza
    callback();
}

thing1(()=>{
    thing2(()=>{
        thing3(callback);
    })
})

// Thing1, Thing2 then Thing3 
// and that's we call call-back hell



// Promises 

// The difference between async and sync 
// async => not blocking 
// sync => blocking

const p="omar";
function sync(){
    // some code
}

sync();
console.log(p);

// the console log is getting blocked right there it took 3565 ms



const e="omar";
async function async(){
    // some code
}

async();
console.log(e);

// 0 ms

// Promises are just like real life ones, you make it or recieve it, the maker is async 

// Example
function maker(){
    return new Promise(function(resolve /* this when the data is ready to be given*/ , reject /* like error message of something like wifi issue*/){
        // async logic
    });
}
let reciever=maker();



function getWeather(){
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            reject("Error");
        })
    })
}

getWeather(); // Rejected



// the function needs to return something, we don't have the actual data yet, 
// it returns the promise of getting some data

function getWeather(){
    return new Promise(function(resolve , reject){
        resolve("Cloudy");
    })
}
const promise=getWeather();
promise.then(function(data){
    console.log(data);
})
 // sunny


//  Example

function getWeather(){
    return new Promise(function(resolve , reject){
        resolve("Cloudy");
    })
}
const t=getWeather();
promise.then(function(data){
    console.log("1st "+data);
 },
function(data){
    console.log("2nd "+data);
 }
)
// 1st cloudy

function getWeather(){
    return new Promise(function(resolve, reject){
        reject("Cloudy");
    })
}
const r=getWeather();
promise.then(function(data){
    console.log("1st "+data);
},
function(data){
    console.log("2nd "+data);
    }
)
// 2nd cloudy



// You can use this

function getWeather(){
    return new Promise(function(resolve, reject){
        reject("Cloudy");
    })
}
getWeather.then(function(data){
    console.log("1st "+data);
},
function(data){
    console.log("2nd "+data);
    }
)
// 2nd cloudy



function getWeather(){
    return new Promise(function(resolve , reject){
        reject("Sunny");
    })
}

function success(suc){
    console.log("Success "+suc); 
}
function fail(er){
    console.log("Error "+ er);
}
getWeather.then(suc,er);

// Error Sunny



function getWeather(){
    return new Promise(function(resolve , reject){
        resolve("Sunny");
    })
}

function success(suc){
    console.log("Success "+suc); 
}
function fail(er){
    console.log("Error "+ er);
}
getWeather.then(suc,er);

// Success Sunny

function f1(){
    return Promise(function(resolve , reject){
        setTimeout(()=>{
            reject("404");
        },100)
    })
}

function f2(){
    return Promise(function(resolve , reject){
        setTimeout(()=>{
           resolve("No ERROR");
        },100)
    })
}

function Suc(data){
    console.log(data);
}
function Err(error){
    console.log(`Error ${error}`);
}
f1
.then(f2)
.then(Suc)
.catch(Err) 
// then can take more than 1 par, unlike catch 

//Error 404

function f1(){
    return Promise(function(resolve , reject){
        setTimeout(()=>{
            resolve("404");
        },100)
    })
}

function f2(){
    return Promise(function(resolve , reject){
        setTimeout(()=>{
           resolve("No ERROR");
        },100)
    })
}

function Suc(data){
    console.log(data);
}
function Err(error){
    console.log(`Error ${error}`);
}
function F(){
    console.log("Finally");
}
f1
.then(f2)
.then(Suc)
.catch(Err) 
.finally(F)

// No ERROR
// Finally



// Async Await
// we can ignore this 
// f1
// .then(f2)
// .then(Suc)
// .catch(Err) 
// .finally(F)
// and use

const result=await getWeather();

// Example

function getData(){
    return new Promise(resolve=>{
        resolve(120);
    },1)
}
const res=getData();
console.log(res); // <Pending>



function getData(){
    return new Promise(resolve=>{
        resolve(120);
    },1)
}
const res_=await getData();
console.log(res_); // SyntaxError, cuz await requires async function



function getData(){
    return new Promise(resolve=>{
        resolve(120);
    },1)
}
async function getsol(){
    const r_=await getData();
    console.log(r_);
}
console.log(getsol()); 
//120, it waits for it ti resolve or reject in (n) ms

// Difference between async await and then block

async function getsol(){
    const r=await getData();
    console.log(r); //120
}



async function getsol(){
    getData()
    .then(result=>{
        console.log(result); //120
    })
}

// As you see async await block is much cooler and cleaner syntax

// important points on async await

// 1- async await must be together but in JS modules and chrome devtools console it's not a must

// 2- async await only affects the promise receiver not the maker

// 3- you can await any function that returns a promise

// 4- you can convert any function to async

// 5- all async functions return promises



// JavaScript Generators

function* func(){
    yield 1
    yield 2
    yield 3
}

// Every generator has done property and value property

// Example

function* fun1(){
    // Some code
}



const obj=fun1();
const obj_next=obj.next();
console.log(obj_next);
//{ done : false
// value : 1 }

console.log(obj_next);
//{ done : false
// value : 2 }

console.log(obj_next);
//{ done : false
// value : 3 }

console.log(obj_next);
//{ done : false
// value : undefined }



// Generators can make infinte loops without making the program freezing

function* generator(){
    let x=1;
    while(true){
        yield x;
        x++;
    }
}
const i=generator();
console.log(i.next()); //value : 1
console.log(i.next()); //value : 2
console.log(i.next()); //value : 3
console.log(i.next()); //value : 4
console.log(i.next()); //value : 5
console.log(i.next()); //value : 6
const i2=generator();
console.log(i2.next()); //value : 1
//... => n



function* gen(){
    let x=1;
    while(true){
        let i=yield x;
        if(i!=null){
            x+=i;
        }
        else
        x++;
    }
}
const k=gen();
console.log(k.next()); //1
console.log(k.next()); //2
console.log(k.next()); //3
console.log(k.next()); //4
console.log(k.next()); //5



const k_=gen();
console.log(k_.next()); //1
console.log(k_.next(2));//3
console.log(k_.next(3));//6
console.log(k_.next()); //7



const k__=gen();
console.log(k__.next(45525242)); //1
console.log(k__.next(2));//3
console.log(k__.next(3));//6
console.log(k__.next()); //7



const _k__=gen();
console.log(_k__.next(45525242)); //1
console.log(_k__.next(2));//3
console.log(_k__.return(3));//6 //done : true cuz it exits generator function and returning the value
console.log(_k__.next()); //7
console.log(_k__.throw(new Error("Omar"))); //this is Error



//----------------------------------------------------

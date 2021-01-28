//libHello.js
const person= {
    name : 'Anirach',
    weight : 85
}

function sayHello(){
    console.log("hello world!");
}

function cube(x){
    return x*x*x;
}

const add = (a,b) => a+b;

const status = true;

module.exports = {person, sayHello,cube,add,status}
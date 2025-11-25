function username(name){
    return `whelcom user : ${name}`
}

console.log(username()) // undefined
const res = username("john")
console.log(res) 

// pass parameter as array and object into function

function getaaray(anydata){
    return anydata
}

function alldata(d1, d2, ...d){
    return `d1 : ${d1}, d2 : ${d2} , rest data : ${d}`
}

const newObj = {
    name : "raja",
    email : "test@gmail.com"
}

function getObjectValue(newObjParams){
    return `paramsName : ${newObjParams.name}, paramsemail : ${newObjParams.email}`
}

console.log(getObjectValue(newObj))
console.log(alldata(10,20,30, 40,50,60))
console.log(getaaray("single data"))

// array funnction

const arrfunc = (num1, num2) => {
    return num1 + num2
}

console.log(arrfunc(2,3))

// using implicitly when u use () then not need to write return keyword it automatically return but when u use {} then nwwe dto write return keyword.

const implicite = (num1, num2) => (num1 * num2)
console.log(implicite(23,45));

// Immediately Invoked Function Expressions (IIFE)

( function code(){
    console.log("IIFE")
})()


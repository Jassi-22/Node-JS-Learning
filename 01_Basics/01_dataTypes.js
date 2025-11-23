let name = "example"
let age = 18
let pass = true
let address = null
let anything = ""

console.table([typeof name, typeof age, typeof pass,typeof address,typeof anything])

let strName = "     hello    ";
console.log(strName)
console.log(strName.trim()) // remove the whitespaces from the values

let url = "http//newonw.com%%20result"
console.log(url.replace("%%20","-"))

let number = new Number(100.67) 
console.log(number.toString())
console.log(number.toString().charAt(1))

console.log(number.toFixed(2)) //o/p : 100.00
console.log(number.toPrecision(2)) //o/p : 10

const value = 45678.6789
console.log(value.toLocaleString('en-IN'))


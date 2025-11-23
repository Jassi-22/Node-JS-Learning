
let dateData = new Date()
console.log(dateData)
console.log(dateData.getDay())
console.log(dateData.getMonth())
console.log(dateData.toLocaleString('default',{
    weekday : "long"
}))

console.log(dateData.toLocaleString('en-IN',{
    weekday : "long"
}))



let dateNow = Date.now()
let mydate = new Date("23-11-2025")
console.log(dateNow)


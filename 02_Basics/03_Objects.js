let sym = Symbol("Key")
const juser = {
    name : "jxon",
    address : "asdf",
    "username" : "jack",
    [sym] :"symbleKey"
}
console.log(juser)
console.log(juser.name)
console.log(juser["address"])
console.log(juser[sym])

// add new key - values
juser.age = 20
juser.greeting = function(){
    console.log(`this is function : ${this.name}`)
}

console.log(juser.greeting())
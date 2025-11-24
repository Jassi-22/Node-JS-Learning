const data = new Object() 
const data1 = {} // o/p {}
console.log(data) // {}

data.name = "rajesh"
data.email = "test@gmail.com"
console.log(data)

//delete data.name
//console.log(data)

const user1 = {
    username : "a",
    useremail : "user@gmail.com",
    address : {
        street : "abc",
        city : "xyz"
    }
}
const res = Object.assign({}, data, user1)
console.log("res ", res)
console.log("street addtress ", res.address.street)




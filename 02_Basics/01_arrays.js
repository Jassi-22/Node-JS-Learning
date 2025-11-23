let array = [1,2,3,4,4,5,6]
console.log(array)
console.log(array[4])
console.log(array.length)

console.log(array.push(7))
console.log(array.pop())
console.log(array.slice(1,2))
console.log(" after slice "+array)

let spliceaaray = array.splice(1,4) // remove values from original array after splice
console.log( array)
console.log("after splice "+spliceaaray)

let joinarray = array.join() // type is  object
console.log(joinarray) 
console.log(typeof joinarray)









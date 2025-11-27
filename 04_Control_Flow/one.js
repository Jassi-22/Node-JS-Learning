let var1;
var1 = 3 ?? 10
// var1 = null ?? 15
//var1 = undefined ?? 20
//var1 = '' ?? 5
//console.log(var1)

// forOf loop
for (const element of [1,2,3]) {
    //console.log(element)
    
}

const maps = new Map()
maps.set(1, 'a')
maps.set(2, 'b')
maps.set(3, 'c')
maps.set(4, 'd')

// for (const [key, value] of maps) {
//     //console.log(key, value)
// }
const data = {
    1:'aa',
    2:'bb'
}
console.log(typeof data)
console.log(typeof maps)

for (const key in data) {
    console.log(key)
}



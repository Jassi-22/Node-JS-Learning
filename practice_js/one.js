// Reverse the string.

let varriable = "hello everyone"
let res =''
//console.log(varriable[1])
for(let i=varriable.length-1; i>=0; i--){
    res += varriable[i]
}
//console.log(res)

// check how many vowels are in a string

let variables = "hospital"
let count = 0
let vowelsvar = ''
for(let i =0; i<variables.length; i++){
    if(["a","e","i","o","u"].includes(variables[i])){
        count += 1
        vowelsvar += variables[i]
    }
}
//console.log('TOTAL COUNT OF Vowels :',count , 'Vowels :', vowelsvar)

// return max number
// method 1
let num = [56,40,67,98]
let sortedNum = num.sort()
console.log("Maximux number :",sortedNum[sortedNum.length - 1])
// method 2
let number = [-1,100,67,98]
let max = 0
for(let i = 0; i<number.length; i++){
    if(number[i] > max){
        max = number[i]
    }
} 
console.log('maximun number :',max)

// do 1234 ---> 1+2+3+4 = 10
let no = (1234567).toString()
let num1 = 0
for( i =0; i<no.length; i++){
    num1 += Number(no[i])
}
console.log(num1)

// Palindrome for string
let input = "madam"
let result = ''
for(i =0; i< input.length; i++){
    result += input[input.length -i -1]
}
if(input == result){
    console.log(`${input} is a palindrome`)
}else{
    console.log(`${input} is not a palindrome`)
}




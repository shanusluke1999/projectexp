let s="123"
let i=100
let j=i.toString()
console.log(j,typeof j)
let data=String("hello")
console.log(data,typeof data)
let num=Number(1224)
console.log(typeof num)

let s1="hello world"
console.log(s1)
console.log(typeof s1)
let s2=new String("Hello world")
console.log(s2)
console.log(s2.length)
console.log(typeof s2)
//here s2 is an object and s1 is a primitive string
// let s3=s2.toUpperCase()//s2.toUppercase won't change the string in s2 it will store in another location.
console.log(s2.toUpperCase())
console.log(s)
console.log(s2)
console.log(s1.startsWith("h"))//when primitive  are called it is temporarily converted to object
console.log(s1.endsWith("world"))
console.log(s1.indexOf("o"))
console.log(s1.lastIndexOf("o"))
let s3=" hello all "
console.log(s3)
console.log(s3.trim())
console.log(s3.concat("How are you?"))
console.log(s3.substr(2,5))
console.log(s3.substring(2,5))
console.log(s3.charAt(4))
for(letter of s3)//means each letters of the string s3 will get in the letter 
{
console.log(letter)
}
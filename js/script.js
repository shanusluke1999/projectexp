
//Conditional statements
let i=123;let j="123"

//if else statement
if(i===j) {
    
        console.log("i and j are equal")
        console.log(i+j)
    
}else if(typeof j=="string") {
    let s=parseInt(j)
    console.log(typeof s)

}
else if(typeof i=="number")
{
    console.log(i**3)
}
else {
    let sum=parseInt(j)+i//parseInt -->convert string in to number
    console.log(sum)
}
console.log("After if - else block")
//switch statement
let choice="*"
switch (choice) {
    case "+":
        console.log(i+j)
        break;
        case "-":
            console.log(i-j)
            break;
    
    default:console.log("Invalid operation!")
        
}
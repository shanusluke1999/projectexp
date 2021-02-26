let add=function(x,y)
{
    return x+y
}
console.log(add)

let result=add(1,2)
console.log(result)
let i=500
function outer()
 {
      i=100
      let s="Hello"
     console.log("inside function outer...")
        console.log(i)
            function inner() 
            {
                console.log(s)
                    let k=50
                    console.log("inside function inner...")
                    console.log(k)
            }
inner()
}
outer()
console.log(i)
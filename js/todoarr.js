let arr=[]

function newdata()
 {
    let li=document.createElement("li")
var inputvalue=document.getElementById("inptary").value
var todo=document.createTextNode(inputvalue)
li.appendChild(todo);
document.getElementById("myul").appendChild(li)
 }
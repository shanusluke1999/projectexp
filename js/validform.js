function validate() {
    let name=document.getElementById("name")
    let email=document.getElementById("email")
    let number=document.getElementById("number")
    let password=document.getElementById("password")
    if (name.value=="") {
        alert("Name field cannot be empty!")
        name.focus()
        return false
    }
    if (email.value=="") {
        alert("Email field cannot be empty")
        email.focus()
        return false
    }
    if (isNAN(ohone.value)|| phone.value.length!=10) {
        alert("invalid mobile number")
    }
    
}
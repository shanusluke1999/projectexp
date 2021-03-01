function addproduct() {
    let id=document.getElementById("prdid")
    let name=document.getElementById("prdname")
    let price=document.getElementById("price")
    if (id.value=="") {
        alert("Id field cannot be empty!")
        id.focus()
        return false
    }
    if (name.value=="") {
        alert("Name field cannot be empty")
        name.focus()
        return false
    }
    if (price.value=="") {
        alert("Name field cannot be empty")
        name.focus()
        return false
    }


}
function productadd(id,name,price) {

    this.Id=id
    this.Name=name
    this.Price=price

    
}
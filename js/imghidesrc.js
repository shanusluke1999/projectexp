function change() {
    document.getElementById("div1").style.display="none"
    document.getElementById("div2").style.display="block"

}
function flip() {
    console.log(document.getElementById("img1"))
    if(document.getElementById("img1").src=="file:///D:/exprtz/images/wallpapersden.com_sara-pubg_1920x1080.jpg")
    {
        document.getElementById("img1").src="file:///D:/exprtz/images/download.jpg"
    }

    else
    {
        document.getElementById("img1").src="file:///D:/exprtz/images/wallpapersden.com_sara-pubg_1920x1080.jpg"
    }
}
function demo() {
    let uname=document.getElementById("username").value;
    alert("hey "+uname+" welcome")
    // document.getElementById("p1").innerText="this is a sample paragraph"
    document.getElementById("p1").innerHTML="this <br> is a <br> sample <b>paragraph</b>"
}
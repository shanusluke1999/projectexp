function calculate(n1,n2,op) {
    let result;
    if(op=="+")
    {
        result=n1+n2;
    }else if(op=="-")
    {
        result=n1-n2
    }
    return result
}
let data=calculate(10,9,"+")
console.log(data)
console.log(calculate(10,9,"-"))
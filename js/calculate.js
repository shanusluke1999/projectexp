function calculate(n1,n2,op) {
    let sum;let sub;let div;let mul;
    if (op=="+") {
        console.log("sum=",n1,op,n2)
        sum=n1+n2;
        console.log(`sum=${sum}`)
    }
    else if(op=="-")
    { console.log("sub=",n2,op,n1)
    sub=n2-n1;
    console.log(`sub=${sub}`)}
    else if(op=="/")
    {
        console.log("div=",n2,op,n1)
        div=n2/n1;
        console.log(`div=${div}`)
    }
    else if(op=="*")
{
    console.log("mul=",n1,op,n2)
    sum=n1*n2;
    console.log(`mul=${mul}`)
}
}
calculate(5,15,"+")
calculate(2,10,"-")
calculate(4,28,"/")
calculate(10,7,"*")
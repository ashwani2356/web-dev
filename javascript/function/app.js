function evenOdd(){
    let num=10;
    if(num%2==0){
        return "even number"
    }
    else{
        return "odd number"
    }
}
let ans=evenOdd();
console.log(ans);

console.log("\n");

// returns subtraction 
function subtraction(){
    let a=10,b=10
    let sub=a-b;
    return sub;
}
let ans1=subtraction();
console.log(ans1);
 //prints multiplication of 2 numbers
 function multiplication(){
    let a=12,b=2;
    let multi=a*b;
    console.log(multi);
    
 }

 multiplication();
 // prints table 
 function table(t){
    for(let i=1;i<=10;i++){
        console.log(t,"*",i,"=",t*i);
        
    }
 }
  table(2)




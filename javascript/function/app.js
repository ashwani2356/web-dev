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
  function pattern(n) {
    for (let i = 1; i <= n; i++) {

        // spaces print karne ke liye
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write("  ");
        }

        // stars print karne ke liye
        for (let k = 1; k <= (2 * i - 1); k++) {
            process.stdout.write("* ");
        }

        console.log();
    }
}

pattern(3);


function greet(){ 
    return 'Hello'; }
 console.log(greet());

 const multiply = function(x, y) { return x * y; }; console.log(multiply(4, 5));

 function isEven(num) {
    return num % 2 === 0;
}
let check =isEven(11)
console.log(check);

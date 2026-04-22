// const prompt = require("prompt-sync")();

// // Take input from user
// let num = prompt("Enter a number: ");

// // Print the number 100 times
// for (let i = 1; i <= 100; i++) {
//     console.log(num);
// }

// let num=1235;
// let count=0;
// while(num!=0){
//     count++;
//     num=parseInt(num/10);
// }
// console.log("digit: ",count);

// let num=1234;
// let rev=0; //rev=rev*10+rem//
// while(num!=0){
//     let rem=num%10;
// rev=rev*10+rem;
// num=parseInt(num/10);
// }
// console.log("rev: ",rev);

// let num=412,rem=0,min=99999;
// while(num!=0){
//     let rem=num%10;
//     if(rem<min){
//         min=rem;
//     }
// }

// let n=4;
// for(let i=1;i<n;i++){
//     for(let j=1;j<=i;j++){
        
// process.stdout.write("* ");

// }
// process.stdout.write("\n");
// }

// for(let i=5;i>0;i--){
//     if(i==3){
//         continue;
//     }
//     console.log(i);
    
// }

// for(let i=1;i>=i;i--){
//     for(let j=1;j<=i;j++){
//     process.stdout.write("* ");
        
//     }
//     process.stdout.write("\n");
    
// }
let num=3;
for(let i=1;i<=num;i++){
    for(let j;j<=num;j++){
        process.stdout.write(" ")
    }
    for(let k=1;k<=i;k++){
        process.stdout.write("* ")
    }
}

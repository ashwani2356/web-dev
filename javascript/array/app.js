// constructor
// let arr=new Array();
 
// console.log("arr:",arr);
// console.log(typeof(arr));

// literals
// let arr=[1,2,3,4,5];
// console.log("arr:",arr);
// console.log(arr[0]);
// arr[0]='rahul';
// console.log(arr[0]);
// console.log("arr:",arr);
// console.log(arr.length);
// for(let i=0;i<arr.length;i++){
//   console.log(arr[i]);  
// }
// let i=0
// while(i<arr.length){
//   console.log(arr[i]);
  
//   i++;
// }
// taking user input
function array(){let size;
size=Number(prompt("enter size of array"));
let arr=[];
for(let i=0;i<size;i++){
   arr[i] = Number(prompt(`Enter number ${i + 1}: `));
}
for (let i = 0; i < size; i++) {
  console.log(arr[i]);
}}
array();
// 2d array
// let arr=[[1,2,3,],[4,5,6,]];
// for(let i=0;i<arr.length;i++){
//   for(let j=0;j<arr[i].length;j++){
//     process.stdout.write(arr[i][j]+" ");
//   }
//   console.log();
  
// }


 

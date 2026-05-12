let name1;
name1=(prompt("Enter array elements: "))
let vowelCount=0;
let ConCount=0;
for(let i=0;i<name1.length;i++){
  if(name1=="a"|| name1=="e"||name1=="i"|| name1=="o"|| name1=="u"){
    vowelCount++;
  }
  else{
    ConCount++;
  }
}
console.log("total vowel count: ",vowelCount);
console.log("total conCount: ",ConCount);

// console.log(name1);

// let id=111;
// console.log("name:",name1,"id:",id);
// console.log(`Name: ${name1} id: ${id}`);
// console.log(name1[9]);
// 

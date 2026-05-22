let b=1;
for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        process.stdout.write(`${b} `)
        b++;
    }
process.stdout.write("\n")
}
console.log("\n");

for(let i=1;i<=3;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write("* ")
    }
    process.stdout.write("\n")
}
console.log("\n");

for(let i=3;i>=1;i--){
    for(let j=1;j<=i;j++){
        process.stdout.write("* ")
    }
    process.stdout.write("\n");
}
console.log("\n");

let a=1;
for(let i=1;i<=4;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(`${a} `);
        a=a+2;
    }
    process.stdout.write("\n")
}
console.log("\n");
for(let i=1;i<=3;i++){
    for(let j=1;j<=3-i;j++){
        process.stdout.write(" ");
    }
    for(let k=1;k<=i;k++){
        process.stdout.write("*")
    }
    process.stdout.write("\n")
}
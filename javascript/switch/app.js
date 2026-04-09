let day=2;
switch(day){
    case 1:
        console.log("monday");
        break;
         case 2:
        console.log("tuesday");
        break; 
        case 3:
        console.log("wednesday");
        break;
         case 4:
        console.log("thursday");
        break;
         case 5:
        console.log("friday");
        break;
         case 6:
        console.log("saturday");
        break; 
        case 7:
        console.log("sunday");
        break;
        default:
            console.log("invalid");

}
let a=10,b=12;
let op="+";
switch (op) {
    case "+":
        console.log("Add= ",a+b);
        break;
        case "-":
        console.log("Sub= ",a-b);
        break;
        case "*":
        console.log("Product= ",a*b);
        break;
        case "/":
        console.log("Divide= ",a/b);
        break;
        case "%":
        console.log("Remainder= ",a%b);
        break;

    default:
       console.log("Invalid");
       
}

let month = 4;

switch(month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;

    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;

    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;

    default:
        console.log("Invalid month");
}
let ch1 = 'u';

switch(ch1) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log("Vowel");
        break;

    default:
        console.log("Not a Vowel");
}

let ch2 = '3';

switch(true) {
    case (ch2 >= '0' && ch2 <= '9'):
        console.log("Digit");
        break;

    case (ch2 === 'a' || ch2 === 'e' || ch2 === 'i' || ch2 === 'o' || ch2 === 'u' ||
          ch2 === 'A' || ch2 === 'E' || ch2 === 'I' || ch2 === 'O' || ch2 === 'U'):
        console.log("Vowel");
        break;

    case ((ch2 >= 'a' && ch2 <= 'z') || (ch2 >= 'A' && ch2 <= 'Z')):
        console.log("Consonant");
        break;

    default:
        console.log("Invalid character");
}
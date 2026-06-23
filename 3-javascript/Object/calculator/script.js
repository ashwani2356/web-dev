// class calculator
class calculator{
    constructor(numberOne, numberTwo){
        this.numberOne=numberOne;
        this.numberTwo=numberTwo;
    }
    sum(){
        return this.numberOne+this.numberTwo;
    }
}

let calculatorObj1=new calculator(5,7);
console.log(calculatorObj1.sum());

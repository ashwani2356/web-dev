class Atm{
    #balance=100;
    deposit(amount){
        this.#balance+=amount;
    }
    withdraw(amount){
        if(this.#balance-amount>=0){
            this.#balance=this.#balance-amount
            console.log("Amount withdraw");
        }else{
            console.log("insufficient balance");
            
        }
    }
    balance(){
        console.log(`your balance is ${this.#balance}`);
        
    }
}
let atm=new Atm();
atm.deposit(1000)
atm.balance()
atm.withdraw(1000)
atm.balance()

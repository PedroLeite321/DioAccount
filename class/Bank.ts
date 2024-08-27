import { DioAccount } from "./DioAccount";
import * as readline from 'readline';
import { PeopleAccount } from "./PeopleAccount";

export class Bank extends DioAccount {
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    PeopleAccount : PeopleAccount;

    constructor() {
        super('Nath', 1); //Call all atributes from parent class'peopleAccount'

        this.PeopleAccount = new PeopleAccount(1, 'nath', 10)
    }

    showOptions = () => {
    
        console.log("1 - to check your balance. \n");
        console.log("2 - Deposit service. \n");
        console.log("3 - Withdraw service. \n ");
        // console.log("4 - Withdraw service \n");

        this.bankInteraction;
    }
    
    bankInteraction = () => {
    
        this.showOptions();
    
        this.rl.question("Please select the service you want to use: ", (option: string) => {
            // This needs to be declared as a annonymous function as using the keyword functions triggers 'any' on this keyword. (That being caused because 'this' acts globally instead of within its scope.)

            switch(Number(option)) {
                case 1:
                    console.log("Teste")
                    this.checkBalance();
                    this.finishUse();
                    break;
                    
                case 2:
                    this.deposit(1000);
                    this.finishUse();
                    break;
                case 3:
                    this.withdraw(10);
                    this.finishUse();
                    break;
    
    
            }
    
        });
    
    }

    finishUse = () => {
        console.log("Thanks! Do you want to keep using our product?");

        console.log("Press 1 - 'Yes' \n\n Press 2 - 'No'")
    }

}

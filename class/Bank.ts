import { DioAccount } from "./DioAccount";
import * as readline from 'readline';
import { PeopleAccount } from "./PeopleAccount";
import { CompanyAccount } from "./CompanyAccount";

export class Bank extends DioAccount {
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    PeopleAccount : PeopleAccount;
    CompanyAccount : CompanyAccount;

       constructor() {
        super('Nath', 1); //Call all atributes from parent class'peopleAccount'

        super("DIO", 20); // call attributes from CompanyAccount too. (Because there cannot be multiple constructors).

        this.CompanyAccount = new CompanyAccount('DIO', 20);

        this.PeopleAccount = new PeopleAccount(1, 'nath', 10)
    }

    showOptions = () => {
    
        console.log("1 - to check your balance. \n");
        console.log("2 - Deposit service. \n");
        console.log("3 - Withdraw service. \n ");
        console.log("4 - Get Loan. \n");

        this.bankInteraction;
    }
    
    bankInteraction = () => {
    
        this.showOptions();
    
        this.rl.question("Please select the service you want to use: ", (option: string) => {
            // This needs to be declared as a annonymous function as using the keyword functions triggers 'any' on this keyword. (That being caused because 'this' acts globally instead of within its scope.)

            switch(Number(option)) {
                case 1:
                    this.checkBalance();
                    this.finishUse();
                    break;
                    
                case 2:
                    this.rl.question("Please, how much do you want to deposit?", (option : string)=> {
                        this.deposit(Number(option));
                        this.finishUse();
                    });                   
        
                    
                    break;
                case 3:
                    
                    this.rl.question("Please, how much do you want to withdraw?", (option : string)=> {
                        this.withdraw(Number(option));
                    })                                 
                    this.finishUse();
                    break;
                case 4:
                    this.rl.question("Please insert the amount of loan you intend on getting", (option : string) => {
                        CompanyAccount.getLoan(Number(option), this.balance);
                    })
                default:
                    throw new Error("Number couldn't be identified. Closing application. ");
    
            }
    
        });
    
    }

    finishUse = () => {
        console.log("Thanks! Do you want to keep using our product?");

        console.log("Press 1 - 'Yes' \n\n Press 2 - 'No'");

        this.rl.question("Please select the service you want to use: ", (option: string) => {
            if(option === '1') {
                this.bankInteraction();

            }else if(option !== '1' && option !== '2'){

                throw new Error("Number couldn't be identified. Closing application. ");

            }else  {
                console.log("Thanks! Please, feel free to come back anytime! ");

            }

        })


    }

}

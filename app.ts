import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { checkNumber } from './check_types/checkNumber';
import { checkString } from './check_types/checkString';
import * as readline from 'readline';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
//peopleAccount.deposit();
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// companyAccount.deposit(prompt("Whats your name?"), Number(prompt('Please, select the value you want to input')));
console.log(companyAccount)

console.log(companyAccount.checkAvailableLoan);
const useProgram = (userId: number) => {
    let name: string
    let age: number
    
    // Set up readline interface
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const welcomeuUser = () => {
        console.log("Welcome to our bank!");
    }

    // const askUserName = () => {
    //     console.log("Please, what's your name?");
    //     rl.question("Write your name here: " , function(name){console.log("Thanks!")});
    // }

    // const askUserAge = () => {
    //     console.log("Please how old are you?");
    //     rl.question("Write you age here: ", function(age){
    //         console.log("Thank you so much!")
    //     });
    // }

    const showOptions = () => {
    
        console.log("1 - to check your balance. \n");
        console.log("2 - To get a loan. \n");
        console.log("3 - Deposit service. \n ");
        console.log("4 - Withdraw service \n");
    }

    const bankInteraction = () => {

        showOptions();

        let option = Number(rl.question("Please select the service you want to use", function(option){

            switch(Number(option)) {
                case 1:
                    peopleAccount.checkBalance();
                case 2:
                    peopleAccount.deposit(1000);
                case 3:
                    peopleAccount.withdraw(10);
    
    
            } 
        }));
        
    }
    bankInteraction();
}
// For the sake of the simplicity, lets say there's only one user. 
useProgram(1);

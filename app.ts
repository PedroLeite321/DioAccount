import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import {Bank} from './class/Bank'
import { checkNumber } from './check_types/checkNumber';
import { checkString } from './check_types/checkString';


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
console.log(peopleAccount);
//peopleAccount.deposit();
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);

const bank: Bank = new Bank();
// companyAccount.deposit(prompt("Whats your name?"), Number(prompt('Please, select the value you want to input')));
console.log(companyAccount)

console.log(companyAccount.checkAvailableLoan);
const useProgram = (userId: number) => {
    let name: string
    let age: number
    
    // Set up readline interface
 

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

   
        
    
    
}
// For the sake of the simplicity, lets say there's only one user. 
bank.bankInteraction()

useProgram(1);

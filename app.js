"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompanyAccount_1 = require("./class/CompanyAccount");
var PeopleAccount_1 = require("./class/PeopleAccount");
var Bank_1 = require("./class/Bank");
var peopleAccount = new PeopleAccount_1.PeopleAccount(1, 'Nath', 10);
console.log(peopleAccount);
//peopleAccount.deposit();
var companyAccount = new CompanyAccount_1.CompanyAccount('DIO', 20);
var bank = new Bank_1.Bank();
// companyAccount.deposit(prompt("Whats your name?"), Number(prompt('Please, select the value you want to input')));
var useProgram = function (userId) {
    var name;
    var age;
    // Set up readline interface
    var welcomeUser = function () {
        console.log("Welcome to our bank! \n");
    };
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
    welcomeUser();
};
// For the sake of the simplicity, lets say there's only one user. 
useProgram(1);
bank.bankInteraction();

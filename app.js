"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompanyAccount_1 = require("./class/CompanyAccount");
var PeopleAccount_1 = require("./class/PeopleAccount");
var peopleAccount = new PeopleAccount_1.PeopleAccount(1, 'Nath', 10);
console.log(peopleAccount);
//peopleAccount.deposit();
var companyAccount = new CompanyAccount_1.CompanyAccount('DIO', 20);
// companyAccount.deposit(prompt("Whats your name?"), Number(prompt('Please, select the value you want to input')));
console.log(companyAccount);
console.log(companyAccount.checkAvailableLoan);
var useProgram = function (userId) {
    var name;
    var age;
    var welcomeuUser = function () {
        console.log("Welcome to our bank!");
    };
    var askUserName = function () {
        console.log("Please, what's your name?");
        prompt("Write your name here: ");
    };
    var askUserAge = function () {
        console.log("Please how old are you?");
        prompt("Write you age here: ");
    };
    var showOptions = function () {
        console.log("1 - to check your balance. \n");
        console.log("2 - To get a loan. \n");
        console.log("3 - Deposit service. \n ");
        console.log("4 - Withdraw service \n");
    };
    var bankInteraction = function () {
        showOptions();
        var option = Number(prompt('please, select the service you want: '));
        switch (option) {
            case 1:
                peopleAccount.checkBalance();
            case 2:
                peopleAccount.deposit((Number(prompt("How much do you want to deposit?"))));
            case 3:
                peopleAccount.withdraw(Number(prompt("How much do you want to withdraw?")));
        }
        bankInteraction();
    };
};

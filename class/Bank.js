"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
var DioAccount_1 = require("./DioAccount");
var readline = require("readline");
var PeopleAccount_1 = require("./PeopleAccount");
var CompanyAccount_1 = require("./CompanyAccount");
var Bank = /** @class */ (function (_super) {
    __extends(Bank, _super);
    function Bank() {
        var _this = _super.call(this, 'DIO', 20) || this;
        _this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        _this.showOptions = function () {
            console.log("1 - to check your balance. \n");
            console.log("2 - Deposit service. \n");
            console.log("3 - Withdraw service. \n ");
            console.log("4 - Get Loan. \n");
            _this.bankInteraction;
        };
        _this.bankInteraction = function () {
            _this.showOptions();
            _this.rl.question("Please select the service you want to use:\t ", function (option) {
                // This needs to be declared as a annonymous function as using the keyword functions triggers 'any' on this keyword. (That being caused because 'this' acts globally instead of within its scope.)
                switch (Number(option)) {
                    case 1:
                        _this.checkBalance();
                        _this.finishUse();
                        break;
                    case 2:
                        _this.rl.question("Please, how much do you want to deposit? \t", function (option) {
                            _this.deposit(Number(option));
                            _this.finishUse();
                        });
                        break;
                    case 3:
                        _this.rl.question("Please, how much do you want to withdraw? \t", function (optionWithdraw) {
                            _this.withdraw(Number(optionWithdraw));
                            _this.finishUse();
                        });
                        break;
                    case 4:
                        _this.rl.question("Please insert the amount of loan you intend on getting \t", function (option) {
                            CompanyAccount_1.CompanyAccount.getLoan(Number(option), _this.balance);
                        });
                    default:
                        throw new Error("Number couldn't be identified. Closing application. ");
                }
            });
        };
        _this.finishUse = function () {
            console.log("Thanks! Do you want to keep using our product?\t");
            console.log("Press 1 - 'Yes' \n\n Press 2 - 'No'");
            _this.rl.question("Please select the option: ", function (option) {
                if (option === '1') {
                    _this.bankInteraction();
                }
                else if (option !== '1' && option !== '2') {
                    throw new Error("Number couldn't be identified. Closing application. ");
                }
                else {
                    console.log("Thanks! Please, feel free to come back anytime! ");
                }
            });
        };
        _this.CompanyAccount = new CompanyAccount_1.CompanyAccount('DIO', 20);
        _this.PeopleAccount = new PeopleAccount_1.PeopleAccount(1, 'nath', 10);
        return _this;
    }
    return Bank;
}(DioAccount_1.DioAccount));
exports.Bank = Bank;

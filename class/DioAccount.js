"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DioAccount = void 0;
var DioAccount = /** @class */ (function () {
    function DioAccount(name, accountNumber) {
        var _this = this;
        this.balance = 0;
        this.status = true;
        this.checkBalance = function () {
            console.log(_this.balance);
        };
        this.checkWithdraw = function (withdrawnIntent) {
            console.log(_this.balance);
            if (withdrawnIntent > _this.balance) {
                throw new Error("Transação impossível: Valor retirado muito alto.");
            }
            return 0;
        };
        this.getName = function () {
            return _this.name;
        };
        //p0 stands for people id.
        this.deposit = function (depositValue) {
            if (_this.validateStatus()) {
                _this.balance += depositValue;
                console.log('Voce depositou: ' + depositValue);
            }
        };
        //Will receive the amount the user want to withrawn.
        this.withdraw = function (withdrawnValue) {
            var checkedWithdraw = false;
            if (checkedWithdraw) {
                _this.checkWithdraw(withdrawnValue);
            }
            else {
                _this.balance -= withdrawnValue;
                1;
                console.log("Atualmente você possui: " + _this.balance + "\n");
            }
        };
        this.getBalance = function () {
            console.log(_this.balance);
        };
        this.validateStatus = function () {
            if (_this.status) {
                return _this.status;
            }
            throw new Error('Conta inválida');
        };
        this.name = name;
        this.accountNumber = accountNumber;
    }
    return DioAccount;
}());
exports.DioAccount = DioAccount;

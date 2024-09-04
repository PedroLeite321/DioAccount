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
exports.CompanyAccount = void 0;
var DioAccount_1 = require("./DioAccount");
var CompanyAccount = /** @class */ (function (_super) {
    __extends(CompanyAccount, _super);
    function CompanyAccount(name, accountNumber) {
        return _super.call(this, name, accountNumber) || this;
    }
    // static balance: any;
    // static emprestimo: any;
    // static checkAvailableLoan(): any {
    //   throw new Error("Method not implemented.");
    // }
    CompanyAccount.getLoan = function (emprestimo) {
        emprestimo = CompanyAccount.checkAvailableLoan(emprestimo);
        return emprestimo;
    };
    // You can get only 20% more;
    CompanyAccount.checkAvailableLoan = function (emprestimoRequisitado) {
        var emprestimoDisponivel = (emprestimoRequisitado * (20 / 100)) + emprestimoRequisitado;
        console.log(emprestimoRequisitado);
        return emprestimoRequisitado;
    };
    return CompanyAccount;
}(DioAccount_1.DioAccount));
exports.CompanyAccount = CompanyAccount;

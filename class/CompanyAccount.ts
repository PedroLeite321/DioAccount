import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  // static balance: any;
  // static emprestimo: any;
  // static checkAvailableLoan(): any {
  //   throw new Error("Method not implemented.");
  // }
  static emprestimo : number = 0;
  static emprestimoDisponivel : number = 0;
  
  
  static getLoan = (emprestimo : number, balance : number): void => {
    this.emprestimoDisponivel = CompanyAccount.checkAvailableLoan(balance);
    balance += this.emprestimo;
    console.log(balance);    

  }
  
  

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
  // You can get only 20% more;
  static checkAvailableLoan = (balance : number) => {
    const emprestimoDisponivel = (balance * (20 / 100)) + balance;

    console.log(this.emprestimoDisponivel);

    return emprestimoDisponivel;

  }

 
}

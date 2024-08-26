import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  emprestimo : number = 0;
  emprestimoDisponivel : number = 0;

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
  // You can get only 20% more;
  checkAvailableLoan = () => {
    const emprestimoDisponivel = (this.balance * (20 / 100)) + this.balance;

    console.log(this.emprestimoDisponivel);

    return emprestimoDisponivel;

  }

  getLoan = (): void => {
    this.emprestimoDisponivel = this.checkAvailableLoan();
    this.balance += this.emprestimo;
    

  }
}

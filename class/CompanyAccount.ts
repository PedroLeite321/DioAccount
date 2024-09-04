import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  // static balance: any;
  // static emprestimo: any;
  // static checkAvailableLoan(): any {
  //   throw new Error("Method not implemented.");
  // }
   
  
  
  static getLoan = (emprestimo : number): number => {
    emprestimo = CompanyAccount.checkAvailableLoan(emprestimo);
     
    return emprestimo;
  }
  
  

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
  // You can get only 20% more;
  static checkAvailableLoan = (emprestimoRequisitado : number) => {
    const emprestimoDisponivel = (emprestimoRequisitado * (20 / 100)) + emprestimoRequisitado;

    console.log(emprestimoRequisitado);

    return emprestimoRequisitado;

  }

 
}

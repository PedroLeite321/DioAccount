import * as readline from 'readline';
export abstract class DioAccount {

  private readonly name: string;
  private readonly accountNumber: number;
  
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
  }

  checkBalance = () => {
    console.log(this.balance);
  }

  checkWithdraw = (withdrawnIntent : number) =>  {
    console.log(this.balance)
    if( withdrawnIntent > this.balance ) {
      throw new Error("Transação impossível: Valor retirado muito alto.");

    }

    return 0;

  }


  getName = (): string => {
    return this.name;
  }
  //p0 stands for people id.
  deposit = (depositValue: number): void => {
    if(this.validateStatus()){
      this.balance +=  depositValue;
      
      console.log('Voce depositou: ' + depositValue);

    }
  }
  //Will receive the amount the user want to withrawn.
  withdraw = (withdrawnValue : number): void => {
    let checkedWithdraw = false;
    

    if(checkedWithdraw) {
      
      this.checkWithdraw(withdrawnValue);
    }else {
      this.balance -= withdrawnValue;1
      console.log("Atualmente você possui: " + this.balance + "\n")
      
      
    }
    
    

    
  }

  getBalance = (): void => {
    console.log(this.balance);
  }


  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  }

}

import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
    static deposit(arg0: number) {
        throw new Error("Method not implemented.");
    }
  doc_id: number
    static checkBalance: any;

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber);
    this.doc_id = doc_id;
  }
}
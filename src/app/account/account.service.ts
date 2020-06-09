import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../environments/environment";

import { Account } from "./account";
import { ApplicationParameter } from "./account-profile/account-parameters/ApplicationParameter";
import { mockAccount } from "../mock/mock-account";

const BASE_URL = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Accept: "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class AccountService {
  constructor(private http: HttpClient) {}

  private accountSource = new BehaviorSubject(null);
  currentAccount$: Observable<Account> = this.accountSource.asObservable();

  private accountsSource = new BehaviorSubject([]);
  accounts$: Observable<Account[]> = this.accountsSource.asObservable();

  private appParametersSource = new BehaviorSubject(null);
  appParameters$: Observable<ApplicationParameter[]> = this.appParametersSource.asObservable();

  listAccounts() {
    return this.http.get(`${BASE_URL}/contas/listacontas`);
  }

  consultAccountData(idConta: number) {
    return this.http.get(`${BASE_URL}/contas/conta/${idConta}`);
  }

  setAccount(newAccount: Account) {
    this.accountSource.next(newAccount);
  }

  setAccounts(accounts: Account[]) {
    this.accountsSource.next(accounts);
  }

  setApplicationParameters(parametersList: ApplicationParameter[]) {
    this.appParametersSource.next(parametersList);
  }

  updateAccountParameters(data: any, accountId: number) {
    return this.http.post(
      `${BASE_URL}/contas/parametros_conta/${accountId}`,
      data,
      httpOptions
    );
  }

  updateServiceParameters(paramId: number, newValue: string) {
    return this.http.post(
      `${BASE_URL}/contas/parametros/${paramId}`,
      newValue,
      httpOptions
    );
  }

  resetAccount() {
    this.accountSource.next(null);
    this.appParametersSource.next(null);
  }
}

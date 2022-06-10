import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class InterceptorService {

  private loading: boolean = false;
  private _sharedLoadingStatus = new BehaviorSubject<boolean>(this.loading);

  private _loadingPendingActionsSource = new BehaviorSubject<boolean>(false);
  public loadingPendingActions$ = this._loadingPendingActionsSource.asObservable();

  private _loadingReqPendenteSource = new BehaviorSubject<boolean>(false);
  public loadingReqPendente$ = this._loadingReqPendenteSource.asObservable();

  private _loadingRouteChangeSource = new BehaviorSubject<boolean>(false);
  public loadingRouteChange$ = this._loadingRouteChangeSource.asObservable();


  public setLoadingReqPendente(status: boolean) {
    this._loadingReqPendenteSource.next(status);
    this.setLoadingPendingActions();
  }

  public setLoadingRouteChange(status: boolean) {
    this._loadingRouteChangeSource.next(status);
    this.setLoadingPendingActions();
  }

  private setLoadingPendingActions() {
    if (this._loadingReqPendenteSource.value || this._loadingRouteChangeSource.value) {
      this._loadingPendingActionsSource.next(true);
    } else {
      this._loadingPendingActionsSource.next(false)
    }
  }

  public updateLoadingStatus(loading: boolean) {
    this._sharedLoadingStatus.next(loading);
  }

  public get sharedLoadingStatus() {
      return this._sharedLoadingStatus;
  }

}

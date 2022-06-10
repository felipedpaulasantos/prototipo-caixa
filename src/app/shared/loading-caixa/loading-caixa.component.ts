import { Component, OnInit, OnDestroy } from "@angular/core";
import { InterceptorService } from "../../interceptor/interceptor.service";

@Component({
  selector: "app-loading-caixa",
  templateUrl: "./loading-caixa.component.html",
  styleUrls: ["./loading-caixa.component.css"]
})
export class LoadingCaixaComponent implements OnInit, OnDestroy {

  public loading: boolean = false;

  constructor(
    private interceptor: InterceptorService
  ) { }

  ngOnInit() {
    this.interceptor.loadingPendingActions$.subscribe(status => {
      this.loading = status
    });
  }

  ngOnDestroy() {
    this.interceptor.sharedLoadingStatus.unsubscribe();
   }

}

import { Component, OnInit, AfterViewInit } from "@angular/core";
import { getCurrentAddress } from "./shared/utils/utils";
import { MenuLateralService } from "./menu-lateral-fixo/menu-lateral-fixo.service";
import { InterceptorService } from "./interceptor/interceptor.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {

  isMenuAberto = false;
  firstLoad = false;

  constructor(
    public menuService: MenuLateralService,
    private interceptorService: InterceptorService
  ) {
      this.menuService.isAberto$.subscribe(isAberto => this.isMenuAberto = isAberto);
  }

  setRouteChangeLoadingFalse() {
    /*
      O evento é disparado pouco antes da tela efetivamente renderizar
      O delay abaixo foi acrescentado para manter o loading na tela
    */
    setTimeout(() => {
      this.interceptorService.setLoadingRouteChange(false);
    }, 300);
  }

  redirectSso() {
    //this.keycloakService.logout(getCurrentAddress());
  }

  ngAfterViewInit(): void {
    this.interceptorService.loadingPendingActions$.subscribe(pending => {
      if (pending === false) { this.firstLoad = false }
    });
  }

}

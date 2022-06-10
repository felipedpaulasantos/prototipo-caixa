import { MenuConfiguracaoComponent } from "./components/menu-configuracao/menu-configuracao.component";
import { Component, ComponentFactoryResolver, Injector, OnInit, OnDestroy } from "@angular/core";
import { MenuLateralService } from "../menu-lateral-fixo/menu-lateral-fixo.service";
import { CategoriaMenuEnum } from "./configuracao.model";
import { ConfiguracaoService } from "./configuracao.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-configuracao",
  templateUrl: "./configuracao.component.html",
  styleUrls: ["./configuracao.component.css"]
})
export class ConfiguracaoComponent implements OnInit, OnDestroy {

  activeTab: CategoriaMenuEnum;
  activeTabSubscription: Subscription;

  constructor(
    private configuracaoService: ConfiguracaoService,
    private menuService: MenuLateralService,
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    public router: Router
  ) {
    // this.menuService.receberContexto(this.resolver, this.injector, MenuConfiguracaoComponent);
  }

  ngOnInit(): void {
    this.activeTabSubscription = this.configuracaoService.getActiveTab()
      .subscribe(
        (activeTab: CategoriaMenuEnum) => this.activeTab = activeTab
      );
  }

  ngOnDestroy() {
    this.configuracaoService.setActiveTab(CategoriaMenuEnum.MODULO);
    this.activeTabSubscription.unsubscribe();
  }

  get categoria(): typeof CategoriaMenuEnum {
    return CategoriaMenuEnum;
  }

}




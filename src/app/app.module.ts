import { HomeModule } from './home/home.module';
import { BreadcrumbComponent } from './shared/caixa-components/breadcrumb/breadcrumb.component';

import { NgxMaskModule, IConfig } from 'ngx-mask'
import { KeycloakGuard } from "./keycloak-service/keycloak.guard";
import { DeactivateGuard } from "./shared/guards/deactivate-guard";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID, ErrorHandler } from "@angular/core";
import { APP_BASE_HREF, registerLocaleData, CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

import { HttpClientModule } from "@angular/common/http";

import { GlobalErrorHandler } from "./interceptor/global-error-handler";
// import {
//   MzInjectionModule,
//   MzModalModule,
//   MzModalService
// } from "ngx-materialize";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { NgxPaginationModule } from "ngx-pagination";

import { CepPipe } from "./shared/pipes/cep.pipe";
import { RodapeComponent } from "./rodape/rodape.component";
import { CabecalhoLoginComponent } from "./cabecalho-login/cabecalho-login.component";
import { CabecalhoGeralComponent } from "./cabecalho-geral/cabecalho-geral.component";
import { MenuPrincipalComponent } from "./menu-principal/menu-principal.component";
import { routing } from "./app.routing";
import { Page404Component } from "./page404/page404.component";
import { KeycloakService } from "./keycloak-service/keycloak.service";
import { DataStorage } from "./model/data-storage.model";
import { LoadingCaixaComponent } from "./shared/loading-caixa/loading-caixa.component";
import { VersaoSistemaService } from "./service/versao-sistema.service";
import { InterceptorService } from "./interceptor/interceptor.service";
//import { SharedModule } from "./shared/shared.module";
import { MenuLateralFixoModule } from "./menu-lateral-fixo/menu-lateral-fixo.module";
import { MenuLateralService } from "./menu-lateral-fixo/menu-lateral-fixo.service";
import { XmlPipe } from "./shared/pipes/xml.pipe";

const maskConfig: Partial<IConfig> = null;

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

@NgModule({
    declarations: [
        XmlPipe,
        // DatePipe,
        CepPipe,
        AppComponent,
        RodapeComponent,
        CabecalhoLoginComponent,
        CabecalhoGeralComponent,
        MenuPrincipalComponent,
        Page404Component,
        LoadingCaixaComponent,
        BreadcrumbComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        routing,
        HttpClientModule,
        // MzInjectionModule,
        // MzModalModule,
        //SharedModule,
        HomeModule,
        MenuLateralFixoModule,
        PerfectScrollbarModule,
        NgxPaginationModule,
        NgxMaskModule.forRoot(maskConfig)
    ],
    providers: [
        KeycloakGuard,
        DeactivateGuard,
        KeycloakService,
        InterceptorService,
        VersaoSistemaService,
        // MzModalService,
        MenuLateralService,
        { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
        { provide: APP_BASE_HREF, useValue: "/" },
        { provide: LOCALE_ID, useValue: "pt-BR" },
        { provide: ErrorHandler, useClass: GlobalErrorHandler },
        DataStorage
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

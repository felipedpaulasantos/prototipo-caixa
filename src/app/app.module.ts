import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpClientModule  } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { NgxMaskModule, IConfig } from "ngx-mask";
import { AppRoutingModule } from "./app-routing.module";
import { DataTablesModule } from "angular-datatables";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

import { ErrorsModule } from "./errors/errors.module";
import { MenuModule } from "./menu/menu.module";
import { MessagesModule } from "./messages/messages.module";
import { OAuthModule } from "angular-oauth2-oidc";
import { SharedModule } from "./shared/shared.module";

import { GuiaCaixaModule } from "./guia-caixa/guia-caixa.module";
import { CoresModule } from "./demonstracao/cores/cores.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ResizableModule } from "angular-resizable-element";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { HomeModule } from "./home/home.module";

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      HomeModule,
      CoresModule,
      MenuModule,
      MessagesModule,
      ErrorsModule,
      SharedModule,
      PerfectScrollbarModule,
      DataTablesModule,
      GuiaCaixaModule,
      ResizableModule,
      NgxSpinnerModule,
      NgSelectModule,
      NgxChartsModule,
      NgxUiLoaderModule,
      NgxMaskModule.forRoot(),
      OAuthModule.forRoot(),
      ToastrModule.forRoot({
        timeOut: 5000,
        progressBar: false,
        positionClass: "toast-bottom-center",
        closeButton: true,
        tapToDismiss: false,
        preventDuplicates: true,
        enableHtml: true
      })
   ],
 	providers: [
		{ provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
/*  		{ provide: HTTP_INTERCEPTORS,	useClass: LoaderInterceptor, multi: true }, */
    { provide: LOCALE_ID, useValue: "pt" }
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }

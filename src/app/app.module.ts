import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ChartsModule } from 'ng2-charts';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { ErrorsModule } from './errors/errors.module';
import { MenuModule } from './menu/menu.module';
import { ReportsModule } from './reports/reports.module';
import { MessagesModule } from './messages/messages.module';
import { OAuthModule } from 'angular-oauth2-oidc';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AccountModule } from './account/account.module';
import { CoresModule } from './cores/cores.module';
import { GuiaCaixaModule } from './guia-caixa/guia-caixa.module';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ChartsModule,
      AppRoutingModule,
      AccountModule,
      CoresModule,
      MenuModule,
      MessagesModule,
      ReportsModule,
      ErrorsModule,
      SharedModule,
      PerfectScrollbarModule,
      DataTablesModule,
      GuiaCaixaModule,
      NgxMaskModule.forRoot(),
      OAuthModule.forRoot(),
      ToastrModule.forRoot({
        timeOut: 5000,
        progressBar: true,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        enableHtml: true
      })
   ],
 	providers: [
		{ provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
 		{ provide: HTTP_INTERCEPTORS,	useClass: LoaderInterceptor, multi: true },
		{ provide: LOCALE_ID, useValue: 'pt' }
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }

import { HasRoleDirective } from "./diretivas/has-role.directive";
import { CelularPipe } from "./pipes/celular.pipe";
import { NgModule } from "@angular/core";
import { CommonModule, CurrencyPipe, DecimalPipe, PercentPipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MunicipioService } from "../service/municipio.service";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";

import { TelPipe } from "./pipes/masktel.pipe";
import { DocumentoPipe } from "./pipes/maskdoc.pipe";

import { MaskPipe } from "./pipes/masks.pipe";
import { VinculoTipoPipe } from "./pipes/vinculo.pipe";

import { uppercaseDirective } from "./diretivas/toUpperCase.directive";

import { AlphaNumericDirective } from "./diretivas/alpha-numeric.directive";
import { FiltrarAcaoPipe } from "./pipes/filtrar-acao.pipe";
import { NumeroContaDirective } from "./diretivas/numero-conta.directive";
import { HttpClientModule } from "@angular/common/http";

import { ApenasNumerosDirective } from "./diretivas/apenas-numeros.directive";
import { MascaraCampoDirective } from "./diretivas/mascara-campo.directive";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { MoneyBrDirective } from "./diretivas/money-br.directive";

import { RouterModule } from "@angular/router";
import { LocalDateBySourceFormatPipe } from "./pipes/local-date-by-source-format.pipe";
import {MesAnoMaskDirective} from "./diretivas/mes-ano.mask.directive";
import {HoraMinMaskDirective} from "./diretivas/hora-min.mask.directive";
//import { PaginationModule } from "ngx-bootstrap";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { LocalDatePipe } from "../shared/pipes/local-date.pipe";
import { PaginadorService } from "./paginador.service";
import { KeysPipe } from "./pipes/keys.pipe";
import { ToCamelPipe } from "./pipes/to-camel.pipe";

import { ControleAcessoService } from "../service/controle-acesso.service";
import { CaixaComponentsModule } from "./caixa-components/caixa-components.module";
import { TimeTransformPipe } from "./pipes/time-transform.pipe";
import { AccordionModule } from "./caixa-components/accordion/accordion.module";
import { DisableBtnDirective } from "./diretivas/disable-button.directive";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        // PaginationModule.forRoot(),
        // MzInjectionModule,
        // MzModalModule,
        Ng2SearchPipeModule,
        RouterModule,
        NgSelectModule,
        TooltipModule.forRoot(),
        CaixaComponentsModule,
        AccordionModule
    ],
    declarations: [
        AlphaNumericDirective,
        uppercaseDirective,
        ApenasNumerosDirective,
        MascaraCampoDirective,
        MaskPipe,
        TelPipe,
        VinculoTipoPipe,
        CelularPipe,
        DocumentoPipe,
        FiltrarAcaoPipe,
        NumeroContaDirective,
        MoneyBrDirective,
        LocalDateBySourceFormatPipe,
        LocalDatePipe,
        MesAnoMaskDirective,
        HoraMinMaskDirective,
        KeysPipe,
        ToCamelPipe,
        TimeTransformPipe,
        HasRoleDirective,
        DisableBtnDirective,
    ],
    providers: [
        ControleAcessoService
    ],
    exports: [
        CommonModule,
        AlphaNumericDirective,
        uppercaseDirective,
        ApenasNumerosDirective,
        MascaraCampoDirective,
        MaskPipe,
        TelPipe,
        VinculoTipoPipe,
        CelularPipe,
        DocumentoPipe,
        FiltrarAcaoPipe,
        NumeroContaDirective,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        // MzInjectionModule,
        // MzModalModule,
        Ng2SearchPipeModule,
        HttpClientModule,
        MoneyBrDirective,
        LocalDateBySourceFormatPipe,
        LocalDatePipe,
        TimeTransformPipe,
        MesAnoMaskDirective,
        HoraMinMaskDirective,
        NgSelectModule,
        KeysPipe,
        ToCamelPipe,
        HasRoleDirective,
        CaixaComponentsModule,
        DisableBtnDirective,
    ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [
        //BuscaUtilsService,
        MunicipioService,
        //ConsultaCorporativaService,
        PaginadorService,
        CurrencyPipe,
        PercentPipe,
        DecimalPipe,
        //EnderecoService,
        NgSelectModule,
        //DominioSicliService,
        ControleAcessoService,
        {
          provide: HTTP_INTERCEPTORS,
          multi: true
        }
      ]
    };
  }
}

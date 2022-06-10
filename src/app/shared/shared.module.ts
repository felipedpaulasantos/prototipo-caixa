import { ModalInfoComponent } from "./components/modal-info/modal-info.component";
import { HasConfigDirective } from "./diretivas/has-config.directive";
import { CestaServicoService } from "./../comercial/roteiro-negocial/cesta-servico/services/cesta-servico.service";
import { HasRoleDirective } from "./diretivas/has-role.directive";
import { CelularPipe } from "./pipes/celular.pipe";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule, CurrencyPipe, DecimalPipe, PercentPipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CepComponent } from "./components/formatters/cep/cep.component";
import { CnpjComponent } from "./components/formatters/cnpj/cnpj.component";
import { CpfComponent } from "./components/formatters/cpf/cpf.component";
import { CpfCnpjComponent } from "./components/formatters/cpf-cnpj/cpf-cnpj.component";
import { DateComponent } from "./components/formatters/date/date.component";
import { CeiComponent } from "./components/formatters/cei/cei.component";
import { NisComponent } from "./components/formatters/nis/nis.component";
import { TelefoneComponent } from "./components/formatters/telefone/telefone.component";
import { InputContainerComponent } from "./components/input-container/input-container.component";
import { MessageComponent } from "./components/message/message.component";
import { BuscaUtilsService } from "../service/busca-utils.service";
import { MunicipioService } from "../service/municipio.service";
import { ConsultaCorporativaService } from "../service/consulta-corporativa.service";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";

import { CpfPipe } from "./components/formatters/pipes/cpf.pipe";
import { NisPipe } from "./components/formatters/pipes/nis.pipe";
import { CpfCnpjPipe } from "./components/formatters/pipes/cpf-ou-cnpj.pipe";
import { CnpjPipe } from "./components/formatters/pipes/cnpj.pipe";
import { CepPipe } from "./components/formatters/pipes/cep.pipe";
import { CepMaskDirective } from "./components/formatters/cep/cep.mask.directive";
import { CpfMaskDirective } from "./components/formatters/cpf/cpf.mask.directive";

import { CnpjMaskDirective } from "./components/formatters/cnpj/cnpj.mask.directive";
import { CeiMaskDirective } from "./components/formatters/cei/cei.mask.directive";
import { DateMaskDirective } from "./components/formatters/date/date.mask.directive";
import { TelefoneMaskDirective } from "./components/formatters/telefone/telefone.mask.directive";

import { TelPipe } from "./pipes/masktel.pipe";
import { DocumentoPipe } from "./pipes/maskdoc.pipe";
import { NisMaskDirective } from "./components/formatters/nis/nis.mask.directive";
import { TelefonePipe } from "./components/formatters/pipes/telefone.pipe";

import { MaskPipe } from "./pipes/masks.pipe";
import { VinculoTipoPipe } from "./pipes/vinculo.pipe";

import { uppercaseDirective } from "./diretivas/toUpperCase.directive";
import { CocliPipe } from "./components/formatters/pipes/cocli.pipe";
import { CpfLeftPadPipe } from "./components/formatters/pipes/cpf-left-pad.pipe";

import { AlphaNumericDirective } from "./diretivas/alpha-numeric.directive";
import { FiltrarAcaoPipe } from "./pipes/filtrar-acao.pipe";
import { NumeroContaDirective } from "./diretivas/numero-conta.directive";
import { HttpClientModule } from "@angular/common/http";

import { ApenasNumerosDirective } from "./diretivas/apenas-numeros.directive";
import { MascaraCampoDirective } from "./diretivas/mascara-campo.directive";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpsRequestInterceptor } from "../interceptor/request.interceptor";
import { MoneyBrDirective } from "./diretivas/money-br.directive";
import { TimeComponent } from "./components/time/time.component";
import { InputCounterComponent } from "./components/input-counter/input-counter.component";
import { InputCounterRestanteComponent } from "./components/input-counter-restante/input-counter-restante.component";
import {CpfCnpjMaskDirective} from "./components/formatters/cpf-cnpj/cpf-cnpj.mask.directive";

import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { RouterModule } from "@angular/router";
import { LocalDateBySourceFormatPipe } from "./pipes/local-date-by-source-format.pipe";
import {MesAnoMaskDirective} from "./diretivas/mes-ano.mask.directive";
import {HoraMinMaskDirective} from "./diretivas/hora-min.mask.directive";
import {EnderecoService} from "../service/endereco.service";
import { DominioSicliService } from "../service/dominio-sicli.service";
import { CelularMaskDirective } from "./components/formatters/celular/celular.mask.directive";
import { MenuScrollComponent } from "./components/menu/menu-scroll/menu-scroll.component"
import { MenuFlutuanteComponent } from "./components/menu/menu-flutuante/menu-flutuante.component";
//import { PaginationModule } from "ngx-bootstrap";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { LocalDatePipe } from "../shared/pipes/local-date.pipe";
import { PaginadorService } from "./paginador.service";
import { PaginacaoComponent } from "./components/paginacao/paginacao.component";
import { KeysPipe } from "./pipes/keys.pipe";
import { ToCamelPipe } from "./pipes/to-camel.pipe";
import { ByteSizePipe } from "./components/formatters/pipes/bytesize.pipe";

import { ModalConfirmacaoComponent } from "./components/modal-confirmacao/modal-confirmacao.component";
import { ModalContasComponent } from "./components/modal-contas/modal-contas.component";
import { ModalAlertaComponent } from "./components/modal-alerta/modal-alerta.component";
import { StepperComponent } from "./components/stepper/stepper.component";
import { ControleAcessoService } from "../service/controle-acesso.service";
import { CaixaComponentsModule } from "./caixa-components/caixa-components.module";
import { ModalErrorComponent } from "./components/modal-erro/modal-erro.component";
import { TokenSmsComponent } from "./components/token-sms/token-sms.component";
import { TimeTransformPipe } from "./pipes/time-transform.pipe";
import { TipoClienteHasConfigDirective } from "./diretivas/tipo-cliente-has-config";
import { ValidaSenhaContaComponent } from "./components/valida-senha-conta/valida-senha-conta.component";
import { CadastramentoSenhaComponent } from "./components/valida-senha-conta/senha-conta/cadastramento-senha-conta.component";
import { BuscadorContasComponent } from "./components/busca-contas/buscador-contas.component";
import { RadioSimNaoComponent } from "./components/radio-sim-nao/radio-sim-nao.component";
import { ConsultasCadastraisComponent } from "./components/consultas-cadastrais/consultas-cadastrais.component";
import { PerfilClienteComponent } from "./components/perfil-cliente/perfil-cliente.component";
import { PesquisasCadastraisComponent } from "../comercial/pesquisa-cpf-cnpj/pesquisas-cadastrais/pesquisas-cadastrais.component";
import { BuscaContasComponent } from "../comercial/roteiro-negocial/busca-contas/busca-contas.component";
import { AccordionModule } from "./caixa-components/accordion/accordion.module";
import { CnpjLeftPadPipe } from "./components/formatters/pipes/cnpj-left-pad.pipe";
import { ResumoClienteSimplesComponent } from "./components/resumo-cliente-simples/resumo-cliente-simples.component";
import { DisableBtnDirective } from "./diretivas/disable-button.directive";
import { ValidaSenhaContaInvestidorComponent } from "./components/valida-senha-conta-investidor/valida-senha-conta-investidor.component";
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
        MaskModule,
        StorageServiceModule,
        RouterModule,
        NgSelectModule,
        TooltipModule.forRoot(),
        CaixaComponentsModule,
        AccordionModule
    ],
    declarations: [
        CeiComponent,
        CepComponent,
        CnpjComponent,
        CpfComponent,
        CpfCnpjComponent,
        DateComponent,
        NisComponent,
        TelefoneComponent,
        InputContainerComponent,
        MessageComponent,
        ValidaSenhaContaComponent,
        ValidaSenhaContaInvestidorComponent,
        CadastramentoSenhaComponent,
        BuscadorContasComponent,
        AlphaNumericDirective,
        uppercaseDirective,
        ApenasNumerosDirective,
        MascaraCampoDirective,
        MaskPipe,
        TelPipe,
        VinculoTipoPipe,
        CepPipe,
        CnpjPipe,
        CpfCnpjPipe,
        NisPipe,
        CpfPipe,
        TelefonePipe,
        CelularPipe,
        DocumentoPipe,
        NisMaskDirective,
        CpfMaskDirective,
        CpfCnpjMaskDirective,
        CepMaskDirective,
        CeiMaskDirective,
        CnpjMaskDirective,
        TelefoneMaskDirective,
        DateMaskDirective,
        CocliPipe,
        CpfLeftPadPipe,
        FiltrarAcaoPipe,
        NumeroContaDirective,
        MoneyBrDirective,
        TimeComponent,
        InputCounterComponent,
        InputCounterRestanteComponent,
        BreadcrumbComponent,
        LocalDateBySourceFormatPipe,
        LocalDatePipe,
        MesAnoMaskDirective,
        HoraMinMaskDirective,
        CelularMaskDirective,
        MenuScrollComponent,
        MenuFlutuanteComponent,
        PaginacaoComponent,
        KeysPipe,
        ToCamelPipe,
        ByteSizePipe,
        TimeTransformPipe,
        ModalConfirmacaoComponent,
        ModalContasComponent,
        ModalAlertaComponent,
        StepperComponent,
        HasRoleDirective,
        ModalErrorComponent,
        TokenSmsComponent,
        HasConfigDirective,
        TipoClienteHasConfigDirective,
        ConsultasCadastraisComponent,
        RadioSimNaoComponent,
        PerfilClienteComponent,
        PesquisasCadastraisComponent,
        ModalInfoComponent,
        BuscaContasComponent,
        CnpjLeftPadPipe,
        ResumoClienteSimplesComponent,
        DisableBtnDirective,
    ],
    providers: [
        ControleAcessoService,
        CpfCnpjPipe
    ],
    exports: [
        CeiComponent,
        CepComponent,
        CnpjComponent,
        CpfComponent,
        CpfCnpjComponent,
        DateComponent,
        NisComponent,
        TelefoneComponent,
        InputContainerComponent,
        MessageComponent,
        ValidaSenhaContaComponent,
        ValidaSenhaContaInvestidorComponent,
        CadastramentoSenhaComponent,
        BuscadorContasComponent,
        CommonModule,
        AlphaNumericDirective,
        uppercaseDirective,
        ApenasNumerosDirective,
        MascaraCampoDirective,
        MaskPipe,
        TelPipe,
        VinculoTipoPipe,
        CepPipe,
        CnpjPipe,
        CpfCnpjPipe,
        NisPipe,
        CpfPipe,
        TelefonePipe,
        CelularPipe,
        DocumentoPipe,
        NisMaskDirective,
        CpfMaskDirective,
        CpfCnpjMaskDirective,
        CepMaskDirective,
        CeiMaskDirective,
        CnpjMaskDirective,
        TelefoneMaskDirective,
        DateMaskDirective,
        CocliPipe,
        CpfLeftPadPipe,
        FiltrarAcaoPipe,
        NumeroContaDirective,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        // MzInjectionModule,
        // MzModalModule,
        Ng2SearchPipeModule,
        MaskModule,
        StorageServiceModule,
        HttpClientModule,
        MoneyBrDirective,
        TimeComponent,
        InputCounterComponent,
        InputCounterRestanteComponent,
        BreadcrumbComponent,
        LocalDateBySourceFormatPipe,
        LocalDatePipe,
        TimeTransformPipe,
        MesAnoMaskDirective,
        HoraMinMaskDirective,
        CelularMaskDirective,
        MenuScrollComponent,
        PaginacaoComponent,
        MenuFlutuanteComponent,
        NgSelectModule,
        KeysPipe,
        ToCamelPipe,
        ByteSizePipe,
        ModalConfirmacaoComponent,
        ModalContasComponent,
        ModalAlertaComponent,
        StepperComponent,
        HasRoleDirective,
        CaixaComponentsModule,
        ModalErrorComponent,
        TokenSmsComponent,
        HasConfigDirective,
        TipoClienteHasConfigDirective,
        ConsultasCadastraisComponent,
        RadioSimNaoComponent,
        PerfilClienteComponent,
        PesquisasCadastraisComponent,
        ModalInfoComponent,
        BuscaContasComponent,
        CnpjLeftPadPipe,
        ResumoClienteSimplesComponent,
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
        CestaServicoService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpsRequestInterceptor,
          multi: true
        }
      ]
    };
  }
}

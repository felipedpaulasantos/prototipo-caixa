import { ErrorHandler, Injectable, Injector, NgZone } from "@angular/core";
import { InterceptorService } from "./interceptor.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(
    private interceptorService: InterceptorService,
    //private requestInterceptor: HttpsRequestInterceptor,
    private injector: Injector,
    private zone: NgZone
  ) { }

  handleError(error: any) {
    console.error(error);
    this.zone.run(() => {
      //this.requestInterceptor.requisicoesPendentes = 0;
      this.interceptorService.updateLoadingStatus(false);
      // Tratamento de mensagens em tempo de execução de variaveis undefined
      const hiddenSpamError = error.message;
      const searchUndefined = String(hiddenSpamError).search("undefined");
      // Consulta se o error contem a mensagem de undefined
      // O retorno do search pode ser negativo ou === 0
      if (searchUndefined < 0 || searchUndefined === 0) {
        if (error.error) {
          // this.injector.get(MzModalService).open(ModalAlertComponent, {
          //   message: error.error.mensagem,
          //   type: error.error.tipo.toLowerCase()
          // });
        } else if (error.message) {
          // this.injector.get(MzModalService).open(ModalAlertComponent, {
          //   message: error.message,
          //   type: "error"
          // });
        }
      } else {
        console.error(error);
      }
    });
  }
}

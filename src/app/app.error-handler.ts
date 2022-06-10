
import {throwError as observableThrowError } from "rxjs";

export class ErrorHandler {
  static handleError(error: any) {
    console.log("error: ", error);
    let errorMessage: string;
    if (error instanceof Response) {
      errorMessage = `Erro ${error.status} ao obter a URL ${error.url} - ${
        error.statusText
        }`;
    } else {
      errorMessage = error.toString();
    }
    return observableThrowError(errorMessage);
  }
}

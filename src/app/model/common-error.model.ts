import { ErrorType } from "./enum/error-type.enum";

class Error {
    constructor(private mensagem: string,
        private tipo: ErrorType) {
        this.mensagem = mensagem;
        this.tipo = tipo;
    }
    getMensagem() {
        return this.mensagem;
    }
    getTipo() {
        return this.tipo;
    }
}

export class CommonError {
    error: Error;
    constructor(private mensagem: string,
        private tipo: ErrorType) {
        this.error = new Error(mensagem, tipo);
    }
}

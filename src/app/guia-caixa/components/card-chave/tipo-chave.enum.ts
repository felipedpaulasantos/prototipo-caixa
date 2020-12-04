export enum TipoChave {
  CPF = "CPF",
  CNPJ = "CNPJ",
  PHONE = "PHONE",
  EMAIL = "EMAIL",
  EVP = "EVP"
}

export const TipoChaveMensagem = {
  [TipoChave.CPF]: "CPF",
  [TipoChave.CNPJ]: "CNPJ",
  [TipoChave.PHONE]: "Celular",
  [TipoChave.EMAIL]: "E-mail",
  [TipoChave.EVP]: "Chave Aleatória"
};

export enum TipoChaveCard {
  DOCUMENTO = "DOCUMENTO",
  ALEATORIA = "ALEATORIA",
  CELULAR = "CELULAR",
  EMAIL = "EMAIL"
}

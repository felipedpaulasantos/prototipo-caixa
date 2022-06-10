export interface ContaRelatorio {
  agencia: string,
  operacao: string,
  nroConta: string,
  dtAlteracao: string,
  titular: string,
  /**
   *  valores possíveis:
   *  1 (cadastro de senha),
   *  2 (alteração de senha),
   *  3 (recadastramento de senha)
   * */
  tipoOperacaoSenha: string,
  localidade: string
}

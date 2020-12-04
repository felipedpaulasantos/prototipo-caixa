export enum SituacaoChaves {
  ATIVA = "A",
  ACOMPANHAR_REIVINDICACOES = "AR",
  ACOMPANHAR_PORTABILIDADE = "AP",
}

export const SituacaoChavesMensagem = {
  [SituacaoChaves.ATIVA]: "Ativa",
  [SituacaoChaves.ACOMPANHAR_REIVINDICACOES]: "Acompanhar Reivindicações",
  [SituacaoChaves.ACOMPANHAR_PORTABILIDADE]: "Acompanhar Portabilidade"
};

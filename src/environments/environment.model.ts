export enum Ambiente {
  LOCAL, DEV, DEV01, DEV02, DEV03, DEVCEF, TQS, HMP, PRD
}

export enum DnsAPI {
  LOCAL  = "http://localhost:8080",
  DEV    = "https://sipnc.des.caixa",  // Port: 8006 Host: 10.116.98.56
  DEV01  = "https://sipnc3.des.caixa", // Port: 8017 Host: 10.116.98.56
  DEV02  = "https://sipnc4.des.caixa", // Port: 8018 Host: 10.116.98.56
  DEV03  = "https://sipnc2.des.caixa", // Port: 8013 Host: 10.116.98.56
  DEVCEF = "https://sipnc5.des.caixa", // Port: 8019 Host: 10.116.98.56
  TQS    = "",
  HMP    = "",
  PRD    = ""
}

export enum DnsSSO {
  LOCAL  = "https://login.des.caixa/auth",
  DEV    = "https://login.des.caixa/auth",
  DEV01  = "https://login.des.caixa/auth",
  DEV02  = "https://login.des.caixa/auth",
  DEV03  = "https://login.des.caixa/auth",
  DEVCEF = "https://login.des.caixa/auth",
  TQS    = "https://login.des.caixa/auth",
  HMP    = "https://login.des.caixa/auth",
  PRD    = "https://login.prd.caixa/auth"
}

export enum IpSCANNER {
  LOCAL  = "https://10.6.32.129:5127",
  DEV    = "https://localhost:5127",
  DEV01  = "https://localhost:5127",
  DEV02  = "https://localhost:5127",
  DEV03  = "https://localhost:5127",
  DEVCEF = "https://localhost:5127",
  TQS    = "https://localhost:5127",
  HMP    = "https://localhost:5127",
  PRD    = "https://localhost:5127"
}

export function getAPI(ambiente: Ambiente): string {
  return DnsAPI[Ambiente[ambiente]];
}

export function getKEYCLOAK_ROOT_URL(ambiente: Ambiente): string {
  return DnsSSO[Ambiente[ambiente]];
}

export function getSCANNER_API(ambiente: Ambiente): string {
  return IpSCANNER[Ambiente[ambiente]];
}

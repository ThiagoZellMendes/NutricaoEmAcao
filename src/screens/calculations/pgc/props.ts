export enum Sexo {
  masculino = "M",
  feminino = "F",
}

export interface DobraCutanea {
  triceps: number
  biceps: number
  subescapular: number
  suprailiaca: number
}

export interface CalcProps {
  genre: Sexo
  idade: number
  dobras: DobraCutanea
}

export interface ResultadoGordura {
  percentual: number
  categoria: string
}

export interface FormDataCalc {
  sexo: Sexo
  idade: string
  triceps: string
  biceps: string
  subescapular: string
  suprailiaca: string
}

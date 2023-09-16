import { cartas, type Carta, cartasArray } from "../data/cartas";

export const getCardById = async (id: string):Promise<Carta> => {
  return cartas.get(id) ?? cartasArray[0]
}

export const getCardBySilaba = async (silaba: string):Promise<Carta> => {
  return cartas.get(silaba) ?? cartasArray[0]
}
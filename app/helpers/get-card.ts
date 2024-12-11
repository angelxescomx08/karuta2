import { cartas, type Carta, cartasArray } from "../data/cartas";

export const getCardById = async (id: string):Promise<Carta> => {
  return cartas.get(id) ?? cartasArray[0]
}

export const getCardBySilaba = async (silaba: string):Promise<Carta> => {
  return cartas.get(silaba) ?? cartasArray[0]
}

export const getCardByNameOrId = async (name?: string, id?: string) => {
  if (name !== undefined && name !== null) {
    return await getCardBySilaba(name)
  } else if (id !== undefined && id !== null) {
    return await getCardById(id)
  } else {
    return cartasArray[0]
  }
}
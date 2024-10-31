import { cartas, type Carta, cartasArray } from "../data/cartas";

export const getCardById = (id: string):Carta => {
  return cartas.get(id) ?? cartasArray[0]
}

export const getCardBySilaba = (silaba: string):Carta => {
  return cartas.get(silaba) ?? cartasArray[0]
}

export const getCardByNameOrId = (name?: string, id?: string) => {
  if (name !== undefined && name !== null) {
    return getCardBySilaba(name)
  } else if (id !== undefined && id !== null) {
    return getCardById(id)
  } else {
    return cartasArray[0]
  }
}
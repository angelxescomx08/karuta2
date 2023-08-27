import { cartas, type Carta } from "../data/cartas";

export const getCardById = async (id: string):Promise<Carta> => {
  return cartas.find( carta => carta.id === id ) ?? cartas[0]
}

export const getCardBySilaba = async (silaba: string):Promise<Carta> => {
  return cartas.find( carta => carta.silaba === silaba ) ?? cartas[0]
}
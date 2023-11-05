import { type ReactElement } from 'react'
import { MainContent } from './components/home/main-content'
import { type Carta, cartas } from './data/cartas'

const getSuggestions = async (cartas: Carta[]): Promise<string[]> => {
  const names = async ():Promise<string[]> => {
    return cartas.map(carta => carta.name)
  }
  const numbers = async ():Promise<string[]> => {
    return cartas.map(carta => `${carta.id}. ${carta.silaba}`)
  }

  return Array.from(new Set([...await names(), ...await numbers()]))
}

export default async function Home (): Promise<ReactElement> {
  const data = await getSuggestions( Array.from(cartas.values()) )
  return (
    <MainContent data={data} />
  )
}

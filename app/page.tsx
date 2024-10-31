import { type ReactElement } from 'react'
import { MainContent } from './components/home/main-content'
import { type Carta, cartas } from './data/cartas'

const getSuggestions = async (cartas: Carta[]): Promise<string[]> => {
  const suggestions = []

  for (const carta of cartas) {
    suggestions.push(carta.name)
    suggestions.push(`${carta.id}. ${carta.silaba}`)
  }

  return Array.from(new Set(suggestions))
}

export default async function Home (): Promise<ReactElement> {
  const data = await getSuggestions( Array.from(cartas.values()) )
  return (
    <MainContent data={data} />
  )
}

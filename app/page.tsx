import { type ReactElement } from 'react'
import { MainContent } from './components/home/main-content'
import { cartas } from './data/cartas'
import { getSuggestions } from './helpers/get-suggestions';

export default async function Home (): Promise<ReactElement> {
  const data = await getSuggestions( Array.from(cartas.values()) )
  return (
    <MainContent data={data} />
  )
}

import { type ReactNode } from 'react'
import { Card } from './components/card'
import { cartas } from './data/cartas'
export default function Home (): ReactNode {
  return (
    <main className="grid grid-cols-12 container m-auto gap-5 py-5 px-2">
      {cartas.map((carta, index) => (
        <Card key={index} carta={carta} />
      ))}
    </main>
  )
}

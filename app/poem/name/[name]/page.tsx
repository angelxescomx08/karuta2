import { CardPage } from '@/app/components/card-page'
import { cartas } from '@/app/data/cartas'
import { use } from 'react'

export async function generateStaticParams() {
  const cards = Array.from(cartas.values())
 
  return cards.map((cards) => ({
    name: cards.name,
  }))
}

const PoemName = ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const { name } = use(params)
  return (
    <CardPage name={name} />
  )
}

export default PoemName
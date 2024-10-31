import { CardPage } from '@/app/components/card-page';
import { cartas } from '@/app/data/cartas';
import { use } from 'react'

export async function generateStaticParams() {
  const cards = Array.from(cartas.values())
 
  return cards.map((cards) => ({
    id: cards.id,
  }))
}

const PoemId = ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = use(params)
  return (
    <CardPage id={id}  />
  )
}

export default PoemId
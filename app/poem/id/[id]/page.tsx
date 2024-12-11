import { CardPage } from '@/app/components/card-page';
import { cartas } from '@/app/data/cartas';

export async function generateStaticParams() {
  const cards = Array.from(cartas.values())
 
  return cards.map((cards) => ({
    id: cards.id,
  }))
}

const PoemId = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params
  return (
    <CardPage id={id}  />
  )
}

export default PoemId
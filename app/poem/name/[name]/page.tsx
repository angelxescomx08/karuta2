'use client'

import { Carta, cartas } from '../../../utils';
import { MainLayout, PoemLayout } from '../../../components/layouts';

interface Props {
  carta: Carta;
}

export default function PoemPageByName({ params }: { params: { name: string } }) {

  const carta = cartas.find((carta) => carta.name === params.name)

  return (
    <MainLayout
      title={`Karuta app | poem`}
    >
      <PoemLayout carta={carta} />
    </MainLayout>
  )
}
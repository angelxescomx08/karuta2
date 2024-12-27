import { CardPage } from '@/app/components/card-page';
import { cartas } from '@/app/data/cartas';

export async function generateStaticParams() {
  const cards = Array.from(cartas.values());

  return cards.map((cards) => ({
    name: cards.name,
  }));
}

const PoemName = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const { name } = await params;
  return <CardPage name={name} />;
};

export default PoemName;

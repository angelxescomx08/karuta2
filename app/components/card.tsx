import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Carta } from '../data/cartas';

interface Props {
  carta: Carta;
}

export const Card = ({ carta }: Props): ReactNode => {
  return (
    <Link
      aria-label="link"
      href={`/poem/name/${carta.silaba}`}
      prefetch={true}
      className="min-h-[380px] col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3 bg-fondo-claro rounded-md p-5 flex flex-col justify-between cursor-pointer"
    >
      <p lang="ja" className="text-white/70 font-bold text-2xl [text-wrap] ">
        {carta.japanese}
      </p>
      <div className="mt-5">
        <p className="text-white/60 text-xl" lang="ja">
          {carta.id}. {carta.silaba}
        </p>
        <p className="text-white/50 text-md">{carta.english}</p>
      </div>
    </Link>
  );
};

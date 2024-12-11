import { getCardByNameOrId } from '../helpers/get-card';

interface Props {
  name?: string;
  id?: string;
}

export const CardPage = async ({id,name}: Props) => {
  const carta = await getCardByNameOrId(id,name)
  return (
    <>
      <div className='col-span-12 md:col-span-4'>
        <p className='text-white/70 font-bold text-2xl [text-wrap] '>
          {carta.japanese}
        </p>
        <p className='text-white/50 text-xl'> Romaji: {carta.romaji} </p>
        <p className='text-white/50 text-xl'> Author (Kanjis): {carta.authorJapanese} </p>
        <p className='text-white/50 text-xl'> Author: {carta.author} </p>
        <p className='text-white/50 text-xl'> Poem name: {carta.name} </p>
      </div>
      <div className='col-span-12 md:col-span-8'>
        <p className='text-white/60 text-2xl'> {carta.id}. {carta.silaba} </p>
        <p className='text-white/50 text-xl'> {carta.english} </p>
        <p className='text-white/50 text-xl'> {carta.spanish} </p>
      </div>
    </>
  )
}

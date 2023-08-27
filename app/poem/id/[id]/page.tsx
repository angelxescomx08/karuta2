import { getCardById } from '@/app/helpers/get-card'
import { HeaderSimple } from '@/app/layouts/ui/header-simple'
import { type ReactElement } from 'react'

const PoemId = async ({
  params,
}: {
  params: { id: string };
}): Promise<ReactElement> => {
  const carta = await getCardById(params.id)
  return (
    <>
      <HeaderSimple />
      <main className='grid grid-cols-12 container m-auto gap-5 py-5 px-2'>
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
      </main>
    </>
  )
}

export default PoemId
import { type ReactNode } from 'react'
import { type Carta } from '../data/cartas'
import { useRouter } from 'next/navigation'

interface props {
  carta: Carta
}

export const Card = ({ carta }: props): ReactNode => {
  const router = useRouter()
  const handleClick = (): void => {
    router.push(`/poem/name/${carta.silaba}`)
  }
  return (
    <article 
      className='col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3 bg-fondo-claro rounded-md p-5 flex flex-col justify-between cursor-pointer' 
      onClick={handleClick}>
      <p className='text-white/70 font-bold text-2xl [text-wrap] '>
        {carta.japanese}
      </p>
      <div className='mt-5'>
        <p className='text-white/60 text-xl'> {carta.id}. {carta.silaba} </p>
        <p className='text-white/50 text-md'> {carta.english} </p>
      </div>
    </article>
  )
}

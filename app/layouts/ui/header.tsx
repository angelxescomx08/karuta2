import { SearchInput } from '@/app/components/inputs/serach-input'
import { type ComponentProps, type ReactElement } from 'react'
import { type Carta, cartas } from '@/app/data/cartas';

type props = Omit<ComponentProps<typeof SearchInput>,"data">

export const getSuggestions = (cartas: Carta[]): string[] => {
  const names = cartas.map(carta => carta.name)
  const numbers = cartas.map(carta => `${carta.id}. ${carta.silaba}`)
  return Array.from(new Set([...names, ...numbers]))
}

export const Header =  (props: props): ReactElement => {
  const suggestions = getSuggestions(cartas)

  return (
    <nav className='bg-fondo-claro p-5 sticky top-0 flex items-center justify-between flex-wrap'>
      <h1 className='text-white font-bold'>Karuta App</h1>
      <SearchInput 
        className='w-full sm:w-80' 
        data={suggestions} 
        placeholder='Search...' 
        {...props} />
    </nav>
  )
}

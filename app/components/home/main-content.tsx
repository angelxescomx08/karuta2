'use client'

import { type ReactElement, useState, useMemo } from 'react'
import { useDebouncedValue } from '@mantine/hooks'
import { Card } from '../card'
import { Header } from '@/app/layouts/ui/header'
import { cartasArray } from '@/app/data/cartas'

interface props {
  data: string[]
}

export const MainContent = ({data}:props): ReactElement => {
  const [search,setSearch] = useState<string>("")
  const [debouncedValue] = useDebouncedValue(search,400)

  const results = useMemo(() => {
    return cartasArray
      .filter(carta => `${carta.id}. ${carta.silaba}`
        .includes(debouncedValue) || carta.name.includes(debouncedValue))
      .map((carta) => (
        <Card key={carta.id} carta={carta} />
      ))
  }, [debouncedValue])
  return (
    <>
      <Header 
        data={data} 
        value={search} 
        onChange={(value)=>{ setSearch(value ?? ""); }} 
      />
      <main className="grid grid-cols-12 container m-auto gap-5 py-5 px-2">
        {results}
      </main>
    </>
  )
}

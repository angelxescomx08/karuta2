'use client'

import { type ReactNode, useState, useMemo } from 'react'
import { Card } from './components/card'
import { cartas } from './data/cartas'
import { Header } from './layouts/ui/header'
import { useDebouncedValue } from '@mantine/hooks'

export default function Home (): ReactNode {
  const [search,setSearch] = useState<string>("")
  const [debouncedValue] = useDebouncedValue(search,400)

  const results = useMemo(() => {
    return cartas
      .filter(carta => `${carta.id}. ${carta.silaba}`
        .includes(debouncedValue) || carta.name.includes(debouncedValue))
      .map((carta) => (
        <Card key={carta.id} carta={carta} />
      ))
  }, [debouncedValue])

  return (
    <>
      <Header value={search} onChange={(value)=>{ setSearch(value ?? ""); }} />
      <main className="grid grid-cols-12 container m-auto gap-5 py-5 px-2">
        {results}
      </main>
    </>
  )
}

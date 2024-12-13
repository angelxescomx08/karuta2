'use client'

import { 
  type ReactElement, useState, useMemo, useRef, type ReactNode 
} from 'react'
import { useDebouncedValue, useMediaQuery } from '@mantine/hooks'
import { Card } from '../card'
import { Header } from '@/app/layouts/ui/header'
import { cartasArray } from '@/app/data/cartas'
import { useVirtualizer } from '@tanstack/react-virtual'

interface props {
  data: string[]
}

export const MainContent = ({data}:props): ReactElement => {
  const [search,setSearch] = useState<string>("")
  const [debouncedValue] = useDebouncedValue(search,400)
  const parentRef = useRef(null)
  const isMD = useMediaQuery('(min-width: 768px)');
  const isLG = useMediaQuery('(min-width: 1024px)');
  const is2XL = useMediaQuery('(min-width: 1536px)');

  const results = useMemo(() => {
    const cartas = cartasArray
      .filter(carta => `${carta.id}. ${carta.silaba}`
        .includes(debouncedValue) || carta.name.includes(debouncedValue))
      .map((carta) => (
        <Card key={carta.id} carta={carta} />
      ))

    const grids: ReactNode[] = []

    if (is2XL ?? false) {
      for (let i = 0; i < cartas.length; i += 4) {
        grids.push(
          <div key={i} className="grid grid-cols-12 gap-5">
            {cartas.slice(i, i + 4)}
          </div>
        )
      }
    }

    else if (isLG ?? false) {
      for (let i = 0; i < cartas.length; i += 3) {
        grids.push(
          <div key={i} className="grid grid-cols-12 gap-5">
            {cartas.slice(i, i + 3)}
          </div>
        )
      }
    }

    else if (isMD ?? false) {
      for (let i = 0; i < cartas.length; i += 2) {
        grids.push(
          <div key={i} className="grid grid-cols-12 gap-5">
            {cartas.slice(i, i + 2)}
          </div>
        )
      }
    }

    else {
      for(let i = 0; i < cartas.length; i++) {
        grids.push(
          <div key={i} className="grid grid-cols-12 gap-5">
            {cartas.slice(i, i + 1)}
          </div>
        )
      }
    }

    return grids
  }, [debouncedValue, isMD, isLG, is2XL])

  const rowVirtualizer = useVirtualizer({
    count: results.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 370,
    overscan: 1
  })

  return (
    <>
      <Header 
        data={data} 
        value={search} 
        onChange={(value)=>{ setSearch(value ?? ""); }} 
      />
      {/* grid grid-cols-12 gap-5 */}
      <main className="container m-auto py-5 px-2">
        <div
          ref={parentRef}
          style={{
            height: `calc(100vh - 76px)`,
            overflow: 'auto', // Make it scroll!
          }}
          className='no-scrollbar'
        >
          {/* The large inner element to hold all of the items */}
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: '100%',
              position: 'relative',
            }}
          >
            {/* Only the visible items in the virtualizer, manually positioned to be in view */}
            {rowVirtualizer.getVirtualItems().map((virtualItem) => (
              <div
                key={virtualItem.key}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
              >
                {results[virtualItem.index]}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

'use client'

import {
  type ReactElement, useState, useMemo, useRef, type ReactNode
} from 'react'
import { useDebouncedValue, useMediaQuery } from '@mantine/hooks'
import { Card } from '../card'
import { cartasArray } from '@/app/data/cartas'
import { useVirtualizer } from '@tanstack/react-virtual'
import { Header } from '@/app/layouts/ui/header'

interface props {
  data: string[]
}

export const MainContent = ({ data }: props): ReactElement => {
  const [search, setSearch] = useState<string>("")
  const [debouncedValue] = useDebouncedValue(search, 400)
  const parentRef = useRef(null)
  const isMD = useMediaQuery('(min-width: 768px)')
  const isLG = useMediaQuery('(min-width: 1024px)')
  const is2XL = useMediaQuery('(min-width: 1536px)')

  const results = useMemo(() => {
    const columnSize = (is2XL ?? false) ? 4 : (isLG ?? false) ? 3 : (isMD ?? false) ? 2 : 1
    return cartasArray
      .filter(
        carta =>
          `${carta.id}. ${carta.silaba}`.includes(debouncedValue) ||
          carta.name.includes(debouncedValue)
      )
      .reduce<ReactNode[]>((grids, _, i, arr) => {
        if (i % columnSize === 0) {
          grids.push(
            <div key={i} className="grid grid-cols-12 gap-5">
              {arr.slice(i, i + columnSize).map(carta => (
                <Card key={carta.id} carta={carta} />
              ))}
            </div>
          )
        }
        return grids
      }, [])
  }, [debouncedValue, isMD, isLG, is2XL])

  const rowVirtualizer = useVirtualizer({
    count: results.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 370, // Ajusta según el tamaño real de tus cartas
    overscan: 5 // Mejora el pre-renderizado
  })

  const skeleton = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="grid grid-cols-12 gap-5">
          {Array.from({ length: 4 }, (_, j) => (
            <div key={j} className="bg-gray-300 h-48 w-full animate-pulse" />
          ))}
        </div>
      )),
    []
  )

  return (
    <>
      <Header
        data={data}
        value={search}
        onChange={(value) => {
          setSearch(value ?? "")
        }}
      />
      <main className="container m-auto py-5 px-2">
        <div
          ref={parentRef}
          style={{
            height: `calc(100vh - 76px)`,
            overflow: 'auto',
          }}
          className="no-scrollbar"
        >
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: '100%',
              position: 'relative',
            }}
          >
            {results.length > 0
              ? rowVirtualizer.getVirtualItems().map(virtualItem => (
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
              ))
              : skeleton}
          </div>
        </div>
      </main>
    </>
  )
}

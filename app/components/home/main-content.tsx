'use client';

import { cartasArray } from '@/app/data/cartas';
import { Header } from '@/app/layouts/ui/header';
import { useDebouncedValue, useMediaQuery } from '@mantine/hooks';
import { useVirtualizer } from '@tanstack/react-virtual';
import {
  type ReactElement,
  type ReactNode,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Card } from '../card';

interface Props {
  data: string[];
}

export const MainContent = ({ data }: Props): ReactElement => {
  const [search, setSearch] = useState<string>('');
  const [debouncedValue] = useDebouncedValue(search, 400);
  const parentRef = useRef(null);
  const isMD = useMediaQuery('(min-width: 768px)');
  const isLG = useMediaQuery('(min-width: 1024px)');
  const is2XL = useMediaQuery('(min-width: 1536px)');

  const results = useMemo(() => {
    const columnSize =
      (is2XL ?? false) ? 4 : (isLG ?? false) ? 3 : (isMD ?? false) ? 2 : 1;
    return cartasArray
      .filter(
        (carta) =>
          `${carta.id}. ${carta.silaba}`.includes(debouncedValue) ||
          carta.name.includes(debouncedValue)
      )
      .reduce<ReactNode[]>((grids, _, i, arr) => {
        if (i % columnSize === 0) {
          grids.push(
            <div
              key={`grid-${arr
                .slice(i, i + columnSize)
                .map((carta) => carta.id)
                .join('-')}`}
              className="grid grid-cols-12 gap-5"
            >
              {arr.slice(i, i + columnSize).map((carta) => (
                <Card key={carta.id} carta={carta} />
              ))}
            </div>
          );
        }
        return grids;
      }, []);
  }, [debouncedValue, isMD, isLG, is2XL]);

  const rowVirtualizer = useVirtualizer({
    count: results.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 400, // Ajusta según el tamaño real de tus cartas
    overscan: 1, // Mejora el pre-renderizado
  });

  return (
    <>
      <Header
        data={data}
        value={search}
        onChange={(value) => {
          setSearch(value ?? '');
        }}
      />
      <main className="container m-auto py-5 px-2">
        <div
          ref={parentRef}
          style={{
            height: 'calc(100vh - 76px)',
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
  );
};

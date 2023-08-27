import { type ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Karuta App',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: {
  children: ReactNode
}): ReactNode {
  return (
    <>
      {children}
    </>
  )
}
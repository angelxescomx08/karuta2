import './globals.css'
import { type ReactNode } from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})

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
    <html lang="en">
      <body className={`${roboto.className} bg-fondo`}>{children}</body>
    </html>
  )
}

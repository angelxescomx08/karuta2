import './globals.css'
import { type ReactNode } from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Karuta App',
    description: 'App to see all the different poems of Karuta sport, Chihayafuru anime',
    metadataBase: new URL('https://karuta.vercel.app'),
    authors: {
      name: "Jose Angel Hernandez Radilla",
      url: "https://www.jose-angel-hdz-rda.com/"
    },
    creator: "Jose Angel Hernandez Radilla",
    keywords: ["Karuta","Card","Chihayafuru","Anime","Sport"],
    openGraph: {
      title: `Karuta App`,
      description: 'App to see all the different poems of Karuta sport, Chihayafuru anime',
      siteName: "Karuta App",
      images: "/assets/imgs/chihayafuru.jpg"
    },
    twitter: {
      title: `Karuta App`,
      description: `App to see all the different poems of Karuta sport, Chihayafuru anime`,
      images: "/assets/imgs/chihayafuru.jpg",
      card: 'summary_large_image',
      creator: "Jose Angel Hernandez Radilla",
    }
  }
}

export default function RootLayout ({
  children
}: {
  children: ReactNode
}): ReactNode {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-fondo`}>
        {children}
      </body>
    </html>
  )
}

'use client'

import type { NextPage } from 'next'
import { GridCartas, MainLayout } from './components/layouts'

const Home: NextPage = () => {
  return (
    <MainLayout title='Karuta app'>
      <GridCartas />
    </MainLayout>

  )
}

export default Home

import type { NextPage } from 'next'
import { GridCartas } from '../components/layouts'
import { MainLayout } from '../components/layouts';


const Home: NextPage = () => {
  return (
    <MainLayout title='Karuta app' description='List of karuta cards'>
      <GridCartas></GridCartas>
    </MainLayout>
  )
}

export default Home

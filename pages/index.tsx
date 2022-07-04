import type { NextPage } from 'next'
import Head from 'next/head'
import { KarutaCarta, KarutaSVG } from '../components'
import { cartas } from '../utils'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Karuta app</title>
        <meta name='author' content='Jose Angel Hdz Rda'/>
        <meta name="keywords" content='karuta, jose, angel, hdz, rda, chihayafuru, deporte, sport'/>
        <meta name="description" content="Lista de cartas karuta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <KarutaCarta/>
        <KarutaSVG poema={cartas[0].poema}/>
      </main>
    </div>
  )
}

export default Home

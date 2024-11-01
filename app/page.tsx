import { type ReactElement } from 'react'
import { MainContent } from './components/home/main-content'
import { cartas } from './data/cartas'
import { MantineProvider , createTheme} from '@mantine/core'
import { getSuggestions } from './helpers/get-suggestions';


const theme = createTheme({
  /** Put your mantine theme override here */
});

export default async function Home (): Promise<ReactElement> {
  const data = await getSuggestions( Array.from(cartas.values()) )
  return (
    <MantineProvider theme={theme}>
      <MainContent data={data} />
    </MantineProvider>
  )
}

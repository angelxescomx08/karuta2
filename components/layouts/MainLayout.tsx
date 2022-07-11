import { ReactNode } from 'react';
import Head from "next/head";
import { useTheme } from '@mui/material/styles';
import { SearchAppBar } from '../ui';

interface Props {
  children: ReactNode;
  title: string;
  keywords?: string;
  description: string;
}

const style = {
  padding: '6em 1em'
}

export const MainLayout: React.FC<Props> = ({ children, title, keywords, description }) => {

  const theme = useTheme();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='Jose Angel Hdz Rda' />
        <meta name="keywords"
          content={`karuta, chihayafuru, poems, deporte, sport${keywords ? `, ${keywords}` : ''}`} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <SearchAppBar title={title} />
      </header>

      <main style={{
        ...style,
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh'
      }}>
        {children}
      </main>
    </>
  )
}
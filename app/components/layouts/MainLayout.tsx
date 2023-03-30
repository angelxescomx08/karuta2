'use client'
import { ReactNode, type FC, useState, useMemo } from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { SearchAppBar } from '../ui/Navbar';
import { ColorModeContext } from '../../context';
import '../../../styles/globals.css'

interface Props {
  children: ReactNode;
  title: string;
}

const style = {
  padding: '6em 1em'
}

export const MainLayout: FC<Props> = ({ children, title }) => {

  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <header>
          <SearchAppBar title={title} />
        </header>

        <main style={{
          ...style,
          backgroundColor: theme.palette.background.default,
          minHeight: '100vh',
          width: '100%'
        }}>
          {children}
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
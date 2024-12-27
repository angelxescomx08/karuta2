import { Header } from '@/app/layouts/ui/header';
import { MantineProvider, createTheme } from '@mantine/core';
import { render, screen } from '@testing-library/react';

const theme = createTheme({});

describe('Header', () => {
  it('should render the header', () => {
    render(
      <MantineProvider theme={theme}>
        <Header />
      </MantineProvider>
    );
    expect(screen.getByText('Karuta App')).toBeDefined();
  });
});

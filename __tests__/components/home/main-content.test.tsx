import { MainContent } from '@/app/components/home/main-content';
import { cartas } from '@/app/data/cartas';
import { getSuggestions } from '@/app/helpers/get-suggestions';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe('MainContent', () => {
  let suggestions: string[] = [];

  beforeEach(async () => {
    suggestions = await getSuggestions(Array.from(cartas.values()));
  });

  it('should render', () => {
    render(
      <MantineProvider>
        <MainContent data={suggestions} />
      </MantineProvider>
    );
    expect(screen.getByText(`${suggestions[0]}`)).toBeDefined();
  });
});

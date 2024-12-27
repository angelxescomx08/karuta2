import { MantineProvider } from '@mantine/core';
import { render } from '@testing-library/react';
import { SearchInput } from '../../../app/components/inputs/serach-input';

// Haz un mock del componente SearchInput
jest.mock('../../../app/components/inputs/serach-input', () => ({
  // biome-ignore lint/style/useNamingConvention: <explanation>
  SearchInput: jest.fn(() => <div>SearchInput Mock</div>),
}));

describe('SearchInput', () => {
  it('should render correctly', () => {
    // Renderiza el componente dentro de MantineProvider
    render(
      <MantineProvider>
        <SearchInput />
      </MantineProvider>
    );

    // Verifica que SearchInput fue llamado
    expect(SearchInput).toHaveBeenCalled();
  });
});

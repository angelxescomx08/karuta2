'use client';

import { Autocomplete } from '@mantine/core';
import type { ComponentProps, ReactNode } from 'react';

type Props = ComponentProps<typeof Autocomplete>;

export const SearchInput = (props: Props): ReactNode => {
  return <Autocomplete {...props} />;
};

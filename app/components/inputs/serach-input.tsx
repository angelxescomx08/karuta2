"use client";

import { Autocomplete } from "@mantine/core";
import type { ComponentProps, ReactNode } from "react";

type props = ComponentProps<typeof Autocomplete>;

export const SearchInput = (props: props): ReactNode => {
  return <Autocomplete {...props} />;
};

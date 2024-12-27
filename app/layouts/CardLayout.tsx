import React, { type PropsWithChildren, type ReactElement } from 'react';
import { HeaderSimple } from './ui/header-simple';

export const CardLayout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <>
      <HeaderSimple />
      <main className="grid grid-cols-12 container m-auto gap-5 py-5 px-2">
        {children}
      </main>
    </>
  );
};

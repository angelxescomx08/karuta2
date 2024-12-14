import { SearchInput } from "@/app/components/inputs/serach-input";
import type { ComponentProps, ReactElement } from "react";

type props = ComponentProps<typeof SearchInput>;

export const Header = (props: props): ReactElement => {
  return (
    <nav className="bg-fondo-claro p-5 sticky top-0 flex items-center justify-between flex-wrap min-h-[76px] ">
      <h1 className="text-white font-bold">Karuta App</h1>
      <SearchInput
        className="w-full sm:w-80"
        placeholder="Search..."
        {...props}
      />
    </nav>
  );
};

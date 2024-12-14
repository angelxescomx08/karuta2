import Link from "next/link";
import type { ReactElement } from "react";

export const HeaderSimple = (): ReactElement => {
  return (
    <nav className="bg-fondo-claro p-5 flex items-center sticky top-0 justify-between flex-wrap min-h-[76px]">
      <Link href={"/"}>
        <h1 className="text-white font-bold">Karuta App</h1>
      </Link>
    </nav>
  );
};

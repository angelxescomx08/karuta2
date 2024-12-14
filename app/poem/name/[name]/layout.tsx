import type { ReactNode } from "react";
import type { Metadata } from "next";
import { CardLayout } from "@/app/layouts/CardLayout";
import { getCardBySilaba } from "@/app/helpers/get-card";

interface Params {
	params: Promise<{
		name: string;
	}>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { name } = await params;
  const card = await getCardBySilaba(name);

  return {
    title: `Karuta App | ${name}`,
    description: `Karuta card number ${card.id} called ${card.name} written by ${card.author}`,
    metadataBase: new URL("https://karuta.vercel.app"),
    authors: {
      name: "Jose Angel Hernandez Radilla",
    },
    creator: "Jose Angel Hernandez Radilla",
    keywords: [
      "Karuta",
      "Card",
      "Chihayafuru",
      "Anime",
      "Sport",
      `${card.name}`,
      `${card.silaba}`,
      `${card.author}`,
    ],
    openGraph: {
      title: `Karuta App | ${name}`,
      description: `Karuta card number ${card.id} called ${card.name} written by ${card.author}`,
      siteName: "Karuta App",
      images: "/assets/imgs/chihayafuru.jpg",
    },
    twitter: {
      title: `Karuta App | ${name}`,
      description: `Karuta card number ${card.id} called ${card.name} written by ${card.author}`,
      images: "/assets/imgs/chihayafuru.jpg",
      card: "summary_large_image",
      creator: "Jose Angel Hernandez Radilla",
    },
  };
}

export default function RootLayout({
  children,
}: {
	children: ReactNode;
}): ReactNode {
  return <CardLayout>{children}</CardLayout>;
}

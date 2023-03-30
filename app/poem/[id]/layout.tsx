import { Metadata } from "next";

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const metadata: Metadata = {
  authors: [{ name: 'Jose Angel Hdz Rda', url: 'https://www.jose-angel-hdz-rda.com/' }],
  title: 'Karuta app',
  description: 'List of karuta cards',
  keywords: ['karuta', 'chihayafuru', 'poems', 'deporte', 'sport'],
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "Karuta App",
    description: "List of karuta cards",
    siteName: "Karuta App",
    images: [{
      url: `${origin}/img/chihayafuru.jpg`,
    }],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}

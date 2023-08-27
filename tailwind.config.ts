import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        fondo: '#111111',
        acentuar: '#347dc5',
        'fondo-claro': '#181818'
      }
    }
  },
  plugins: []
}
export default config

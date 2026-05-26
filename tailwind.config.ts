import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream:   '#FDFAF6',
        dark:    '#1A0A00',
        brand:   '#C05C14',
        accent:  '#E8732A',
        cta:     '#E83C14',
        muted:   '#7A5C46',
        card:    '#FFF8F0',
        border:  '#E8D5C4',
        green:   '#16A34A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

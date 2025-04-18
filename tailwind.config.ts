import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['var(--font-dancing-script)'],
        openSans: ['var(--font-open-sans)'],
      }
    }
  },
  plugins: [],
}
export default config

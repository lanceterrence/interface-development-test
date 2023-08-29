import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'brand-background': 'hsl(var(--brand-background))',
        'brand-foreground': 'hsl(var(--brand-foreground))',
        'brand-primary': 'hsl(var(--brand-primary))',
        'brand-secondary': 'hsl(var(--brand-secondary))',
      }
    },
  },
  plugins: [],
}
export default config

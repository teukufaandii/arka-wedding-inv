/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // TasteSkill Dedicated Brand Tokens
        maroon: {
          50: '#FDF2F4',
          100: '#FCE7EA',
          200: '#F7C5CC',
          300: '#F195A3',
          400: '#E45B74',
          500: '#B81D43',
          600: '#991535',
          700: '#800020',
          800: '#6A1024',
          900: '#4A0917',
          950: '#2E050E',
        },
        gold: {
          50: '#FDFBF0',
          100: '#FAF4DC',
          200: '#FAF0D1',
          300: '#F3E5AB',
          400: '#E5C158',
          500: '#D4AF37',
          600: '#B38F26',
          700: '#8C6D1A',
          800: '#664E11',
          900: '#403009',
        },
        ivory: {
          50: '#FCFBF7',
          100: '#FAF6F0',
          200: '#F3EBDD',
          300: '#EAE0CC',
          400: '#D7C7A8',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cinzel', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['Amiri', '"Traditional Arabic"', 'serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "curtain-open": {
          "0%": { transform: "translateY(0%)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0", display: "none" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.92", transform: "scale(1.03)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "sound-wave-1": {
          "0%, 100%": { height: "4px" },
          "50%": { height: "14px" },
        },
        "sound-wave-2": {
          "0%, 100%": { height: "13px" },
          "50%": { height: "5px" },
        },
        "sound-wave-3": {
          "0%, 100%": { height: "7px" },
          "50%": { height: "16px" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "curtain-open": "curtain-open 0.9s cubic-bezier(0.65, 0, 0.35, 1) forwards",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "spin-slow": "spin-slow 6s linear infinite",
        "sound-wave-1": "sound-wave-1 1s ease-in-out infinite",
        "sound-wave-2": "sound-wave-2 0.8s ease-in-out infinite 0.2s",
        "sound-wave-3": "sound-wave-3 1.1s ease-in-out infinite 0.4s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

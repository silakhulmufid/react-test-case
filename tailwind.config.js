// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        instagram: ["var(--font-instagram)"],
      },
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
      },
      backgroundImage: {
        // Classic Instagram gradient
        "ig-gradient":
          "linear-gradient(45deg, #405DE6, #5B51D8, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FCAF45, #FFDC80)",

        // Alternative Instagram gradients
        "ig-gradient-horizontal":
          "linear-gradient(90deg, #405DE6, #5B51D8, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FCAF45, #FFDC80)",

        "ig-gradient-vertical":
          "linear-gradient(180deg, #405DE6, #5B51D8, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FCAF45, #FFDC80)",

        // Radial gradient version
        "ig-gradient-radial":
          "radial-gradient(circle, #405DE6, #5B51D8, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FCAF45, #FFDC80)",

        // Simplified 3-color gradient (most commonly used)
        "ig-simple": "linear-gradient(45deg, #833AB4, #FD1D1D, #FCAF45)",

        // Purple to pink focus
        "ig-purple-pink":
          "linear-gradient(45deg, #405DE6, #833AB4, #C13584, #E1306C)",

        // Warm tones focus
        "ig-warm":
          "linear-gradient(45deg, #E1306C, #FD1D1D, #F56040, #FCAF45, #FFDC80)",

        // Classic TikTok gradient (red to cyan)
        "tt-gradient": "linear-gradient(45deg, #ff0050, #00f2ea)",

        // Alternative TikTok gradients
        "tt-gradient-horizontal": "linear-gradient(90deg, #ff0050, #00f2ea)",
        "tt-gradient-vertical": "linear-gradient(180deg, #ff0050, #00f2ea)",

        // Dark theme gradients with black
        "tt-dark": "linear-gradient(45deg, #000000, #ff0050, #00f2ea)",
        "tt-dark-horizontal":
          "linear-gradient(90deg, #000000, #ff0050, #00f2ea)",
        "tt-dark-vertical":
          "linear-gradient(180deg, #000000, #ff0050, #00f2ea)",

        // Radial gradients
        "tt-radial": "radial-gradient(circle, #ff0050, #00f2ea)",
        "tt-radial-dark": "radial-gradient(circle, #000000, #ff0050, #00f2ea)",

        // Red to black gradient
        "tt-red-black": "linear-gradient(45deg, #ff0050, #000000)",

        // Cyan to black gradient
        "tt-cyan-black": "linear-gradient(45deg, #00f2ea, #000000)",

        // Reverse gradient (cyan to red)
        "tt-reverse": "linear-gradient(45deg, #00f2ea, #ff0050)",

        // Three-color conic gradient (modern look)
        "tt-conic":
          "conic-gradient(from 0deg, #ff0050, #00f2ea, #000000, #ff0050)",

        // Subtle gradients with transparency
        "tt-subtle":
          "linear-gradient(45deg, rgba(255, 0, 80, 0.8), rgba(0, 242, 234, 0.8))",
        "tt-subtle-dark":
          "linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(255, 0, 80, 0.7), rgba(0, 242, 234, 0.7))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "bg-rotate": {
          "0%": {
            transform: "rotate(0deg)",
            scale: "1.5",
          },
          "100%": {
            transform: "rotate(360deg)",
            scale: "1.5",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bg-rotate": "bg-rotate 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

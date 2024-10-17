/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: process.env.TAILWIND_MODE ? "jit" : "",
  content: ["./src/**/*.{ts,html,scss}"],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
        },
        accent: {
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          800: "var(--accent-800)",
          900: "var(--accent-900)",
        },
        warn: {
          100: "var(--warn-100)",
          200: "var(--warn-200)",
          300: "var(--warn-300)",
          400: "var(--warn-400)",
          500: "var(--warn-500)",
          600: "var(--warn-600)",
          700: "var(--warn-700)",
          800: "var(--warn-800)",
          900: "var(--warn-900)",
        },
        secondary: {
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
          800: "var(--secondary-800)",
          900: "var(--secondary-900)",
        },
        success: {
          50: "var(--success-50)",
          100: "var(--success-100)",
          200: "var(--success-200)",
          300: "var(--success-300)",
          400: "var(--success-400)",
          500: "var(--success-500)",
          600: "var(--success-600)",
          700: "var(--success-700)",
          800: "var(--success-800)",
          900: "var(--success-900)",
          950: "var(--success-950)",
          1000: "var(--success-1000)",
        },
        "dark-primary-text": "var(--dark-primary-text)",
        "dark-secondary-text": "var(--dark-secondary-text)",
        "dark-disabled-text": "var(--dark-disabled-text)",
        "dark-dividers": "var(--dark-dividers)",
        "dark-focused": "var(--dark-focused)",
        "light-primary-text": "var(--light-primary-text)",
        "light-secondary-text": "var(--light-secondary-text)",
        "light-disabled-text": "var(--light-disabled-text)",
        "light-dividers": "var(--light-dividers)",
        "light-focused": "var(--light-focused)",
        "gray-background": "var(--gray-600)",
        "home-title-text": "var(--home-title-text)",
        "home-subtitle-text": "var(--home-subtitle-text)",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      spacing: {
        1.5: "1.5rem", // Gutters of 1.5rem (24px)
      },
      maxWidth: {
        container: "82.5rem", // Max width of 82.5rem (1320px)
      },
    },
    listStyleType: {
      square: "square",
      circle: "circle",
      disc: "disc",
    },
  },
  variants: {
    extend: {},
  },
};
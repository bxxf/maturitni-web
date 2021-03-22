module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  },
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        main: 'var(--color-bg-main)',
        colored: '#ed6965',
        button: 'var(--color-bg-button)',
        navbar: {
          border: 'var(--color-navbar-border)',
          button: 'var(--color-navbar-button)',
        },
      },
      textColor: {
        primary: 'var(--color-text)',
        subtitle: 'var(--color-hero-subtitle)',
        hover: 'var(--color-text-hover)',
        colored: '#ed6965',
        hero: {
          caption: 'var(--color-hero-caption)',
        },
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    screens: {
      mobile: { max: '639px' },
      tablet: '640px',
      desktop: '1024px',
    },
  },
};

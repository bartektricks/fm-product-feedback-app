const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      purple: '#ad1fea',
      'ocean-blue': '#62bcfa',
      'light-blue': '#cfd7ff',
      blue: '#4661e6',
      orange: '#f49f85',
      'very-light-grey': '#f7f8fd',
      'light-grey': '#f2f4ff',
      grey: '#647196',
      'dark-grey': '#373f68',
      'darkest-grey': '#3a4374',
    },
    container: ({ theme }) => {
      return {
        center: true,
        screens: {
          md: `768px`,
          xl: `calc(1110px + (${theme('spacing.gutter')} * 2))`,
        },
        padding: {
          DEFAULT: theme('spacing.gutter'),
        },
      };
    },
    fontSize: {
      display1: [
        '1.5rem',
        {
          lineHeight: '2.1875rem',
          letterSpacing: '-0.33',
          fontWeight: 'bold',
        },
      ],
      display2: [
        '1.25rem',
        {
          lineHeight: '1.8125rem',
          letterSpacing: '-0.25',
          fontWeight: 'bold',
        },
      ],
      display3: [
        '1.125rem',
        {
          lineHeight: '1.625rem',
          letterSpacing: '-0.25',
          fontWeight: 'bold',
        },
      ],
      display4: [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '-0.2',
          fontWeight: 'bold',
        },
      ],
      body1: [
        '1rem',
        {
          lineHeight: '1.4375rem',
        },
      ],
      body2: [
        '0.9375rem',
        {
          lineHeight: '1.735rem',
        },
      ],
      body3: [
        '0.8125rem',
        {
          lineHeight: '1.1875rem',
        },
      ],
    },
    extend: {
      spacing: {
        gutter: defaultTheme.spacing[6],
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};

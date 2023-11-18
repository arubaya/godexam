import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
  fontFamily: '"Inter", sans-serif',
  display1: {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 400,
    fontSize: '5.25rem',
  },
  display2: {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 400,
    fontSize: '4.813rem',
  },
  display3: {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 400,
    fontSize: '3.938rem',
  },
  display4: {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 400,
    fontSize: '3.063rem',
  },
  h1: {
    fontWeight: 500,
    fontSize: '1.75rem',
  },
  h2: {
    fontWeight: 500,
    fontSize: '1.5rem',
  },
  h3: {
    fontWeight: 500,
    fontSize: '1.313rem',
  },
  h4: {
    fontWeight: 500,
    fontSize: '1.125rem',
  },
  h5: {
    fontWeight: 500,
    fontSize: '0.938rem',
  },
  h6: {
    fontWeight: 500,
    fontSize: '0.875rem',
  },
  body1: {
    fontWeight: 400,
    fontSize: '0.875rem',
  },
  body2: {
    fontWeight: 400,
    fontSize: '0.75rem',
  },
  deleted: {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 400,
    fontSize: '0.875rem',
    textDecorationLine: 'line-through',
  },
  underline: {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 400,
    fontSize: '0.875rem',
    textDecorationLine: 'underline',
  },
  caption: {
    fontWeight: 400,
    fontSize: '0.75rem',
  },
  button: {
    fontWeight: 600,
    fontSize: '0.875rem',
    textTransform: 'capitalize',
  },
  overline: {
    fontWeight: 600,
    fontSize: '0.75rem',
    letterSpacing: '0.1em',
  },
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    display1: React.CSSProperties;
    display2: React.CSSProperties;
    display3: React.CSSProperties;
    display4: React.CSSProperties;
    deleted: React.CSSProperties;
    underline: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    display1?: React.CSSProperties;
    display2?: React.CSSProperties;
    display3?: React.CSSProperties;
    display4?: React.CSSProperties;
    deleted?: React.CSSProperties;
    underline?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display1: true;
    display2: true;
    display3: true;
    display4: true;
    deleted: true;
    underline: true;
  }
}

export default typography;

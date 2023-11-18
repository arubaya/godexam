/**
 * Use Material UI v5 (v5.9.0) and Tailwind CSS v3 (v3.1.6)
 * Read guide for use Tailwind CSS together with Material UI
 * link: https://mui.com/material-ui/guides/interoperability/#tailwind-css
 *
 * Here is a list of some dependencies used:
 * "@emotion/react": "^11.9.3",
 * "@emotion/styled": "^11.9.3",
 * "@mui/icons-material": "^5.8.4",
 * "@mui/material": "^5.9.0",
 */
import { BreakpointsOptions, ThemeOptions } from '@mui/material';

import * as colorPalette from './colorPalette';
import typography from './typography';
import components from './components';

interface CustomTheme extends ThemeOptions, BreakpointsOptions {}

const theme = (mode: any): CustomTheme => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },
  palette: {
    mode,
    ...(mode === 'light' ? colorPalette.lightTheme : colorPalette.darkTheme),
    contrastThreshold: 2,
    tonalOffset: 0.2,
  },
  shape: {
    borderRadius: 5,
  },
  typography,
  components,
});

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    '2xl': true;
  }
}

export default theme;

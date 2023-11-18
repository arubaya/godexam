import { Components, Theme } from '@mui/material';

const MuiAccordion: Components<Theme>['MuiAccordion'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      boxShadow:
        '0px 2px 4px -1px rgba(214,214,214,0.2),0px 4px 5px 0px rgba(214,214,214,0.14),0px 1px 10px 0px rgba(214,214,214,0.12)',
    }),
  },
};

export default MuiAccordion;

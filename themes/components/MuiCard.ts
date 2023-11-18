import { Components, Theme } from '@mui/material';

const MuiCard: Components<Theme>['MuiCard'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      borderRadius: '6px',
      boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.06)',
    }),
  },
};

export default MuiCard;

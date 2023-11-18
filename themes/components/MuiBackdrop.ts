import { Components, Theme } from '@mui/material';

const MuiBackdrop: Components<Theme>['MuiBackdrop'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      backdropFilter: 'blur(1px)',
    }),
  },
};

export default MuiBackdrop;

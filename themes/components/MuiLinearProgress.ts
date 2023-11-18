import { Components, Theme } from '@mui/material';

const MuiLinearProgress: Components<Theme>['MuiLinearProgress'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      borderRadius: '50px',
    }),
    bar: {
      borderRadius: '50px',
    },
  },
};

export default MuiLinearProgress;

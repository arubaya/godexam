import { Components, Theme } from '@mui/material';

const MuiCardActions: Components<Theme>['MuiCardActions'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      padding: '10px 16px',
    }),
  },
};

export default MuiCardActions;

import { Components, Theme } from '@mui/material';

const MuiPagination: Components<Theme>['MuiPagination'] = {
  styleOverrides: {
    ul: ({ ownerState, theme }) => ({
      width: 'fit-content',
      backgroundColor: '#F3F2F7',
      borderRadius: '50px',
    }),
  },
};

export default MuiPagination;

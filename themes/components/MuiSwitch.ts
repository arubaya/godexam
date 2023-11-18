import { Components } from '@mui/material';

const MuiSwitch: Components['MuiSwitch'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      padding: 0,
      '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
        opacity: 1,
      },
      ...(ownerState.size === 'medium'
        ? {
            width: '42px',
            height: '24px',
            '& .MuiSwitch-switchBase.Mui-checked': {
              transform: 'translateX(16px)',
            },
          }
        : {
            width: '38px',
            height: '20px',
          }),
    }),
    switchBase: ({ ownerState }) => ({
      ...(ownerState.size === 'medium'
        ? {
            padding: '4px',
            transform: 'translateX(2px)',
          }
        : {
            padding: '0',
            transform: 'translateX(2px)',
          }),
    }),
    thumb: ({ ownerState }) => ({
      backgroundColor: 'white',
      ...(ownerState.size === 'medium'
        ? {
            width: '16px',
            height: '16px',
          }
        : {
            width: '12px !important',
            height: '12px !important',
          }),
    }),
    track: {
      borderRadius: 50,
    },
  },
};

export default MuiSwitch;

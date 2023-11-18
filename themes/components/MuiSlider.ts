import { Components, Theme } from '@mui/material';

const MuiSlider: Components<Theme>['MuiSlider'] = {
  styleOverrides: {
    thumb: ({ ownerState, theme }) => ({
      backgroundColor: 'white',
      border: '2px solid currentColor',
      ...(ownerState.size === 'medium'
        ? {
            height: '16px',
            width: '16px',
          }
        : null),
    }),
    mark: ({ ownerState, theme }) => ({
      ...(ownerState.orientation === 'vertical'
        ? {
            width: '6px',
            height: '1px',
            borderRadius: '50px',
            backgroundColor: 'currentcolor',
            left: '80%',
            opacity: '50%',
          }
        : {
            width: '1px',
            height: '6px',
            borderRadius: '50px',
            backgroundColor: 'currentcolor',
            top: '80%',
            opacity: '40%',
          }),
    }),
  },
};

export default MuiSlider;

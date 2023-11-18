import { alpha, Components, Theme } from '@mui/material';

const MuiCheckbox: Components<Theme>['MuiCheckbox'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      '&.Mui-checked': {
        filter: `drop-shadow(0px 2px 4px ${alpha(
          theme.palette[
            `${
              ownerState.color === undefined || ownerState.color === 'default'
                ? 'primary'
                : ownerState.color
            }`
          ].main,
          0.4
        )})`,
      },
    }),
  },
};

export default MuiCheckbox;

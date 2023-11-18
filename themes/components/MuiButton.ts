import { Components, Theme } from '@mui/material';
import { alpha } from '@mui/material';

import buttonClasses from '@mui/material/Button/buttonClasses';

const MuiButton: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const defaultColor =
        theme.palette[
          `${
            ownerState.color === undefined || ownerState.color === 'inherit'
              ? 'primary'
              : ownerState.color
          }`
        ].main;

      return {
        ...((ownerState.variant === 'contained' ||
          ownerState.variant === 'rounded') && {
          boxShadow: `0px 2px 4px -1px ${alpha(
            defaultColor,
            0.2
          )},0px 4px 5px 0px ${alpha(
            defaultColor,
            0.14
          )},0px 1px 10px 0px ${alpha(defaultColor, 0.12)}`,
        }),
        ...(ownerState.variant === 'rounded' &&
          ownerState.color !== 'inherit' && {
            borderRadius: '50px',
            color: 'white',
            backgroundColor: theme.palette[ownerState.color as 'primary'].main,
            '&:hover': {
              backgroundColor:
                theme.palette[ownerState.color as 'primary'].dark,
            },
          }),
        ...(ownerState.size === 'small' &&
          ownerState.variant === 'rounded' && {
            padding: '4px 10px',
            fontSize: theme.typography.pxToRem(13),
          }),
        ...(ownerState.size === 'large' &&
          ownerState.variant === 'rounded' && {
            padding: '8px 22px',
            fontSize: theme.typography.pxToRem(15),
          }),
        ...(ownerState.variant === 'rounded' && {
          [`&.${buttonClasses.disabled}`]: {
            color: theme.palette.action.disabled,
            boxShadow: theme.shadows[0],
            backgroundColor: theme.palette.action.disabledBackground,
          },
        }),
        // [`&.${buttonClasses.disabled}`]
      };
    },
    disableElevation: {
      boxShadow: 'none',
    },
  },
  variants: [
    {
      props: {
        variant: 'rounded',
      },
      style: {},
    },
  ],
};

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    rounded: true;
  }
}

export default MuiButton;

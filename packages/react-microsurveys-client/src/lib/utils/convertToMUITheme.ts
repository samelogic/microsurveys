import { createTheme, Theme } from '@mui/material';
import { FormStyles } from '@samelogic/microsurveys-types';

export const convertToMuiTheme = (styles?: FormStyles): Theme => {
  return createTheme({
    palette: styles?.palette,

    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  });
};

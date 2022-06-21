import { createTheme, Theme } from '@mui/material';
import { FormSettings } from '@samelogic/microsurveys-types';

export const convertToMuiTheme = (formSettings?: FormSettings): Theme => {
  return createTheme({
    palette: formSettings?.styles?.palette,

    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  });
};

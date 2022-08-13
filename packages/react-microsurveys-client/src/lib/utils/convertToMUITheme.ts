import { createTheme, Theme } from '@mui/material/styles';
import { FormDialog } from '@samelogic/microsurveys-types';

export const convertToMuiTheme = (dialog?: FormDialog): Theme => {
  return createTheme({
    palette: dialog?.palette,

    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  });
};

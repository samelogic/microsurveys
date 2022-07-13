import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { Form, Response } from '@samelogic/microsurveys-types';
import Dialog from '../components/dialogs/Dialog/Dialog';
import Stepper from '../components/stepper/Stepper/Stepper';
import { FormContext } from '../context/FormContext/FormContext';
import { buildFormResponse } from '../utils/buildFormResponse';
import { convertToMuiTheme } from '../utils/convertToMUITheme';
import { DialogContent, Paper } from '@mui/material';

/* eslint-disable-next-line */
export interface MicrosurveyClientProps {
  form: Form;
  page?: number;
  anchorEl?: Element | null | undefined;

  onClosed?: () => void;
  onSubmit?: (formResponse: Response) => void;
}

export function MicrosurveyClient({
  form,
  page,
  anchorEl,
  onClosed,
  onSubmit,
}: MicrosurveyClientProps) {
  const [open, setOpen] = useState<boolean>(true);
  const theme = convertToMuiTheme(form.settings);

  const handleSubmit = (data: Record<string, string>) => {
    const formResponse = buildFormResponse(form, data);
    onSubmit?.(formResponse);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    onClosed?.();
  };
  return (
    <ThemeProvider theme={theme}>
      <FormContext.Provider value={{ form }}>
        {anchorEl && (
          <Dialog
            form={form}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <Stepper
              form={form}
              page={page}
              onCancel={handleClose}
              onSubmit={handleSubmit}
            />
          </Dialog>
        )}
        {!anchorEl && (
          <Paper>
            <DialogContent>
              <Stepper
                form={form}
                page={page}
                onCancel={handleClose}
                onSubmit={handleSubmit}
              />
            </DialogContent>
          </Paper>
        )}
      </FormContext.Provider>
    </ThemeProvider>
  );
}

export default MicrosurveyClient;

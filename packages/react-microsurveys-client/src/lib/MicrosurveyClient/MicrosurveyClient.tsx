import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import { Form, Response } from '@samelogic/microsurveys-types';
import Stepper from '../components/stepper/Stepper/Stepper';
import { FormContext } from '../context/FormContext/FormContext';
import { buildFormResponse } from '../utils/buildFormResponse';
import { convertToMuiTheme } from '../utils/convertToMUITheme';
import DialogTitle from '../components/dialogs/DialogTitle/DialogTitle';
import DialogSelector from '../components/dialogs/DialogSelector/DialogSelector';

/* eslint-disable-next-line */
export interface MicrosurveyClientProps {
  form: Form;
  page?: number;
  open?: boolean;
  anchorEl?: Element | null;
  container?: Element | null;

  onClosed?: () => void;
  onSubmit?: (formResponse: Response) => void;
}

const StyledPaper = styled(Paper)({
  '@media (max-width: 640px)': {
    width: '20em',
    padding: '0.75em',
  },
  width: '25em',
  padding: '1em',
});
export function MicrosurveyClient({
  form,
  page,
  anchorEl,
  container,
  onClosed,
  onSubmit,
  open = true,
}: MicrosurveyClientProps) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(open);

  useEffect(() => {
    setDialogOpen(open);
  }, [open]);

  const theme = convertToMuiTheme(form.settings?.dialog);

  const handleSubmit = (data: Record<string, string>) => {
    const formResponse = buildFormResponse(form, data);
    onSubmit?.(formResponse);
    handleClose();
  };

  const handleClose = () => {
    setDialogOpen(false);
    onClosed?.();
  };
  return (
    <ThemeProvider theme={theme}>
      <FormContext.Provider value={{ form }}>
        <DialogSelector
          form={form}
          open={dialogOpen}
          anchorEl={anchorEl}
          container={container}
          onClose={handleClose}
        >
          <StyledPaper>
            {(form.settings?.dialog.showTitle ?? true) && (
              <DialogTitle text={form.title} />
            )}
            <Stepper
              form={form}
              page={page}
              onCancel={handleClose}
              onSubmit={handleSubmit}
            />
          </StyledPaper>
        </DialogSelector>
      </FormContext.Provider>
    </ThemeProvider>
  );
}

export default MicrosurveyClient;

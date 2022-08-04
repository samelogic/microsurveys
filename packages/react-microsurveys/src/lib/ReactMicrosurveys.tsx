import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { MicrosurveyEditor } from '@samelogic/react-microsurveys-editor';
import { MicrosurveyClient } from '@samelogic/react-microsurveys-client';
import { Form, Response } from '@samelogic/microsurveys-types';

/* eslint-disable-next-line */
export interface ReactMicrosurveysProps {
  form: Form;
  onChange?: (form: Partial<Form>) => void;
  onSubmit?: (form: Form) => void;
}

export function ReactMicrosurveys({
  form,
  onChange,
  onSubmit,
}: ReactMicrosurveysProps) {
  const [formData, setFormData] = useState<Form>(form);

  const handleChange = (form: Partial<Form>) => {
    setFormData({ ...formData, ...form });
    onChange?.(form);
  };

  const [responseData, setResponseData] = useState<Response>();
  const handleClientSubmit = (response: Response) => {
    setResponseData(response);
  };

  return (
    <Grid container>
      <Grid item xs={6}>
        <MicrosurveyEditor
          form={formData}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Microsurvey Example
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>
          This is a working example of your microsurvey.
        </Typography>
        <Grid container item justifyContent="center">
          <MicrosurveyClient form={formData} onSubmit={handleClientSubmit} />
          {responseData && (
            <Grid item justifyContent="center" xs={12}>
              <Typography variant="h2" sx={{ mb: 2 }}>
                Response
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 4 }}>
                Example of what you would see if you submitted the form.
              </Typography>
              <Paper variant="outlined" sx={{ m: 2, p: 2 }}>
                <pre>{JSON.stringify(responseData, null, 2)}</pre>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ReactMicrosurveys;

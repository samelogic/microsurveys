import React, { useState } from 'react';
import { MicrosurveyClient } from '@samelogic/react-microsurveys-client';
import { Form, Response } from '@samelogic/microsurveys-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export interface ClientPlaygroundProps {
  form: Form;
}

export function ClientPlayground({ form }: ClientPlaygroundProps) {
  const [responseData, setResponseData] = useState<Response>();
  const handleClientSubmit = (response: Response) => {
    setResponseData(response);
  };
  return (
    <Grid container item justifyContent="center">
      <MicrosurveyClient form={form} onSubmit={handleClientSubmit} />
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
  );
}

export default ClientPlayground;

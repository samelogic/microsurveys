import React, { useRef, useState } from 'react';
import { MicrosurveyClient } from '@samelogic/react-microsurveys-client';
import { Form, Response } from '@samelogic/microsurveys-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export interface ClientPlaygroundProps {
  form: Form;
  anchorEl?: Element;
}

export function ClientPlayground({ form }: ClientPlaygroundProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [responseData, setResponseData] = useState<Response>();
  const [open, setOpen] = useState(true);

  const handleClientSubmit = (response: Response) => {
    setResponseData(response);
  };

  const containerOpen = Boolean(containerRef.current && open);
  return (
    <div>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Microsurvey Example
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        This is a working example of your microsurvey.
      </Typography>

      <Grid container item justifyContent="center">
        <Paper variant="outlined" sx={{ width: '100%', height: '350px' }}>
          <Box
            ref={containerRef}
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ position: 'relative', width: '100%', height: '100%' }}
          >
            <button onClick={() => setOpen(!open)}>Show</button>
            <MicrosurveyClient
              form={form}
              open={containerOpen}
              onClosed={() => setOpen(false)}
              onSubmit={handleClientSubmit}
              container={containerRef.current}
            />
          </Box>
        </Paper>
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
    </div>
  );
}

export default ClientPlayground;

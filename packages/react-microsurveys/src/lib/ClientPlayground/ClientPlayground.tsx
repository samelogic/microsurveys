import React, { useEffect, useRef, useState } from 'react';
import { MicrosurveyClient } from '@samelogic/react-microsurveys-client';
import { Form, Response } from '@samelogic/microsurveys-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export interface ClientPlaygroundProps {
  form: Form;
  anchorEl?: Element;
}

export function ClientPlayground({ form }: ClientPlaygroundProps) {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [responseData, setResponseData] = useState<Response>();
  const [open, setOpen] = useState(true);

  // if form change, set open to true
  useEffect(() => {
    setOpen(true);
  }, [form]);

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
        <Box sx={{ flexGrow: 1 }}>
          <Paper variant="outlined">
            <Box sx={{ height: 400, overflow: 'auto', mb: 3 }}>
              <Grid
                sx={{
                  position: 'relative',
                  width: '230%',
                  height: '230%',
                }}
                container
                alignItems="center"
                justifyContent="center"
                ref={containerRef}
              >
                <Button ref={anchorRef} onClick={() => setOpen(!open)}>
                  Show
                </Button>
                <MicrosurveyClient
                  form={form}
                  open={containerOpen}
                  onClosed={() => setOpen(false)}
                  onSubmit={handleClientSubmit}
                  container={containerRef.current}
                  anchorEl={anchorRef.current}
                />
              </Grid>
            </Box>
          </Paper>
        </Box>
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

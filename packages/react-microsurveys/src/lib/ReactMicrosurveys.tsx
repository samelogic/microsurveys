import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { MicrosurveyEditor } from '@samelogic/react-microsurveys-editor';
import { Form } from '@samelogic/microsurveys-types';
import ClientPlayground from './ClientPlayground/ClientPlayground';

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
        <ClientPlayground form={formData} />
      </Grid>
    </Grid>
  );
}

export default ReactMicrosurveys;

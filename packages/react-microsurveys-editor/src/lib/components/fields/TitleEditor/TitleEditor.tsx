import styled from '@emotion/styled';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Form } from '@samelogic/microsurveys-types';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

const StyledCard = styled(Card)(
  ({ theme }) => `
    border: 1px solid #ccc;
    margin: 1em;
`
);

const StyledCardHeader = styled(CardHeader)(
  ({ theme }) => `
    border-bottom: 1px solid #ccc;
`
);
/* eslint-disable-next-line */
export interface TitleEditorProps {}

export function TitleEditor() {
  const { control } = useFormContext<Form>();
  const showTitle = useWatch({
    control,
    name: 'settings.dialog.showTitle',
  });

  return (
    <StyledCard>
      <StyledCardHeader
        title={<Typography variant="h5">Title</Typography>}
        action={
          <Controller
            name={`settings.dialog.showTitle`}
            control={control}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div>
                <Switch
                  checked={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  inputRef={ref}
                />
              </div>
            )}
          />
        }
      />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="inherit">
              Title of your microsurvey
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Controller
              name={`title`}
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'A form title is required.',
                },
              }}
              render={({
                field: { onChange, onBlur, value, ref },
                fieldState: { error },
              }) => (
                <TextField
                  disabled={!showTitle}
                  fullWidth
                  error={error ? true : false}
                  helperText={error?.message}
                  variant="outlined"
                  label="Microsurvey Title"
                  placeholder=""
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  inputRef={ref}
                />
              )}
            />
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
}

export default TitleEditor;

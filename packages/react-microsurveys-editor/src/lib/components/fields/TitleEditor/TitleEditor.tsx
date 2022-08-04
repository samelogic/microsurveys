import { TextField } from '@mui/material';
import { Form } from '@samelogic/microsurveys-types';
import { Controller, useFormContext } from 'react-hook-form';

/* eslint-disable-next-line */
export interface TitleEditorProps {}

export function TitleEditor() {
  const { control } = useFormContext<Form>();

  return (
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
  );
}

export default TitleEditor;

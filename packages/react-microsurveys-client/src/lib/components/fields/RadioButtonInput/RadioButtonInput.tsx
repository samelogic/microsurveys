import * as React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { BaseFieldProps } from '../BaseFieldProps';

/* eslint-disable-next-line */
export type RadioButtonInputProps = BaseFieldProps;

export const RadioButtonInput = ({
  field: { id, title, properties },
  control,
}: RadioButtonInputProps): JSX.Element => {
  return (
    <Controller
      name={id}
      control={control}
      rules={{
        required: {
          value: properties?.required || false,
          message: 'This field is required',
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
          label={title}
          placeholder={properties?.description}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          inputRef={ref}
        />
      )}
    />
  );
};

export default RadioButtonInput;

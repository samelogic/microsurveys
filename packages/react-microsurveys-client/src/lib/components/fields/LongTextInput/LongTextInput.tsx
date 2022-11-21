import * as React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { BaseFieldProps } from '../BaseFieldProps';
import { InputLabel, makeStyles } from '@mui/material';

export type LongTextInputProps = BaseFieldProps;

export const LongTextInput = ({
  field: { id, title, properties },
  control,
}: LongTextInputProps): JSX.Element => {
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
        <>
          <InputLabel
            sx={{
              fontWeight: '800',
              fontSize: '1.1rem',
              color: 'rgb(99, 99, 99)',
            }}
            htmlFor={`${id}-dropdown`}
          >
            {title}
          </InputLabel>
          <TextField
            fullWidth
            error={error ? true : false}
            helperText={error?.message}
            variant="outlined"
            placeholder={properties?.description}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            inputRef={ref}
            multiline={true}
            rows={3}
            InputProps={{
              style: {
                padding: '0.5rem 0.8rem',
                border: 'rgb(196, 196, 196)',
              },
            }}
          />
        </>
      )}
    />
  );
};

export default LongTextInput;

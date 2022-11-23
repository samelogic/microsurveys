import * as React from 'react';
import { Controller } from 'react-hook-form';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { BaseFieldProps } from '../BaseFieldProps';
import styled from '@emotion/styled';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';

/* eslint-disable-next-line */
export type RadioButtonInputProps = BaseFieldProps;

const StyledFormControl = styled(FormControl)({});

export const RadioButtonInput = ({
  field: { id, title, properties },
  control,
}: RadioButtonInputProps) => {
  const options = properties?.choices;
  if (!options || options.length <= 0) {
    return null;
  }
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
        <StyledFormControl
          fullWidth
          required={properties?.required}
          error={error ? true : false}
        >
          <FormLabel
            sx={{
              fontWeight: '800',
              fontSize: '1.1rem',
              color: 'rgb(99, 99, 99)',
            }}
            htmlFor={`${id}-dropdown`}
          >
            {title}
          </FormLabel>
          <RadioGroup
            id={`${id}-dropdown`}
            name={`${id}-dropdown`}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          >
            {options.map((opt) => (
              <FormControlLabel
                value={opt.label}
                control={<Radio />}
                label={opt.label}
              />
            ))}
          </RadioGroup>
          <FormHelperText>
            {error ? error.message : properties?.description}
          </FormHelperText>
        </StyledFormControl>
      )}
    />
  );
};

export default RadioButtonInput;

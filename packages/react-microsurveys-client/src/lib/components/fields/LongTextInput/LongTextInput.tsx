import * as React from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { BaseFieldProps } from '../BaseFieldProps';

export type LongTextInputProps = BaseFieldProps;

const StyledTextField = styled(TextField)({});

export const LongTextInput = ({
  field: { title, properties },
  fieldState,
  ...rest
}: LongTextInputProps): JSX.Element => {
  return (
    <StyledTextField
      fullWidth
      error={fieldState?.error ? true : false}
      helperText={fieldState?.error?.message}
      variant="outlined"
      size="small"
      label={title}
      placeholder={properties?.description}
      multiline
      rows={4}
      {...rest}
    />
  );
};

export default LongTextInput;

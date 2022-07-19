import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import React from 'react';
import { ControllerFieldState } from 'react-hook-form';

/* eslint-disable-next-line */
export interface QuestionTitleProps {
  fieldState?: ControllerFieldState;
}

const StyledTextField = styled(TextField)({});

export const QuestionTitle = React.forwardRef<
  HTMLInputElement,
  QuestionTitleProps
>(({ fieldState, ...rest }, ref) => {
  return (
    <StyledTextField
      fullWidth
      error={fieldState?.error ? true : false}
      helperText={fieldState?.error?.message}
      variant="outlined"
      label="Question Title"
      placeholder=""
      {...rest}
    />
  );
});

export default QuestionTitle;

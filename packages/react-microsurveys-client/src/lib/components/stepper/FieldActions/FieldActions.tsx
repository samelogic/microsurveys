import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

/* eslint-disable-next-line */
export interface FieldActionsProps {
  onCancel?: () => void;
  onNext?: () => void;
  onBack?: () => void;
}

const StyledFieldActions = styled(Box)({});

const StyledCancelButton = styled(Button)({});
const StyledNextButton = styled(Button)({});

export function FieldActions({ onNext, onCancel }: FieldActionsProps) {
  return (
    <StyledFieldActions
      component="span"
      m={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <StyledCancelButton onClick={onCancel} variant="text" color="secondary">
        Cancel
      </StyledCancelButton>
      <StyledNextButton onClick={onNext} variant="contained" color="primary">
        Reply
      </StyledNextButton>
    </StyledFieldActions>
  );
}

export default FieldActions;

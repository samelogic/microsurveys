import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import PoweredBy from '../PoweredBy/PoweredBy';

/* eslint-disable-next-line */
export interface FieldActionsProps {
  onCancel?: () => void;
  onNext?: () => void;
  onBack?: () => void;
}

const StyledFieldActions = styled(Box)({});

const StyledCancelButton = styled(Button)({
  fontSize: '0.8rem',
  fontWeight: '600',
});
const StyledNextButton = styled(Button)({});

export function FieldActions({ onNext, onCancel }: FieldActionsProps) {
  const theme = useTheme();
  return (
    <StyledFieldActions
      component="span"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap="1.5rem"
    >
      <div
        style={{
          alignSelf: 'end',
        }}
      >
        <PoweredBy />
      </div>
      <div style={{ display: 'flex' }}>
        <StyledCancelButton
          onClick={onCancel}
          disableElevation
          variant="text"
          color="secondary"
          style={{
            color: theme.palette.primary.main,
          }}
        >
          Cancel
        </StyledCancelButton>
        <StyledNextButton
          onClick={onNext}
          disableElevation
          variant="contained"
          color="primary"
          style={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        >
          Reply
        </StyledNextButton>
      </div>
    </StyledFieldActions>
  );
}

export default FieldActions;

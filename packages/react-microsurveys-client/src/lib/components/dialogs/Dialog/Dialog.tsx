import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import { Form } from '@samelogic/microsurveys-types';
import DialogSelector from '../DialogSelector/DialogSelector';
import DialogTitle from '../DialogTitle/DialogTitle';

/* eslint-disable-next-line */
export interface DialogProps {
  form: Form;
  anchorEl?: Element;
  open: boolean;
  onClose: () => void;

  children?: React.ReactNode;
}

const StyledPaper = styled(Paper)({
  width: '25em',
  padding: '1em',
});

export function Dialog({
  form,
  anchorEl,
  open,
  children,
  onClose,
}: DialogProps) {
  return (
    <DialogSelector
      open={open}
      anchorEl={anchorEl}
      type={form.type}
      onClose={onClose}
    >
      <StyledPaper>
        <DialogTitle text={form.title} />

        <div>{children}</div>
      </StyledPaper>
    </DialogSelector>
  );
}

export default Dialog;

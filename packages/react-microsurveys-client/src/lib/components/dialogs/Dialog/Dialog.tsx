import styled from '@emotion/styled';
import { ClickAwayListener, Paper } from '@mui/material';
import { Form } from '@samelogic/microsurveys-types';
import DialogSelector from '../DialogSelector/DialogSelector';
import DialogTitle from '../DialogTitle/DialogTitle';

/* eslint-disable-next-line */
export interface DialogProps {
  form: Form;
  anchorEl?: Element | null | undefined;
  open: boolean;
  onClose?: () => void;

  children?: React.ReactNode;
}

const StyledDialog = styled(Paper)({
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
  const handleClickAway = () => {
    onClose?.();
  };
  return (
    <DialogSelector open={open} anchorEl={anchorEl}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <StyledDialog>
          <DialogTitle text={form.title} />

          <div>{children}</div>
        </StyledDialog>
      </ClickAwayListener>
    </DialogSelector>
  );
}

export default Dialog;

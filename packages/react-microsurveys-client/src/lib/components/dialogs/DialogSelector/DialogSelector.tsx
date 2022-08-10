import Dialog from '@mui/material/Dialog';
import { Form } from '@samelogic/microsurveys-types';
import AnchorDialog from '../AnchorDialog/AnchorDialog';

/* eslint-disable-next-line */
export interface DialogSelectorProps {
  form: Form;
  anchorEl?: Element;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export function DialogSelector({
  children,
  form,
  anchorEl,
  open,
  onClose,
}: DialogSelectorProps) {
  if (!open) return null;

  if (form.settings?.dialog?.dialogType === 'anchor' && anchorEl) {
    return (
      <AnchorDialog
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        dialogSettings={form.settings.dialog}
      >
        {children}
      </AnchorDialog>
    );
  } else {
    return (
      <Dialog open={open} onClose={onClose}>
        {children}
      </Dialog>
    );
  }
}

export default DialogSelector;

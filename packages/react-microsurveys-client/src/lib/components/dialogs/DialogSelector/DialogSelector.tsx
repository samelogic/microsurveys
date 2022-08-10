import Dialog from '@mui/material/Dialog';
import { Form } from '@samelogic/microsurveys-types';
import AnchorDialog from '../AnchorDialog/AnchorDialog';

/* eslint-disable-next-line */
export interface DialogSelectorProps {
  form: Form;
  anchorEl?: Element;
  container?: Element;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export function DialogSelector({
  children,
  form,
  anchorEl,
  container,
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
    console.log(container);
    return (
      <Dialog
        open={open}
        onClose={onClose}
        container={container}
        style={{
          position: 'absolute',
        }}
        componentsProps={{
          backdrop: {
            style: { position: 'absolute' },
          },
        }}
      >
        {children}
      </Dialog>
    );
  }
}

export default DialogSelector;

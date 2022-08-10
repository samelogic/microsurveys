import Dialog, { DialogProps } from '@mui/material/Dialog';
import { Form } from '@samelogic/microsurveys-types';
import AnchorDialog from '../AnchorDialog/AnchorDialog';

/* eslint-disable-next-line */
export interface DialogSelectorProps {
  form: Form;
  anchorEl?: Element | null;
  container?: Element | null;
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
    // if injecting in a container, setup the container props and ability to interact with the rest of the page
    const dialogProps: DialogProps = container
      ? {
          open,
          disableEscapeKeyDown: true,
          disablePortal: true,
          disableEnforceFocus: true,
          style: {
            position: 'absolute',
          },
          componentsProps: {
            backdrop: {
              style: { position: 'absolute' },
            },
          },
        }
      : { open };
    return (
      <Dialog onClose={onClose} container={container} {...dialogProps}>
        {children}
      </Dialog>
    );
  }
}

export default DialogSelector;

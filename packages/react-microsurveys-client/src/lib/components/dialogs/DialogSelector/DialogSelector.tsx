import ClickAwayListener from '@mui/material/ClickAwayListener';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import Popper, { PopperProps } from '@mui/material/Popper';
import { Form } from '@samelogic/microsurveys-types';

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
    // if injecting in a container, setup the container props and ability to interact with the rest of the page
    const propperProps: PopperProps = container
      ? {
          open,
          disablePortal: true,
          container: container,
        }
      : { open };
    return (
      <ClickAwayListener
        onClickAway={() => {
          // if there is a container, do nothing with the click away
          if (!container) {
            onClose();
          }
        }}
      >
        <Popper
          anchorEl={anchorEl}
          disablePortal={true}
          style={{ zIndex: 99999999 }}
          placement={form.settings.dialog.placement}
          {...propperProps}
        >
          {children}
        </Popper>
      </ClickAwayListener>
    );
  } else {
    // if injecting in a container, setup the container props and ability to interact with the rest of the page
    const dialogProps: DialogProps = container
      ? {
          open,
          disableEscapeKeyDown: true,
          disablePortal: true,
          disableEnforceFocus: true,
          container: container,
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
      <Dialog onClose={onClose} {...dialogProps}>
        {children}
      </Dialog>
    );
  }
}

export default DialogSelector;

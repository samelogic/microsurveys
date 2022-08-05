import Dialog from '@mui/material/Dialog';
import { FormType } from '@samelogic/microsurveys-types';
import AnchorDialog from '../AnchorDialog/AnchorDialog';

/* eslint-disable-next-line */
export interface DialogSelectorProps {
  type: FormType;
  anchorEl?: Element;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export function DialogSelector({
  children,
  type,
  anchorEl,
  open,
  onClose,
}: DialogSelectorProps) {
  if (!open) return null;

  switch (type) {
    case FormType.Form:
      return <div>{children}</div>;
    case FormType.Anchor:
      if (!anchorEl) return null;
      return (
        <AnchorDialog anchorEl={anchorEl} open={open} onClose={onClose}>
          {children}
        </AnchorDialog>
      );
    case FormType.Modal:
      return (
        <Dialog open={open} onClose={onClose}>
          {children}
        </Dialog>
      );
    default:
      throw new Error(`Unknown form type: ${type}`);
  }
}

export default DialogSelector;

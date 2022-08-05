import { Dialog } from '@mui/material';
import { FormType } from '@samelogic/microsurveys-types';
import AnchorDialog from '../AnchorDialog/AnchorDialog';

/* eslint-disable-next-line */
export interface DialogSelectorProps {
  type: FormType;
  anchorEl?: Element;
  open: boolean;
  children?: React.ReactNode;
}

export function DialogSelector({
  children,
  type,
  anchorEl,
  open,
}: DialogSelectorProps) {
  if (!open) return null;

  switch (type) {
    case FormType.Form:
      return <div>{children}</div>;
    case FormType.Anchor:
      if (!anchorEl) return null;
      return (
        <AnchorDialog anchorEl={anchorEl} open={open}>
          {children}
        </AnchorDialog>
      );
    case FormType.Modal:
      return <Dialog open={open}>{children}</Dialog>;
    default:
      throw new Error(`Unknown form type: ${type}`);
  }
}

export default DialogSelector;

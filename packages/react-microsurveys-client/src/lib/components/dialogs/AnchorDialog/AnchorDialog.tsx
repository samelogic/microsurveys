import Popper from '@material-ui/core/Popper';

/* eslint-disable-next-line */
export interface AnchorDialogProps {
  open: boolean;
  anchorEl: Element;
  children?: React.ReactNode;
}

export function AnchorDialog({ open, anchorEl, children }: AnchorDialogProps) {
  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      disablePortal={true}
      style={{ zIndex: 99999999 }}
      placement="right-end"
    >
      {children}
    </Popper>
  );
}

export default AnchorDialog;

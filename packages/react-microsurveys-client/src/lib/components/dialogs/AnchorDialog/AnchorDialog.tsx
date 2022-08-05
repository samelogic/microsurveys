import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';

export interface AnchorDialogProps {
  open: boolean;
  anchorEl?: Element;
  onClose: () => void;
  children?: React.ReactNode;
}

export function AnchorDialog({
  open,
  anchorEl,
  onClose,
  children,
}: AnchorDialogProps) {
  return (
    <ClickAwayListener onClickAway={onClose}>
      <Popper
        open={open}
        anchorEl={anchorEl}
        disablePortal={true}
        style={{ zIndex: 99999999 }}
        placement="right-end"
      >
        {children}
      </Popper>
    </ClickAwayListener>
  );
}

export default AnchorDialog;

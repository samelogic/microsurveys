import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { AnchorFormDialog } from '@samelogic/microsurveys-types';

export interface AnchorDialogProps {
  dialogSettings: AnchorFormDialog;
  open: boolean;
  anchorEl?: Element | null;
  onClose: () => void;
  children?: React.ReactNode;
}

export function AnchorDialog({
  open,
  dialogSettings,
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
        placement={dialogSettings.placement}
      >
        {children}
      </Popper>
    </ClickAwayListener>
  );
}

export default AnchorDialog;

import { useRef } from 'react';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { AnchorFormDialog } from '@samelogic/microsurveys-types';
import styled from '@emotion/styled';

export interface AnchorDialogProps {
  dialogSettings: AnchorFormDialog;
  open: boolean;
  anchorEl?: Element | null;
  container?: Element | null;
  onClose: () => void;
  children?: React.ReactNode;
}

export function AnchorDialog({
  open,
  dialogSettings,
  anchorEl,
  container,
  onClose,
  children,
}: AnchorDialogProps) {
  const handleClose = () => {
    // only close if no container is passed in
    if (!container) {
      onClose();
    }
  };
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Popper
        open={open}
        anchorEl={anchorEl}
        container={container}
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

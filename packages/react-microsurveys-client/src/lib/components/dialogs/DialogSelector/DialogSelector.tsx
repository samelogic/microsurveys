import styled from '@emotion/styled';
import { FormSettings } from '@samelogic/microsurveys-types';
import AnchorDialog from '../AnchorDialog/AnchorDialog';

/* eslint-disable-next-line */
export interface DialogSelectorProps {
  anchorEl?: Element | null | undefined;
  open: boolean;
  children?: React.ReactNode;
}

export function DialogSelector({
  children,
  anchorEl,
  open,
}: DialogSelectorProps) {
  if (anchorEl) {
    return (
      <AnchorDialog anchorEl={anchorEl} open={open}>
        {children}
      </AnchorDialog>
    );
  }
  return <>Unknown type</>;
}

export default DialogSelector;

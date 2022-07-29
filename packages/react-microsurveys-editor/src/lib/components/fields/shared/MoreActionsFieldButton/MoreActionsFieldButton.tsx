import { useState, MouseEvent } from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { IconDotsVertical } from '@tabler/icons';
import Divider from '@mui/material/Divider';

/* eslint-disable-next-line */
export interface MoreActionsFieldButtonProps {
  onDeleteClick: () => void;
  onMoveUpClick: () => void;
  onMoveDownClick: () => void;

  moveUpDisabled?: boolean;
  moveDownDisabled?: boolean;
}

export function MoreActionsFieldButton({
  onMoveUpClick,
  onMoveDownClick,
  onDeleteClick,
  moveUpDisabled,
  moveDownDisabled,
}: MoreActionsFieldButtonProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ButtonBase
        sx={{ borderRadius: '12px' }}
        onClick={handleClick}
        aria-controls="menu-comment"
        aria-haspopup="true"
      >
        <IconButton component="span" size="small" disableRipple>
          <IconDotsVertical fontSize="inherit" />
        </IconButton>
      </ButtonBase>
      <Menu
        id="menu-comment"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        variant="selectedMenu"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem
          disabled={moveUpDisabled}
          onClick={() => {
            handleClose();
            onMoveUpClick();
          }}
        >
          Move Up
        </MenuItem>
        <MenuItem
          disabled={moveDownDisabled}
          onClick={() => {
            handleClose();
            onMoveDownClick();
          }}
        >
          Move Down
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            handleClose();
            onDeleteClick();
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
}

export default MoreActionsFieldButton;

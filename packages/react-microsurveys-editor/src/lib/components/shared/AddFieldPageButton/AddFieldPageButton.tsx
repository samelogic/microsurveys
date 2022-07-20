import { useState, MouseEvent } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FieldType } from '@samelogic/microsurveys-types';

export interface AddFieldPageButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  onSelect: (type: FieldType) => void;
  children?: React.ReactNode;
}

export function AddFieldPageButton({
  onSelect,
  children,
  variant,
  color,
}: AddFieldPageButtonProps) {
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
      <Button
        aria-controls={open ? 'add-field-page-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant={variant}
        color={color}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {children}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            onSelect(FieldType.LongText);
            handleClose();
          }}
          disableRipple
        >
          Long Text
        </MenuItem>
        <MenuItem
          onClick={() => {
            onSelect(FieldType.DropDown);
            handleClose();
          }}
          disableRipple
        >
          Drop Down
        </MenuItem>
      </Menu>
    </div>
  );
}

export default AddFieldPageButton;

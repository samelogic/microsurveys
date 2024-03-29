import { useState } from 'react';
import styled from '@emotion/styled';
import { SketchPicker, ColorResult } from 'react-color';
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { RefCallBack } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

/* eslint-disable-next-line */
export interface PaletteEditorProps {
  label: string;
  value: string;
  defaultValue: string;
  onChange: (value: string) => void;
  inputRef: RefCallBack;
}

const StyledInputAdornment = styled.div`
  width: 1em;
  height: 1em;
  border: 1px solid grey;
  border-radius: 15%;
`;

export function PaletteEditor({
  value,
  defaultValue,
  label,
  onChange,
  inputRef,
}: PaletteEditorProps) {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const handleOpenPopover = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const [color, setColor] = useState<string>(value);
  const handleChange = (newValue: ColorResult) => {
    setColor(newValue.hex);
    onChange(newValue.hex);
  };

  const handleReset = () => {
    setColor(defaultValue);
    onChange(defaultValue);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <TextField
          label={label}
          onClick={handleOpenPopover}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <StyledInputAdornment
                  style={{
                    backgroundColor: color,
                  }}
                />
              </InputAdornment>
            ),
          }}
          inputRef={inputRef}
          // InputLabelProps={{ shrink: true }}
          // size="small"
          value={color}
          // onPaste={handlePaste}
        />
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          disableAutoFocus
          disableEnforceFocus
        >
          <SketchPicker color={color} onChange={handleChange} />
        </Popover>
      </Grid>
      <Grid item>
        <Button
          size="small"
          disabled={defaultValue === color}
          onClick={handleReset}
        >
          {defaultValue === color ? 'auto' : 'Reset'}
        </Button>
      </Grid>
    </Grid>
  );
}

export default PaletteEditor;

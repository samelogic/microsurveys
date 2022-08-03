import React, { useState } from 'react';
import { FormPalette } from '@samelogic/microsurveys-types';
import { SketchPicker, ColorResult } from 'react-color';

export interface StyleEditorProps {
  palette: FormPalette;
  onChange?: (palette: FormPalette) => void;
}

export function StyleEditor({ palette, onChange }: StyleEditorProps) {
  const [color, setColor] = useState<string>('red');
  const handleChange = (newValue: ColorResult) => {
    setColor(newValue.hex);
    onChange?.({
      ...palette,
      background: { paper: newValue.hex },
    });
  };
  return (
    <div>
      <SketchPicker color={color} onChange={handleChange} />
    </div>
  );
}

export default StyleEditor;

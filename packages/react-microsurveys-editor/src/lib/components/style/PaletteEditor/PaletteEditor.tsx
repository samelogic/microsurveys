import { useState } from 'react';
import styled from '@emotion/styled';
import { SketchPicker, ColorResult } from 'react-color';

/* eslint-disable-next-line */
export interface PaletteEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const StyledPaletteEditor = styled.div`
  color: pink;
`;

export function PaletteEditor({ value, onChange }: PaletteEditorProps) {
  const [color, setColor] = useState<string>(value);
  const handleChange = (newValue: ColorResult) => {
    setColor(newValue.hex);
    onChange(newValue.hex);
  };
  return (
    <StyledPaletteEditor>
      <SketchPicker color={color} onChange={handleChange} />
    </StyledPaletteEditor>
  );
}

export default PaletteEditor;

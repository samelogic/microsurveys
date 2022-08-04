import React, { useState } from 'react';
import { Form, FormPalette } from '@samelogic/microsurveys-types';

import { useFormContext } from 'react-hook-form';
import PaletteEditor from '../PaletteEditor/PaletteEditor';

export interface StyleEditorProps {}

export function StyleEditor(props: StyleEditorProps) {
  const { control } = useFormContext<Form>();

  return (
    <div>
      <PaletteEditor value="red" onChange={(c: string) => console.log(c)} />
    </div>
  );
}

export default StyleEditor;

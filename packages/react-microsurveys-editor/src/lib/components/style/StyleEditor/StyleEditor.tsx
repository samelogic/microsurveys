import React, { useState } from 'react';
import { Form, FormPalette } from '@samelogic/microsurveys-types';

import Select from '@mui/material/Select';
import { Controller, useFormContext } from 'react-hook-form';
import PaletteEditor from '../PaletteEditor/PaletteEditor';
import InputLabel from '@mui/material/InputLabel';

export interface StyleEditorProps {}

export function StyleEditor(props: StyleEditorProps) {
  const { control } = useFormContext<Form>();

  return (
    <div>
      <Controller
        name={`settings.dialog.palette.mode`}
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <div>
            <InputLabel htmlFor={`theme`}>Theme</InputLabel>
            <Select
              native
              defaultValue=""
              label="Theme"
              id={`theme`}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              inputRef={ref}
            >
              <option aria-label="Please select a value..." value="" />
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </Select>
          </div>
        )}
      />

      <Controller
        name={`settings.dialog.palette.background.paper`}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <PaletteEditor label="background" {...field} />}
      />

      <Controller
        name={`settings.dialog.palette.primary.main`}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <PaletteEditor label="primary" {...field} />}
      />

      <Controller
        name={`settings.dialog.palette.secondary.main`}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <PaletteEditor label="secondary" {...field} />}
      />

      <Controller
        name={`settings.dialog.palette.info.main`}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <PaletteEditor label="cancel" {...field} />}
      />
      <Controller
        name={`settings.dialog.palette.error.main`}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <PaletteEditor label="error" {...field} />}
      />
      {/* <Controller
        name={`settings.styles.palette.text.primary`}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <PaletteEditor label="text" {...field} />}
      /> */}
    </div>
  );
}

export default StyleEditor;

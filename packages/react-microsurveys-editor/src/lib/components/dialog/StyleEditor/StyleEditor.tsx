import React, { useState } from 'react';
import { Form } from '@samelogic/microsurveys-types';
import { Controller, useFormContext } from 'react-hook-form';
import PaletteEditor from '../PaletteEditor/PaletteEditor';

import { IconSun, IconMoon } from '@tabler/icons';
import { createTheme, Theme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

export interface StyleEditorProps {}

export function StyleEditor(props: StyleEditorProps) {
  const { control, watch } = useFormContext<Form>();
  const mode = watch('settings.dialog.palette.mode');

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2} direction="column">
      <Grid item>
        <Controller
          name={`settings.dialog.palette.mode`}
          defaultValue={theme.palette.mode}
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <ToggleButtonGroup
              value={value}
              exclusive
              onChange={onChange}
              aria-label="mode"
            >
              <ToggleButton value="light" aria-label="light">
                <IconSun /> Light
              </ToggleButton>
              <ToggleButton value="dark" aria-label="dark">
                <IconMoon /> Dark
              </ToggleButton>
            </ToggleButtonGroup>
          )}
        />
      </Grid>
      <Grid item>
        <Controller
          name={`settings.dialog.palette.background.paper`}
          defaultValue={theme.palette.background.paper}
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, onChange, value } }) => (
            <PaletteEditor
              label="Background"
              inputRef={ref}
              onChange={onChange}
              value={value}
              defaultValue={theme.palette.background.paper}
            />
          )}
        />
      </Grid>
      <Grid item>
        <Controller
          name={`settings.dialog.palette.primary.main`}
          defaultValue={theme.palette.primary.main}
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, onChange, value } }) => (
            <PaletteEditor
              label="Primary Button"
              inputRef={ref}
              onChange={onChange}
              value={value}
              defaultValue={theme.palette.primary.main}
            />
          )}
        />
      </Grid>
      <Grid item>
        <Controller
          name={`settings.dialog.palette.secondary.main`}
          defaultValue={theme.palette.secondary.main}
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, onChange, value } }) => (
            <PaletteEditor
              label="Cancel Button"
              inputRef={ref}
              onChange={onChange}
              value={value}
              defaultValue={theme.palette.secondary.main}
            />
          )}
        />
      </Grid>
      <Grid item>
        <Controller
          name={`settings.dialog.palette.text.primary`}
          defaultValue={theme.palette.text.primary}
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, onChange, value } }) => (
            <PaletteEditor
              label="Primary Text"
              inputRef={ref}
              onChange={onChange}
              value={value}
              defaultValue={theme.palette.text.primary}
            />
          )}
        />
      </Grid>
      <Grid item>
        <Controller
          name={`settings.dialog.palette.text.secondary`}
          defaultValue={theme.palette.text.secondary}
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, onChange, value } }) => (
            <PaletteEditor
              label="Secondary Text"
              inputRef={ref}
              onChange={onChange}
              value={value}
              defaultValue={theme.palette.text.secondary}
            />
          )}
        />
      </Grid>
      <Grid item>
        <Controller
          name={`settings.dialog.palette.error.main`}
          defaultValue={theme.palette.error.main}
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, onChange, value } }) => (
            <PaletteEditor
              label="Error"
              inputRef={ref}
              onChange={onChange}
              value={value}
              defaultValue={theme.palette.error.main}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}

export default StyleEditor;

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
  const { control } = useFormContext<Form>();

  const theme = createTheme();

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2} direction="column">
      {/* <Grid item>
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
      </Grid> */}
      <Grid item>
        <Controller
          name={`settings.dialog.palette.background.paper`}
          defaultValue={theme.palette.background.paper}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <PaletteEditor label="Background" {...field} />
          )}
        />
      </Grid>
      <Grid item>
        <Controller
          name={`settings.dialog.palette.primary.main`}
          defaultValue={theme.palette.primary.main}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <PaletteEditor label="Primary Button" {...field} />
          )}
        />
      </Grid>
      <Grid item>
        <Controller
          name={`settings.dialog.palette.secondary.main`}
          defaultValue={theme.palette.secondary.main}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <PaletteEditor label="Cancel Button" {...field} />
          )}
        />
      </Grid>
      <Grid item>
        <Controller
          name={`settings.dialog.palette.text.primary`}
          defaultValue={theme.palette.text.primary}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <PaletteEditor label="Primary Text" {...field} />
          )}
        />
      </Grid>
      <Grid item>
        <Controller
          name={`settings.dialog.palette.text.secondary`}
          defaultValue={theme.palette.text.secondary}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <PaletteEditor label="Secondary Text" {...field} />
          )}
        />
      </Grid>
      <Grid item>
        <Controller
          name={`settings.dialog.palette.error.main`}
          defaultValue={theme.palette.error.main}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <PaletteEditor label="Error" {...field} />}
        />
      </Grid>

      {/* <Controller
        name={`settings.styles.palette.text.primary`}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <PaletteEditor label="text" {...field} />}
      /> */}
    </Grid>
  );
}

export default StyleEditor;

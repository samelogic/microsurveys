import React from 'react';
import { Form } from '@samelogic/microsurveys-types';

import Select from '@mui/material/Select';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import InputLabel from '@mui/material/InputLabel';

export interface PlacementEditorProps {}

export function PlacementEditor(props: PlacementEditorProps) {
  const { control } = useFormContext<Form>();
  const dialogType = useWatch({
    control,
    name: 'settings.dialog.dialogType',
  });

  return (
    <div>
      <Controller
        name={`settings.dialog.dialogType`}
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <div>
            <InputLabel htmlFor={`dialogType`}>Dialog Type</InputLabel>
            <Select
              native
              label="Dialog Type"
              id={`dialogType`}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              inputRef={ref}
            >
              <option value="modal">Modal</option>
              <option value="anchor">Anchor</option>
            </Select>
          </div>
        )}
      />
      {dialogType === 'anchor' && (
        <Controller
          name={`settings.dialog.placement`}
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <div>
              <InputLabel htmlFor={`placement`}>Placement</InputLabel>
              <Select
                native
                label="Placement"
                id={`placement`}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                inputRef={ref}
              >
                <option value="left-start">Left Start</option>
                <option value="left">Left</option>
                <option value="left-end">Left End</option>
                <option value="top-start">Top Start</option>
                <option value="top">Top</option>
                <option value="top-end">Top End</option>
                <option value="right-start">Right Start</option>
                <option value="right">Right</option>
                <option value="right-end">Right End</option>
                <option value="bottom-start">Bottom Start</option>
                <option value="bottom">Bottom</option>
                <option value="bottom-end">Bottom End</option>
              </Select>
            </div>
          )}
        />
      )}
    </div>
  );
}

export default PlacementEditor;

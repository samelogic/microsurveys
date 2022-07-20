import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
} from '@mui/material';
import { Form } from '@samelogic/microsurveys-types';
import { Control, useFieldArray, useFormContext } from 'react-hook-form';
import { BaseFieldProps } from '../../BaseFieldProps';

/* eslint-disable-next-line */
export interface FieldDependencyButtonProps
  extends Omit<BaseFieldProps, 'value'> {}

export const FieldDependencyButton: React.FC<FieldDependencyButtonProps> = ({
  control,
  fieldIndex,
  pageIndex,
}) => {
  const { getValues, setValue } = useFormContext();
  const { fields, append, remove, move } = useFieldArray({
    name: `pages.${pageIndex}.fields`,
    control: control,
    keyName: 'key',
  });

  const dependsOnVar = `pages.${pageIndex}.fields.${fieldIndex}.properties.dependsOn`;

  const isDepending = getValues(dependsOnVar);

  const onCreateDependency = () => {
    // get id of above field
    const aboveField = fieldIndex - 1;
    const aboveFieldId = getValues(
      `pages.${pageIndex}.fields.${aboveField}.id`
    );
    setValue(dependsOnVar, aboveFieldId);
  };

  const onRemoveDependency = () => {
    console.log('dep removed');
    setValue(dependsOnVar, undefined);
  };

  // const onChecked = (evt: unknown, checked: boolean) => {
  //   if (checked) {
  //     onCreateDependency();
  //   } else {
  //     onRemoveDependency();
  //   }
  // };

  const onSelected = (evt: SelectChangeEvent<any>) => {
    // if (checked) {
    //   onCreateDependency();
    // } else {
    //   onRemoveDependency();
    // }
    console.log(evt.target.value);
    setValue(dependsOnVar, evt.target.value);
  };

  // fields.splice(fieldIndex, 1);
  const items = fields.slice(0, fields.length);
  items.splice(fieldIndex, 1);

  return (
    <div>
      {/* {!isDepending && (
        <Button onClick={onCreateDependency}>Depend On Above Field</Button>
      )}
      {isDepending && (
        <Button onClick={onRemoveDependency}>
          Remove Dependency on Above Field
        </Button>
      )} */}

      {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={!!isDepending} onChange={onChecked} />}
          label="Depend on above field"
        />
      </FormGroup> */}

      <FormControl fullWidth sx={{ mt: 1 }}>
        <InputLabel id="depends-select-label">Depends On</InputLabel>
        <Select
          labelId="depends-select-label"
          id="depends-select"
          value={isDepending}
          label="Depends On"
          onChange={onSelected}
        >
          <MenuItem value={undefined}>None</MenuItem>
          {items.map((x) => (
            <MenuItem key={x.key} value={x.id}>
              {x.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

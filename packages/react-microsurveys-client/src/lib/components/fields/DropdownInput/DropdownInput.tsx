import styled from '@emotion/styled';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useWatch } from 'react-hook-form';
import { BaseFieldProps } from '../BaseFieldProps';

/* eslint-disable-next-line */
export interface DropdownInputProps extends BaseFieldProps {}

const StyledFormControl = styled(FormControl)({});

export function DropdownInput({
  field: { id, title, properties },
  fieldState,
  control,
  ...rest
}: DropdownInputProps) {
  const dependentAnswer = useWatch({
    control,
    name: properties?.dependsOn || '',
  });
  if (properties?.dependsOn && !dependentAnswer) {
    return null;
  }

  const options =
    properties?.choices
      ?.filter((choice) => choice.group === dependentAnswer)
      .map((choice) => choice.label) || [];

  // const options: string[] = [];
  // if (properties?.dependsOn) {
  //   const dependentAnswer = response?.answers.find(
  //     (a) => a.field?.id === properties.dependsOn
  //   );
  //   properties.choices?.forEach((c) => {
  //     // Hard code against another drop down
  //     if (c.group === dependentAnswer?.choice?.label) {
  //       options.push(c.label);
  //     }
  //   });

  //   if (!dependentAnswer || options.length === 0) {
  //     return null;
  //   }
  // } else {
  //   properties?.choices?.forEach((c) => options.push(c.label));
  // }

  return (
    <StyledFormControl
      fullWidth
      required={properties?.required}
      error={fieldState?.error ? true : false}
    >
      <InputLabel htmlFor={`${id}-dropdown`}>{title}</InputLabel>
      <Select
        native
        defaultValue=""
        label={title}
        id={`${id}-dropdown`}
        {...rest}
      >
        <option aria-label="Please select a value..." value="" />
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Select>
      <FormHelperText>
        {fieldState?.error ? fieldState.error.message : properties?.description}
      </FormHelperText>
    </StyledFormControl>
  );
}

export default DropdownInput;

import styled from '@emotion/styled';
import { Controller } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { useWatch } from 'react-hook-form';
import { BaseFieldProps } from '../BaseFieldProps';

/* eslint-disable-next-line */
export interface DropdownInputProps extends BaseFieldProps {}

const StyledFormControl = styled(FormControl)({});

export function DropdownInput({
  field: { id, title, properties },
  control,
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

  if (options.length <= 0) {
    return null;
  }
  return (
    <Controller
      name={id}
      control={control}
      rules={{
        required: {
          value: properties?.required || false,
          message: 'This field is required',
        },
      }}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <StyledFormControl
          fullWidth
          required={properties?.required}
          error={error ? true : false}
        >
          <InputLabel htmlFor={`${id}-dropdown`}>{title}</InputLabel>
          <Select
            native
            defaultValue=""
            id={`${id}-dropdown`}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            inputRef={ref}
          >
            <option aria-label="Please select a value..." value="" />
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Select>
          <FormHelperText>
            {error ? error.message : properties?.description}
          </FormHelperText>
        </StyledFormControl>
      )}
    />
  );
}

export default DropdownInput;

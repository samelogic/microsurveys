import styled from '@emotion/styled';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Controller, useFieldArray } from 'react-hook-form';
import { BaseFieldProps } from '../BaseFieldProps';
import { FieldDependencyButton } from '../shared/FieldDependencyButton/FieldDependencyButton';
import { DropDownChoice } from './DropDownChoice';
const StyledLongTextEditor = styled.div``;

/* eslint-disable-next-line */
export interface DropDownEditorProps extends BaseFieldProps {}

export const DropDownEditor: React.FC<DropDownEditorProps> = ({
  control,
  fieldIndex,
  pageIndex,
  value,
}: DropDownEditorProps) => {
  const { fields, append, remove, move } = useFieldArray({
    name: `pages.${pageIndex}.fields.${fieldIndex}.properties.choices`,
    control: control,
  });

  const onAddChoice = () => {
    append({ label: '', group: undefined });
  };

  const onMoveItem = (from: number, to: number) => {
    move(from, to);
  };

  const onRemoveChoice = (index: number) => {
    console.log('removing item ' + index);
    remove(index);
  };

  return (
    <StyledLongTextEditor>
      <Controller
        name={`pages.${pageIndex}.fields.${fieldIndex}.title`}
        control={control}
        rules={{
          required: {
            value: true,
            message: 'A question title is required.',
          },
        }}
        render={({
          field: { onChange, onBlur, value, ref },
          fieldState: { error },
        }) => (
          <TextField
            fullWidth
            error={error ? true : false}
            helperText={error?.message}
            variant="outlined"
            label="Question Title"
            placeholder=""
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            inputRef={ref}
          />
        )}
      />
      <FieldDependencyButton
        control={control}
        fieldIndex={fieldIndex}
        pageIndex={pageIndex}
      />
      {fields.map((field, choiceIndex) => {
        return (
          <DropDownChoice
            key={field.id}
            control={control}
            fieldIndex={fieldIndex}
            pageIndex={pageIndex}
            choiceIndex={choiceIndex}
            choicesLength={fields.length}
            onDelete={onRemoveChoice}
            onMove={onMoveItem}
          />
        );
      })}
      <div>
        <Button onClick={onAddChoice}>Add Item</Button>
      </div>
    </StyledLongTextEditor>
  );
};

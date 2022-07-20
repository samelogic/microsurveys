import styled from '@emotion/styled';
import { FieldType, Form, Page } from '@samelogic/microsurveys-types';
import { Control, useFieldArray } from 'react-hook-form';
import AddFieldPageButton from '../../shared/AddFieldPageButton/AddFieldPageButton';
import FieldItem from '../FieldItem/FieldItem';
import { v4 as uuidv4 } from 'uuid';

/* eslint-disable-next-line */
export interface FieldsManagerProps {
  control: Control<Form, any>;
  value: Page;
  index: number;
}

const StyledFieldsManager = styled.div``;

export function FieldsManager({ value, control, index }: FieldsManagerProps) {
  const { fields, append, remove, move } = useFieldArray({
    name: `pages.${index}.fields`,
    control: control,
    keyName: 'key',
  });
  return (
    <StyledFieldsManager>
      {fields.map((field, fieldIndex) => {
        return (
          <FieldItem
            key={field.key}
            remove={remove}
            move={move}
            control={control}
            fieldIndex={fieldIndex}
            fieldLength={fields.length}
            pageIndex={index}
            value={field}
          />
        );
      })}

      {fields.length < 2 && (
        <AddFieldPageButton
          variant="text"
          onSelect={(type: FieldType) =>
            append({
              id: uuidv4(),
              type: type,
              title: '',
            })
          }
        >
          Add Field
        </AddFieldPageButton>
      )}
    </StyledFieldsManager>
  );
}

export default FieldsManager;

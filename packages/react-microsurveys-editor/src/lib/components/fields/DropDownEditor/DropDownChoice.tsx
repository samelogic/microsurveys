import styled from '@emotion/styled';
import { Stack, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { BaseFieldProps } from '../BaseFieldProps';
import MoreActionsFieldButton from '../shared/MoreActionsFieldButton/MoreActionsFieldButton';

export interface DropDownChoiceProps extends Omit<BaseFieldProps, 'value'> {
  choicesLength: number;
  choiceIndex: number;
  onDelete: (index: number) => void;
  onMove: (fromIndex: number, toIndex: number) => void;
}

const ChoiceWrapper = styled.div``;

export const DropDownChoice: React.FC<DropDownChoiceProps> = ({
  control,
  fieldIndex,
  pageIndex,
  choiceIndex,
  choicesLength,
  onDelete,
  onMove,
}) => {
  const onRemoveItem = () => {
    onDelete(choiceIndex);
  };

  return (
    <ChoiceWrapper>
      <Stack direction={'row'} gap="0.5em" my="0.5em">
        <Controller
          name={`pages.${pageIndex}.fields.${fieldIndex}.properties.choices.${choiceIndex}.label`}
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Name is required',
            },
          }}
          render={({ field, fieldState }) => (
            <TextField label="Name" {...field} sx={{ flexGrow: '3' }} />
          )}
        />
        <Controller
          name={`pages.${pageIndex}.fields.${fieldIndex}.properties.choices.${choiceIndex}.group`}
          control={control}
          rules={{
            required: {
              value: false,
              message: 'A question title is required.',
            },
          }}
          render={({ field, fieldState }) => (
            <TextField label="Group" {...field} sx={{ flexGrow: '1' }} />
          )}
        />
        {/* <Button onClick={onRemoveItem}>Delete</Button> */}
        <MoreActionsFieldButton
          // have to build watch logic to clone the field with values
          onMoveUpClick={() => onMove(choiceIndex, choiceIndex - 1)}
          onMoveDownClick={() => onMove(choiceIndex, choiceIndex + 1)}
          onDeleteClick={onRemoveItem}
          moveUpDisabled={choiceIndex === 0}
          moveDownDisabled={choiceIndex === choicesLength - 1}
        />
      </Stack>
    </ChoiceWrapper>
  );
};

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { BaseFieldProps } from '../BaseFieldProps';
import { MoreActionsFieldButton } from '../shared/MoreActionsFieldButton/MoreActionsFieldButton';
import FieldEditor from '../FieldEditor/FieldEditor';
import {
  UseFieldArrayMove,
  UseFieldArrayRemove,
  useFormContext,
} from 'react-hook-form';
import { useState } from 'react';
import DeleteConfirmationAlert from '../../shared/DeleteConfirmationAlert/DeleteConfirmationAlert';

/* eslint-disable-next-line */
export interface FieldItemProps extends BaseFieldProps {
  remove: UseFieldArrayRemove;
  move: UseFieldArrayMove;
  fieldLength: number;
}

export function FieldItem({
  control,
  fieldIndex,
  pageIndex,
  value,
  fieldLength,
  move,
  remove,
}: FieldItemProps) {
  const { setValue } = useFormContext();
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const handleModalClose = (status: boolean) => {
    setDeleteConfirmOpen(false);
    if (status) {
      remove(fieldIndex);
    }
  };

  const moveItem = (from: number, to: number) => {
    // reset dependency before switching
    setValue(
      `pages.${pageIndex}.fields.${fieldIndex}.properties.dependsOn`,
      undefined
    );
    move(from, to);
  };

  return (
    <Paper sx={{ p: 2, m: 2 }} elevation={1}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mb: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            display: 'inline-block',
            width: 'calc(100% - 34px)',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            verticalAlign: 'middle',
            cursor: 'pointer',
          }}
        >
          Question Selector Here
        </Typography>
        <MoreActionsFieldButton
          // have to build watch logic to clone the field with values
          onMoveUpClick={() => moveItem(fieldIndex, fieldIndex - 1)}
          onMoveDownClick={() => moveItem(fieldIndex, fieldIndex + 1)}
          onDeleteClick={() => setDeleteConfirmOpen(true)}
          moveUpDisabled={fieldIndex === 0}
          moveDownDisabled={fieldIndex === fieldLength - 1}
        />
        <DeleteConfirmationAlert
          open={deleteConfirmOpen}
          handleClose={(status: boolean) => {
            handleModalClose(status);
          }}
        />
      </Stack>
      <FieldEditor
        control={control}
        fieldIndex={fieldIndex}
        pageIndex={pageIndex}
        value={value}
      />
    </Paper>
  );
}

export default FieldItem;

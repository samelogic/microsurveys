import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Form, Page } from '@samelogic/microsurveys-types';
import { useState } from 'react';
import {
  UseFieldArrayRemove,
  UseFieldArrayMove,
  Control,
} from 'react-hook-form';

import MoreActionsFieldButton from '../../fields/shared/MoreActionsFieldButton/MoreActionsFieldButton';
import DeleteConfirmationAlert from '../../shared/DeleteConfirmationAlert/DeleteConfirmationAlert';
import PageEditor from '../PageEditor/PageEditor';

/* eslint-disable-next-line */
export interface PageItemProps {
  remove: UseFieldArrayRemove;
  move: UseFieldArrayMove;
  fieldLength: number;
  index: number;
  control: Control<Form, any>;
  value: Page;
}

export function PageItem({
  move,
  remove,
  control,
  index,
  value,
  fieldLength,
}: PageItemProps) {
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const handleModalClose = (status: boolean) => {
    setDeleteConfirmOpen(false);
    if (status) {
      remove(index);
    }
  };
  return (
    <Paper sx={{ p: 2, m: 2 }} variant="outlined">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
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
          Page {index + 1}
        </Typography>

        <MoreActionsFieldButton
          // have to build watch logic to clone the field with values
          onMoveUpClick={() => move(index, index - 1)}
          onMoveDownClick={() => move(index, index + 1)}
          onDeleteClick={() => setDeleteConfirmOpen(true)}
          moveUpDisabled={index === 0}
          moveDownDisabled={index === fieldLength - 1}
        />

        <DeleteConfirmationAlert
          open={deleteConfirmOpen}
          handleClose={(status: boolean) => handleModalClose(status)}
        />
      </Stack>
      <PageEditor control={control} value={value} index={index} />
    </Paper>
  );
}

export default PageItem;

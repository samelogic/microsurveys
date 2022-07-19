import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

/* eslint-disable-next-line */
export interface DeleteConfirmationAlertProps {
  open: boolean;
  handleClose: (status: boolean) => void;
}

export function DeleteConfirmationAlert({
  open,
  handleClose,
}: DeleteConfirmationAlertProps) {
  return (
    <Dialog
      open={open}
      onClose={() => handleClose(false)}
      keepMounted
      maxWidth="xs"
      aria-labelledby="item-delete-title"
      aria-describedby="item-delete-description"
    >
      <DialogTitle id="item-delete-title">
        Are you sure you want to delete this item?
      </DialogTitle>
      <DialogActions sx={{ mr: 2 }}>
        <Button onClick={() => handleClose(false)} color="error">
          Cancel
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => handleClose(true)}
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteConfirmationAlert;

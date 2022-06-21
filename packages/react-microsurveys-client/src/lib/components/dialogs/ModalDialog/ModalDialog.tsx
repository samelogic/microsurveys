import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ModalDialogProps {}

const StyledModalDialog = styled.div`
  color: pink;
`;

export function ModalDialog(props: ModalDialogProps) {
  return (
    <StyledModalDialog>
      <h1>Welcome to ModalDialog!</h1>
    </StyledModalDialog>
  );
}

export default ModalDialog;

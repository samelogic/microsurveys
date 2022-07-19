import styled from '@emotion/styled';
import { Form, Page } from '@samelogic/microsurveys-types';
import { Control } from 'react-hook-form';
import FieldsManager from '../../fields/FieldsManager/FieldsManager';

/* eslint-disable-next-line */
export interface FieldPageProps {
  control: Control<Form, any>;
  value: Page;
  index: number;
}

const StyledFieldPage = styled.div``;

export function FieldPage(props: FieldPageProps) {
  return (
    <StyledFieldPage>
      <FieldsManager {...props} />
    </StyledFieldPage>
  );
}

export default FieldPage;

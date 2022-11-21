import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import InputField from '../../fields/InputField/InputField';
import FieldActions from '../FieldActions/FieldActions';
import { StepPageProps } from '../StepPage/StepPage';

/* eslint-disable-next-line */
export interface FieldPageProps extends StepPageProps {}

const StyledFieldPage = styled.div(({ theme }) => ({}));

const StyledFieldActions = styled(FieldActions)(({ theme }) => ({}));

const StyledFieldItems = styled.div(({ theme }) => ({
  margin: '0 0 1em',
}));

export function FieldPage({
  page: { fields },
  onNext,
  onCancel,
}: FieldPageProps) {
  const { control, handleSubmit } = useForm();

  return (
    <StyledFieldPage>
      {fields?.map((field, index) => (
        <StyledFieldItems key={index}>
          <InputField field={field} control={control} />
        </StyledFieldItems>
      ))}
      <StyledFieldActions
        onCancel={onCancel}
        onNext={handleSubmit((data) => {
          onNext?.(data);
        })}
      />
    </StyledFieldPage>
  );
}

export default FieldPage;

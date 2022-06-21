import styled from '@emotion/styled';
import { useForm, Controller } from 'react-hook-form';
import InputField from '../../fields/InputField/InputField';
import FieldActions from '../FieldActions/FieldActions';
import { StepPageProps } from '../StepPage/StepPage';

/* eslint-disable-next-line */
export interface FieldPageProps extends StepPageProps {}

const StyledFieldPage = styled.div(({ theme }) => ({
  marginTop: '1em',
}));

const StyledFieldActions = styled(FieldActions)(({ theme }) => ({}));

const StyledFieldItems = styled.div(({ theme }) => ({
  margin: '2em 0',
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
          <Controller
            name={field.id}
            control={control}
            rules={{
              required: {
                value: field.properties?.required || false,
                message: 'This field is required',
              },
            }}
            render={({ field: hookField, fieldState }) => (
              <InputField
                field={field}
                fieldState={fieldState}
                control={control}
                {...hookField}
              />
            )}
          />
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

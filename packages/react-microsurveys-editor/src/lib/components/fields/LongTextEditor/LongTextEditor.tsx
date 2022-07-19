import styled from '@emotion/styled';
import { Controller } from 'react-hook-form';
import { BaseFieldProps } from '../BaseFieldProps';
import QuestionProperties from '../shared/QuestionProperties/QuestionProperties';
import QuestionTitle from '../shared/QuestionTitle/QuestionTitle';

/* eslint-disable-next-line */
export interface LongTextEditorProps extends BaseFieldProps {}

const StyledLongTextEditor = styled.div``;

export function LongTextEditor({
  control,
  fieldIndex,
  pageIndex,
  value,
}: LongTextEditorProps) {
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
        render={({ field, fieldState }) => (
          <QuestionTitle fieldState={fieldState} {...field} />
        )}
      />
      <QuestionProperties
        control={control}
        fieldIndex={fieldIndex}
        pageIndex={pageIndex}
        value={value}
      />
    </StyledLongTextEditor>
  );
}

export default LongTextEditor;

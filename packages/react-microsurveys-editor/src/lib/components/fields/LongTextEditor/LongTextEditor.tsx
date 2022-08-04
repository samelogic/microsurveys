import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import { BaseFieldProps } from '../BaseFieldProps';
import QuestionProperties from '../shared/QuestionProperties/QuestionProperties';

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
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { error },
        }) => (
          <TextField
            fullWidth
            error={error ? true : false}
            helperText={error?.message}
            variant="outlined"
            label="Question Title"
            placeholder=""
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            inputRef={ref}
          />
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

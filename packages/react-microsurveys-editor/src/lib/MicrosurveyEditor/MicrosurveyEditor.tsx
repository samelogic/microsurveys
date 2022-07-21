import { RefObject } from 'react';
import styled from '@emotion/styled';
import { Form } from '@samelogic/microsurveys-types';
import { FormProvider, useForm } from 'react-hook-form';
import PagesManager from '../components/pages/PagesManager/PagesManager';
import TitleEditor from '../components/fields/TitleEditor/TitleEditor';

/* eslint-disable-next-line */
export interface MicrosurveyEditorProps {
  form: Form;
  formRef?: RefObject<HTMLFormElement>;
  onChange?: (form: Partial<Form>) => void;
  onSubmit?: (form: Form) => void;
}

const StyledMicrosurveyEditor = styled.div``;

export function MicrosurveyEditor({
  form,
  formRef,
  onChange,
  onSubmit,
}: MicrosurveyEditorProps) {
  const methods = useForm<Form>({
    defaultValues: form,
    mode: 'onBlur',
  });

  methods.watch((values) => {
    onChange?.(values as Partial<Form>);
  });

  const onSubmitLocal = (values: Form) => {
    onSubmit?.(values);
  };

  return (
    <StyledMicrosurveyEditor>
      <FormProvider {...methods}>
        <form ref={formRef} onSubmit={methods.handleSubmit(onSubmitLocal)}>
          <TitleEditor />
          <PagesManager />
        </form>
      </FormProvider>
    </StyledMicrosurveyEditor>
  );
}

export default MicrosurveyEditor;

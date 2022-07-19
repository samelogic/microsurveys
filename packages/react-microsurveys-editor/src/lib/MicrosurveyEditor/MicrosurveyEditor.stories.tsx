import { Form } from '@samelogic/microsurveys-types';
import { Story, Meta } from '@storybook/react';
import { useRef, useState } from 'react';
import { MicrosurveyEditor, MicrosurveyEditorProps } from './MicrosurveyEditor';

export default {
  component: MicrosurveyEditor,
  title: 'MicrosurveyEditor',
} as Meta;

const Template: Story<MicrosurveyEditorProps> = (args) => {
  const [form, setForm] = useState<Form>();
  const formRef = useRef<HTMLFormElement>(null);

  const submit = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true })
      );
    }
  };
  return (
    <div>
      <MicrosurveyEditor
        {...args}
        onChange={(data) => console.log('change', data)}
        onSubmit={(data) => setForm(data)}
        formRef={formRef}
      />
      <hr />
      <h2>Outside Form:</h2>
      <button onClick={submit}>Submit</button>
      <br />
      Form:
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};

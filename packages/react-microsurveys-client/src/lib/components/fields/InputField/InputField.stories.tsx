import { Story, Meta } from '@storybook/react';
import { FieldType } from '@samelogic/microsurveys-types';
import { InputField, InputFieldProps } from './InputField';

export default {
  component: InputField,
  title: 'Fields/InputField',
} as Meta;

const Template: Story<InputFieldProps> = (args) => <InputField {...args} />;

export const LongText = Template.bind({});
LongText.args = {
  field: {
    type: FieldType.LongText,
  },
};

import { Story, Meta } from '@storybook/react';
import { FieldType } from '@samelogic/microsurveys-types';
import { LongTextInput, LongTextInputProps } from './LongTextInput';

export default {
  component: LongTextInput,
  title: 'Fields/LongTextInput',

  args: {
    field: {
      id: 'first_name',
      type: FieldType.LongText,
      title: 'What is your first name?',
      properties: {
        description: 'Write your name',
      },
    },
  } as LongTextInputProps,
} as Meta;

const Template: Story<LongTextInputProps> = (args) => (
  <LongTextInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

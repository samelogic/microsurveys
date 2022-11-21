import { FieldType } from '@samelogic/microsurveys-types';
import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { RadioButtonInput, RadioButtonInputProps } from './RadioButtonInput';

export default {
  component: RadioButtonInput,
  title: 'Fields/EmotionRatingInput',

  args: {
    field: {
      id: 'pref_cloud',
      type: FieldType.RadioButton,
      title: 'How bad do you want this?',
      properties: {
        description: 'Select your preferred cloud provider',
      },
    },
  } as RadioButtonInputProps,
} as Meta;

const Template: Story<RadioButtonInputProps> = (args) => {
  const { control } = useForm<any>();
  args.control = control;
  return <RadioButtonInput {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};

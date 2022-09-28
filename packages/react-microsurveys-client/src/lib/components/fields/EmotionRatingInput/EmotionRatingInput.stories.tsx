import { FieldType } from '@samelogic/microsurveys-types';
import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import {
  EmotionRatingInput,
  EmotionRatingInputProps,
} from './EmotionRatingInput';

export default {
  component: EmotionRatingInput,
  title: 'Fields/EmotionRatingInput',

  args: {
    field: {
      id: 'pref_cloud',
      type: FieldType.EmotionRating,
      title: 'How bad do you want this?',
      properties: {
        description: 'Select your preferred cloud provider',
      },
    },
  } as EmotionRatingInputProps,
} as Meta;

const Template: Story<EmotionRatingInputProps> = (args) => (
  <EmotionRatingInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

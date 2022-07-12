import { FieldType, Page, PageType } from '@samelogic/microsurveys-types';
import { Story, Meta } from '@storybook/react';
import { Stepper, StepperProps } from './Stepper';

export default {
  component: Stepper,
  title: 'Stepper',

  args: {
    form: {
      pages: [
        {
          type: PageType.Welcome,
        },
        {
          type: PageType.Fields,
          fields: [
            {
              id: 'q1',
              type: FieldType.LongText,
              title: 'Question 1',
            },
            {
              id: 'q2',
              type: FieldType.LongText,
              title: 'Question 2',
            },
          ],
        },
        {
          type: PageType.Fields,
          fields: [
            {
              id: 'q3',
              type: FieldType.DropDown,
              title: 'Question 3 (dropdown)',
            },
          ],
        },
        {
          type: PageType.Fields,
          fields: [
            {
              id: 'q4',
              type: FieldType.LongText,
              title: 'Question 4',
            },
          ],
        },
        {
          type: PageType.ThankYou,
        },
      ] as Page[],
    },
  },
} as Meta;

const Template: Story<StepperProps> = (args) => <Stepper {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

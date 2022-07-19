import { FieldType, FormType, PageType } from '@samelogic/microsurveys-types';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactMicrosurveys } from './ReactMicrosurveys';

export default {
  component: ReactMicrosurveys,
  title: 'ReactMicrosurveys',

  args: {
    form: {
      title: 'Form title',
      type: FormType.Form,
      pages: [
        {
          type: PageType.Fields,
          fields: [
            {
              id: Math.random().toString(),
              type: FieldType.LongText,
              title: 'This is a long text field',
            },
          ],
        },
        {
          type: PageType.ThankYou,
        },
      ],
    },
  },
} as ComponentMeta<typeof ReactMicrosurveys>;

const Template: ComponentStory<typeof ReactMicrosurveys> = (args) => (
  <ReactMicrosurveys {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

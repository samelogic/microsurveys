import { FieldType, PageType } from '@samelogic/microsurveys-types';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import { ReactMicrosurveys } from './ReactMicrosurveys';

export default {
  component: ReactMicrosurveys,
  title: 'ReactMicrosurveys',

  args: {
    form: {
      title: 'Form title',
      pages: [
        {
          type: PageType.Fields,
          fields: [
            {
              id: uuidv4(),
              type: FieldType.LongText,
              title: 'This is a long text field',
            },
          ],
        },
        {
          type: 'thank_you_page',
        },
      ],
      settings: {
        dialog: {
          // dialogType: 'anchor',
          // showTitle: true,
          // palette: {
          //   mode: 'light',
          //   text: { primary: '#000000' },
          //   background: { paper: '#fafafa' },
          //   primary: { main: '#0070f3' },
          //   secondary: { main: '#000' },
          //   error: { main: '#f44336' },
          // },
        },
      },
    },
  },
} as ComponentMeta<typeof ReactMicrosurveys>;

const Template: ComponentStory<typeof ReactMicrosurveys> = (args) => (
  <ReactMicrosurveys {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

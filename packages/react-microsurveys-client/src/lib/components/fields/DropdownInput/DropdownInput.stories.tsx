import { FieldType } from '@samelogic/microsurveys-types';
import { Story, Meta } from '@storybook/react';
import { DropdownInput, DropdownInputProps } from './DropdownInput';

export default {
  component: DropdownInput,
  title: 'Fields/DropdownInput',

  args: {
    field: {
      id: 'pref_cloud',
      type: FieldType.DropDown,
      title: 'Preferred Cloud Provider?',
      properties: {
        description: 'Select your preferred cloud provider',
        choices: [
          {
            label: 'AWS',
          },
          {
            label: 'Azure',
          },
          {
            label: 'Google Cloud',
          },
        ],
      },
    },
  } as DropdownInputProps,
} as Meta;

const Template: Story<DropdownInputProps> = (args) => (
  <DropdownInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

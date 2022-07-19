import { Story, Meta } from '@storybook/react';
import { FieldsManager, FieldsManagerProps } from './FieldsManager';

export default {
  component: FieldsManager,
  title: 'FieldsManager',
} as Meta;

const Template: Story<FieldsManagerProps> = (args) => (
  <FieldsManager {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

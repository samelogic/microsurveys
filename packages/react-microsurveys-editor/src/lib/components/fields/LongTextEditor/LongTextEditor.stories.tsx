import { Story, Meta } from '@storybook/react';
import { LongTextEditor, LongTextEditorProps } from './LongTextEditor';

export default {
  component: LongTextEditor,
  title: 'LongTextEditor',
} as Meta;

const Template: Story<LongTextEditorProps> = (args) => (
  <LongTextEditor {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

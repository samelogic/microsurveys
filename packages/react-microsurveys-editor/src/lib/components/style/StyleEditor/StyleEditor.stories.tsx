import { Story, Meta } from '@storybook/react';
import { StyleEditor, StyleEditorProps } from './StyleEditor';

export default {
  component: StyleEditor,
  title: 'StyleEditor',
} as Meta;

const Template: Story<StyleEditorProps> = (args) => <StyleEditor {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

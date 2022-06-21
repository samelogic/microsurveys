import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactMicrosurveysEditor } from './ReactMicrosurveysEditor';

export default {
  component: ReactMicrosurveysEditor,
  title: 'ReactMicrosurveysEditor',
} as ComponentMeta<typeof ReactMicrosurveysEditor>;

const Template: ComponentStory<typeof ReactMicrosurveysEditor> = (args) => (
  <ReactMicrosurveysEditor {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactMicrosurveys } from './ReactMicrosurveys';

export default {
  component: ReactMicrosurveys,
  title: 'ReactMicrosurveys',
} as ComponentMeta<typeof ReactMicrosurveys>;

const Template: ComponentStory<typeof ReactMicrosurveys> = (args) => (
  <ReactMicrosurveys {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactMicrosurveysClient } from './ReactMicrosurveysClient';

export default {
  component: ReactMicrosurveysClient,
  title: 'ReactMicrosurveysClient',
} as ComponentMeta<typeof ReactMicrosurveysClient>;

const Template: ComponentStory<typeof ReactMicrosurveysClient> = (args) => (
  <ReactMicrosurveysClient {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

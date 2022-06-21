import { Story, Meta } from '@storybook/react';
import { ThankYouPage, ThankYouPageProps } from './ThankYouPage';

export default {
  component: ThankYouPage,
  title: 'ThankYouPage',
} as Meta;

const Template: Story<ThankYouPageProps> = (args) => <ThankYouPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

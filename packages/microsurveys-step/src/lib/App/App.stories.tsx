/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import { App, AppProps } from './App';
import { Story } from '@storybook/react/types-6-0';
import {
  FieldType,
  Form,
  PageType,
  MicrosurveyClient,
} from '@samelogic/react-microsurveys';

export default {
  title: 'Microsurvey/StepRunner/App',
  component: App,
};
const Template: Story<AppProps> = (args) => {
  const anchorRef = React.createRef<HTMLButtonElement>();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const togglePopup = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : evt.currentTarget);
  };

  React.useEffect(() => {
    if (anchorRef.current) setAnchorEl(anchorRef.current);
  });

  return (
    <>
      <button onClick={togglePopup} ref={anchorRef}>
        Some Button
      </button>
      <MicrosurveyClient {...args} anchorEl={anchorEl} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  form: {
    title: 'My form',
    pages: [
      {
        type: PageType.Fields,
        fields: [
          {
            id: 'pref_cloud',
            type: FieldType.DropDown,
            title: 'Preferred Cloud Provider?',
            properties: {
              description: 'Select your preferred cloud provider',
              required: true,
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
                {
                  label: 'nothing',
                },
              ],
            },
          },
          {
            id: 'pref_cloud_region',
            type: FieldType.DropDown,
            title: 'Preferred Cloud Region',
            properties: {
              dependsOn: 'pref_cloud',
              required: true,
              choices: [
                {
                  label: 'aws-us-1',
                  group: 'AWS',
                },
                {
                  label: 'aws-us-2',
                  group: 'AWS',
                },
                {
                  label: 'gcp-us-1',
                  group: 'Google Cloud',
                },
                {
                  label: 'gcp-us-2',
                  group: 'Google Cloud',
                },
                {
                  label: 'azure-us-1',
                  group: 'Azure',
                },
                {
                  label: 'azure-us-2',
                  group: 'Azure',
                },
                {
                  label: 'nothing',
                },
              ],
            },
          },
        ],
      },
      {
        type: PageType.Fields,
        fields: [
          {
            id: 'comments',
            type: FieldType.LongText,
            title: 'Additional Comments',
          },
        ],
      },
      {
        type: PageType.ThankYou,
      },
    ],
    settings: {},
  } as Form,
};

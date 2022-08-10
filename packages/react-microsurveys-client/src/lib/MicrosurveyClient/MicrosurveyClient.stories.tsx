import { FieldType, Form, PageType } from '@samelogic/microsurveys-types';
import { Story, Meta } from '@storybook/react';
import { createRef, useEffect, useState } from 'react';
import { MicrosurveyClient, MicrosurveyClientProps } from './MicrosurveyClient';

export default {
  component: MicrosurveyClient,
  title: 'Microsurvey',

  args: {
    form: {
      type: 'form',
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
      settings: {
        dialog: {
          palette: {
            mode: 'dark',
            info: {
              main: '#68687B',
            },
            primary: {
              main: '#00a3ff',
              contrastText: '#fff',
            },
            secondary: {
              main: '#8E1FC3',
            },
            background: {
              paper: '#000',
            },
          },
        },
      },
    } as Form,
  },
} as Meta;

const Template: Story<MicrosurveyClientProps> = (args) => {
  const anchorRef = createRef<HTMLButtonElement>();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (anchorRef.current) setAnchorEl(anchorRef.current);
  });

  const togglePopup = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : evt.currentTarget);
  };

  return (
    <>
      <button onClick={togglePopup} ref={anchorRef}>
        Some Button
      </button>
      {anchorEl && <MicrosurveyClient {...args} anchorEl={anchorEl} />}
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};

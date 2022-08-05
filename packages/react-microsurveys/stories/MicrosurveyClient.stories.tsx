import { Story, ComponentMeta } from '@storybook/react';
import { createRef, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  MicrosurveyClient,
  MicrosurveyClientProps,
} from '@samelogic/react-microsurveys-client';

export default {
  component: MicrosurveyClient,
  title: 'MicrosurveyClient',

  args: {
    form: {
      title: 'Form title',
      type: 'anchor',
      pages: [
        {
          type: 'fields_page',
          fields: [
            {
              id: uuidv4(),
              type: 'long_text',
              title: 'This is a long text field',
            },
          ],
        },
        {
          type: 'thank_you_page',
        },
      ],
      settings: {
        styles: {
          palette: {
            mode: 'light',
            text: { primary: '#000000' },
            background: { paper: '#fafafa' },
            primary: { main: '#0070f3' },
            secondary: { main: '#fafafa' },
            info: { main: '#000' },
            error: { main: '#f44336' },
          },
        },
      },
    },
  },
} as ComponentMeta<typeof MicrosurveyClient>;

export const Anchored = (args: MicrosurveyClientProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <button onClick={handleClick}>Some Button</button>
      <MicrosurveyClient {...args} open={open} anchorEl={anchorEl} />
    </>
  );
};

Anchored.args = {};

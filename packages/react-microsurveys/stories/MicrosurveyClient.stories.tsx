import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  MicrosurveyClient,
  MicrosurveyClientProps,
} from '@samelogic/react-microsurveys-client';
import { Form } from '@samelogic/microsurveys-types';

const form: Form = {
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
};

export default {
  component: MicrosurveyClient,
  title: 'MicrosurveyClient',

  args: {
    form: form,
  },
} as ComponentMeta<typeof MicrosurveyClient>;

export const AnchoredType = (args: MicrosurveyClientProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <button onClick={handleClick}>Anchored Button</button>
      <MicrosurveyClient
        {...args}
        open={open}
        anchorEl={anchorEl}
        onClosed={handleClose}
      />
    </>
  );
};

AnchoredType.args = {
  form: { ...form, type: 'anchor' },
};

export const ModalType = (args: MicrosurveyClientProps) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClosed = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={handleClick}>Show</button>
      <MicrosurveyClient {...args} open={open} onClosed={handleClosed} />
    </>
  );
};

ModalType.args = {
  form: { ...form, type: 'modal' },
};

export const FormType = (args: MicrosurveyClientProps) => {
  return (
    <MicrosurveyClient {...args} open={true} />
  );
};

FormType.args = {
  form: { ...form, type: 'form' },
};

import { Form } from '@samelogic/microsurveys-types';
import React from 'react';

export interface FormContextType {
  form: Form;
}

export const FormContext = React.createContext<FormContextType | null>(null);

import { Field, Form } from '@samelogic/microsurveys-types';
import { Control } from 'react-hook-form';

export interface BaseFieldProps {
  /**
   * The prefix of the name of the react-hook-forms field.
   * May take the form of 'pages.0.fields.0.{fieldName}'
   */
  // fieldPrefix: string;

  control: Control<Form, any>;
  value: Field;
  fieldIndex: number;

  pageIndex: number;
}

import { Field } from '@samelogic/microsurveys-types';
import { Control } from 'react-hook-form';

export interface BaseFieldProps {
  field: Field;
  control?: Control;
}

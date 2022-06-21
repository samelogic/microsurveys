import { Field } from '@samelogic/microsurveys-types';
import { Control, ControllerFieldState } from 'react-hook-form';

export interface BaseFieldProps {
  field: Field;
  fieldState?: ControllerFieldState;

  control?: Control;
}

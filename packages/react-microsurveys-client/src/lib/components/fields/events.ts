import { FieldAnswer } from '@samelogic/microsurveys-types';

export interface FieldOnChangeEvent {
  answer: FieldAnswer;
}
export type FieldOnChangeEventHandler = (event: FieldOnChangeEvent) => void;

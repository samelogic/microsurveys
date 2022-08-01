import { Form } from '@samelogic/react-microsurveys';
import { PackageSchema } from '@samelogic/steps';
import { Type } from '@sinclair/typebox';
import { EventsSchema } from './StepRunner/events';

export interface Props {
  /**
   * The form that is displayed in the microsurvey.
   */
  form: Form;
  /**
   * The CSS Selector of the element to anchor the popover.
   */
  anchorElCssSelector: string;

  /**
   * Used for displaying the current question in {@link Input#form}
   */
  currentQuestion: number;
}

export const schema: PackageSchema = {
  events: EventsSchema,
  props: Type.Unknown(),
};

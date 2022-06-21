import { FieldType } from './Form';

export interface FieldAnswer {
  field?: {
    /**
     * The unique id of the form field the answer refers to.
     */
    id: string;
    /**
     * The field's type in the original form.
     */
    type?: FieldType;
    /**
     * The form field's title which the answer is related to.
     */
    title?: string;

    properties?: {
      /**
       * The id of the field that this field should be dependent on when the field is a drill down.
       */
      dependsOn: string;
    };
  };
  /**
   * The answer-field's type.
   */
  type?: 'choice' | 'choices' | 'number' | 'boolean' | 'text';
  /**
   * Represents single choice answers for dropdown-like fields.
   */
  choice?: {
    label?: string;
    other?: string;
  };
  /**
   * Represents multiple choice answers.
   */
  choices?: {
    labels?: string[];
    other?: string;
  };
  number?: number;
  boolean?: boolean;
  text?: string;
}

/**
 * The form's response
 */
export interface Response {
  answers: FieldAnswer[];
}

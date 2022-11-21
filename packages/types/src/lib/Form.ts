/**
 * Shape representation of a micro survey form, taken from TypeForms models
 * https://developer.typeform.com/create/reference/create-form/
 */
export interface Form {
  /**
   * Title to use for the microsurvey.
   */
  title: string;

  /**
   * An array of pages to render in the micro survey.
   */
  pages: Page[];

  /**
   * The settings for the form.
   */
  settings?: FormSettings;
}

export enum PageType {
  Fields = 'fields_page',
  ThankYou = 'thank_you_page',
  Welcome = 'welcome_page',
}

export interface Page {
  title?: string;
  /**
   * Array of objects that specify the fields to use in the form and their properties, validations, and attachments.
   */
  fields?: Field[];

  type: PageType;
}

export interface Field {
  /**
   * The unique ID for the question.
   */
  id: string;
  /**
   * Unique name you assign to the field on this form.
   */
  title?: string;
  /**
   * The type of field.
   */
  type?: FieldType;
  /**
   * Properties of a field.
   */
  properties?: FieldProperties;
}

export interface FieldProperties {
  /**
   * Question or instruction to display for the field.
   */
  description?: string;
  /**
   * Answer choices. Available for `dropdown`, `multiple_choice`, and `picture_choice` types.
   */
  choices?: Choice[];

  /**
   * The ref of the field that this field should be dependent on when the field is a drill down.
   */
  dependsOn: string;

  required?: boolean;
}

export interface PaletteColor {
  main: string;
  contrastText?: string;
}

export interface FormPalette {
  mode: 'light' | 'dark';
  primary?: PaletteColor;
  secondary?: PaletteColor;
  error?: PaletteColor;
  background?: {
    paper: string;
  };
  text?: { primary: string; secondary: string };
}

export type DialogType = 'anchor' | 'modal';

export interface FormDialog {
  showTitle?: boolean;
  dialogType: DialogType;
  palette?: FormPalette;
}

export type AnchorPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end';

export interface AnchorFormDialog extends FormDialog {
  dialogType: 'anchor';
  placement?: AnchorPlacement;
}
export interface ModalFormDialog extends FormDialog {
  dialogType: 'modal';
}

export interface FormSettings {
  dialog: AnchorFormDialog | ModalFormDialog;
}
export enum FieldType {
  LongText = 'long_text',
  MultipleChoice = 'multiple_choice',
  DropDown = 'drop_down',
  DrillDown = 'drill_down',
  RadioButton = 'radio_button',
}
/**
 * Choice answer for a properties's choices property of a field.
 */
export interface Choice {
  /**
   * Text for the answer choice.
   */
  label: string;

  /**
   * Group used for drill down questions.
   */
  group?: string;
}

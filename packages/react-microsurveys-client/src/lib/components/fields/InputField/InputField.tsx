import { FieldType } from '@samelogic/microsurveys-types';
import { BaseFieldProps } from '../BaseFieldProps';
import DropdownInput from '../DropdownInput/DropdownInput';

import LongTextInput from '../LongTextInput/LongTextInput';

/* eslint-disable-next-line */
export interface InputFieldProps extends BaseFieldProps {}

export function InputField({ field, ...rest }: InputFieldProps) {
  switch (field.type) {
    case FieldType.LongText:
      return <LongTextInput field={field} {...rest} />;
    case FieldType.DropDown:
      return <DropdownInput field={field} {...rest} />;
    default:
      return <div>Nothing</div>;
  }
}

export default InputField;

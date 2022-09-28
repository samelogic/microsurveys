import { FieldType } from '@samelogic/microsurveys-types';
import { BaseFieldProps } from '../BaseFieldProps';
import DropdownInput from '../DropdownInput/DropdownInput';
import EmotionRatingInput from '../EmotionRatingInput/EmotionRatingInput';

import LongTextInput from '../LongTextInput/LongTextInput';

/* eslint-disable-next-line */
export interface InputFieldProps extends BaseFieldProps {}

export function InputField({ field, control }: InputFieldProps) {
  switch (field.type) {
    case FieldType.LongText:
      return <LongTextInput field={field} control={control} />;
    case FieldType.DropDown:
      return <DropdownInput field={field} control={control} />;
    case FieldType.EmotionRating:
      return <EmotionRatingInput field={field} control={control} />;
    default:
      return <div>Nothing</div>;
  }
}

export default InputField;

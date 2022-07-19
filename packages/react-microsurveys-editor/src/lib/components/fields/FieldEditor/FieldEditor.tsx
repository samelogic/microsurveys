import { FieldType } from '@samelogic/microsurveys-types';
import { BaseFieldProps } from '../BaseFieldProps';
import { DropDownEditor } from '../DropDownEditor/DropDownEditor';
import LongTextEditor from '../LongTextEditor/LongTextEditor';

/* eslint-disable-next-line */
export interface FieldEditorProps extends BaseFieldProps {}

export function FieldEditor(props: FieldEditorProps) {
  switch (props.value.type) {
    case FieldType.LongText:
      return <LongTextEditor {...props} />;
    case FieldType.DropDown:
      return <DropDownEditor {...props} />;
    default:
      return <div>Nothing</div>;
  }
}

export default FieldEditor;

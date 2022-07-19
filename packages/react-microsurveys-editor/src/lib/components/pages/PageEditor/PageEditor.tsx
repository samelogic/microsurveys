import { Form, Page, PageType } from '@samelogic/microsurveys-types';
import { Control } from 'react-hook-form';
import FieldPage from '../FieldPage/FieldPage';

/* eslint-disable-next-line */
export interface PageEditorProps {
  control: Control<Form, any>;
  value: Page;
  index: number;
}

export function PageEditor(props: PageEditorProps) {
  switch (props.value.type) {
    case PageType.Fields:
      return <FieldPage {...props} />;
    default:
      return <div>Nothing</div>;
  }
}

export default PageEditor;

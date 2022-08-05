//import "fontsource-roboto";

import {
  Form,
  Response,
  MicrosurveyClient,
} from '@samelogic/react-microsurveys';
import * as React from 'react';

export interface AppProps {
  form: Form;
  anchorEl?: Element;
  currentQuestion: number;
  onSubmit?: (response: Response) => void;
  onClosed?: () => void;
}
export const App: React.FunctionComponent<AppProps> = (props) => {
  return <MicrosurveyClient {...props} />;
};

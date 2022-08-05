import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App, AppProps } from '../App';

export const render = (props: AppProps, container: Element): void => {
  const root = createRoot(container);
  root.render(React.createElement(App, props));
};

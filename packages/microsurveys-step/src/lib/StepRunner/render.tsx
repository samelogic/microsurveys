import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App, AppProps } from '../App';

export const render = (props: AppProps, container: Element): void => {
  ReactDOM.render(React.createElement(App, props), container);
};

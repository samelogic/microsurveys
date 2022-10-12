import { createRoot } from 'react-dom/client';
import { App, AppProps } from '../App';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

export const render = (
  props: AppProps,
  root: Element,
  emotionRoot: Element
): void => {
  const cache = createCache({
    key: 'css',
    prepend: true,
    container: emotionRoot,
  });

  const el = (
    <CacheProvider value={cache}>
      <App {...props} />
    </CacheProvider>
  );

  const domRoot = createRoot(root);
  domRoot.render(el);
};

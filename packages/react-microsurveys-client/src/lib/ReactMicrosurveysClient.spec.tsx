import { render } from '@testing-library/react';

import ReactMicrosurveysClient from './ReactMicrosurveysClient';

describe('ReactMicrosurveysClient', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactMicrosurveysClient />);
    expect(baseElement).toBeTruthy();
  });
});

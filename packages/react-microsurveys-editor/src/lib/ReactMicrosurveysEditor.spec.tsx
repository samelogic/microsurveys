import { render } from '@testing-library/react';

import ReactMicrosurveysEditor from './ReactMicrosurveysEditor';

describe('ReactMicrosurveysEditor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactMicrosurveysEditor />);
    expect(baseElement).toBeTruthy();
  });
});

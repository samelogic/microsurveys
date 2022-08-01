import { render } from '@testing-library/react';

import MicrosurveysStep from './MicrosurveysStep';

describe('MicrosurveysStep', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MicrosurveysStep />);
    expect(baseElement).toBeTruthy();
  });
});

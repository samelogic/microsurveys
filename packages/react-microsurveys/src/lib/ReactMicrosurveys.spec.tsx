import { render } from '@testing-library/react';

import ReactMicrosurveys from './ReactMicrosurveys';

describe('ReactMicrosurveys', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactMicrosurveys />);
    expect(baseElement).toBeTruthy();
  });
});

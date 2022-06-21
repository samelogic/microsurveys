import { render } from '@testing-library/react';

import FormContext from './ResponseContext';

describe('FormContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormContext />);
    expect(baseElement).toBeTruthy();
  });
});

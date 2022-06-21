import { render } from '@testing-library/react';

import ThankYouPage from './ThankYouPage';

describe('ThankYouPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThankYouPage />);
    expect(baseElement).toBeTruthy();
  });
});

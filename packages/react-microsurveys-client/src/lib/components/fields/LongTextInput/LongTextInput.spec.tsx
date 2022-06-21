import { render } from '@testing-library/react';

import LongTextInput from './LongTextInput';

describe('LongTextInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LongTextInput field={{ id: 'test' }} />);
    expect(baseElement).toBeTruthy();
  });
});

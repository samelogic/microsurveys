import { render } from '@testing-library/react';

import FieldActions from './FieldActions';

describe('FieldActions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FieldActions />);
    expect(baseElement).toBeTruthy();
  });
});

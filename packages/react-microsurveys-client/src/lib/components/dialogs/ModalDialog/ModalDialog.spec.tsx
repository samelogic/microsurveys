import { render } from '@testing-library/react';

import ModalDialog from './ModalDialog';

describe('ModalDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModalDialog />);
    expect(baseElement).toBeTruthy();
  });
});

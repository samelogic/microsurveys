import { render } from '@testing-library/react';

import PaletteEditor from './PaletteEditor';

describe('PaletteEditor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PaletteEditor />);
    expect(baseElement).toBeTruthy();
  });
});

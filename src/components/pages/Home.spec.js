import React from 'react';
import { render } from '<src>/helpers/testUtils';
import Home from './Home';

describe('Home Component', () => {
  it('should render with default css', () => {
    const { container } = render(<Home />);

    expect(container).toBeTruthy();
  });
});

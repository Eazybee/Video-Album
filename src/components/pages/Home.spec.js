import React from 'react';
import { render } from '<src>/helpers/testUtils';
import Home from './Home';

describe('Home Component', () => {
  it('should render with default css', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Welcome to Vide Album')).toBeTruthy();
  });
});
